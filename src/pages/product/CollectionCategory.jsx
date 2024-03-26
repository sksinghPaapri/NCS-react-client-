import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import CollectionCard from "../../assets/CollectionPage/CollectionCard.svg";
import CollectionCard1 from "../../assets/CollectionPage/CollectionCard1.svg";
import CollectionCard2 from "../../assets/CollectionPage/CollectionCard2.svg";
import CollectionCard3 from "../../assets/CollectionPage/CollectionCard3.svg";
import CollectionCard4 from "../../assets/CollectionPage/CollectionCard4.svg";
import CollectionCard5 from "../../assets/CollectionPage/CollectionCard5.svg";
import CollectionCard6 from "../../assets/CollectionPage/CollectionCard6.svg";
import CollectionCard7 from "../../assets/CollectionPage/CollectionCard7.svg";
import CollectionCard8 from "../../assets/CollectionPage/CollectionCard8.svg";
import CollectionCard9 from "../../assets/CollectionPage/CollectionCard9.svg";
import CollectionCard10 from "../../assets/CollectionPage/CollectionCard10.svg";
import CollectionCard11 from "../../assets/CollectionPage/CollectionCard11.svg";
import CollectionCard12 from "../../assets/CollectionPage/CollectionCard12.svg";
import { Link } from "react-router-dom";

const sortOptions = [
  { name: "Newest First", href: "#", current: false },
  { name: "Oldest First", href: "#", current: false },
  { name: "Delivery Date (Earliest)", href: "#", current: false },
  { name: "Alphabetical (A-Z)", href: "#", current: false },
  { name: "Alphabetical (Z-A)", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "delivery",
    name: "Delivery",
    options: [
      { value: "Option1", label: "Option1", checked: false },
      { value: "Option2", label: "Option2", checked: false },
      { value: "Option3", label: "Option3", checked: true },
      { value: "Option4", label: "Option4", checked: false },
      { value: "Option5", label: "Option5", checked: false },
      { value: "Option6", label: "Option6", checked: false },
    ],
  },
  {
    id: "designer",
    name: "Designer",
    options: [
      { value: "Option7", label: "Option7", checked: false },
      { value: "Option8", label: "Option8", checked: false },
      { value: "Option9", label: "Option9", checked: true },
      { value: "Option10", label: "Option10", checked: false },
      { value: "Option11", label: "Option11", checked: false },
      { value: "Option12", label: "Option12", checked: false },
    ],
  },
  {
    id: "productType",
    name: "Product Type",
    options: [
      { value: "Option13", label: "Option13", checked: false },
      { value: "Option14", label: "Option14", checked: false },
      { value: "Option15", label: "Option15", checked: true },
      { value: "Option16", label: "Option16", checked: false },
      { value: "Option17", label: "Option17", checked: false },
      { value: "Option18", label: "Option18", checked: false },
    ],
  },
];

