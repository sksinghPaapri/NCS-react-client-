import { Link } from "react-router-dom";
import help from "../../assets/help.svg";
import CartProduct from "../../assets/ShoppingCart/CartProduct.svg";
import DeleteIcon from "../../assets/ShoppingCart/DeleteIcon.svg";
import calendar_month from "../../assets/ShoppingCart/calendar_month.svg";
import { useState } from "react";

const CartDetail = () => {
  // for Sales Rep, Sales Manager, Power User, Admin User
  const [salesRep, setSalesRep] = useState(true);
  // for tooltip 1
  const [tooltip, setToolTip] = useState(false);
  // for tooltip 2
  const [tooltip2, setToolTip2] = useState(false);
  // for mobile table dropdown list
  const [isOpen, setIsOpen] = useState(false);
  // mobile dropdown table open
  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };
  // mobile dropdown table close
  const handleDropUp = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="mb-20 max-w-[1320px] min-w-[320px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col gap-10 xl:gap-0 xl:flex-col xl:mx-auto items-center justify-center"
      style={{ fontFamily: "Open Sans" }}
    >
      {/* shoppingcart heading desktop only*/}
      <div className="hidden w-[1024px] xl:flex xl:w-[1160px] 2xl:w-[1320px] xl:h-[44px] items-center justify-center xl:mt-[100px] xl:mb-[60px]">
        <p className="xl:text-[32px] font-bold mx-auto">Shopping Cart</p>
      </div>

      {/* orderdetail and summary for desktop */}
      {/* <div className="flex flex-col xl:flex-row xl:gap-10"> */}
      <div className="flex flex-col xl:flex-row xl:gap-10">
        {/* orders details */}
        <div className="mx-auto w-[320px] sm:w-[744px] xl:w-[780px] mt-20 xl:mt-0 sm:rounded-lg">
          {/* top section */}
          <div className="flex flex-col items-center justify-center">
            {/* shoppingcart heading mobile */}
            <div className="h-[38px] sm:h-[44px] flex xl:hidden flex-col items-center justify-center">
              <p className="text-[28px] xl:text-[32px] font-bold mx-auto">
                Shopping Cart
              </p>
            </div>
            {/* top buttons */}
            <div className="mt-[60px] xl:mt-0 min-w-[280px] w-[280px] sm:w-[640px] xl:w-[780px]">
              <div className="h-[78px] min-w-[280px] w-[280px] sm:w-[640px] sm:h-[34px] xl:w-[780px] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-[10px] sm:gap-0">
                {/* button 1 */}
                <Link to={"/"}>
                  <button
                    type="button"
                    className="w-[154px] h-[34px] text-white bg-[#E2A856] focus:ring-4 focus:ring-[#E2A856] font-medium rounded text-[12px] focus:outline-none hover:bg-white hover:text-[#E2A856] hover:border-2 hover:border-[#E2A856]"
                  >
                    CONTINUE SHOPPING
                  </button>
                </Link>
                {/* button 2 */}
                <button
                  type="button"
                  className="w-[154px] h-[34px] bg-white text-[#E2A856] border-2 border-[#E2A856] hover:border-black hover:bg-black hover:text-white  font-medium uppercase rounded text-[12px] focus:outline-none"
                >
                  empty entire cart
                </button>
              </div>
            </div>
          </div>
          {/* table 1 */}
          <div className="xl:w-[780px] w-[280px] sm:w-[640px] mx-auto mt-5 relative">
            <div className="w-[280px] sm:w-[640px] xl:w-[780px] flex flex-col items-center justify-center border-2">
              {/* date picker */}
              <div className="w-[240px] h-[72px] sm:w-[600px] xl:w-[740px] flex flex-col items-center justify-between md:flex-row md:justify-start mt-5">
                <p className="text-[14px] w-[102px] h-[21px] font-bold text-nowrap">
                  Shipping Date:
                </p>
                {/* datepicker */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[240px] h-[41px] flex items-center justify-center">
                    <img src={calendar_month} alt="Calender" />
                    <p className="text-[14px] font-bold">15 January 2024</p>
                  </div>
                  <div className="h-[1px] bg-gray-400 w-[250px] sm:w-[160px]"></div>
                </div>
              </div>
              {/* table */}
              {/* {isOpen && ( */}
              <table className=" w-[240px] sm:w-[600px] xl:w-[740px] mt-5 text-[14px] text-left rtl:text-right text-gray-500 flex flex-col">
                <thead className="text-[12px] text-gray-500 sm:w-[600px] sm:h-[28px] xl:w-[740px] sm:items-center sm:justify-center">
                  <tr className="sm:border-b-2 w-[240px] h-[18px] sm:w-[600px] xl:w-[740px] sm:h-[28px] flex flex-row items-center justify-end sm:justify-normal sm:gap-[10px]">
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center me-[10px]"
                    >
                      <span className="">Image</span>
                    </th>
                    <th
                      scope="col"
                      className="w-[180px] xl:w-[200px] h-[18px] hidden sm:flex items-center justify-center px-4"
                    >
                      Product Details
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center"
                    >
                      Qty
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center"
                    >
                      Subtotal
                    </th>
                    <th
                      scope="col"
                      className="flex w-[62px] sm:w-[60px] xl:w-[80px] h-[18px] underline sm:text-center text-nowrap items-center justify-center"
                    >
                      Remove All
                    </th>
                  </tr>
                </thead>
                <tbody className="mt-5 border-gray-400">
                  {/* tr-1 */}
                  <tr className="border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[70px] xl:w-[740px] xl:h-[90px] flex gap-4 mb-[11px] sm:items-start sm:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[60px] xl:w-[80px] sm:h-[60px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[60px] sm:h-[60px] xl:w-[80px] xl:h-[80px] "
                          alt="Product"
                        />
                      </span>
                      {/* + - buttton for mobile only*/}
                      <span className="h-[30px] mt-[10px] justify-center flex items-center sm:hidden">
                        <div className="flex w-[60px] h-[20px]">
                          <form className="max-w-xs mx-auto">
                            <label
                              htmlFor="quantity-input"
                              className="block text-[14px] font-medium text-gray-900"
                            ></label>
                            <div className="relative flex items-center max-w-[8rem]">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="quantity-input"
                                className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                placeholder="10"
                              />
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="quantity-input"
                                className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className=" sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-[12px] text-gray-950">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <img
                                    src={DeleteIcon}
                                    className="w-[10px] h-[11.7px]"
                                  ></img>
                                </span>
                              </div>
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px]">
                                $9.15
                              </span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* + - buttton for desktop and tab only*/}
                          <span className="h-[30px] justify-center sm:flex hidden sm:ms-[20px]">
                            <div className="flex w-[60px] xl:w-[80px] h-[20px] items-start">
                              <form className="max-w-xs mx-auto">
                                <label
                                  htmlFor="quantity-input"
                                  className="block text-[14px] font-medium text-gray-900"
                                ></label>
                                <div className="relative flex items-center sm:items-start max-w-[8rem]">
                                  <button
                                    type="button"
                                    id="decrement-button"
                                    data-input-counter-decrement="quantity-input"
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                    className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                    placeholder="10"
                                  />
                                  <button
                                    type="button"
                                    id="increment-button"
                                    data-input-counter-increment="quantity-input"
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        {/* a
                      <img
                        src={DeleteIcon}
                        className="w-[10px] h-[11.7px]"
                      ></img> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </tr>
                  {/* tr-2 */}
                  <tr className="border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[70px] xl:w-[740px] xl:h-[90px] flex gap-4 mb-[11px] sm:items-start sm:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[60px] xl:w-[80px] sm:h-[60px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[60px] sm:h-[60px] xl:w-[80px] xl:h-[80px] "
                          alt="Product"
                        />
                      </span>
                      {/* + - buttton for mobile only*/}
                      <span className="h-[30px] mt-[10px] justify-center flex items-center sm:hidden">
                        <div className="flex w-[60px] h-[20px]">
                          <form className="max-w-xs mx-auto">
                            <label
                              htmlFor="quantity-input"
                              className="block text-[14px] font-medium text-gray-900"
                            ></label>
                            <div className="relative flex items-center max-w-[8rem]">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="quantity-input"
                                className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                placeholder="10"
                              />
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="quantity-input"
                                className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className=" sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-[12px] text-gray-950">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <img
                                    src={DeleteIcon}
                                    className="w-[10px] h-[11.7px]"
                                  ></img>
                                </span>
                              </div>
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px]">
                                $9.15
                              </span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* + - buttton for desktop and tab only*/}
                          <span className="h-[30px] justify-center sm:flex hidden sm:ms-[20px]">
                            <div className="flex w-[60px] xl:w-[80px] h-[20px] items-start">
                              <form className="max-w-xs mx-auto">
                                <label
                                  htmlFor="quantity-input"
                                  className="block text-[14px] font-medium text-gray-900"
                                ></label>
                                <div className="relative flex items-center sm:items-start max-w-[8rem]">
                                  <button
                                    type="button"
                                    id="decrement-button"
                                    data-input-counter-decrement="quantity-input"
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                    className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                    placeholder="10"
                                  />
                                  <button
                                    type="button"
                                    id="increment-button"
                                    data-input-counter-increment="quantity-input"
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        {/* a
                      <img
                        src={DeleteIcon}
                        className="w-[10px] h-[11.7px]"
                      ></img> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </tr>
                  {/* tr-3 */}
                  <tr className="border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[70px] xl:w-[740px] xl:h-[90px] flex gap-4 mb-[11px] sm:items-start sm:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[60px] xl:w-[80px] sm:h-[60px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[60px] sm:h-[60px] xl:w-[80px] xl:h-[80px] "
                          alt="Product"
                        />
                      </span>
                      {/* + - buttton for mobile only*/}
                      <span className="h-[30px] mt-[10px] justify-center flex items-center sm:hidden">
                        <div className="flex w-[60px] h-[20px]">
                          <form className="max-w-xs mx-auto">
                            <label
                              htmlFor="quantity-input"
                              className="block text-[14px] font-medium text-gray-900"
                            ></label>
                            <div className="relative flex items-center max-w-[8rem]">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="quantity-input"
                                className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                placeholder="10"
                              />
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="quantity-input"
                                className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className=" sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-[12px] text-gray-950">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <img
                                    src={DeleteIcon}
                                    className="w-[10px] h-[11.7px]"
                                  ></img>
                                </span>
                              </div>
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px]">
                                $9.15
                              </span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* + - buttton for desktop and tab only*/}
                          <span className="h-[30px] justify-center sm:flex hidden sm:ms-[20px]">
                            <div className="flex w-[60px] xl:w-[80px] h-[20px] items-start">
                              <form className="max-w-xs mx-auto">
                                <label
                                  htmlFor="quantity-input"
                                  className="block text-[14px] font-medium text-gray-900"
                                ></label>
                                <div className="relative flex items-center sm:items-start max-w-[8rem]">
                                  <button
                                    type="button"
                                    id="decrement-button"
                                    data-input-counter-decrement="quantity-input"
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                    className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                    placeholder="10"
                                  />
                                  <button
                                    type="button"
                                    id="increment-button"
                                    data-input-counter-increment="quantity-input"
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        {/* a
                      <img
                        src={DeleteIcon}
                        className="w-[10px] h-[11.7px]"
                      ></img> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </tr>
                  {/* tr-4 */}
                  <tr className="border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[70px] xl:w-[740px] xl:h-[90px] flex gap-4 mb-[11px] sm:items-start sm:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[60px] xl:w-[80px] sm:h-[60px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[60px] sm:h-[60px] xl:w-[80px] xl:h-[80px] "
                          alt="Product"
                        />
                      </span>
                      {/* + - buttton for mobile only*/}
                      <span className="h-[30px] mt-[10px] justify-center flex items-center sm:hidden">
                        <div className="flex w-[60px] h-[20px]">
                          <form className="max-w-xs mx-auto">
                            <label
                              htmlFor="quantity-input"
                              className="block text-[14px] font-medium text-gray-900"
                            ></label>
                            <div className="relative flex items-center max-w-[8rem]">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="quantity-input"
                                className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                placeholder="10"
                              />
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="quantity-input"
                                className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className=" sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-[12px] text-gray-950">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <img
                                    src={DeleteIcon}
                                    className="w-[10px] h-[11.7px]"
                                  ></img>
                                </span>
                              </div>
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px]">
                                $9.15
                              </span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* + - buttton for desktop and tab only*/}
                          <span className="h-[30px] justify-center sm:flex hidden sm:ms-[20px]">
                            <div className="flex w-[60px] xl:w-[80px] h-[20px] items-start">
                              <form className="max-w-xs mx-auto">
                                <label
                                  htmlFor="quantity-input"
                                  className="block text-[14px] font-medium text-gray-900"
                                ></label>
                                <div className="relative flex items-center sm:items-start max-w-[8rem]">
                                  <button
                                    type="button"
                                    id="decrement-button"
                                    data-input-counter-decrement="quantity-input"
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                    className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                    placeholder="10"
                                  />
                                  <button
                                    type="button"
                                    id="increment-button"
                                    data-input-counter-increment="quantity-input"
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        {/* a
                      <img
                        src={DeleteIcon}
                        className="w-[10px] h-[11.7px]"
                      ></img> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </tr>
                  {/* tr-5 */}
                  <tr className="border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[70px] xl:w-[740px] xl:h-[90px] flex gap-4 mb-[11px] sm:items-start sm:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[60px] xl:w-[80px] sm:h-[60px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[60px] sm:h-[60px] xl:w-[80px] xl:h-[80px] "
                          alt="Product"
                        />
                      </span>
                      {/* + - buttton for mobile only*/}
                      <span className="h-[30px] mt-[10px] justify-center flex items-center sm:hidden">
                        <div className="flex w-[60px] h-[20px]">
                          <form className="max-w-xs mx-auto">
                            <label
                              htmlFor="quantity-input"
                              className="block text-[14px] font-medium text-gray-900"
                            ></label>
                            <div className="relative flex items-center max-w-[8rem]">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="quantity-input"
                                className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                placeholder="10"
                              />
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="quantity-input"
                                className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className=" sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-[12px] text-gray-950">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <img
                                    src={DeleteIcon}
                                    className="w-[10px] h-[11.7px]"
                                  ></img>
                                </span>
                              </div>
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px]">
                                $9.15
                              </span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* + - buttton for desktop and tab only*/}
                          <span className="h-[30px] justify-center sm:flex hidden sm:ms-[20px]">
                            <div className="flex w-[60px] xl:w-[80px] h-[20px] items-start">
                              <form className="max-w-xs mx-auto">
                                <label
                                  htmlFor="quantity-input"
                                  className="block text-[14px] font-medium text-gray-900"
                                ></label>
                                <div className="relative flex items-center sm:items-start max-w-[8rem]">
                                  <button
                                    type="button"
                                    id="decrement-button"
                                    data-input-counter-decrement="quantity-input"
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                    className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                    placeholder="10"
                                  />
                                  <button
                                    type="button"
                                    id="increment-button"
                                    data-input-counter-increment="quantity-input"
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        {/* a
                      <img
                        src={DeleteIcon}
                        className="w-[10px] h-[11.7px]"
                      ></img> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
              {/* )} */}
              {/* coupon code and instructor */}
              <div className=" my-3 w-[240px] h-[167px] sm:w-[600px] sm:h-[109px] sm:flex sm:flex-col sm:gap-6 xl:w-[740px] xl:h-[109px] bg-white">
                {/*input and buttons */}
                <div className="xl:ms-[140px] w-[240px] h-[88px] sm:w-[600px] sm:h-[34px] flex flex-col sm:flex-row justify-between xl:gap-5 mb-5 sm:mb-0">
                  {/* 1 */}
                  <div className="w-[240px] h-[34px] sm:w-[290px] sm:h-[34px] xl:w-[740px] xl:h-[109px] flex justify-between">
                    <input
                      type="text"
                      className="w-[150px] h-[34px] sm:w-[200px] border-2 px-2 py-2 placeholder:text-[12px]"
                      placeholder="Instrucution"
                    />
                    <button
                      type="button"
                      className="w-[80px] h-[34px] text-white bg-[#E2A856] hover:bg-[#E2A856] focus:ring-4 focus:ring-[#E2A856] font-medium rounded text-[12px] focus:outline-none uppercase"
                    >
                      Submit
                    </button>
                  </div>
                  {/* 2 */}
                  <div className="w-[240px] h-[34px] sm:w-[290px] sm:h-[34px] xl:w-[740px] xl:h-[109px] flex justify-between">
                    <input
                      type="text"
                      className="w-[150px] h-[34px] sm:w-[200px] border-2 px-2 py-2 placeholder:text-[12px]"
                      placeholder="Coupon Code"
                    />
                    <button
                      type="button"
                      className="w-[80px] h-[34px] text-white bg-[#E2A856] hover:bg-[#E2A856] focus:ring-4 focus:ring-[#E2A856] font-medium rounded text-[12px] focus:outline-none uppercase"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                {/* collection total */}
                <div className=" w-full sm:flex sm:justify-end">
                  <div className="w-[240px] h-[44px] sm:w-[314px] sm:h-[50px] text-[10px] sm:flex sm:flex-col sm:items-center sm:justify-end">
                    <div className="flex justify-between sm:w-[314px] sm:h-[18px]">
                      <p>Collection Subtotal:</p>
                      <p>$ 000.00</p>
                    </div>
                    <div className="flex justify-between text-red-400 sm:hidden">
                      <p>Discount (Promo name) applied:</p>
                      <p>-$ 00.00</p>
                    </div>
                    <div className=" jus tify-between text-red-400 hidden">
                      <p>Discount (Promo name) applied:</p>
                      <p>-$ 00.00</p>
                    </div>
                    <div className="mt-2 flex justify-between font-bold text-[14px] sm:w-[314px] sm:h-[24px]">
                      <p>Collection Total:</p>
                      <p>$ 00.00</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* dropdown button */}
              {/* <div className="sm:hidden relative w-[240px]">
                <div
                  className="w-[240px] flex justify-end"
                  onClick={handleDropdownToggle}
                >
                  {isOpen ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div onClick={handleDropUp}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 15.75 7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div> */}
            </div>
          </div>

          {/* table 2 */}
          <div className="xl:w-[780px] w-[280px] sm:w-[640px] mx-auto mt-5">
            <div className="w-[280px] sm:w-[640px] xl:w-[780px] flex flex-col items-center justify-center border-2">
              {/* date picker */}
              <div className="w-[240px] h-[72px] sm:w-[600px] xl:w-[740px] flex flex-col items-center justify-between md:flex-row md:justify-start mt-5">
                <p className="text-[14px] w-[102px] h-[21px] font-bold text-nowrap">
                  Shipping Date:
                </p>
                {/* datepicker */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[240px] h-[41px] flex items-center justify-center">
                    <img src={calendar_month} alt="Calender" />
                    <p className="text-[14px] font-bold">15 January 2024</p>
                  </div>
                  <div className="h-[1px] bg-gray-400 w-[250px] sm:w-[160px]"></div>
                </div>
              </div>
              {/* table */}
              <table className="w-[240px] sm:w-[600px] xl:w-[740px] mt-5 text-[14px] text-left rtl:text-right text-gray-500 flex flex-col">
                <thead className="text-[12px] text-gray-500 sm:w-[600px] sm:h-[28px] xl:w-[740px] sm:items-center sm:justify-center">
                  <tr className="sm:border-b-2 w-[240px] h-[18px] sm:w-[600px] xl:w-[740px] sm:h-[28px] flex flex-row items-center justify-end sm:justify-normal sm:gap-[10px]">
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center me-[10px]"
                    >
                      <span className="">Image</span>
                    </th>
                    <th
                      scope="col"
                      className="w-[180px] xl:w-[200px] h-[18px] hidden sm:flex items-center justify-center px-4"
                    >
                      Product Details
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center"
                    >
                      Qty
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center"
                    >
                      Subtotal
                    </th>
                    <th
                      scope="col"
                      className="flex w-[62px] sm:w-[60px] xl:w-[80px] h-[18px] underline sm:text-center text-nowrap items-center justify-center"
                    >
                      Remove All
                    </th>
                  </tr>
                </thead>
                <tbody className="mt-5 border-gray-400">
                  <tr className="border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[70px] xl:w-[740px] xl:h-[90px] flex gap-4 mb-[11px] sm:items-start sm:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[60px] xl:w-[80px] sm:h-[60px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[60px] sm:h-[60px] xl:w-[80px] xl:h-[80px] "
                          alt="Product"
                        />
                      </span>
                      {/* + - buttton for mobile only*/}
                      <span className="h-[30px] mt-[10px] justify-center flex items-center sm:hidden">
                        <div className="flex w-[60px] h-[20px]">
                          <form className="max-w-xs mx-auto">
                            <label
                              htmlFor="quantity-input"
                              className="block text-[14px] font-medium text-gray-900"
                            ></label>
                            <div className="relative flex items-center max-w-[8rem]">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="quantity-input"
                                className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                placeholder="10"
                              />
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="quantity-input"
                                className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className=" sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-[12px] text-gray-950">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <img
                                    src={DeleteIcon}
                                    className="w-[10px] h-[11.7px]"
                                  ></img>
                                </span>
                              </div>
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px]">
                                $9.15
                              </span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* + - buttton for desktop and tab only*/}
                          <span className="h-[30px] justify-center sm:flex hidden sm:ms-[20px]">
                            <div className="flex w-[60px] xl:w-[80px] h-[20px] items-start">
                              <form className="max-w-xs mx-auto">
                                <label
                                  htmlFor="quantity-input"
                                  className="block text-[14px] font-medium text-gray-900"
                                ></label>
                                <div className="relative flex items-center sm:items-start max-w-[8rem]">
                                  <button
                                    type="button"
                                    id="decrement-button"
                                    data-input-counter-decrement="quantity-input"
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                    className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                    placeholder="10"
                                  />
                                  <button
                                    type="button"
                                    id="increment-button"
                                    data-input-counter-increment="quantity-input"
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        {/* a
                      <img
                        src={DeleteIcon}
                        className="w-[10px] h-[11.7px]"
                      ></img> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
              {/* coupon code and instructor */}
              <div className=" my-3 w-[240px] h-[200px] sm:w-[600px] sm:h-[120px] sm:flex sm:flex-col sm:gap-6 xl:w-[740px] xl:h-[120px] bg-white">
                {/*input and buttons */}
                <div className="xl:ms-[140px] w-[240px] h-[88px] sm:w-[600px] sm:h-[34px] flex flex-col sm:flex-row justify-between xl:gap-5 mb-5 sm:mb-0">
                  {/* 1 */}
                  <div className="w-[240px] h-[34px] sm:w-[290px] sm:h-[34px] xl:w-[740px] xl:h-[109px] flex justify-between">
                    <input
                      type="text"
                      className="w-[150px] h-[34px] sm:w-[200px] border-2 px-2 py-2 placeholder:text-[12px]"
                      placeholder="Instrucution"
                    />
                    <button
                      type="button"
                      className="w-[80px] h-[34px] text-white bg-[#E2A856] hover:bg-[#E2A856] focus:ring-4 focus:ring-[#E2A856] font-medium rounded text-[12px] focus:outline-none uppercase"
                    >
                      Submit
                    </button>
                  </div>
                  {/* 2 */}
                  <div className="w-[240px] h-[34px] sm:w-[290px] sm:h-[34px] xl:w-[740px] xl:h-[109px] flex justify-between">
                    <input
                      type="text"
                      className="w-[150px] h-[34px] sm:w-[200px] border-2 px-2 py-2 placeholder:text-[12px]"
                      placeholder="Coupon Code"
                    />
                    <button
                      type="button"
                      className="w-[80px] h-[34px] text-white bg-[#E2A856] hover:bg-[#E2A856] focus:ring-4 focus:ring-[#E2A856] font-medium rounded text-[12px] focus:outline-none uppercase"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                {/* collection total */}
                <div className="sm:mt-2 w-full sm:flex sm:justify-end">
                  <div className="w-[240px] h-[44px] sm:w-[314px] sm:h-[50px] text-[10px] sm:flex sm:flex-col sm:items-center sm:justify-end">
                    <div className="flex justify-between sm:w-[314px] sm:h-[18px]">
                      <p>Collection Subtotal:</p>
                      <p>$ 000.00</p>
                    </div>
                    <div className="flex justify-between text-red-400 sm:w-[314px] sm:h-[18px] xl:h-[24px]">
                      <p>Discount (Promo name) applied:</p>
                      <p>-$ 00.00</p>
                    </div>
                    <div className="hidden justify-between text-red-400 sm:w-[314px] sm:h-[18px] xl:h-[24px]">
                      <p>Discount (Promo name) applied:</p>
                      <p>Free freight</p>
                    </div>
                    <div className="mt-2 flex justify-between font-bold text-[14px] sm:w-[314px] sm:h-[18px] xl:h-[24px]">
                      <p>Collection Total:</p>
                      <p>$ 00.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* table 3 */}
          <div className="xl:w-[780px] w-[280px] sm:w-[640px] mx-auto mt-5">
            <div className="w-[280px] sm:w-[640px] xl:w-[780px] flex flex-col items-center justify-center border-2">
              {/* date picker */}
              <div className="w-[240px] h-[72px] sm:w-[600px] xl:w-[740px] flex flex-col items-center justify-between md:flex-row md:justify-start mt-5">
                <p className="text-[14px] w-[102px] h-[21px] font-bold text-nowrap">
                  Shipping Date:
                </p>
                {/* datepicker */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[240px] h-[41px] flex items-center justify-center">
                    <img src={calendar_month} alt="Calender" />
                    <p className="text-[14px] font-bold">15 January 2024</p>
                  </div>
                  <div className="h-[1px] bg-gray-400 w-[250px] sm:w-[160px]"></div>
                </div>
              </div>
              {/* table */}
              <table className="w-[240px] sm:w-[600px] xl:w-[740px] mt-5 text-[14px] text-left rtl:text-right text-gray-500 flex flex-col">
                <thead className="text-[12px] text-gray-500 sm:w-[600px] sm:h-[28px] xl:w-[740px] sm:items-center sm:justify-center">
                  <tr className="sm:border-b-2 w-[240px] h-[18px] sm:w-[600px] xl:w-[740px] sm:h-[28px] flex flex-row items-center justify-end sm:justify-normal sm:gap-[10px]">
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center me-[10px]"
                    >
                      <span className="">Image</span>
                    </th>
                    <th
                      scope="col"
                      className="w-[180px] xl:w-[200px] h-[18px] hidden sm:flex items-center justify-center px-4"
                    >
                      Product Details
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center"
                    >
                      Qty
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="w-[60px] xl:w-[80px] h-[18px] hidden sm:flex items-center justify-center"
                    >
                      Subtotal
                    </th>
                    <th
                      scope="col"
                      className="flex w-[62px] sm:w-[60px] xl:w-[80px] h-[18px] underline sm:text-center text-nowrap items-center justify-center"
                    >
                      Remove All
                    </th>
                  </tr>
                </thead>
                <tbody className="mt-5 border-gray-400">
                  <tr className="border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[70px] xl:w-[740px] xl:h-[90px] flex gap-4 mb-[11px] sm:items-start sm:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[60px] xl:w-[80px] sm:h-[60px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[60px] sm:h-[60px] xl:w-[80px] xl:h-[80px] "
                          alt="Product"
                        />
                      </span>
                      {/* + - buttton for mobile only*/}
                      <span className="h-[30px] mt-[10px] justify-center flex items-center sm:hidden">
                        <div className="flex w-[60px] h-[20px]">
                          <form className="max-w-xs mx-auto">
                            <label
                              htmlFor="quantity-input"
                              className="block text-[14px] font-medium text-gray-900"
                            ></label>
                            <div className="relative flex items-center max-w-[8rem]">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="quantity-input"
                                className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                placeholder="10"
                              />
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="quantity-input"
                                className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                      </span>
                    </div>
                    {/* mobile col 2 */}
                    <div className="w-[131px] h-[123px] sm:w-[420px] sm:h-[70px] flex">
                      <div className="flex flex-col sm:flex-row">
                        {/* col 2-1 */}
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className=" sm:w-[180px] sm:h-[60px] xl:w-[200px] xl:h-[65px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-[12px] text-gray-950">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <img
                                    src={DeleteIcon}
                                    className="w-[10px] h-[11.7px]"
                                  ></img>
                                </span>
                              </div>
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px]">
                                $9.15
                              </span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* + - buttton for desktop and tab only*/}
                          <span className="h-[30px] justify-center sm:flex hidden sm:ms-[20px]">
                            <div className="flex w-[60px] xl:w-[80px] h-[20px] items-start">
                              <form className="max-w-xs mx-auto">
                                <label
                                  htmlFor="quantity-input"
                                  className="block text-[14px] font-medium text-gray-900"
                                ></label>
                                <div className="relative flex items-center sm:items-start max-w-[8rem]">
                                  <button
                                    type="button"
                                    id="decrement-button"
                                    data-input-counter-decrement="quantity-input"
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5"
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
                                    className="border-y placeholder:text-center placeholder:text-black border-gray-400 h-5 w-6 sm:w-6 text-[12px]"
                                    placeholder="10"
                                  />
                                  <button
                                    type="button"
                                    id="increment-button"
                                    data-input-counter-increment="quantity-input"
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5"
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
                          </span>
                          {/* discount */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        {/* a
                      <img
                        src={DeleteIcon}
                        className="w-[10px] h-[11.7px]"
                      ></img> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
              {/* coupon code and instructor */}
              <div className=" my-3 w-[240px] h-[200px] sm:w-[600px] sm:h-[120px] sm:flex sm:flex-col sm:gap-6 xl:w-[740px] xl:h-[120px] bg-white">
                {/*input and buttons */}
                <div className="xl:ms-[140px] w-[240px] h-[88px] sm:w-[600px] sm:h-[34px] flex flex-col sm:flex-row justify-between xl:gap-5 mb-5 sm:mb-0">
                  {/* 1 */}
                  <div className="w-[240px] h-[34px] sm:w-[290px] sm:h-[34px] xl:w-[740px] xl:h-[109px] flex justify-between">
                    <input
                      type="text"
                      className="w-[150px] h-[34px] sm:w-[200px] border-2 px-2 py-2 placeholder:text-[12px]"
                      placeholder="Instrucution"
                    />
                    <button
                      type="button"
                      className="w-[80px] h-[34px] text-white bg-[#E2A856] hover:bg-[#E2A856] focus:ring-4 focus:ring-[#E2A856] font-medium rounded text-[12px] focus:outline-none uppercase"
                    >
                      Submit
                    </button>
                  </div>
                  {/* 2 */}
                  <div className="w-[240px] h-[34px] sm:w-[290px] sm:h-[34px] xl:w-[740px] xl:h-[109px] flex justify-between">
                    <input
                      type="text"
                      className="w-[150px] h-[34px] sm:w-[200px] border-2 px-2 py-2 placeholder:text-[12px]"
                      placeholder="Coupon Code"
                    />
                    <button
                      type="button"
                      className="w-[80px] h-[34px] text-white bg-[#E2A856] hover:bg-[#E2A856] focus:ring-4 focus:ring-[#E2A856] font-medium rounded text-[12px] focus:outline-none uppercase"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                {/* collection total */}
                <div className="sm:mt-2 w-full sm:flex sm:justify-end">
                  <div className="w-[240px] h-[44px] sm:w-[314px] sm:h-[50px] text-[10px] sm:flex sm:flex-col sm:items-center sm:justify-end">
                    <div className="flex justify-between sm:w-[314px] sm:h-[18px]">
                      <p>Collection Subtotal:</p>
                      <p>$ 000.00</p>
                    </div>
                    <div className="flex justify-between text-red-400 sm:w-[314px] sm:h-[18px] xl:h-[24px]">
                      <p>Discount (Promo name) applied:</p>
                      <p>-$ 00.00</p>
                    </div>
                    <div className="flex justify-between text-red-400 sm:w-[314px] sm:h-[18px] xl:h-[24px]">
                      <p>Discount (Promo name) applied:</p>
                      <p>Free freight</p>
                    </div>
                    <div className="mt-2 flex justify-between font-bold text-[14px] sm:w-[314px] sm:h-[18px] xl:h-[24px]">
                      <p>Collection Total:</p>
                      <p>$ 00.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* order summary */}
        <div
          className={`w-[320px] sm:w-[740px] xl:w-[340px] ${
            salesRep
              ? "h-[522px] sm:h-[504px] xl:h-[576px]"
              : "h-[380px] sm:h-[362px] xl:h-[434px]"
          } mt-10 xl:mt-0`}
        >
          <div
            className={`mx-auto w-[280px] sm:w-[500px] xl:w-[340px] ${
              salesRep
                ? "h-[522px] sm:h-[504px] xl:h-[532px]"
                : "h-[380px] sm:h-[362px] xl:h-[400px]"
            } xl:mt-[54px] border-2 mb-20 flex flex-col`}
          >
            <div
              className={`flex flex-col items-center justify-center gap-[40px] my-[20px] sm:my-0 xl:my-0 xl:w-[340px] ${
                salesRep ? "xl:h-[522px]" : "xl:h-[380px]"
              } `}
            >
              {/* row1 */}
              <div className="sm:mt-5 w-[240px] h-[57px] sm:w-[460px] xl:w-[300px] xl:h-[57px] flex items-center justify-center sm:justify-start font-bold text-[18px] border-b">
                Order Summary
              </div>
              {/* row2 */}
              <div className="w-[240px] h-[154px] sm:w-[460px] sm:h-[136px] xl:w-[300px] xl:h-[154px]">
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
                <div className="w-[240px] sm:w-[460px] sm:h-[36px] xl:w-[300px] h-[54px] mt-5 text-gray-400 text-[12px]">
                  <ul className="ms-5">
                    <li className="list-disc">
                      prices and product availability are subject to change.
                      Total does not include applicable taxes or delivery. All
                    </li>
                  </ul>
                </div>
              </div>

              {salesRep && (
                <div className="w-[240px] sm:w-[460px] xl:w-[240px] h-[102px] flex flex-col justify-center gap-[20px]">
                  {/* heading */}
                  <div className="w-[230px] h-[24px] text-[16px] font-bold">
                    Optional Order Processing :
                  </div>
                  {/* checkbox and tooltips */}
                  <div className="w-[213px] h-[58px] flex flex-col justify-center gap-[10px]">
                    {/* checkbox and tooltip 1*/}
                    <div className="w-[200px] h-[24px] flex flex-col justify-between">
                      <div className="flex items-center justify-self-center gap-2">
                        <input
                          id="default-checkbox"
                          type="radio"
                          value=""
                          className="w-4 h-4 rounded-full text-black bg-gray-100 border-gray-300 border-r-8 focus:ring-black-500 focus:ring-2"
                        />
                        <label
                          for="default-checkbox"
                          className="text-sm font-medium text-gray-900 -ms-1 text-nowrap"
                        >
                          Combine shipment
                        </label>
                        {/* tooltip1 */}
                        <div
                          className="cursor-pointer flex flex-col relative"
                          onMouseEnter={() => setToolTip(true)}
                          onMouseLeave={() => setToolTip(false)}
                        >
                          <img
                            src={help}
                            alt="Help"
                            className="w-[20px] h-[20px]"
                          />
                          {tooltip && (
                            <div className="z-1 opacity-100 right-0 sm:left-0 sm:bottom-6 bottom-5 absolute mt-5 w-[171px] h-[140px] flex items-center justify-center text-black bg-white shadow-xl border ">
                              <p className="w-[155px] h-[120px] text-[10px]">
                                By selecting “Combine Shipping”, all the items
                                in the cart will ship together on one sales
                                order. The shipping date will be set to the
                                earliest availability date based on all the
                                items ordered. You can edit the date in the cart
                                after confirming the changes
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* checkbox and tooltip 2*/}
                    <div className="w-[200px] h-[24px] flex flex-col justify-between">
                      <div className="flex items-center justify-self-center gap-2">
                        <input
                          id="default-checkbox"
                          type="radio"
                          value=""
                          className="w-4 h-4 rounded-full text-black bg-gray-100 border-gray-300 border-r-8 focus:ring-black-500 focus:ring-2"
                        />
                        <label
                          for="default-checkbox"
                          className="text-sm font-medium text-gray-900 -ms-1 text-nowrap"
                        >
                          Ship order complete
                        </label>
                        {/* tooltip1 */}
                        <div
                          className="cursor-pointer flex flex-col relative"
                          onMouseEnter={() => setToolTip2(true)}
                          onMouseLeave={() => setToolTip2(false)}
                        >
                          <img
                            src={help}
                            alt="Help"
                            className="w-[20px] h-[20px]"
                          />
                          {tooltip2 && (
                            <div className="z-1 opacity-100 right-0 sm:left-0 sm:bottom-6 bottom-5 absolute mt-5 w-[171px] h-[140px] flex items-center justify-center text-black bg-white shadow-xl border">
                              <p className="w-[155px] h-[105px] text-[10px]">
                                By selecting “Ship Complete”, the order will
                                ship once all the items on the sales order are
                                available. There will be no back orders on the
                                order. If an item is unavailable, the customer
                                will be notified.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* row3 */}
              <div className="w-[240px] h-[49px] sm:w-[300px]">
                <Link to={"/checkout"}>
                  <button
                    type="button"
                    className="w-[240px] sm:w-[300px] h-[49px] text-white bg-[#E2A856] focus:ring-4 focus:ring-[#E2A856] font-medium rounded text-base focus:outline-none uppercase hover:text-[#E2A856] hover:border-2 hover:border-[#E2A856] hover:bg-white"
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown and Dropup button logic start */}

      {/* <div className="relative">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
          onClick={handleDropdownToggle}
        >
          Click me
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.65.36l3.5 5.25a.75.75 0 11-1.3.78L10 5.88 7.05 9.39a.75.75 0 11-1.3-.78l3.5-5.25A.75.75 0 0110 3z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 17a.75.75 0 01-.65-.36l-3.5-5.25a.75.75 0 111.3-.78L10 14.12l2.95-3.51a.75.75 0 111.3.78l-3.5 5.25A.75.75 0 0110 17z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        {isOpen && (
          <div className="absolute bg-white rounded mt-2 py-2 w-40">
            <ul>
              <li className="hover:bg-gray-200 cursor-pointer">Option 1</li>
              <li className="hover:bg-gray-200 cursor-pointer">Option 2</li>
              <li className="hover:bg-gray-200 cursor-pointer">Option 3</li>
              <li className="hover:bg-gray-200 cursor-pointer">Option 4</li>
            </ul>
            <button
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-2"
              onClick={handleDropUp}
            >
              Drop Up
            </button>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default CartDetail;
