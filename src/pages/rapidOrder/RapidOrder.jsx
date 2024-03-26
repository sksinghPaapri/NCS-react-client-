import search from "../../assets/HeaderLogo/search.svg";
import { Link } from "react-router-dom";
import CartProduct from "../../assets/ShoppingCart/CartProduct.svg";
import DeleteIcon from "../../assets/ShoppingCart/DeleteIcon.svg";
import "./rapidOrder.css";

const RapidOrder = () => {
  const SKUTable = [
    { name: "SKU1" },
    { name: "SKU2" },
    { name: "SKU3" },
    { name: "SKU4" },
    { name: "SKU5" },
    { name: "SKU6" },
    { name: "SKU7" },
    { name: "SKU8" },
    { name: "SKU9" },
    { name: "SKU10" },
  ];

  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex items-center justify-center"
    >
      <div className="my-[80px] sm:my-[100px] w-[320px] sm:w-[744px] xl:w-[1280px] 2xl:w-[1728px] flex flex-col items-center justify-center gap-[60px]">
        {/* top heading */}
        <div className="w-[320px] h-[38px] sm:w-[744px] sm:h-[44px] xl:w-[1160px] 2xl:w-[1320px] flex items-center justify-center">
          <h1 className="font-bold text-[28px] sm:text-[32px]">Rapid Order</h1>
        </div>
        {/* search table and product table */}
        <div className=" w-[320px] sm:w-[744px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col items-center justify-center xl:flex-row gap-[60px] xl:gap-[40px] xl:items-start">
          {/* search table */}
          <div className="w-[280px] h-[722px] sm:w-[640px] sm:h-[407px] xl:w-[340px] xl:h-[728px] 2xl:w-[500px] flex flex-col items-center justify-center gap-[20px]">
            {/* heading */}
            <div className="w-[280px] h-[68px] sm:w-[640px] sm:h-[53px] xl:w-[340px] xl:h-[74px] 2xl:w-[500px] flex flex-col gap-[5px]  text-center sm:text-start">
              <p className="w-[280px] h-[27px] sm:w-[640px] xl:w-[340px] 2xl:w-[500px] font-bold text-[18px] text-black">
                Please enter the SKUs:
              </p>
              <p className="w-[280px] h-[36px] sm:w-[640px] sm:h-[21px] xl:w-[340px] xl:h-[42px] 2xl:w-[500px] text-[12px] xl:text-[14px] text-[#6B6B66]">
                If SKU belongs to more than one collection, please select the
                appropriate collection
              </p>
            </div>

            {/* search table */}
            <div className="w-[280px] h-[634px] sm:w-[640px] sm:h-[334px] xl:w-[340px] xl:h-[634px] 2xl:w-[500px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 items-center justify-center gap-[20px]">
              {SKUTable?.map((item, index) => (
                <div
                  key={index}
                  className="col-span-1 flex items-center justify-between"
                >
                  {/* name */}
                  <div className="w-[50px] h-[17px] text-[14px] text-[#9D9C99]">
                    {item?.name}
                  </div>
                  {/* input field */}
                  <div className="w-[225px] h-[40px] sm:w-[255px] xl:w-[280px] 2xl:w-[440px]">
                    <label
                      htmlFor="default-search"
                      className="font-medium text-[#9D9C99] sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none">
                        <img
                          src={search}
                          alt="search"
                          className="z-10 cursor-pointer"
                        />
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="w-[225px] h-[40px] sm:w-[255px] xl:w-[280px] 2xl:w-[440px] block px-2 placeholder:text-[14px] text-gray-900 border border-gray-300 bg-white placeholder:text-[#9D9C99] py-2"
                        placeholder="Enter SKU"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* button */}
              <div className="w-[280px] h-[34px] sm:w-[640px] xl:w-[340px] 2xl:w-[500px] flex justify-end">
                <button className="text-white bg-[#E2A856] rounded text-[12px] uppercase w-[101px] h-[34px] text-center hover:bg-black">
                  ADD TO LIST
                </button>
              </div>
            </div>
          </div>
          {/* product table */}
          <div className="w-[280px] sm:w-[640px] xl:w-[780px] flex flex-col justify-center items-center gap-[20px]">
            {/* table */}
            <div className="w-[280px] sm:w-[640px] xl:w-[780px] flex items-center justify-center gap-[20px] border border-gray-300">
              <table className="w-[240px] sm:w-[600px] xl:w-[740px] mt-5 text-[14px] text-left rtl:text-right text-gray-500 flex flex-col">
                <thead className="text-[12px] text-[#6B6B66] sm:w-[600px] sm:h-[28px] xl:w-[740px] sm:items-center sm:justify-center">
                  <tr className="sm:border-b-2 w-[240px] h-[18px] sm:w-[600px] xl:w-[740px] sm:h-[28px] flex flex-row items-center justify-end sm:justify-normal sm:gap-[10px] text-[#6B6B66] text-[12px]">
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
                      className="flex w-[62px] sm:w-[60px] xl:w-[80px] h-[18px] underline sm:text-center text-nowrap items-center justify-center text-[#6B6B66]"
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
                                className="bg-white border border-gray-400 rounded-s p-1 h-5 hover:bg-black"
                              >
                                <svg
                                  className="w-2 h-2 text-gray-900 hover:text-white"
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
                                className="bg-white border border-gray-400 rounded-e p-1 h-5 hover:bg-black"
                              >
                                <svg
                                  className="w-2 h-2 text-gray-900 hover:text-white"
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
                              <p className="w-[131px] h-[18px] text-[12px] text-black">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-[13px] h-[13px] text-gray-500 hover:text-black"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col leading-[14px] text-[#6B6B66] text-[10px]">
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
                        <div className="mb-[10px] sm:mb-0 flex flex-col sm:flex-row leading-[14px] sm:leading-4 text-gray-500">
                          {/* price */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] flex flex-row sm:flex-col sm:items-center sm:justify-center sm:text-center text-[#6B6B66]">
                            <span className="sm:hidden">Price: </span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px] ms-1 sm:ms-0">
                                $9.15
                              </span>
                              <span className="text-[10px] sm:text-[8px] text-[#6B6B66]">
                                /Meter(s)
                              </span>
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
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5 hover:bg-black"
                                  >
                                    <svg
                                      className="w-2 h-2 text-black hover:text-white"
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
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5 hover:bg-black"
                                  >
                                    <svg
                                      className="w-2 h-2 text-black hover:text-white"
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px] text-[#6B6B66]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black ms-1 sm:ms-0">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3 text-[#6B6B66]">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold ms-1 sm:ms-0">
                              $91.50
                            </span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px] text-gray-500 hover:text-black"
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
                                className="bg-white border border-gray-400 rounded-s p-1 h-5 hover:bg-black"
                              >
                                <svg
                                  className="w-2 h-2 text-gray-900 hover:text-white"
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
                                className="bg-white border border-gray-400 rounded-e p-1 h-5 hover:bg-black"
                              >
                                <svg
                                  className="w-2 h-2 text-gray-900 hover:text-white"
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
                              <p className="w-[131px] h-[18px] text-[12px] text-black">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-[13px] h-[13px] text-gray-500 hover:text-black"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col leading-[14px] text-[#6B6B66] text-[10px]">
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
                        <div className="mb-[10px] sm:mb-0 flex flex-col sm:flex-row leading-[14px] sm:leading-4 text-gray-500">
                          {/* price */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] flex flex-row sm:flex-col sm:items-center sm:justify-center sm:text-center text-[#6B6B66]">
                            <span className="sm:hidden">Price: </span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px] ms-1 sm:ms-0">
                                $9.15
                              </span>
                              <span className="text-[10px] sm:text-[8px] text-[#6B6B66]">
                                /Meter(s)
                              </span>
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
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5 hover:bg-black"
                                  >
                                    <svg
                                      className="w-2 h-2 text-black hover:text-white"
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
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5 hover:bg-black"
                                  >
                                    <svg
                                      className="w-2 h-2 text-black hover:text-white"
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px] text-[#6B6B66]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black ms-1 sm:ms-0">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3 text-[#6B6B66]">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold ms-1 sm:ms-0">
                              $91.50
                            </span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px] text-gray-500 hover:text-black"
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
                                className="bg-white border border-gray-400 rounded-s p-1 h-5 hover:bg-black"
                              >
                                <svg
                                  className="w-2 h-2 text-gray-900 hover:text-white"
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
                                className="bg-white border border-gray-400 rounded-e p-1 h-5 hover:bg-black"
                              >
                                <svg
                                  className="w-2 h-2 text-gray-900 hover:text-white"
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
                              <p className="w-[131px] h-[18px] text-[12px] text-black">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-[13px] h-[13px] text-gray-500 hover:text-black"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col leading-[14px] text-[#6B6B66] text-[10px]">
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
                        <div className="mb-[10px] sm:mb-0 flex flex-col sm:flex-row leading-[14px] sm:leading-4 text-gray-500">
                          {/* price */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] flex flex-row sm:flex-col sm:items-center sm:justify-center sm:text-center text-[#6B6B66]">
                            <span className="sm:hidden">Price: </span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px] ms-1 sm:ms-0">
                                $9.15
                              </span>
                              <span className="text-[10px] sm:text-[8px] text-[#6B6B66]">
                                /Meter(s)
                              </span>
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
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5 hover:bg-black"
                                  >
                                    <svg
                                      className="w-2 h-2 text-black hover:text-white"
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
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5 hover:bg-black"
                                  >
                                    <svg
                                      className="w-2 h-2 text-black hover:text-white"
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px] text-[#6B6B66]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black ms-1 sm:ms-0">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3 text-[#6B6B66]">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold ms-1 sm:ms-0">
                              $91.50
                            </span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px] text-gray-500 hover:text-black"
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
                                className="bg-white border border-gray-400 rounded-s p-1 h-5 hover:bg-black"
                              >
                                <svg
                                  className="w-2 h-2 text-gray-900 hover:text-white"
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
                                className="bg-white border border-gray-400 rounded-e p-1 h-5 hover:bg-black"
                              >
                                <svg
                                  className="w-2 h-2 text-gray-900 hover:text-white"
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
                              <p className="w-[131px] h-[18px] text-[12px] text-black">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-[13px] h-[13px] text-gray-500 hover:text-black"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col leading-[14px] text-[#6B6B66] text-[10px]">
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
                        <div className="mb-[10px] sm:mb-0 flex flex-col sm:flex-row leading-[14px] sm:leading-4 text-gray-500">
                          {/* price */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] flex flex-row sm:flex-col sm:items-center sm:justify-center sm:text-center text-[#6B6B66]">
                            <span className="sm:hidden">Price: </span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px] ms-1 sm:ms-0">
                                $9.15
                              </span>
                              <span className="text-[10px] sm:text-[8px] text-[#6B6B66]">
                                /Meter(s)
                              </span>
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
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5 hover:bg-black"
                                  >
                                    <svg
                                      className="w-2 h-2 text-black hover:text-white"
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
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5 hover:bg-black"
                                  >
                                    <svg
                                      className="w-2 h-2 text-black hover:text-white"
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px] text-[#6B6B66]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black ms-1 sm:ms-0">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3 text-[#6B6B66]">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold ms-1 sm:ms-0">
                              $91.50
                            </span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px] text-gray-500 hover:text-black"
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
                  {/* tr-1 */}
                  <tr className="bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[70px] xl:w-[740px] xl:h-[90px] flex gap-4 mb-[11px] sm:items-start sm:gap-[10px]">
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
                                className="bg-white border border-gray-400 rounded-s p-1 h-5 hover:bg-black"
                              >
                                <svg
                                  className="w-2 h-2 text-gray-900 hover:text-white"
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
                                className="bg-white border border-gray-400 rounded-e p-1 h-5 hover:bg-black"
                              >
                                <svg
                                  className="w-2 h-2 text-gray-900 hover:text-white"
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
                              <p className="w-[131px] h-[18px] text-[12px] text-black">
                                00000-00
                              </p>
                              <div className="flex sm:hidden">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-[13px] h-[13px] text-gray-500 hover:text-black"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col leading-[14px] text-[#6B6B66] text-[10px]">
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
                        <div className="mb-[10px] sm:mb-0 flex flex-col sm:flex-row leading-[14px] sm:leading-4 text-gray-500">
                          {/* price */}
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[30px] flex flex-row sm:flex-col sm:items-center sm:justify-center sm:text-center text-[#6B6B66]">
                            <span className="sm:hidden">Price: </span>
                            <div className="xl:flex xl:flex-col">
                              <span className="text-black text-[12px] ms-1 sm:ms-0">
                                $9.15
                              </span>
                              <span className="text-[10px] sm:text-[8px] text-[#6B6B66]">
                                /Meter(s)
                              </span>
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
                                    className="bg-white border border-gray-400 rounded-s p-1 h-5 hover:bg-black"
                                  >
                                    <svg
                                      className="w-2 h-2 text-black hover:text-white"
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
                                    className="bg-white border border-gray-400 rounded-e p-1 h-5 hover:bg-black"
                                  >
                                    <svg
                                      className="w-2 h-2 text-black hover:text-white"
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
                          <span className="text-[10px] sm:w-[60px] xl:w-[80px] sm:h-[20px] sm:flex sm:items-center sm:justify-center sm:mx-[10px] text-[#6B6B66]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black ms-1 sm:ms-0">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] xl:w-[80px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3 text-[#6B6B66]">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold ms-1 sm:ms-0">
                              $91.50
                            </span>
                          </span>
                        </div>
                      </div>
                      {/* desktop view delete icon */}
                      <div className=" w-[60px] xl:w-[80px] h-[18px] sm:w-[60px] sm:h-[18px] hidden sm:flex sm:items-center sm:justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[13px] h-[13px] text-gray-500 hover:text-black"
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
            </div>
            {/* button */}
            <div className="w-[280px] h-[34px] sm:w-[640px] xl:w-[780px] flex justify-end">
              <button className="text-white bg-[#E2A856] rounded text-[12px] uppercase w-[101px] h-[34px] text-center hover:bg-black">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RapidOrder;
