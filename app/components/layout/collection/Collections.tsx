import { Suspense } from "react";

import clsx from "clsx";

import FilterList from "./FilterList";

const getCollections = async () => {
  const response = await fetch("https://dummyjson.com/products/categories", {
    cache: "force-cache",
  });

  const res = await response.json();

  return res;
};

const CollectionList = async () => {
  const collections: ProductCategory[] = await getCollections();

  return <FilterList list={collections} title="Collections" />;
};

export default function CollectionsMenu() {
  const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded";
  const activeAndTitles = "bg-neutral-800 dark:bg-neutral-300";
  const items = "bg-neutral-400 dark:bg-neutral-700";

  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
