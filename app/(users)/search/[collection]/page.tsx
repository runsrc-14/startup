import { notFound } from "next/navigation";

import { Metadata } from "next";

import ProductListComponents from "../../../components/ProductList";

const getCollections = async (collection: string): Promise<Product[]> => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${collection}`
    
    // {
    //   cache: "force-cache",
    // }
  );

  const res = await response.json();

  return res.products;
};

export async function generateMetadata({
  params,
}: {
  params: { collection: string };
}): Promise<Metadata> {
  if (params.collection == "") return notFound();

  return {
    title: params.collection,
    description: params.collection,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const products = await getCollections(params.collection);

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <ProductListComponents products={products} />
      )}
    </section>
  );
}
