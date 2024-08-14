import { Suspense } from "react";

import ProductListComponents from "..//../components/ProductList";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const getProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Product`, {
    cache: "no-cache",
  });

  return response.json();
};

const DataComponent = async ({ searchParams }: Props) => {
  const { q: searchValue } = searchParams || {};
  let products: Product[] = await getProducts();
  
  if (searchValue) {
    let q = decodeURIComponent(searchValue.toString());

    products = products.filter((product) =>
      product.title.toLowerCase().includes(q.toLowerCase())
    );
  }

  return <ProductListComponents products={products} />;
};

const DataFetchingComponent = ({ searchParams }: Props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <DataComponent searchParams={searchParams} />
  </Suspense>
);

export default function Search({ searchParams }: Props) {
  return <DataFetchingComponent searchParams={searchParams} />;
}
