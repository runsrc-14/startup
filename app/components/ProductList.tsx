import Image from "next/image";
import Link from "next/link";

const ProductListComponents = ({ products }: { products: Product[] }) => {
  if (products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((item, index) => (
        <li
          className="aspect-square transition-opacity animate-fadeIn"
          key={index}
        >
          <Link href={`/product/${item.id}`}>
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
              <Image

                src={item.images[0]}

                // src={item.images[0]}
                alt={item.description}

                // loading="lazy"

                priority
                fill
                className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
              {/* <img
                src={item.productImage}
                alt={item.productDescription}
                className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              /> */}
              <div
                className={
                  "absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label"
                }
              >
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                    {item.title}
                  </h3>

                  <p
                    suppressHydrationWarning={true}
                    className={
                      "flex-none rounded-full bg-blue-600 p-2 text-white"
                    }
                  >
                    {item.price.toLocaleString("en-US", {
                      style: "currency",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                      currency: "USD",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductListComponents;