const productItems = [
  {
    name: CollectionCard,
    href: "allThatGlitters",
    by: "Simon Treadwell",
    detail: "All That Glitters",
    date: "In stores in June, 2024",
  },
  {
    name: CollectionCard1,
    href: "autumnGathering",
    by: "Jennifer Nilsson",
    detail: "Autumn Gathering",
    date: "In stores in April, 2024",
  },
  {
    name: CollectionCard2,
    href: "bearyMerryChristmas",
    by: "Deborah Edwards Nort...",
    detail: "Beary Merry Christmas",
    date: "In stores in May, 2024",
  },
  {
    name: CollectionCard3,
    href: "doubleBubbleKittyT",
    by: "Fernanda Motta",
    detail: "Double Bubble Kitty T...",
    date: "In stores in April, 2024",
  },
  {
    name: CollectionCard4,
    href: "farmsteadFriends",
    by: "Simon Treadwell",
    detail: "Farmstead Friends",
    date: "In stores in June, 2024",
  },
  {
    name: CollectionCard5,
    href: "hallow'sEve",
    by: "Cerrito Creek Studio",
    detail: "Hallow's Eve",
    date: "In stores in April, 2024",
  },
  {
    name: CollectionCard6,
    href: "lettersToSanta",
    by: "Simon Treadwell",
    detail: "Letters To Santa",
    date: "In stores in May, 2024",
  },
  {
    name: CollectionCard7,
    href: "merryAndBright",
    by: "Michael Zindell Designs",
    detail: "Merry and Bright",
    date: "In stores in May, 2024",
  },
  {
    name: CollectionCard8,
    href: "shimmerSparkle",
    by: "Deborah Edwards Nort...",
    detail: "Shimmer Sparkle",
    date: "In stores in May, 2024",
  },
  {
    name: CollectionCard9,
    href: "snowMuchFun",
    by: "Simon Treadwell",
    detail: "Snow Much Fun",
    date: "In stores in May, 2024",
  },
  {
    name: CollectionCard10,
    href: "sugarCoated",
    by: "Deborah Edwards Nort...",
    detail: "Sugar Coated",
    date: "In stores in April, 2024",
  },
  {
    name: CollectionCard12,
    href: "twasTheNightBeforeChristmas",
    by: "Simon Treadwell",
    detail: "'Twas The Night Before Christmas",
    date: "In stores in June, 2024",
  },
  {
    name: CollectionCard11,
    href: "yuletideTraditions",
    by: "Simon Treadwell",
    detail: "Yuletide Traditions",
    date: "In stores in June, 2024",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CollectionCategory() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterSelection = (sectionId, optionValue) => {
    const updatedFilters = [...selectedFilters];
    const index = updatedFilters.findIndex(
      (filter) => filter.sectionId === sectionId
    );

    if (index === -1) {
      updatedFilters.push({ sectionId, optionValues: [optionValue] });
    } else {
      const options = updatedFilters[index].optionValues;
      const optionIndex = options.indexOf(optionValue);
      if (optionIndex === -1) {
        options.push(optionValue);
      } else {
        options.splice(optionIndex, 1);
      }
    }

    setSelectedFilters(updatedFilters);
  };

  const removeOptionValue = (sectionId, optionValue) => {
    const updatedFilters = selectedFilters.map((filter) => {
      if (filter.sectionId === sectionId) {
        filter.optionValues = filter.optionValues.filter(
          (value) => value !== optionValue
        );
      }
      return filter;
    });

    setSelectedFilters(updatedFilters);

    // Uncheck the corresponding checkbox
    const checkbox = document.getElementById(
      `filter-${sectionId}-${optionValue}`
    );
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    // Uncheck all checkboxes
    filters.forEach((section) => {
      section.options.forEach((option) => {
        const checkbox = document.getElementById(
          `filter-${section.id}-${option.value}`
        );
        if (checkbox) {
          checkbox.checked = false;
        }
      });
    });
  };

  return (
    <div className="bg-white" style={{ fontFamily: "Open Sans" }}>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  {/* mobile filter top header */}
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* mobile Filters */}
                  <form
                    className={`${
                      selectedFilters.length > 0
                        ? "mt-4 border-t"
                        : "border-white mt-0"
                    }`}
                  >
                    <h3 className="sr-only">Categories</h3>
                    {/* Clear All button desktop */}
                    {selectedFilters.length > 0 && (
                      <div className="flex justify-between sm:block sm:justify-normal px-4 py-2 mt-[20px] sm:mt-0">
                        <h3 className="text-[18px] font-bold text-nowrap">
                          Selected Filters
                        </h3>
                        <button
                          type="button"
                          onClick={() => clearAllFilters()}
                          className="text-[14px] text-gray-500 hover:text-gray-700 underline"
                        >
                          Clear All
                        </button>
                      </div>
                    )}
                    <ul className="space-y-4 pb-6 text-[14px] font-medium text-gray-900">
                      {/* select field occur in input by Mithun */}
                      {selectedFilters.map((filter) => (
                        <li key={filter.sectionId} className="flex flex-wrap">
                          {filter.optionValues.map((optionValue) => (
                            <div
                              key={optionValue}
                              className="flex items-center justify-between"
                              style={{
                                backgroundColor: "rgba(0, 0, 0, 0.06)",
                                padding: "8px",
                                margin: "4px",
                                flexBasis: "calc(50% - 8px)",
                              }}
                            >
                              <span className="mr-1">{optionValue}</span>
                              <button
                                type="button"
                                onClick={() =>
                                  removeOptionValue(
                                    filter.sectionId,
                                    optionValue
                                  )
                                }
                              >
                                <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                              </button>
                            </div>
                          ))}
                        </li>
                      ))}
                    </ul>

                    {/* dropdown menu */}
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className=" text-black font-bold">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center text-[#090800]">
                                  {open ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {/* mobile view dropdown */}
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${option.value}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      onClick={() =>
                                        handleFilterSelection(
                                          section.id,
                                          option.value
                                        )
                                      }
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${option.value}`}
                                      className="ml-3 text-[14px] text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* desktop top section */}
        <main className="mx-auto w-[280px] sm:w-[715px] xl:w-[1160px] 2xl:w-[1320px] sm:mx-[40px] xl:mx-0">
          <div className="grid grid-cols-1 gap-x-9 sm:grid-cols-4 sm:h-[61px]">
            <div className="hidden sm:block col-span-1 text-[24px] sm:text-[22px] xl:text-[24px] font-bold">
              Filters
              {/* <div className="mt-4" /> */}
            </div>

            {/* top heading */}
            <div className="sm:ms-[40px] 2xl:ms-[100px] sm:col-span-3 w-[280px] h-[21px] sm:w-[444px] xl:w-[820px] 2xl:w-[870px] flex items-center justify-center sm:items-start">
              <div className="w-[280px] h-[21px] sm:w-[444px] xl:w-[820px] 2xl:w-[870px] flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                {/* length for all */}
                <div className="w-[280px] h-[21px] sm:w-[91px] flex items-center justify-between sm:justify-center">
                  <h1 className="w-[91px] h-[21px] text-black text-[14px] text-nowrap">
                    {productItems.length} Collections
                  </h1>
                  {/* mobile only */}
                  <button
                    type="button"
                    className=" text-gray-700 hover:text-gray-900 sm:hidden"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <span className="sr-only text-[14px]">Filters</span>
                    <p className="text-black underline text-[14px]">
                      See Filters
                    </p>
                  </button>
                </div>
                {/* sort and dropdown for all */}
                <div className="pt-[20px] sm:pt-0 w-[280px] xl:w-[221px] h-[21px] flex flex-col items-end ">
                  <div className="sm:mt-0 w-[280px] h-[21px] sm:w-[221px] flex items-center justify-center">
                    <Menu
                      as="div"
                      className="w-[280px] h-[21px] sm:w-[221px] flex items-center justify-between"
                    >
                      <div className="flex w-[31px] h-[21px] text-[14px]">
                        <p>Sort: </p>
                      </div>

                      {/* dropdown button */}
                      <div className="w-[170px] h-[21px] flex items-center justify-between">
                        <Menu.Button className="w-[170px] h-[21px] sm:w-[160px] xl:w-[170px] 2xl:w-[160px] group inline-flex text-[14px] font-medium text-gray-700 hover:text-gray-900 justify-between items-center">
                          <p className="text-[14px]">Default</p>

                          <ChevronDownIcon
                            className="h-5 flex-shrink-0 text-black group-hover:text-gray-900 flex justify-end"
                            aria-hidden="true"
                          />
                        </Menu.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute z-10 mt-6 w-40 right-6 sm:right-[55px] top-[191vh] sm:top-[195vh] xl:top-[210vh] xl:right-[145px] 2xl:top-[108vh] 2xl:right-[125px] rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {sortOptions.map((option) => (
                                <Menu.Item key={option.name}>
                                  {({ active }) => (
                                    <a
                                      href={option.href}
                                      className={classNames(
                                        option.current
                                          ? "font-medium text-[#090800] text-[14px]"
                                          : "text-[#090800]",
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-[14px]"
                                      )}
                                    >
                                      {option.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </div>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="products-heading"
            className="pt-[20px] sm:pt-0 w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px]"
          >
            <h2 id="products-heading" className="sr-only text-[14px]">
              Products
            </h2>

            <div className="pt-[40px] sm:pt-0 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-4">
              {/* Filters */}
              <form className="hidden md:block col-span-1 sm:w-[180px] xl:w-[300px] 2xl:w-[350px] border-t border-[#CECECC]">
                <h3 className="sr-only text-[14px]">Categories</h3>
                {/* Clear All button mobile*/}
                {selectedFilters.length > 0 && (
                  <div className="px-1 pb-[25px] flex justify-between flex-col xl:flex-row gap-[10px] xl:gap-0 mt-[40px]">
                    <h3 className="text-[18px] sm:text-[16px] xl:text-[18px] font-bold text-nowrap">
                      Selected Filters
                    </h3>

                    <button
                      type="button"
                      onClick={() => clearAllFilters()}
                      className="text-[14px] text-gray-500 hover:text-gray-700 underline text-nowrap text-start xl:text-center"
                    >
                      Clear all
                    </button>
                  </div>
                )}
                <ul className="space-y-2 text-[14px] font-medium text-gray-900 border-b border-[#CECECC]">
                  {selectedFilters.map((filter) => (
                    <li
                      key={filter.sectionId}
                      className={`flex flex-wrap gap-y-[10px] mb-[25px] justify-between`}
                    >
                      {filter.optionValues.map((optionValue) => (
                        <div
                          key={optionValue}
                          className="flex items-center justify-between bg-[#F0EFEB] p-[8px] m-[2px]"
                          style={{
                            flexBasis: "calc(50% - 8px)",
                          }}
                        >
                          <span className="mr-1">{optionValue}</span>
                          <button
                            type="button"
                            onClick={() =>
                              removeOptionValue(filter.sectionId, optionValue)
                            }
                          >
                            <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                          </button>
                        </div>
                      ))}
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-[#CECECC] py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-[14px] text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-[#090800] text-[14px]">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${option.value}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onClick={() =>
                                    handleFilterSelection(
                                      section.id,
                                      option.value
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${option.value}`}
                                  className="ml-3 text-[14px] text-[#3A3933]"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="w-[280px] sm:w-[444px] xl:w-[820px] 2xl:w-[870px] sm:ms-[40px] 2xl:ms-[100px] col-span-3 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-[20px]  gap-y-[60px]">
                {productItems?.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer w-[130px] h-[251px] xl:w-[180px] xl:h-[329px] border border-[#CECECC] hover:border-[#6B6B66]"
                  >
                    {/* <Link to={`/products/${item?.href}`}> */}
                    <Link
                      to={`/product-detail/${item?.href}`}
                      className="flex flex-col items-center justify-center gap-[15px] xl:gap-[20px]"
                    >
                      <img
                        src={item.name}
                        alt="Image"
                        className="w-[130px] h-[130px] xl:w-[180px] xl:h-[180px]"
                      />
                      <div className="w-[130px] h-[106px] xl:w-[180px] xl:h-[129px] flex flex-col gap-[20px]">
                        <div className="w-[120px] h-[56px] xl:w-[160px] xl:h-[68px] flex flex-col items-start justify-between ms-[5px] xl:ms-[10px]">
                          <h4 className="text-[#9D9C99] text-[10px] xl:text-[12px] w-[120px] h-[15px] text-start overflow-hidden text-nowrap me-2">
                            by {item?.by}
                          </h4>
                          <h2 className="w-[120px] h-[36px] xl:w-[160px] xl:h-[42px] font-semibold text-[12px] xl:text-[14px] text-start text-wrap overflow-hidden">
                            {item?.detail}
                          </h2>
                        </div>
                        <h4 className="text-[#6B6B66] text-[10px] xl:text-[12px] w-[103px] h-[15px] xl:w-[124px] xl:h-[21px] text-nowrap text-start ms-[5px] xl:ms-[10px]">
                          {item?.date}
                        </h4>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
