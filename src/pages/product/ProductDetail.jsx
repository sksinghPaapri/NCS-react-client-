import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import PageBanner from "../../assets/ProductPage/Banner.png";
import ProductCard from "../../assets/ProductPage/ProductCard.svg";
import ProductCard1 from "../../assets/ProductPage/ProductCard1.svg";
import ProductCard2 from "../../assets/ProductPage/ProductCard2.svg";
import ProductCard3 from "../../assets/ProductPage/ProductCard3.svg";
import ProductCard4 from "../../assets/ProductPage/ProductCard4.svg";
import ProductCard5 from "../../assets/ProductPage/ProductCard5.svg";
import ProductCard6 from "../../assets/ProductPage/ProductCard6.svg";
import ProductCard7 from "../../assets/ProductPage/ProductCard7.svg";
import ProductCard8 from "../../assets/ProductPage/ProductCard8.svg";
import ProductCard9 from "../../assets/ProductPage/ProductCard9.svg";
import ProductCard10 from "../../assets/ProductPage/ProductCard10.svg";
import ProductCard11 from "../../assets/ProductPage/ProductCard11.svg";
import ProductCard12 from "../../assets/ProductPage/ProductCard12.svg";
import ProductCard13 from "../../assets/ProductPage/ProductCard13.svg";
import ProductCard14 from "../../assets/ProductPage/ProductCard14.svg";
import Breadcrum from "./Breadcrum";
import Modal from "./Modal";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const singleColorWay = [
  { name: ProductCard, "price per m": 8.95 },
  { name: ProductCard1, "price per m": 8.95 },
  { name: ProductCard2, "price per m": 8.95 },
  { name: ProductCard3, "price per m": 8.95 },
  { name: ProductCard4, "price per m": 8.95 },
  { name: ProductCard5, "price per m": 8.95 },
  { name: ProductCard6, "price per m": 8.95 },
  { name: ProductCard7, "price per m": 8.95 },
  { name: ProductCard8, "price per m": 8.95 },
  { name: ProductCard9, "price per m": 8.95 },
  { name: ProductCard10, "price per m": 8.95 },
  { name: ProductCard11, "price per m": 8.95 },
  { name: ProductCard12, "price per m": 8.95 },
];
const patternColorWay = [ProductCard13, ProductCard14];

