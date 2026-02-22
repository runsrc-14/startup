"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import clsx from "clsx";

export default function FilterList({
  list,
  title,
}: {
  list: ProductCategory[];
  title: string;
}) {
  const pathname = usePathname();

  return (
    <div className="hidden md:block">
      <h3 className="text-xs text-neutral-400">{title}</h3>
      <ul>
        <li className="mt-2 flex text-white">
          <Link
            href={`/search`}
            className={clsx("w-full hover:underline hover:underline-offset-4", {
              "underline underline-offset-4":
                pathname === "/search",
            })}
          >
            All
          </Link>
        </li>
        {list.map((product) => {
          const activeOther = pathname.replace("/search/", "") === product.slug;

          return (
            <FilterItem
              key={product.slug}
              item={product}
              active={activeOther}
            />
          );
        })}
      </ul>
    </div>
  );

  function FilterItem({
    item,
    active,
  }: {
    item: ProductCategory;
    active: boolean;
  }) {
    return (
      <>
        <li key={item.slug} className="mt-2 flex text-white">
          <Link
            href={`/search/${item.slug}`}
            className={clsx("w-full hover:underline hover:underline-offset-4", {
              "underline underline-offset-4": active,
            })}
          >
            {item.name}
          </Link>
        </li>
      </>
    );
  }
}
