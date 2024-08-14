"use client";

import { Suspense, useEffect, useState } from "react";

import Drawer from "./Drawer";
import Search, { SearchSkeleton } from "./Search";

type Props = {
  title: string;
};

export default function NavBar(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when the drawer is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Add event listener to handle scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.body.classList.add("scroll-y-hidden");
      } else {
        document.body.classList.remove("scroll-y-hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <button
            aria-label="Open mobile menu"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <a
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
              href="/"
            >
              <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Acme Store logo"
                  viewBox="0 0 32 28"
                  className="h-4 w-4 fill-black dark:fill-white"
                >
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                </svg>
              </div>
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                Acme Store
              </div>
            </a>
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              <li>
                <a
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="/search"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="/search/shirts"
                >
                  Shirts {props.title}
                </a>
              </li>
              <li>
                <a
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="/search/stickers"
                >
                  Stickers
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <div className="flex justify-end md:w-1/3">
            <button onClick={() => setIsOpen(!isOpen)}>
              <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-4 transition-all ease-in-out hover:scale-110 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  ></path>
                </svg>
                <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
                  2
                </div>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