const ProductDetail = () => {
  // login or not login user
  const [login, setLogin] = useState(true);

  // modalBox
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <div className="bg-white">
        {/* section 1 */}
        {/* top banner  */}
        <div className=" bg-white w-full">
          <img
            src={PageBanner}
            alt="Image"
            className="object-cover w-full h-[45vh] md:h-[80vh]"
          />
        </div>

        {/* section 2 */}
        <div className="mx-4 lg:mx-0 mt-10 h-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
          <div className="col-span-1 flex flex-col gap-5 text-center lg:text-left">
            <div className="text-sm">
              <p>by Simon Treadwell</p>
            </div>
            <div className="text-3xl lg:text-2xl font-bold -mt-2">
              <p>'Twas The Night Before Christmas</p>
            </div>
            <div className="-mt-2 mb-3 text-s">
              <p>Coming to stores in June, 2024</p>
            </div>
          </div>

          <div className="my-10 flex flex-col sm:flex-row items-center justify-between lg:justify-end mx-auto gap-5 sm:gap-10 lg:gap-5  text-center">
            {/* product finder  */}
            <div className="text-center text-xl sm:mb-5 font-bold">
              <p className="text-left mb-5 sm:mb-0">Product Finder</p>

              {/*product finder dropdown input box */}
              <Menu
                as="div"
                className=" relative flex justify-start text-left sm:mt-5"
              >
                <div>
                  <Menu.Button className="inline-flex w-60 lg:w-48 h-12 lg:h-10 items-center justify-between gap-x-1.5 bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-sm">
                    <div className="text-sm font-normal">Find Retailers</div>
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
                  <Menu.Items className="absolute z-10 mt-2 w-40 sm:w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/product-finder"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Online Retailers
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/product-finder"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            In-Store Shopping
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/product-finder"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </Link>
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
                              International
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/*product finder Dropdown menu  */}
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* fabric files */}
            <div>
              <div className="mt-5 text-xl font-bold">
                <p className="text-left">Fabric Files</p>
              </div>
              <div className="flex justify-start mt-5">
                <button
                  type="button"
                  className=" text-white bg-[#E2A856] h-12 lg:h-10 rounded-sm uppercase px-1 py-2.5 text-center mb-10 w-60 lg:w-52 lg:tracking-tighter"
                >
                  Download fabric files
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div
          className={`${
            login
              ? "mx-4 sm:mx-auto bg-[#D9D2CB] sm:w-[90vw] h-[65vh] sm:h-[40vh] lg:w-[90vw] xl:w-[79vw] flex items-center justify-items-center text-center py-2 px-8 font-bold"
              : "mx-4 sm:mx-auto bg-white sm:w-[90vw] h-[65vh] sm:h-[40vh] lg:w-[90vw] xl:w-[79vw] flex items-center justify-items-center text-center py-2 px-8 font-bold"
          }`}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lectus arcu bibendum at varius
            pharetra vel. Semper quis lectus at volutpat diam ut.
          </p>
        </div>

        {/* section 4 */}
        {/* breadcrum */}
        <div className="h-auto mt-16 sm:mx-5 xl:mx-[7.5rem]">
          <Breadcrum />
        </div>
        {/* products count and buttons */}
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-4 mx-6 sm:mx-9 lg:mx-12 xl:mx-36 2xl:mx-64 sm:gap-28">
          <div className="col-span-1 my-2 text-center sm:text-start">
            {singleColorWay.length} Products
          </div>
          {login && (
            <div className="col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 my-8 gap-5 sm:gap-0 lg:justify-items-end">
                <div className="flex flex-row sm:flex-col items-center justify-center">
                  <button
                    type="button"
                    className=" text-white bg-[#E2A856] tracking-wider h-12 rounded-md px-1 py-2.5 text-center w-52"
                  >
                    Add Full Collection
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className=" text-white bg-[#E2A856] h-12 rounded-md py-2.5 px-1 text-center w-72 sm:w-64"
                  >
                    Add Full Collection - Half Piece
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* section 5 */}
        {/* product section */}
        {/* horizontal line  */}
        <div className="mx-5 sm:mx-7 lg:mx-12 min-w-72 bg-gray-300 h-[0.1rem] sm:w-[93vw] lg:w-[91vw] xl:w-[81vw] xl:mx-auto my-3"></div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-2 items-center justify-center">
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <p className="font-bold text-center">Single Colorway</p>
          </div>
          {login && (
            <div className="flex justify-center col-span-1 mt-0 lg:mt-5">
              <button
                type="button"
                className=" text-black bg-white border-2 border-black h-12 rounded-lg font-semibold px-1 py-2.5 text-center mb-5 w-52"
              >
                Add This Colorway Only
              </button>
            </div>
          )}
        </div>
        {/* single colorway */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-4 sm:gap-10 md:gap-12 grid-flow-row my-10 mx-4 md:mx-12 xl:mx-32">
          {singleColorWay?.map((item, index) => (
            <div
              key={index}
              className="w-[130px] h-[266px] sm:h-[326px] sm:w-[180px] cursor-pointer"
            >
              {/* modal */}
              <div>
                <Modal
                  showModal={openModal === index}
                  cancelOption={() => setOpenModal(null)}
                  index={index + 1}
                />
              </div>

              <div
                onClick={() => {
                  setOpenModal(index);
                }}
              >
                <div className="flex flex-col gap-[15px] sm:gap-[20px] border">
                  <img
                    src={item.name}
                    alt="Product"
                    className="h-[130px] w-[130px] sm:h-[180px] sm:w-[180px] object-cover"
                  />
                  <div className="h-[121px] w-[130px] sm:h-[126px] sm:w-[180px] cursor-pointer flex items-start justify-center border border-t-0">
                    <div className="text-xs flex flex-col h-[106px] w-[120px] sm:h-[126px] sm:w-[180px] sm:mx-[10px]">
                      <p className="w-[120px] h-[15px] sm:h-[20px] sm:w-[160px] overflow-hidden text-nowrap text-gray-500">
                        'Twas The Night Before Ch...
                      </p>
                      <p className="mt-1 font-semibold w-[120px] h-[26px] sm:h-[20px] sm:w-[120px]">
                        27025-10
                      </p>
                      {/* for log in user */}
                      <div className="w-[120px] h-[50px] sm:w-[160px]">
                        {login && (
                          <div className="flex gap-3 md:gap-9 items-center justify-center">
                            <div className="text-base sm:text-sm font-bold mt-5 sm:text-nowrap">
                              ${item["price per m"]}
                              <span className="text-xs text-gray-600 font-normal">
                                / m{" "}
                              </span>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center">
                              {/* quantity button */}
                              <div className="w-[60px]">
                                <form className="max-w-xs mx-auto">
                                  <label
                                    htmlFor="quantity-input"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                  ></label>
                                  <div className="relative flex items-center max-w-[8rem]">
                                    <button
                                      type="button"
                                      id="decrement-button"
                                      data-input-counter-decrement="quantity-input"
                                      className="bg-white border border-gray-300 rounded-s p-1 h-5"
                                    >
                                      <svg
                                        className="w-2 h-2 text-gray-900"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 2"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M1 1h16"
                                        />
                                      </svg>
                                    </button>
                                    <input
                                      type="text"
                                      id="quantity-input"
                                      data-input-counter
                                      aria-describedby="helper-text-explanation"
                                      className="border-y placeholder:text-center border-gray-300 h-5 w-6 sm:w-6 text-xs"
                                      placeholder="10"
                                    />
                                    <button
                                      type="button"
                                      id="increment-button"
                                      data-input-counter-increment="quantity-input"
                                      className="bg-white border border-gray-300 rounded-e p-1 h-5"
                                    >
                                      <svg
                                        className="w-2 h-2 text-gray-900"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M9 1v16M1 9h16"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </form>
                              </div>

                              {/* add button */}
                              <div>
                                <button
                                  type="button"
                                  className="w-[60px] h-[20px] px-3 py-[3px] font-medium text-[10px] rounded-sm text-center text-white bg-black hover:bg-gray-600"
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pattern colorway */}
        {/* horizontal line */}
        <div className="mx-5 sm:mx-12 lg:mx-12 min-w-72 bg-gray-300 h-[0.1rem] sm:w-[87vw] lg:w-[91vw] xl:w-[81vw] xl:mx-auto my-3"></div>

        <div className="text-center my-10">
          <div className="mb-3">
            <p className="font-bold text-3xl">
              Coordinating Patterns for this Collection
            </p>
          </div>
          <div className="my-7 mx-5">
            <p className="text-gray-500">
              Patterns can be purchased through your local quilt shop.
            </p>
          </div>
        </div>
        {/* <div className="sm:w-[280px] mx-[20px] sm:mx-10 md:mx-7 grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-0 grid-flow-row my-10 xl:mx-32">
          {patternColorWay?.map((item, index) => (
            <div
              key={index}
              className="w-[250px] h-[396px] mx-4 flex items-center justify-center border"
            >
              <div className="w-[250px] h-[250px]">
                <div className="flex items-center justify-center">
                  <img
                    src={item}
                    alt="Product"
                    className="w-[230px] h-[230px] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default ProductDetail;
