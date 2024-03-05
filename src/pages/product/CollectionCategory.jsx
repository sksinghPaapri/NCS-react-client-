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
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
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
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "designer",
    name: "Designer",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "productType",
    name: "Product Type",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
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
    console.log("Selected Filters:", updatedFilters);
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

  return (
    <div className="bg-white">
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
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
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

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
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
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
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
                                      className="ml-3 text-sm text-gray-600"
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

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-9 gap-y-10 md:grid-cols-4">
            <div className="hidden md:block col-span-1 text-2xl font-bold">
              Filters
              <div className="border-b-2 mt-4" />
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-2 justify-between">
                <h1 className=" text-black col-span-1 text-sm">
                  {productItems.length} Collections
                </h1>

                <div className="col-span-1">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className=" text-gray-700 hover:text-gray-900 md:hidden"
                      onClick={() => setMobileFiltersOpen(true)}
                    >
                      <span className="sr-only text-sm">Filters</span>
                      <p className="text-black underline text-sm">
                        See Filters
                      </p>
                    </button>
                  </div>

                  <div className="col-span-1 sm:col-span-2 sm:mt-0 ">
                    <Menu
                      as="div"
                      className="relative grid grid-cols-2 mt-5 sm:mt-0"
                    >
                      <div className="flex justify-start sm:justify-center text-sm">
                        <p>Sort: </p>
                      </div>

                      <div className="flex justify-end">
                        <Menu.Button className="group inline-flex text-sm font-medium text-gray-700 hover:text-gray-900">
                          <p className="me-5 lg:me-36 md:me-20 text-sm">
                            Default
                          </p>

                          <ChevronDownIcon
                            className="h-5 flex-shrink-0 text-black group-hover:text-gray-900 flex justify-end"
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
                        <Menu.Items className="absolute right-0 z-10 mt-6 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {sortOptions.map((option) => (
                              <Menu.Item key={option.name}>
                                {({ active }) => (
                                  <a
                                    href={option.href}
                                    className={classNames(
                                      option.current
                                        ? "font-medium text-gray-900 text-sm"
                                        : "text-gray-500",
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm"
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
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6">
            <h2 id="products-heading" className="sr-only text-sm">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-9 gap-y-10 md:grid-cols-4">
              {/* Filters */}
              <form className="hidden md:block col-span-1">
                <h3 className="sr-only text-sm">Categories</h3>
                <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
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
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900 text-sm">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
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
                                  className="ml-3 text-sm text-gray-600"
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
              <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-12">
                {productItems?.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer w-[130px] h-[251px] lg:w-[180px] lg:h-[329px]"
                  >
                    <Link to={`/products/${item?.href}`}>
                      <img
                        src={item.name}
                        alt="Image"
                        className="w-60 h-auto"
                      />
                      <div className="w-[130px] h-[121px] lg:w-[180px] lg:h-[149px] border">
                        <div className="mt-2 lg:mt-[25px] px-2 flex flex-col items-start justify-start">
                          {" "}
                          <h4 className="text-gray-400 text-[10px] lg:text-xs w-[120px] h-[15px] text-start overflow-hidden text-nowrap me-2">
                            by {item?.by}
                          </h4>
                          <h2 className="mt-[10px] w-[120px] tracking-tighter h-[50px] lg:h-[60px] font-semibold text-sm lg:text-base text-start text-wrap">
                            {item?.detail}
                          </h2>
                          <h4 className="text-gray-400 text-[10px] lg:text-xs w-[103px] h-[15px] text-nowrap text-start">
                            {item?.date}
                          </h4>
                        </div>
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
