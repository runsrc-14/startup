import ProductListComponents from "../../components/ProductList";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const getProducts = async () => {
  const response = await fetch(`https://dummyjson.com/products`, {
    // cache: "no-cache",
  });

  const res = await response.json();

  return res.products;
};

const getProductSearch = async (searchValue: string) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${searchValue}`,
    {
      // cache: "no-cache",
    }
  );

  const res = await response.json();

  return res.products;
};

const PageSearch = async ({ searchParams }: Props) => {
  const { sort, q: searchValue } = searchParams || {};
  let products: Product[] = [];

  if (searchValue) {
    const q = decodeURIComponent(searchValue.toString());

    products = await getProductSearch(q);
  } else {
    products = await getProducts();
  }

  return <ProductListComponents products={products} />;
};

export default PageSearch;
