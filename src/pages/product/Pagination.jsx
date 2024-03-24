import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination() {
  return (
    <div className="w-full flex items-center justify-center">
      <nav
        className="w-[280px] h-[44px] sm:w-[358.5px] isolate inline-flex -space-x-px rounded-sm items-center justify-center"
        aria-label="Pagination"
      >
        <a
          href="#"
          className="w-[38.25px] h-[34.85px] sm:w-[48.25px] relative inline-flex items-center rounded-l-sm text-gray-400 ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-black focus:z-20 focus:outline-offset-0 justify-center"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="#"
          className="w-[35px] h-[44px] sm:w-[50px] relative inline-flex items-center justify-center text-[16px] text-black hover:font-bold focus:z-20"
        >
          1
        </a>
        <a
          href="#"
          className="w-[35px] h-[44px] sm:w-[50px] relative inline-flex items-center justify-center text-[16px] text-black hover:font-bold focus:z-20"
        >
          2
        </a>
        <a
          href="#"
          className="w-[35px] h-[44px] sm:w-[50px] relative inline-flex items-center justify-center text-[16px] text-black hover:font-bold focus:z-20"
        >
          3
        </a>
        <span className="w-[35px] h-[44px] sm:w-[50px] relative inline-flex items-center justify-center text-[16px] text-black hover:font-bold focus:z-20">
          ...
        </span>
        <a
          href="#"
          className="w-[39px] h-[44px] sm:w-[59px] relative inline-flex items-center justify-center text-[16px] text-black hover:font-bold focus:z-20"
        >
          12
        </a>

        <a
          href="#"
          className="w-[38.25px] h-[34.85px] sm:w-[48.25px] relative inline-flex items-center justify-center rounded-r-sm text-gray-400 ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-black focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>
    </div>
  );
}
