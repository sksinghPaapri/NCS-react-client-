import CartProduct from "../../assets/ShoppingCart/CartProduct.svg";
import calendar_month from "../../assets/ShoppingCart/calendar_month.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Productfinder = () => {
  return (
    <div
      className="mb-20 max-w-[1320px] min-w-[320px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col lg:flex-col lg:mx-auto items-center justify-center"
      style={{ fontFamily: "Open Sans" }}
    >
      {/*row 1- product finder heading */}
      <div className=" w-[280px] h-[76px] sm:w-[664px] sm:h-[44px] xl:w-[1160px] xl:h-[44px] 2xl:w-[1320px] flex items-center justify-center mt-20 lg:mt-[100px]">
        <div>
          <p className="text-[28px] lg:text-[32px] font-bold mx-auto text-center">
            Product Finder: Online Retailers
          </p>
        </div>
      </div>
      {/*row 2- product finder dropdown and print download  */}
      <div className="w-[280px] h-[405px] sm:w-[664px] sm:h-[244px] xl:w-[1160px] xl:h-[143px] 2xl:w-[1320px] flex flex-col items-center justify-center mt-[100px] sm:mt-[80px] lg:mt-[100px] gap-10">
        {/* row-2 row2.1 */}
        <div className="w-[280px] h-[21px] sm:w-[664px] sm:h-[21px] xl:w-[1160px] xl:h-[21px] 2xl:w-[1320px] flex items-center justify-center md:justify-start gap-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <span className="text-sm text-nowrap">
            Back to 'Twas The Night Before Christmas
          </span>
        </div>
        {/* row 2 row2.2 */}
        <div className="w-[289.4px] h-[344px] sm:w-[664px] sm:h-[183px] xl:w-[1160px] xl:h-[82px] 2xl:w-[1320px] flex flex-col xl:flex-row items-center justify-center md:justify-start gap-10">
          {/* row 2 row2.2 col 1 */}
          <div className="w-[289.4px] h-[100px] sm:w-[664px] sm:h-[61px] xl:w-[743px] xl:h-[82px] 2xl:w-[903px] flex flex-col items-center justify-center gap-1">
            <p className="text-sm sm:text-base text-gray-900 font-bold w-[289.4px] h-[48px] sm:w-[664px] sm:h-[27px] xl:w-[743px] xl:h-[27px] 2xl:w-[903px] flex px-5 sm:px-0 text-center">
              The following stores have purchased these products:
            </p>
            <p className="text-sm sm:text-[16px] text-gray-500 w-[289.4px] h-[42px] sm:w-[664px] sm:h-[27px] xl:w-[743px] xl:h-[27px] 2xl:w-[903px] flex text-center">
              Contact retailers directly for inventory information
            </p>
          </div>
          {/* row 2 row2.2 col 2 buttons and dropdown */}
          <div className="w-[204px] h-[204px] sm:w-[377px] sm:h-[82px] xl:w-[377px] xl:h-[82px] flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-5">
            <div className="w-[204px] h-[82px] flex flex-col gap-[15px]">
              <p className="w-[134px] h-[27px] text-sm font-bold">
                Product Finder
              </p>
              {/* dropdown menu */}
              <div className="w-[204px] h-[40px]">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="w-[204px] h-[40px] inline-flex justify-center gap-x-20 lg:gap-12 rounded bg-white py-2 text-sm text-gray-500 shadow-sm border">
                      Find Retailers{" "}
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Account settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Support
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              License
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div className="w-[153px] h-[82px] flex flex-col gap-[15px]">
              <p className="w-[153px] h-[27px] font-bold text-sm text-center">
                Print / Download
              </p>

              <div className="w-[153px] h-[40px] font-bold flex justify-center lg:justify-start">
                <button
                  type="button"
                  className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded px-2 py-1 text-center w-[153px] h-[40px] text-base"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* row 3 */}
      <div className="w-[280px] h-[405px] sm:w-[664px] sm:h-[244px] xl:w-[1160px] xl:h-[143px] 2xl:w-[1320px] flex flex-col items-center justify-center mt-[100px] sm:mt-[80px] lg:mt-[100px] gap-10"></div>
    </div>
  );
};

export default Productfinder;
