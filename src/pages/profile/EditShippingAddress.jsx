import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const EditShippingAddress = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex items-center justify-center"
    >
      <div className="w-[320px] sm:w-[744px] xl:w-[1280px] 2x:w-[1728px] flex items-center justify-center">
        <div className="my-[80px] sm:my-[100px] w-[280px] sm:w-[624px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col items-center xl:flex-row xl:items-start gap-[60px] 2xl:gap-[100px]">
          {/* left side */}
          <div className="w-[280px] h-[258px] sm:w-[624px] xl:w-[280px] xl:h-[258px] flex flex-col gap-5">
            {/* heading */}
            <div className="w-[280px] h-[38px] sm:w-[624px] xl:w-[280px] text-center sm:text-start font-bold text-[28px]">
              Customer Profile
            </div>
            {/* horizontal line */}
            <hr className=" text-gray-500 bg-gray-500 h-1 w-[280px] sm:w-[624px] xl:w-[280px]" />
            {/* content */}
            <div className="w-[280px] h-[180px] flex flex-col sm:w-[624px] xl:w-[280px] bg-white">
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] xl:text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/customerProfile"}>
                  <p className="ms-[15px]">Personal Info</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] bg-[#F0EFEB] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/shippingAddress"}>
                  <p className="ms-[15px]">Shipping Addresses</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/profileChangePassword"}>
                  <p className="ms-[15px]">Change Password</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/communicationPreferences"}>
                  <p className="ms-[15px]"> Communication Preferences</p>
                </Link>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-[280px] h-[785px] sm:w-[624px] xl:w-[820px] flex flex-col gap-[60px]">
            <div className="w-[280px] h-[785px] sm:w-[624px] xl:w-[820px]  flex flex-col gap-5">
              {/* Edit Address */}
              <div className="w-[280px] h-[38px] sm:w-[624px] xl:w-[820px] flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-center gap-5 sm:gap-0">
                {/* heading */}
                <div className="w-[186px] h-[36px] font-bold text-[28px] text-center sm:text-start">
                  Edit Address
                </div>
              </div>
              {/* horizontal line */}
              <hr className=" text-gray-500 bg-gray-500 h-[1px] w-[280px] sm:w-[624px] xl:w-[820px]" />
              {/* content */}
              <div className="w-[280px] h-[707px] flex flex-col sm:w-[624px] xl:w-[820px] gap-[30px]">
                {/* input fields */}
                <div className="w-[280px] h-[628px] sm:w-[624px] xl:w-[320px] flex flex-col gap-[20px]">
                  {/* Name or Company Name */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="NameorCompanyName"
                      className="block text-[14px] font-bold text-gray-700 sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      Name or Company Name
                    </label>
                    <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="NameorCompanyName"
                        name="NameorCompanyName"
                        type="text"
                        className="appearance-none  relative block px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-[14px] w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* adddress 1 */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="address1"
                      className="block text-[14px] font-bold text-gray-700 sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      Address 1
                    </label>
                    <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="address1"
                        name="address1"
                        type="text"
                        className="appearance-none  relative block px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-[14px] w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* address 2 */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="address2"
                      className="block text-[14px] font-bold text-gray-700 sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      Address 2
                    </label>
                    <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="address2"
                        name="address2"
                        type="text"
                        className="appearance-none  relative block px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-[14px] w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* city */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="city"
                      className="block text-[14px] font-bold text-gray-700 sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      City
                    </label>
                    <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px] flex flex-col gap-[10px]">
                      <Menu
                        as="div"
                        className="relative inline-block text-left w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px]"
                      >
                        <div>
                          <Menu.Button className="text-[14px] text-gray-400 w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px] inline-flex gap-x-1.5 rounded bg-white px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 justify-between">
                            <p>Vaughan</p>
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
                          <Menu.Items className="w-[280px] sm:w-[624px] xl:w-[320px] absolute right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-[14px]"
                                    )}
                                  >
                                    Vaughan
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
                                      "block px-4 py-2 text-[14px]"
                                    )}
                                  >
                                    Vaughan2
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
                                      "block px-4 py-2 text-[14px]"
                                    )}
                                  >
                                    Vaughan3
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
                                        "block w-full px-4 py-2 text-left text-[14px]"
                                      )}
                                    >
                                      Vaughan4
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
                  {/* state / province */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="State/Province"
                      className="block text-[14px] font-bold text-gray-700 sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      State/Province
                    </label>
                    <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px] flex flex-col gap-[10px]">
                      <Menu
                        as="div"
                        className="relative inline-block text-left w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px]"
                      >
                        <div>
                          <Menu.Button className="text-[14px] text-gray-400 w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px] inline-flex gap-x-1.5 rounded bg-white px-3 py-3 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 justify-between">
                            <p>Ontario</p>
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
                          <Menu.Items className="w-[280px] sm:w-[624px] xl:w-[320px] absolute right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-[14px]"
                                    )}
                                  >
                                    Ontario
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
                                      "block px-4 py-2 text-[14px]"
                                    )}
                                  >
                                    Ontario2
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
                                      "block px-4 py-2 text-[14px]"
                                    )}
                                  >
                                    Ontario3
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
                                        "block w-full px-4 py-2 text-left text-[14px]"
                                      )}
                                    >
                                      Ontario4
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
                  {/* Zip/Postal Code */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="Zip/PostalCode"
                      className="block text-[14px] font-bold text-gray-700 sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      Zip/Postal Code
                    </label>
                    <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="Zip/PostalCode"
                        name="Zip/PostalCode"
                        type="Zip/PostalCode"
                        className="appearance-none  relative block px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-[14px] w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* checkbox */}
                  <div className="h-[52px] flex flex-col justify-between">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        for="default-checkbox"
                        className="ms-2 text-[14px] font-medium text-gray-700"
                      >
                        Make this my default billing address
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        for="default-checkbox"
                        className="ms-2 text-[14px] font-medium text-gray-700"
                      >
                        Make this my default shipping address
                      </label>
                    </div>
                  </div>
                </div>
                {/* buttons */}
                <div className="h-[49px] flex items-center justify-center sm:justify-start">
                  <div className="w-[205px] h-[49px] flex items-center justify-between">
                    <Link to={"/product-collection/shippingAddress"}>
                      <button
                        className=" w-[123px] h-[49px] rounded text-center text-[16px] font-semibold bg-[#E2A856] text-[#FFFFFF]"
                        type="button"
                      >
                        UPDATE
                      </button>
                    </Link>
                    <Link to={"/product-collection/shippingAddress"}>
                      <button
                        className="underline w-[62px] h-[24px] text-center text-[16px] text-[#E2A856] font-semibold bg-white text-nowrap"
                        type="button"
                      >
                        Go Back
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditShippingAddress;
