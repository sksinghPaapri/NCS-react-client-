import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import USflag from "../../assets/ProductFinder/USflag.svg";
import ProductImgsmall from "../../assets/ProductFinder/ProductImgsmall.svg";
import ProductImglarge from "../../assets/ProductFinder/ProductImglarge.svg";
import CNDflag from "../../assets/ProductFinder/CNDflag.svg";
import InStore from "../../assets/ProductFinder/InStore.svg";
import Online from "../../assets/ProductFinder/Online.svg";
import ProductFinderModalDetail from "./ProductFinderModalDetail";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Productfinder = () => {
  // modalBox
  const [openModal, setOpenModal] = useState(null);

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
        <div className="w-[280px] h-[21px] sm:w-[664px] sm:h-[21px] xl:w-[1160px] xl:h-[21px] 2xl:w-[1320px] flex items-center justify-center xl:justify-start gap-1 text-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <span className="text-sm text-nowrap text-center">
            Back to 'Twas The Night Before Christmas
          </span>
        </div>
        {/* row 2 row2.2 */}
        <div className="w-[289.4px] h-[344px] sm:w-[664px] sm:h-[183px] xl:w-[1160px] xl:h-[82px] 2xl:w-[1320px] flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-10">
          {/* row 2 row2.2 col 1 */}
          <div className="w-[289.4px] h-[100px] sm:w-[664px] sm:h-[61px] xl:w-[743px] xl:h-[82px] 2xl:w-[903px] flex flex-col items-center justify-center gap-1">
            <p className="text-sm sm:text-base text-gray-900 font-bold w-[289.4px] h-[48px] sm:w-[664px] sm:h-[27px] xl:w-[743px] xl:h-[27px] 2xl:w-[903px] flex px-5 sm:px-0 text-center mx-auto">
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
                  className=" bg-[#E2A856] text-white hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded px-2 py-1 text-center w-[153px] h-[40px] text-base"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* row 3 */}
      <div className="mt-[100px] w-[280px] h-[143px] sm:w-[664px] sm:h-[82px] xl:w-[1160px] xl:h-[82px] 2xl:w-[1320px] flex flex-col sm:flex-row items-center justify-center xl:justify-between gap-10">
        {/* row 3 col 1 dropdown */}
        <div className="w-[204px] h-[27px] flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-5">
          <div className="w-[204px] h-[82px] flex flex-col gap-[15px]">
            <p className="w-[204px] h-[27px] text-sm font-bold text-center sm:text-start">
              Select State/Province
            </p>
            {/* dropdown menu */}
            <div className="w-[204px] h-[40px]">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="w-[204px] h-[40px] inline-flex justify-center gap-x-10 lg:gap-12 rounded bg-white py-2 text-sm text-gray-500 shadow-sm border">
                    State/Province
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
        </div>
        {/* row 3 col 2 dropdown */}
        <div className="w-[280px] h-[21px] sm:w-[222px] flex flex-col sm:flex-row gap-10 sm:gap-5 sm:mt-10">
          <div className="w-[280px] h-[21px] sm:w-[222px] flex gap-[15px] justify-between">
            <p className="w-[204px] h-[21px] sm:w-[222px] text-sm font-bold mt-0.5">
              Sort:
            </p>
            {/* dropdown menu */}
            <div className="w-[170px] h-[21px]">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="w-[170px] h-[21px] inline-flex justify-center gap-x-24 lg:gap-20 rounded bg-white text-sm text-gray-500">
                    Default
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
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
        </div>
      </div>
      {/* row 4 table */}
      <div className="mt-10 w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] border">
        <div className="relative overflow-auto">
          <table className=" w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-white">
              <tr className="flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[80px] sm:w-[280px] sm:h-[120px] xl:w-[360px] xl:h-[150px] flex items-center justify-center"
                >
                  <div className="w-[83px] h-[70px] sm:w-[99px] sm:h-[88px] xl:w-[116px] xl:h-[111px] flex flex-col items-center justify-center gap-1">
                    <img
                      src={ProductImglarge}
                      alt="Product"
                      className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] xl:w-[80px] xl:h-[80px] object-cover"
                    />
                    <p className="w-[116px] h-[21px] text-[11px] sm:text-[12px] font-bold">
                      Collection Name
                    </p>
                  </div>
                </th>
                <th
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[80px] sm:w-[80px] sm:h-[120px] xl:w-[120px] xl:h-[150px]"
                >
                  <div className="w-[44px] h-[50px] sm:w-[52px] sm:h-[78px] xl:w-[61px] xl:h-[91px] flex flex-col items-center justify-center gap-2">
                    <img
                      src={ProductImgsmall}
                      alt="Product"
                      className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[60px] xl:h-[60px] object-cover"
                    />
                    <p className="w-[44px] h-[15px] sm:w-[52px] sm:h-[18px] xl:w-[61px] xl:h-[21px] text-[10px] sm:text-[12px] font-bold text-center">
                      00000-00
                    </p>
                  </div>
                </th>
                <th
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[80px] sm:w-[80px] sm:h-[120px] xl:w-[120px] xl:h-[150px]"
                >
                  <div className="w-[44px] h-[50px] sm:w-[52px] sm:h-[78px] xl:w-[61px] xl:h-[91px] flex flex-col items-center justify-center gap-2">
                    <img
                      src={ProductImgsmall}
                      alt="Product"
                      className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[60px] xl:h-[60px] object-cover"
                    />
                    <p className="w-[44px] h-[15px] sm:w-[52px] sm:h-[18px] xl:w-[61px] xl:h-[21px] text-[10px] sm:text-[12px] font-bold text-center">
                      00000-00
                    </p>
                  </div>
                </th>
                <th
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[80px] sm:w-[80px] sm:h-[120px] xl:w-[120px] xl:h-[150px]"
                >
                  <div className="w-[44px] h-[50px] sm:w-[52px] sm:h-[78px] xl:w-[61px] xl:h-[91px] flex flex-col items-center justify-center gap-2">
                    <img
                      src={ProductImgsmall}
                      alt="Product"
                      className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[60px] xl:h-[60px] object-cover"
                    />
                    <p className="w-[44px] h-[15px] sm:w-[52px] sm:h-[18px] xl:w-[61px] xl:h-[21px] text-[10px] sm:text-[12px] font-bold text-center">
                      00000-00
                    </p>
                  </div>
                </th>
                <th
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[80px] sm:w-[80px] sm:h-[120px] xl:w-[120px] xl:h-[150px]"
                >
                  <div className="w-[44px] h-[50px] sm:w-[52px] sm:h-[78px] xl:w-[61px] xl:h-[91px] flex flex-col items-center justify-center gap-2">
                    <img
                      src={ProductImgsmall}
                      alt="Product"
                      className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[60px] xl:h-[60px] object-cover"
                    />
                    <p className="w-[44px] h-[15px] sm:w-[52px] sm:h-[18px] xl:w-[61px] xl:h-[21px] text-[10px] sm:text-[12px] font-bold text-center">
                      00000-00
                    </p>
                  </div>
                </th>
                <th
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[80px] sm:w-[80px] sm:h-[120px] xl:w-[120px] xl:h-[150px]"
                >
                  <div className="w-[44px] h-[50px] sm:w-[52px] sm:h-[78px] xl:w-[61px] xl:h-[91px] flex flex-col items-center justify-center gap-2">
                    <img
                      src={ProductImgsmall}
                      alt="Product"
                      className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[60px] xl:h-[60px] object-cover"
                    />
                    <p className="w-[44px] h-[15px] sm:w-[52px] sm:h-[18px] xl:w-[61px] xl:h-[21px] text-[10px] sm:text-[12px] font-bold text-center">
                      00000-00
                    </p>
                  </div>
                </th>
                <th
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[80px] sm:w-[80px] sm:h-[120px] xl:w-[120px] xl:h-[150px]"
                >
                  <div className="w-[44px] h-[50px] sm:w-[52px] sm:h-[78px] xl:w-[61px] xl:h-[91px] flex flex-col items-center justify-center gap-2">
                    <img
                      src={ProductImgsmall}
                      alt="Product"
                      className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[60px] xl:h-[60px] object-cover"
                    />
                    <p className="w-[44px] h-[15px] sm:w-[52px] sm:h-[18px] xl:w-[61px] xl:h-[21px] text-[10px] sm:text-[12px] font-bold text-center">
                      00000-00
                    </p>
                  </div>
                </th>
                <th
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[80px] sm:w-[80px] sm:h-[120px] xl:w-[120px] xl:h-[150px]"
                >
                  <div className="w-[44px] h-[50px] sm:w-[52px] sm:h-[78px] xl:w-[61px] xl:h-[91px] flex flex-col items-center justify-center gap-2">
                    <img
                      src={ProductImgsmall}
                      alt="Product"
                      className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[60px] xl:h-[60px] object-cover"
                    />
                    <p className="w-[44px] h-[15px] sm:w-[52px] sm:h-[18px] xl:w-[61px] xl:h-[21px] text-[10px] sm:text-[12px] font-bold text-center">
                      00000-00
                    </p>
                  </div>
                </th>
                <th
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[80px] sm:w-[80px] sm:h-[120px] xl:w-[120px] xl:h-[150px]"
                >
                  <div className="w-[44px] h-[50px] sm:w-[52px] sm:h-[78px] xl:w-[61px] xl:h-[91px] flex flex-col items-center justify-center gap-2">
                    <img
                      src={ProductImgsmall}
                      alt="Product"
                      className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[60px] xl:h-[60px] object-cover"
                    />
                    <p className="w-[44px] h-[15px] sm:w-[52px] sm:h-[18px] xl:w-[61px] xl:h-[21px] text-[10px] sm:text-[12px] font-bold text-center">
                      00000-00
                    </p>
                  </div>
                </th>
                <th
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[80px] sm:w-[80px] sm:h-[120px] xl:w-[120px] xl:h-[150px]"
                >
                  <div className="w-[44px] h-[50px] sm:w-[52px] sm:h-[78px] xl:w-[61px] xl:h-[91px] flex flex-col items-center justify-center gap-2">
                    <img
                      src={ProductImgsmall}
                      alt="Product"
                      className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[60px] xl:h-[60px] object-cover"
                    />
                    <p className="w-[44px] h-[15px] sm:w-[52px] sm:h-[18px] xl:w-[61px] xl:h-[21px] text-[10px] sm:text-[12px] font-bold text-center">
                      00000-00
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#F5F4F1] border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={USflag}
                      alt="US"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-white border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={CNDflag}
                      alt="CND"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-[#F5F4F1] border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={USflag}
                      alt="US"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-white border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={CNDflag}
                      alt="CND"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-[#F5F4F1] border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={USflag}
                      alt="US"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-white border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={CNDflag}
                      alt="CND"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-[#F5F4F1] border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={USflag}
                      alt="US"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-white border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={CNDflag}
                      alt="CND"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-[#F5F4F1] border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={USflag}
                      alt="US"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-white border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={CNDflag}
                      alt="CND"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-[#F5F4F1] border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={USflag}
                      alt="US"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-white border-b flex">
                <th
                  scope="col"
                  className="border w-[180px] h-[35px] sm:w-[280px] sm:h-[40px] xl:w-[360px] xl:h-[45px] flex items-center justify-center"
                >
                  <div className="w-[154px] h-[15px] sm:w-[225px] sm:h-[20px] xl:w-[244px] xl:h-[21px] flex gap-1 sm:gap-2 items-center justify-center">
                    {/* modal */}
                    <div>
                      <ProductFinderModalDetail
                        showModal={openModal === true}
                        cancelOption={() => setOpenModal(null)}
                      />
                    </div>
                    <img
                      className="cursor-pointer"
                      src={CNDflag}
                      alt="CND"
                      onClick={() => setOpenModal(true)}
                    />
                    <p className="text-[11px] text-nowrap xl:text-[14px] font-bold">
                      STORE NAME (CI)
                    </p>
                    <img src={InStore} alt="Instore" className="h-5 w-5" />
                    <img src={Online} alt="Online" className="h-5 w-5" />
                  </div>
                </th>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
                <td
                  scope="col"
                  className="border flex items-center justify-center w-[60px] h-[35px] sm:w-[80px] sm:h-[40px] xl:w-[120px] xl:h-[45px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Productfinder;
