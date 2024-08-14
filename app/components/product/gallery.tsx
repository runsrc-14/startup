"use client";

import { useState } from "react";

import Image from "next/image";

import clsx from "clsx";

export function Gallery({
  images,
  blurDataURL,
}: {
  images: { src: string; altText: string }[];
  blurDataURL?: string;
}) {
  const [idxImage, setIdxImage] = useState(0);
  const nextImageIndex = idxImage + 1 < images.length ? idxImage + 1 : 0;
  const previousImageIndex = idxImage === 0 ? images.length - 1 : idxImage - 1;

  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center";

  return (
    <>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              className={clsx({
                "h-full w-full object-contain": index === idxImage,
                hidden: index !== idxImage,
              })}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              src={image.src}
              alt={image.altText}
              priority
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          );
        })}
        {/* {images[idxImage] && (
          <Image
            alt="image"
            src={images[idxImage].src}
            placeholder="blur"
            fill
            loading={idxImage === 0 ? "eager" : "lazy"}
            priority={idxImage === 0 ? true : false}
            blurDataURL={blurDataURL}
            sizes="66vw, 100vw"
            className="h-full w-full object-contain"
          />
        )} */}
        {images.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
              <button
                aria-label="Previous product image"
                onClick={() => setIdxImage(previousImageIndex)}
                className={buttonClassName}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <button
                aria-label="Next product image"
                onClick={() => setIdxImage(nextImageIndex)}
                className={buttonClassName}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === idxImage;

            return (
              <li
                key={index}
                className="h-20 w-20"
                onClick={() => setIdxImage(index)}
              >
                <div className="h-full w-full">
                  <div
                    className={clsx(
                      "group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black",
                      {
                        "border-2 border-blue-600": isActive,
                        "border-neutral-200 dark:border-neutral-800": !isActive,
                      }
                    )}
                  >
                    {image.src ? (
                      <Image
                        className={clsx(
                          "relative h-full w-full object-contain",
                          {
                            "transition duration-300 ease-in-out group-hover:scale-105":
                              true,
                          }
                        )}
                        width={80}
                        height={80}
                        src={image.src}
                        alt={""}
                        priority
                        placeholder="blur"
                        blurDataURL={blurDataURL!}
                      />
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}
