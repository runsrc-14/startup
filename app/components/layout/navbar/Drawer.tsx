"use client";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Drawer({ isOpen, setIsOpen }: Props) {
  return (
    <>
      <div
        className={`z-10 fixed inset-0 bg-black/30 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`z-10 overflow-y-scroll fixed top-0 right-0 h-full w-full md:w-96 bg-black shadow-lg transform transition-transform duration-300 border-l border-neutral-700 p-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">My Cart</p>
          <button aria-label="Close cart" onClick={() => setIsOpen(false)}>
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-6 transition-all ease-in-out hover:scale-110 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            ></path>
          </svg>
          <p className="mt-6 text-center text-2xl font-bold">
            Your cart is empty.
          </p>
        </div>
      </div>
    </>
  );
}
