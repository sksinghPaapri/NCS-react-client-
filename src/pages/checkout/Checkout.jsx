import { Link } from "react-router-dom";
import CartProduct from "../../assets/ShoppingCart/CartProduct.svg";
import calendar_month from "../../assets/ShoppingCart/calendar_month.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Checkout = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div
      className="flex items-center justify-center my-[80px] sm:my-[100px]"
      style={{ fontFamily: "Open Sans" }}
    >
      <div className="w-[320px] sm:w-[744px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col items-center justify-center gap-[60px]">
        {/* checkout heading*/}
        <div className="w-[320px] h-[38px] sm:w-[744px] sm:h-[44px] flex xl:w-[1160px] 2xl:w-[1320px] items-center justify-center">
          <div>
            <p className="text-[28px] xl:text-[32px] font-bold mx-auto text-center">
              Checkout
            </p>
          </div>
        </div>

        {/*top buttons , orderdetail and summary */}
        <div className="flex flex-col items-center justify-center gap-5">
          {/* top section */}
          <div className="w-[280px] h-[65px] sm:w-[640px] sm:h-[34px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col items-center justify-between sm:flex-row">
            {/* back to cart */}
            <Link to={"/cart-detail"}>
              <div className="h-[21px] sm:h-[34px] flex items-center cursor-pointer justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
                <p className="text-[14px] text-gray-500">
                  Back to Shopping Cart
                </p>
              </div>
            </Link>
            {/* button */}
            <div>
              <Link to={"/"}>
                <button
                  type="button"
                  className="w-[154px] h-[34px] text-white bg-[#E2A856] hover:bg-[#E2A856] focus:ring-4 focus:ring-[#E2A856] font-medium rounded text-xs focus:outline-none"
                >
                  CONTINUE SHOPPING
                </button>
              </Link>
            </div>
          </div>
          {/* Order details , order summary and shipping details */}
          <div className="w-[280px] sm:w-[640px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col xl:flex-row items-center justify-center xl:items-start xl:justify-between">
            {/* orders details */}
            <div className="w-[280px] sm:w-[640px] xl:w-[685px] flex flex-col items-center justify-center border-2 gap-[30px]">
              {/* shipping date */}
              <div className="w-[240px] h-[137px] sm:w-[600px] sm:h-[59px] xl:w-[645px] flex flex-col items-center justify-between sm:flex-row">
                {/* col 1 */}
                <div className="w-[240px] h-[72px] font-bold sm:w-[277px] sm:h-[59px] flex flex-col items-center justify-center sm:items-start border-b border-gray-500 sm:border-b-0">
                  <div className="sm:h-[44px] flex flex-col sm:flex-row gap-3 sm:gap-5">
                    <div className="h-[32px] text-[16px] sm:h-[44px] text-nowrap flex items-end sm:items-center justify-center sm:justify-start">
                      Shipping Date:
                    </div>
                    <div className="h-[41px] sm:h-[44px] flex items-center justify-center gap-1 sm:gap-0">
                      <img src={calendar_month} alt="Calender" />
                      <span className="text-nowrap text-[16px]">
                        15 September 2024
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:items-center sm:gap-1">
                    <p className="text-gray-500 text-[10px] sm:text-[12px] text-nowrap">
                      Instruction:
                    </p>
                    <p className="text-gray-500 text-[10px] sm:text-[12px] text-nowrap">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                {/* col 2 */}
                <div className=" flex w-[240px] h-[45px] sm:w-[109px] sm:h-[59px] text-[10px] text-gray-700 gap-2 flex-col items-center justify-center">
                  <div className="flex items-center justify-center sm:hidden">
                    <p className="w-[54px] h-[15px]">Instruction: </p>
                    <p className="w-[132px] sm:w-[586px] h-[15px]">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>

                  <div>
                    {" "}
                    <button
                      type="button"
                      className="w-[109px] h-[25px] text-black bg-[#F0EFEB] focus:ring-4 focus:ring-[#F0EFEB] font-medium text-[10px]  focus:outline-none"
                    >
                      Ship Order Complete
                    </button>
                  </div>
                </div>
              </div>
              {/* table */}
              <table className="w-[240px] sm:w-[600px] xl:w-[645px] text-sm text-left rtl:text-right text-gray-500 flex flex-col">
                <thead className="text-xs text-gray-500 sm:w-[600px] xl:w-[645px] sm:h-[28px] sm:items-center sm:justify-center">
                  <tr className="hidden sm:border-b-2 w-[240px] h-[18px] sm:w-[600px] xl:w-[645px] sm:h-[28px] sm:flex flex-row sm:gap-[10px]">
                    <th
                      scope="col"
                      className="sm:w-[55px] h-[18px] hidden sm:flex items-center justify-center me-[10px]"
                    >
                      <span className="">Image</span>
                    </th>
                    <th
                      scope="col"
                      className="sm:w-[180px] xl:w-[200px] h-[18px] hidden sm:flex items-center justify-center px-4"
                    >
                      Product Details
                    </th>
                    <th
                      scope="col"
                      className="sm:w-[80px] xl:w-[90px] h-[18px] hidden sm:flex items-center sm:ms-5 xl:ms-0"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="sm:w-[80px] xl:w-[90px] h-[18px] hidden sm:flex items-center xl:me-0"
                    >
                      Qty
                    </th>
                    <th
                      scope="col"
                      className="sm:w-[80px] xl:w-[90px] h-[18px] hidden sm:flex items-center"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="sm:w-[80px] xl:w-[90px] h-[18px] hidden sm:flex items-center justify-center"
                    >
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody className=" border-gray-400">
                  {/* tr-1 */}
                  <tr className="mt-3 border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[75px] xl:w-[645px] flex gap-4 mb-[1px] sm:items-start sm:gap-[25px] xl:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[55px] xl:w-[55px] sm:h-[55px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[55px] sm:h-[55px] "
                          alt="Product"
                        />
                      </span>
                      {/* Quantity for mobile only*/}
                      <span className="w-[94px] h-[15px] mt-[15px] flex items-center gap-1 sm:hidden text-gray-500 text-[10px] sm:text-[12px]">
                        <div className="flex w-[19px] h-[15px]">Qty:</div>
                        <div className="flex w-[19px] h-[15px] text-black font-semibold">
                          10{" "}
                          <span className="flex w-[45px] h-[15px] ms-1 text-gray-500">
                            /Meter(s)
                          </span>
                        </div>
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[65px] xl:w-[180x] text-[10px] sm:text-[12px] text-gray-400">
                          {/* product detail for all and delete button for mobile only */}
                          <div className="-mt-1 sm:w-[180px] sm:h-[65px] xl:w-[180px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[155px] h-[18px] text-xs text-gray-950">
                                00000-00
                              </p>
                            </div>
                            <div className="flex flex-col leading-[14px] text-gray-400">
                              <p className="">
                                Design : <span>Design Name</span>
                              </p>
                              <p>
                                Color : <span>Color</span>
                              </p>
                              <p>
                                Collection : <span>Collection Name</span>
                              </p>
                            </div>
                          </div>
                        </span>
                        <div className="flex flex-col sm:flex-row leading-[14px] sm:leading-4 text-gray-400">
                          {/* price */}
                          <span className="text-[10px] sm:text-[12px] sm:w-[60px] xl:w-[90px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-xs">$9.15</span>
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* Quanitity for desktop and tab only*/}
                          <span className="sm:mx-[25px] xl:mx-0 h-[30px] justify-center sm:flex hidden">
                            <div className="flex w-[60px] sm:w-[60px] xl:w-[90px] h-[20px] sm:h-[30px] items-start sm:justify-center text-[10px] sm:text-[12px]">
                              <div className="flex w-[19px] h-[15px] sm:hidden">
                                Qty:
                              </div>
                              <div className="flex w-[31px] h-[18px] text-black font-semibold sm:flex-col">
                                <span>10 </span>
                                <span className="flex w-[36px] h-[12px] ms-1 sm:ms-0 text-gray-400">
                                  /Meter(s)
                                </span>
                              </div>
                            </div>
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:text-[12px] sm:w-[60px] xl:w-[90px] sm:h-[18px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="sm:ms-5 xl:ms-0 text-[10px] sm:text-[12px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[90px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  {/* tr-2 */}
                  <tr className="mt-3 border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[75px] xl:w-[645px] flex gap-4 mb-[1px] sm:items-start sm:gap-[25px] xl:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[55px] xl:w-[55px] sm:h-[55px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[55px] sm:h-[55px] "
                          alt="Product"
                        />
                      </span>
                      {/* Quantity for mobile only*/}
                      <span className="w-[94px] h-[15px] mt-[15px] flex items-center gap-1 sm:hidden text-gray-500 text-[10px] sm:text-[12px]">
                        <div className="flex w-[19px] h-[15px]">Qty:</div>
                        <div className="flex w-[19px] h-[15px] text-black font-semibold">
                          10{" "}
                          <span className="flex w-[45px] h-[15px] ms-1 text-gray-500">
                            /Meter(s)
                          </span>
                        </div>
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[65px] xl:w-[180x] text-[10px] sm:text-[12px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className="-mt-1 sm:w-[180px] sm:h-[65px] xl:w-[180px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[155px] h-[18px] text-xs text-gray-950">
                                00000-00
                              </p>
                            </div>
                            <div className="flex flex-col leading-[14px] text-gray-500">
                              <p className="">
                                Design : <span>Design Name</span>
                              </p>
                              <p>
                                Color : <span>Color</span>
                              </p>
                              <p>
                                Collection : <span>Collection Name</span>
                              </p>
                            </div>
                          </div>
                        </span>
                        <div className="flex flex-col sm:flex-row leading-[14px] sm:leading-4 text-gray-500">
                          {/* price */}
                          <span className="text-[10px] sm:text-[12px] sm:w-[60px] xl:w-[90px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-xs">$9.15</span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* Quanitity for desktop and tab only*/}
                          <span className="sm:mx-[25px] xl:mx-0 h-[30px] justify-center sm:flex hidden">
                            <div className="flex w-[60px] sm:w-[60px] xl:w-[90px] h-[20px] sm:h-[30px] items-start sm:justify-center text-[10px] sm:text-[12px]">
                              <div className="flex w-[19px] h-[15px] sm:hidden">
                                Qty:
                              </div>
                              <div className="flex w-[31px] h-[18px] text-black font-semibold sm:flex-col">
                                <span>10 </span>
                                <span className="flex w-[36px] h-[12px] ms-1 sm:ms-0 text-gray-500">
                                  /Meter(s)
                                </span>
                              </div>
                            </div>
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:text-[12px] sm:w-[60px] xl:w-[90px] sm:h-[18px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="sm:ms-5 xl:ms-0 text-[10px] sm:text-[12px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[90px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  {/* tr-3 */}
                  <tr className="mt-3 border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[75px] xl:w-[645px] flex gap-4 mb-[1px] sm:items-start sm:gap-[25px] xl:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[55px] xl:w-[55px] sm:h-[55px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[55px] sm:h-[55px] "
                          alt="Product"
                        />
                      </span>
                      {/* Quantity for mobile only*/}
                      <span className="w-[94px] h-[15px] mt-[15px] flex items-center gap-1 sm:hidden text-gray-500 text-[10px] sm:text-[12px]">
                        <div className="flex w-[19px] h-[15px]">Qty:</div>
                        <div className="flex w-[19px] h-[15px] text-black font-semibold">
                          10{" "}
                          <span className="flex w-[45px] h-[15px] ms-1 text-gray-500">
                            /Meter(s)
                          </span>
                        </div>
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[65px] xl:w-[180x] text-[10px] sm:text-[12px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className="-mt-1 sm:w-[180px] sm:h-[65px] xl:w-[180px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[155px] h-[18px] text-xs text-gray-950">
                                00000-00
                              </p>
                            </div>
                            <div className="flex flex-col leading-[14px] text-gray-500">
                              <p className="">
                                Design : <span>Design Name</span>
                              </p>
                              <p>
                                Color : <span>Color</span>
                              </p>
                              <p>
                                Collection : <span>Collection Name</span>
                              </p>
                            </div>
                          </div>
                        </span>
                        <div className="flex flex-col sm:flex-row leading-[14px] sm:leading-4 text-gray-500">
                          {/* price */}
                          <span className="text-[10px] sm:text-[12px] sm:w-[60px] xl:w-[90px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-xs">$9.15</span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* Quanitity for desktop and tab only*/}
                          <span className="sm:mx-[25px] xl:mx-0 h-[30px] justify-center sm:flex hidden">
                            <div className="flex w-[60px] sm:w-[60px] xl:w-[90px] h-[20px] sm:h-[30px] items-start sm:justify-center text-[10px] sm:text-[12px]">
                              <div className="flex w-[19px] h-[15px] sm:hidden">
                                Qty:
                              </div>
                              <div className="flex w-[31px] h-[18px] text-black font-semibold sm:flex-col">
                                <span>10 </span>
                                <span className="flex w-[36px] h-[12px] ms-1 sm:ms-0 text-gray-500">
                                  /Meter(s)
                                </span>
                              </div>
                            </div>
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:text-[12px] sm:w-[60px] xl:w-[90px] sm:h-[18px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="sm:ms-5 xl:ms-0 text-[10px] sm:text-[12px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[90px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  {/* tr-4 */}
                  <tr className="mt-3 border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[75px] xl:w-[645px] flex gap-4 mb-[1px] sm:items-start sm:gap-[25px] xl:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[55px] xl:w-[55px] sm:h-[55px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[55px] sm:h-[55px] "
                          alt="Product"
                        />
                      </span>
                      {/* Quantity for mobile only*/}
                      <span className="w-[94px] h-[15px] mt-[15px] flex items-center gap-1 sm:hidden text-gray-500 text-[10px] sm:text-[12px]">
                        <div className="flex w-[19px] h-[15px]">Qty:</div>
                        <div className="flex w-[19px] h-[15px] text-black font-semibold">
                          10{" "}
                          <span className="flex w-[45px] h-[15px] ms-1 text-gray-500">
                            /Meter(s)
                          </span>
                        </div>
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[65px] xl:w-[180x] text-[10px] sm:text-[12px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className="-mt-1 sm:w-[180px] sm:h-[65px] xl:w-[180px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[155px] h-[18px] text-xs text-gray-950">
                                00000-00
                              </p>
                            </div>
                            <div className="flex flex-col leading-[14px] text-gray-500">
                              <p className="">
                                Design : <span>Design Name</span>
                              </p>
                              <p>
                                Color : <span>Color</span>
                              </p>
                              <p>
                                Collection : <span>Collection Name</span>
                              </p>
                            </div>
                          </div>
                        </span>
                        <div className="flex flex-col sm:flex-row leading-[14px] sm:leading-4 text-gray-500">
                          {/* price */}
                          <span className="text-[10px] sm:text-[12px] sm:w-[60px] xl:w-[90px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-xs">$9.15</span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* Quanitity for desktop and tab only*/}
                          <span className="sm:mx-[25px] xl:mx-0 h-[30px] justify-center sm:flex hidden">
                            <div className="flex w-[60px] sm:w-[60px] xl:w-[90px] h-[20px] sm:h-[30px] items-start sm:justify-center text-[10px] sm:text-[12px]">
                              <div className="flex w-[19px] h-[15px] sm:hidden">
                                Qty:
                              </div>
                              <div className="flex w-[31px] h-[18px] text-black font-semibold sm:flex-col">
                                <span>10 </span>
                                <span className="flex w-[36px] h-[12px] ms-1 sm:ms-0 text-gray-500">
                                  /Meter(s)
                                </span>
                              </div>
                            </div>
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:text-[12px] sm:w-[60px] xl:w-[90px] sm:h-[18px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="sm:ms-5 xl:ms-0 text-[10px] sm:text-[12px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[90px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  {/* tr-5 */}
                  <tr className="mt-3 border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[75px] xl:w-[645px] flex gap-4 mb-[1px] sm:items-start sm:gap-[25px] xl:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[55px] xl:w-[55px] sm:h-[55px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[55px] sm:h-[55px] "
                          alt="Product"
                        />
                      </span>
                      {/* Quantity for mobile only*/}
                      <span className="w-[94px] h-[15px] mt-[15px] flex items-center gap-1 sm:hidden text-gray-500 text-[10px] sm:text-[12px]">
                        <div className="flex w-[19px] h-[15px]">Qty:</div>
                        <div className="flex w-[19px] h-[15px] text-black font-semibold">
                          10{" "}
                          <span className="flex w-[45px] h-[15px] ms-1 text-gray-500">
                            /Meter(s)
                          </span>
                        </div>
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[65px] xl:w-[180x] text-[10px] sm:text-[12px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className="-mt-1 sm:w-[180px] sm:h-[65px] xl:w-[180px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[155px] h-[18px] text-xs text-gray-950">
                                00000-00
                              </p>
                            </div>
                            <div className="flex flex-col leading-[14px] text-gray-500">
                              <p className="">
                                Design : <span>Design Name</span>
                              </p>
                              <p>
                                Color : <span>Color</span>
                              </p>
                              <p>
                                Collection : <span>Collection Name</span>
                              </p>
                            </div>
                          </div>
                        </span>
                        <div className="flex flex-col sm:flex-row leading-[14px] sm:leading-4 text-gray-500">
                          {/* price */}
                          <span className="text-[10px] sm:text-[12px] sm:w-[60px] xl:w-[90px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-xs">$9.15</span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* Quanitity for desktop and tab only*/}
                          <span className="sm:mx-[25px] xl:mx-0 h-[30px] justify-center sm:flex hidden">
                            <div className="flex w-[60px] sm:w-[60px] xl:w-[90px] h-[20px] sm:h-[30px] items-start sm:justify-center text-[10px] sm:text-[12px]">
                              <div className="flex w-[19px] h-[15px] sm:hidden">
                                Qty:
                              </div>
                              <div className="flex w-[31px] h-[18px] text-black font-semibold sm:flex-col">
                                <span>10 </span>
                                <span className="flex w-[36px] h-[12px] ms-1 sm:ms-0 text-gray-500">
                                  /Meter(s)
                                </span>
                              </div>
                            </div>
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:text-[12px] sm:w-[60px] xl:w-[90px] sm:h-[18px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="sm:ms-5 xl:ms-0 text-[10px] sm:text-[12px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[90px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
              {/* coupon code and instructor */}
              <div className="my-3 -mt-2 w-[240px] h-[74px] sm:w-[600px] sm:h-[86px] xl:w-[645px] xl:h-[86px] bg-white">
                {/* collection total */}
                <div className="w-[240px] h-[44px] sm:w-[600px] xl:w-[645px] sm:h-[50px] text-[10px] sm:text-[12px] sm:flex sm:flex-col sm:items-end">
                  <div className="flex justify-between sm:w-[314px] sm:h-[18px]">
                    <p>Collection Subtotal:</p>
                    <p>$ 000.00</p>
                  </div>
                  <div className="flex justify-between text-red-400 sm:w-[314px] sm:h-[18px]">
                    <p>Discount (Promo name) applied:</p>
                    <p>-$ 00.00</p>
                  </div>
                  <div className="flex justify-between text-red-400 sm:w-[314px] sm:h-[18px]">
                    <p>Discount (Promo name) applied:</p>
                    <p>-$ 00.00</p>
                  </div>
                  <div className="mt-2 flex justify-between font-bold text-sm sm:w-[314px] sm:h-[24px]">
                    <p>Collection Total:</p>
                    <p>$ 00.00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* order summary and shipping details */}
            <div className="w-[280px] sm:w-[500px] xl:w-[435px] 2xl:w-[555px] flex flex-col gap-10 items-center justify-center">
              {/* order summary */}
              <div className="w-[280px] h-[291px] sm:w-[500px] sm:h-[283px] xl:w-[435px] xl:h-[283px] 2xl:w-[555px] mt-10 xl:mt-0">
                <div className="mx-auto w-[280px] h-[291px] sm:w-[500px] sm:h-[283px] xl:w-[435px] xl:h-[283px] 2xl:w-[555px] xl:mb-[89px] border-2 mb-20 flex flex-col">
                  <div className="flex flex-col items-center justify-center gap-10 my-5 sm:my-0 xl:w-[435px] 2xl:w-[555px] xl:h-[283px]">
                    {/* row1 */}
                    <div className="sm:mt-5 xl:mt-0 w-[240px] h-[57px] sm:w-[460px] xl:w-[395px] xl:h-[57px] 2xl:w-[515px] flex items-center justify-center sm:justify-start uppercase font-bold text-[18px] border-b">
                      Order Summary
                    </div>
                    {/* row2 */}
                    <div className="w-[240px] h-[154px] sm:w-[460px] sm:h-[136px] xl:w-[395px] xl:h-[156px] 2xl:w-[515px]">
                      <div className="flex justify-between text-base">
                        <p className="">Subtotal:</p>
                        <p>$000.00</p>
                      </div>
                      <div className="flex justify-between text-red-400">
                        <p className="">Discount:</p>
                        <p>$000.00</p>
                      </div>
                      <div className="mt-1 font-bold flex justify-between">
                        <p className="">Total:</p>
                        <p>$000.00</p>
                      </div>
                      <div className="w-[240px] sm:w-[460px] sm:h-[36px] xl:w-[395px] h-[36px] 2xl:w-[515px] mt-5 text-gray-400 text-[12px]">
                        <ul className="ms-5">
                          <li className="list-disc">
                            Total does not include applicable taxes or delivery.
                            All prices and product availability are subject to
                            change.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* shipping details */}
              <div className="w-[320px] sm:w-[740px] xl:w-[435px] 2xl:w-[555px] flex items-center justify-center">
                <div className="mx-auto w-[280px] sm:w-[500px] xl:w-[435px] 2xl:w-[555px] border-2 mb-20 flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center gap-5 my-5 sm:my-0 xl:w-[435px] 2xl:w-[555px]">
                    {/* row1 name only*/}
                    <div className="sm:mt-5 xl:mt-0 w-[240px] h-[57px] sm:w-[460px] xl:w-[395px] xl:h-[57px] 2xl:w-[515px] flex items-center justify-center sm:justify-start uppercase font-bold text-[18px] border-b">
                      Shipping Details
                    </div>
                    {/* row2 */}
                    <div className="w-[240px] h-[66px] sm:w-[460px] sm:h-[51px] xl:w-[395px] xl:h-[51px] 2xl:w-[515px] flex text-base border-b gap-1">
                      <p className="w-[65px] h-[36px] sm:w-[125px] font-bold sm:h-[21px] text-xs">
                        Web Order Number:
                      </p>
                      <p className="h-[18px] sm:h-[21px] text-xs"></p>
                    </div>
                    {/* row3 */}
                    <div className="w-[240px] h-[66px] sm:w-[460px] sm:h-[72px] xl:w-[395px] xl:h-[72px] 2xl:w-[515px] flex items-center text-base border-b gap-1">
                      <p className="w-[65px] h-[36px] sm:w-[125px] sm:h-[42px] text-xs font-bold">
                        Sales Order Number:
                      </p>
                      <p className="w-[170px] h-[36px] sm:w-[236px] sm:h-[21px] text-xs"></p>
                    </div>
                    {/* row4 */}
                    <div className="w-[240px] h-[66px] sm:w-[460px] sm:h-[72px] xl:w-[395px] xl:h-[72px] 2xl:w-[515px] flex items-center text-base border-b gap-1">
                      <p className="w-[65px] h-[36px] sm:w-[125px] sm:h-[42px] text-xs font-bold flex items-center">
                        Order By:
                      </p>
                      <p className="w-[170px] h-[36px] sm:w-[236px] sm:h-[21px] text-xs">
                        STEVE WEISSMAN
                      </p>
                    </div>
                    {/* row5 */}
                    <div className="w-[240px] h-[140px] sm:w-[460px] sm:h-[155px] xl:w-[395px] 2xl:w-[515px] flex text-base border-b">
                      <p className="w-[50px] h-[18px] sm:w-[125px] font-bold sm:h-[21px] text-xs">
                        Bill To:
                      </p>
                      <p className="w-[170px] h-[110px] sm:w-[330px] xl:w-[265px] 2xl:w-[385px] sm:h-[125px] text-xs">
                        <p className="w-[170px] h-[18px] sm:h-[21px]">
                          CHRISTINA'S NORTHCOTT
                        </p>
                        <p className="w-[170px] h-[18px] sm:w-[330px] xl:w-[265px] 2xl:w-[385px] sm:h-[21px]">
                          SHOP123 Fun Street Vaughan
                        </p>
                        <p className="w-[170px] h-[18px] sm:w-[330px] xl:w-[265px] 2xl:w-[385px] sm:h-[21px]">
                          Tel: ( )
                        </p>
                        <p className="w-[170px] h-[18px] sm:w-[330px] xl:w-[265px] 2xl:w-[385px] sm:h-[21px]">
                          Cell: ( )
                        </p>
                        <p className="w-[170px] h-[18px] sm:w-[330px] xl:w-[265px] 2xl:w-[385px] sm:h-[21px]">
                          Email:
                        </p>
                      </p>
                    </div>
                    {/* row6 */}
                    <div className="w-[240px] h-[75px] sm:w-[460px] sm:h-[77px] xl:w-[395px] 2xl:w-[515px] flex text-base border-b gap-1">
                      <p className="w-[50px] h-[18px] sm:w-[125px] font-bold sm:h-[21px] text-xs">
                        Ship To:
                      </p>
                      <p className="w-[170px] h-[110px] sm:w-[330px] sm:h-[125px] text-xs">
                        <div className="flex items-center mb-1">
                          <input
                            id="default-radio-1"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                          />
                          <label
                            htmlFor="default-radio-1"
                            className="ms-2 text-xs font-medium text-gray-900"
                          >
                            Same as billing address
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            checked
                            id="default-radio-2"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500focus:ring-2 "
                          />
                          <label
                            htmlFor="default-radio-2"
                            className="ms-2 text-xs font-medium text-gray-900"
                          >
                            Use different address
                          </label>
                        </div>
                      </p>
                    </div>
                    {/* row7 */}
                    <div className="w-[240px] h-[102px] sm:w-[460px] sm:h-[72px] xl:w-[395px] 2xl:w-[515px] flex text-base border-b gap-1">
                      <p className="w-[65px] h-[72px] sm:w-[125px] font-bold sm:h-[42px] text-xs gap-1">
                        Optional Order Processing:
                      </p>
                      <p className="w-[170px] h-[36px] sm:w-[260px] sm:h-[21px] text-xs">
                        Combine Delivery, Ship Order Complete
                      </p>
                    </div>
                  </div>
                  {/* row last */}
                  <div>
                    <ul className="ms-5 px-1 w-[240px] h-[115px] sm:w-[460px] sm:h-[79px] xl:w-[395px] 2xl:w-[515px] text-gray-500 text-xs flex flex-col justify-center gap-2">
                      <li className="list-disc">
                        NOTE: If the address we have on file is incorrect,
                        please contact us at 1-800-268-1466
                      </li>
                      <li className="list-disc">
                        Click here to read through our Sales Terms and
                        Conditions.
                      </li>
                    </ul>
                  </div>
                  {/* place order button */}
                  <div className="mb-4 mt-2">
                    <Link to={"/my-orders"} className="cursor-pointer">
                      <button
                        type="button"
                        className="w-[240px] h-[49px] sm:w-[460px] xl:w-[395px] 2xl:w-[515px] text-white bg-[#E2A856] hover:bg-[#E2A856] focus:ring-4 focus:ring-[#E2A856] font-medium rounded focus:outline-none uppercase"
                      >
                        Place order
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

export default Checkout;
