import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination() {
  return (
    <div className=" bg-white px-4 py-3 sm:px-6 mt-[60px]">
      <div className="flex flex-1 items-center justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-black focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="w-[50px] h-[44px] relative inline-flex items-center px-4 py-2 text-sm text-black hover:font-semibold focus:z-20"
            >
              1
            </a>
            <a
              href="#"
              className="w-[50px] h-[44px] relative inline-flex items-center px-4 py-2 text-sm text-black hover:font-semibold focus:z-20"
            >
              2
            </a>
            <a
              href="#"
              className="w-[50px] h-[44px] relative hidden items-center px-4 py-2 text-sm text-black hover:font-semibold focus:z-20 md:inline-flex"
            >
              3
            </a>
            <span className="w-[50px] h-[44px] relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="w-[50px] h-[44px] relative hidden items-center px-4 py-2 text-sm text-black hover:font-semibold focus:z-20 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="w-[50px] h-[44px] relative inline-flex items-center px-4 py-2 text-sm text-black hover:font-semibold focus:z-20"
            >
              9
            </a>
            <a
              href="#"
              className="w-[50px] h-[44px] relative inline-flex items-center px-4 py-2 text-sm text-black hover:font-semibold focus:z-20"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-black focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
