import { Link } from "react-router-dom";
import CartProduct from "../../assets/ShoppingCart/CartProduct.svg";
import calendar_month from "../../assets/ShoppingCart/calendar_month.svg";

const MyOrders = () => {
  return (
    <div
      className="mb-20 max-w-[1320px] min-w-[320px] lg:w-[1160px] xl:w-[1320px] flex flex-col gap-10 lg:gap-0 lg:flex-col lg:mx-auto items-center justify-center"
      style={{ fontFamily: "Open Sans" }}
    >
      {/* shoppingcart heading desktop only*/}
      <div className="hidden w-[1024px] lg:flex lg:w-[1160px] xl:w-[1320px] lg:h-[85px] items-center justify-center lg:mt-[100px] lg:mb-[60px]">
        <div>
          <p className="lg:text-[32px] font-bold mx-auto text-center">
            Thank You!
          </p>
          <p className="text-[10] text-gray-400 mx-auto">
            Your order has been placed and you will receive a confirmation email
            shortly.
          </p>
        </div>
      </div>

      {/* orderdetail and summary for desktop */}
      {/* <div className="flex flex-col lg:flex-row lg:gap-10"> */}

      <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-20">
        {/* orders details */}
        <div className="mx-auto w-[320px] sm:w-[685px] lg:w-[640px] mt-20 lg:mt-0 sm:rounded-lg">
          {/* top section */}
          <div className="flex flex-col items-center justify-center">
            {/* shoppingcart heading mobile */}
            <div className="w-[320px] sm:w-[685px] text-black h-[100px] sm:h-[85px] flex lg:hidden flex-col justify-center">
              <div className="flex flex-col gap-5">
                <p className="text-[28px] sm:text-[32px] w-[280px] h-[38px] sm:h-[44px] font-bold mx-auto text-center">
                  Thank You!
                </p>
                <p className="text-[10] h-[42px] sm:h-[21px] tracking-tight mx-auto text-center">
                  Your order has been placed and you will receive a confirmation
                  email shortly.
                </p>
              </div>
            </div>
            {/* top button */}
            <div className="mt-[60px] lg:mt-0 min-w-[280px] w-[280px] sm:w-[640px] lg:w-[1160px] lg:mx-auto">
              <div className="h-[71px] sm:h-[34px] min-w-[280px] w-[280px] sm:w-[640px] lg:w-[1160px] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-[10px] sm:gap-0">
                {/* text */}
                <p
                  type="button"
                  className="w-[195px] h-[27px] uppercase font-bold text-lg text-nowrap"
                >
                  your order details
                </p>
                {/* button */}
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
          </div>
          {/* table 1 */}
          <div className="w-[280px] sm:w-[640px] lg:w-[685px] mx-auto mt-5">
            <div className="w-[280px] sm:w-[640px] lg:w-[685px] flex flex-col items-center justify-center border-2">
              {/* date picker */}
              <div className="w-[240px] h-[80px] sm:h-[72px] sm:w-[600px] lg:w-[645px] md:flex-row md:justify-start mt-10 sm:mt-5">
                <div className="w-[240px] h-[72px] sm:w-[600px] lg:w-[645px] flex flex-col">
                  {/* row 1 for all */}
                  <div className="w-[240px] h-[44px] sm:w-[600px] lg:w-[645px] flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                    {/* shipping date */}
                    <div className="mt-2 w-[252px] h-[44px] flex flex-col items-center justify-center gap-3 sm:gap-0 sm:flex-row">
                      <p className="text-sm w-[102px] h-[21px] font-bold text-nowrap">
                        Shipping Date:
                      </p>
                      <div className="w-[240px] h-[41px] flex items-center justify-center">
                        <img
                          src={calendar_month}
                          alt="Calender"
                          className="flex sm:hidden"
                        />
                        <p className="text-sm font-bold">15 January 2024</p>
                      </div>
                    </div>
                    {/* wb order no */}
                    <div className="mt-5 sm:mt-0 text-[10px] text-gray-800 flex items-center justify-center sm:justify-between sm:w-[154px] sm:h-[15px] ">
                      <div className="w-[96px] h-[15px]">
                        <p>Web Order Number:</p>
                      </div>
                      <div className="w-[53px] h-[15px]">
                        <p>CCHRP0-18</p>
                      </div>
                    </div>
                  </div>
                  {/* horizontal line */}
                  <div className="mt-4 h-[1px] bg-gray-400 w-[250px] sm:w-[160px] flex sm:hidden"></div>
                  {/* row 2 for all */}
                  <div className="mt-1 flex w-[240px] h-[35px] sm:h-[15px] text-[10px] text-gray-700 gap-2 items-center justify-center">
                    <p className="w-[54px] h-[15px]">Instruction: </p>
                    <p className="w-[132px] sm:w-[586px] h-[15px]">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
              {/* table */}
              <table className="w-[240px] sm:w-[600px] lg:w-[645px] text-sm text-left rtl:text-right text-gray-500 flex flex-col">
                <thead className="text-xs text-gray-500 sm:w-[600px] lg:w-[645px] sm:h-[28px] sm:items-center sm:justify-center">
                  <tr className="sm:border-b-2 w-[240px] h-[18px] sm:w-[600px] lg:w-[645px] sm:h-[28px] flex flex-row items-center justify-end sm:justify-normal sm:gap-[10px]">
                    <th
                      scope="col"
                      className="sm:w-[55px] h-[18px] hidden sm:flex items-center justify-center me-[10px]"
                    >
                      <span className="">Image</span>
                    </th>
                    <th
                      scope="col"
                      className="sm:w-[180px] lg:w-[200px] h-[18px] hidden sm:flex items-center justify-center px-4"
                    >
                      Product Details
                    </th>
                    <th
                      scope="col"
                      className="sm:w-[80px] lg:w-[90px] h-[18px] hidden sm:flex items-center sm:ms-5 lg:ms-0"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="sm:w-[80px] lg:w-[90px] h-[18px] hidden sm:flex items-center lg:me-0"
                    >
                      Qty
                    </th>
                    <th
                      scope="col"
                      className="sm:w-[80px] lg:w-[90px] h-[18px] hidden sm:flex items-center"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="sm:w-[80px] lg:w-[90px] h-[18px] hidden sm:flex items-center justify-center"
                    >
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody className=" border-gray-400">
                  {/* tr-1 */}
                  <tr className="mt-3 border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[75px] lg:w-[645px] flex gap-4 mb-[1px] sm:items-start sm:gap-[25px] lg:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[55px] lg:w-[55px] sm:h-[55px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[55px] sm:h-[55px] "
                          alt="Product"
                        />
                      </span>
                      {/* Quantity for mobile only*/}
                      <span className="w-[94px] h-[15px] mt-[15px] flex items-center gap-1 sm:hidden text-gray-500 text-[10px]">
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
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[65px] lg:w-[180x] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className="-mt-1 sm:w-[180px] sm:h-[65px] lg:w-[180px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-xs text-gray-950">
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
                          <span className="text-[10px] sm:w-[60px] lg:w-[90px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="lg:flex lg:flex-col">
                              <span className="text-black text-xs">$9.15</span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* Quanitity for desktop and tab only*/}
                          <span className="sm:mx-[25px] lg:mx-0 h-[30px] justify-center sm:flex hidden">
                            <div className="flex w-[60px] sm:w-[60px] lg:w-[90px] h-[20px] sm:h-[30px] items-start sm:justify-center text-[10px]">
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
                          <span className="text-[10px] sm:w-[60px] lg:w-[90px] sm:h-[18px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="sm:ms-5 lg:ms-0 text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] lg:w-[90px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  {/* tr-2 */}
                  <tr className="mt-3 border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[75px] lg:w-[645px] flex gap-4 mb-[1px] sm:items-start sm:gap-[25px] lg:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[55px] lg:w-[55px] sm:h-[55px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[55px] sm:h-[55px] "
                          alt="Product"
                        />
                      </span>
                      {/* Quantity for mobile only*/}
                      <span className="w-[94px] h-[15px] mt-[15px] flex items-center gap-1 sm:hidden text-gray-500 text-[10px]">
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
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[65px] lg:w-[180x] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className="-mt-1 sm:w-[180px] sm:h-[65px] lg:w-[180px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-xs text-gray-950">
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
                          <span className="text-[10px] sm:w-[60px] lg:w-[90px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="lg:flex lg:flex-col">
                              <span className="text-black text-xs">$9.15</span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* Quanitity for desktop and tab only*/}
                          <span className="sm:mx-[25px] lg:mx-0 h-[30px] justify-center sm:flex hidden">
                            <div className="flex w-[60px] sm:w-[60px] lg:w-[90px] h-[20px] sm:h-[30px] items-start sm:justify-center text-[10px]">
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
                          <span className="text-[10px] sm:w-[60px] lg:w-[90px] sm:h-[18px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="sm:ms-5 lg:ms-0 text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] lg:w-[90px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  {/* tr-3 */}
                  <tr className="mt-3 border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[75px] lg:w-[645px] flex gap-4 mb-[1px] sm:items-start sm:gap-[25px] lg:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[55px] lg:w-[55px] sm:h-[55px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[55px] sm:h-[55px] "
                          alt="Product"
                        />
                      </span>
                      {/* Quantity for mobile only*/}
                      <span className="w-[94px] h-[15px] mt-[15px] flex items-center gap-1 sm:hidden text-gray-500 text-[10px]">
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
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[65px] lg:w-[180x] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className="-mt-1 sm:w-[180px] sm:h-[65px] lg:w-[180px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-xs text-gray-950">
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
                          <span className="text-[10px] sm:w-[60px] lg:w-[90px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="lg:flex lg:flex-col">
                              <span className="text-black text-xs">$9.15</span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* Quanitity for desktop and tab only*/}
                          <span className="sm:mx-[25px] lg:mx-0 h-[30px] justify-center sm:flex hidden">
                            <div className="flex w-[60px] sm:w-[60px] lg:w-[90px] h-[20px] sm:h-[30px] items-start sm:justify-center text-[10px]">
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
                          <span className="text-[10px] sm:w-[60px] lg:w-[90px] sm:h-[18px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="sm:ms-5 lg:ms-0 text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] lg:w-[90px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  {/* tr-4 */}
                  <tr className="mt-3 border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[75px] lg:w-[645px] flex gap-4 mb-[1px] sm:items-start sm:gap-[25px] lg:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[55px] lg:w-[55px] sm:h-[55px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[55px] sm:h-[55px] "
                          alt="Product"
                        />
                      </span>
                      {/* Quantity for mobile only*/}
                      <span className="w-[94px] h-[15px] mt-[15px] flex items-center gap-1 sm:hidden text-gray-500 text-[10px]">
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
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[65px] lg:w-[180x] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className="-mt-1 sm:w-[180px] sm:h-[65px] lg:w-[180px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-xs text-gray-950">
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
                          <span className="text-[10px] sm:w-[60px] lg:w-[90px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="lg:flex lg:flex-col">
                              <span className="text-black text-xs">$9.15</span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* Quanitity for desktop and tab only*/}
                          <span className="sm:mx-[25px] lg:mx-0 h-[30px] justify-center sm:flex hidden">
                            <div className="flex w-[60px] sm:w-[60px] lg:w-[90px] h-[20px] sm:h-[30px] items-start sm:justify-center text-[10px]">
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
                          <span className="text-[10px] sm:w-[60px] lg:w-[90px] sm:h-[18px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="sm:ms-5 lg:ms-0 text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] lg:w-[90px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
                            <span className="sm:hidden">Subtotal: </span>
                            <span className="text-black font-bold">$91.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  {/* tr-5 */}
                  <tr className="mt-3 border-b bg-white w-[240px] h-[134px] sm:w-[600px] sm:h-[75px] lg:w-[645px] flex gap-4 mb-[1px] sm:items-start sm:gap-[25px] lg:gap-[10px]">
                    {/* mobile col 1 */}
                    {/* image for all devices*/}
                    <div className="flex flex-col sm:flex-row w-[94px] h-[124px] sm:w-[55px] lg:w-[55px] sm:h-[55px]">
                      <span className="">
                        <img
                          src={CartProduct}
                          className="w-[94px] h-[94px] sm:w-[55px] sm:h-[55px] "
                          alt="Product"
                        />
                      </span>
                      {/* Quantity for mobile only*/}
                      <span className="w-[94px] h-[15px] mt-[15px] flex items-center gap-1 sm:hidden text-gray-500 text-[10px]">
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
                        <span className="w-[131px] h-[75px] sm:w-[180px] sm:h-[65px] lg:w-[180x] text-[10px] text-gray-500">
                          {/* product detail for all and delete button for mobile only */}
                          <div className="-mt-1 sm:w-[180px] sm:h-[65px] lg:w-[180px] sm:flex sm:flex-col sm:items-center sm:justify-center">
                            <div className="flex items-center justify-between">
                              <p className="w-[131px] h-[18px] text-xs text-gray-950">
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
                          <span className="text-[10px] sm:w-[60px] lg:w-[90px] sm:h-[30px] sm:flex-col sm:items-center sm:justify-center sm:text-center">
                            <span className="sm:hidden">Price:</span>
                            <div className="lg:flex lg:flex-col">
                              <span className="text-black text-xs">$9.15</span>{" "}
                              <span>/Meter(s)</span>
                            </div>
                          </span>
                          {/* Quanitity for desktop and tab only*/}
                          <span className="sm:mx-[25px] lg:mx-0 h-[30px] justify-center sm:flex hidden">
                            <div className="flex w-[60px] sm:w-[60px] lg:w-[90px] h-[20px] sm:h-[30px] items-start sm:justify-center text-[10px]">
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
                          <span className="text-[10px] sm:w-[60px] lg:w-[90px] sm:h-[18px] sm:flex sm:items-center sm:justify-center sm:mx-[10px]">
                            <span className="sm:hidden">Discount:</span>
                            <span className="text-black">N/A</span>
                          </span>

                          {/* subtotal */}
                          <span className="sm:ms-5 lg:ms-0 text-[10px] mt-[10px] sm:mt-0 sm:w-[60px] lg:w-[90px] sm:h-[18px] sm:flex sm:justify-center sm:mx-[10px] sm:me-5 sm:pe-3">
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
              <div className="my-3 w-[240px] h-[74px] sm:w-[600px] sm:h-[86px] lg:w-[645px] lg:h-[86px] bg-white">
                {/* collection total */}
                <div className="w-[240px] h-[44px] sm:w-[600px] lg:w-[645px] sm:h-[50px] text-[10px] sm:flex sm:flex-col sm:items-end">
                  <div className="flex justify-between sm:w-[314px] sm:h-[18px]">
                    <p>Collection Subtotal:</p>
                    <p>$ 000.00</p>
                  </div>
                  {/* <div className="flex justify-between text-red-400 sm:w-[314px] sm:h-[18px]">
                    <p>Discount (Promo name) applied:</p>
                    <p>-$ 00.00</p>
                  </div>
                  <div className="flex justify-between text-red-400 sm:w-[314px] sm:h-[18px]">
                    <p>Discount (Promo name) applied:</p>
                    <p>-$ 00.00</p>
                  </div> */}
                  <div className="mt-2 flex justify-between font-bold text-sm sm:w-[314px] sm:h-[24px]">
                    <p>Collection Total:</p>
                    <p>$ 00.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* order summary and shipping details */}
        <div className="flex flex-col gap-10">
          {/* order summary */}
          <div className="w-[320px] h-[380px] sm:w-[740px] sm:h-[362px] xl:w-[435px] xl:h-[283px] mt-10 lg:mt-0">
            <div className="mx-auto w-[280px] h-[380px] sm:w-[500px] sm:h-[362px] lg:w-[435px] lg:h-[283px] lg:mt-[54px] lg:mb-[89px] border-2 mb-20 flex flex-col">
              <div className="flex flex-col items-center justify-center gap-10 my-5 sm:my-0 lg:w-[435px] lg:h-[283px]">
                {/* row1 */}
                <div className="sm:mt-5 lg:mt-0 w-[240px] h-[57px] sm:w-[460px] lg:w-[395px] lg:h-[57px] flex items-center justify-center sm:justify-start uppercase font-bold text-[18px] border-b">
                  Order Summary
                </div>
                {/* row2 */}
                <div className="w-[240px] h-[154px] sm:w-[460px] sm:h-[136px] lg:w-[395px] lg:h-[154px]">
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
                  <div className="w-[240px] sm:w-[460px] sm:h-[36px] lg:w-[395px] h-[36px] mt-5 text-gray-400 text-[12px]">
                    <ul className="ms-5">
                      <li className="list-disc">
                        prices and product availability are subject to change.
                        Total does not include applicable taxes or delivery. All
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shipping details */}
          <div className="w-[320px]  sm:w-[740px] xl:w-[435px] mt-10 lg:mt-0">
            <div className="mx-auto w-[280px] sm:w-[500px]  lg:w-[435px]  lg:mt-[54px] lg:mb-[89px] border-2 mb-20 flex flex-col">
              <div className="flex flex-col items-center justify-center gap-5 my-5 sm:my-0 lg:w-[435px]">
                {/* row1 name only*/}
                <div className="sm:mt-5 lg:mt-0 w-[240px] h-[57px] sm:w-[460px] lg:w-[395px] lg:h-[57px] flex items-center justify-center sm:justify-start uppercase font-bold text-[18px] border-b">
                  SHipping Details
                </div>
                {/* row2 */}
                <div className="w-[240px] h-[66px] sm:w-[460px] sm:h-[51px] lg:w-[395px] lg:h-[51px] flex items-center text-base border-b gap-1">
                  <p className="w-[65px] h-[36px] sm:w-[125px] font-bold sm:h-[21px] text-xs">
                    Order Date:
                  </p>
                  <p className="w-[90px] h-[18px] sm:w-[105px] sm:h-[21px] text-xs">
                    15 January 2024
                  </p>
                </div>
                {/* row3 */}
                <div className="w-[240px] h-[66px] sm:w-[460px] sm:h-[72px] lg:w-[395px] lg:h-[72px] flex items-center text-base border-b gap-1">
                  <p className="w-[65px] h-[36px] sm:w-[125px] sm:h-[42px] text-xs font-bold">
                    Web Order Number:
                  </p>
                  <p className="w-[170px] h-[36px] sm:w-[236px] sm:h-[21px] text-xs">
                    CCHRP0-18, CCHRP0-19, CCHRP0-20
                  </p>
                </div>
                {/* row4 */}
                <div className="w-[240px] h-[66px] sm:w-[460px] sm:h-[72px] lg:w-[395px] lg:h-[72px] flex items-center text-base border-b gap-1">
                  <p className="w-[65px] h-[36px] sm:w-[125px] sm:h-[42px] text-xs font-bold">
                    Sales Order Number:
                  </p>
                  <p className="w-[170px] h-[36px] sm:w-[236px] sm:h-[21px] text-xs"></p>
                </div>
                {/* row5 */}
                <div className="w-[240px] h-[66px] sm:w-[460px] sm:h-[51px] lg:w-[395px] lg:h-[51px] flex items-center text-base border-b gap-1">
                  <p className="w-[65px] h-[36px] sm:w-[125px] font-bold sm:h-[21px] text-xs">
                    Order Status:{" "}
                  </p>
                  <p className="w-[90px] h-[18px] sm:w-[105px] sm:h-[21px] text-xs">
                    Processing{" "}
                  </p>
                </div>

                {/* row6 */}
                <div className="w-[240px] h-[66px] sm:w-[460px] sm:h-[51px] lg:w-[395px] lg:h-[51px] flex items-center text-base border-b gap-1">
                  <p className="w-[65px] h-[36px] sm:w-[125px] font-bold sm:h-[21px] text-xs">
                    Bill To:{" "}
                  </p>
                  <p className="w-[90px] h-[18px] sm:w-[105px] sm:h-[21px] text-xs">
                    Processing{" "}
                  </p>
                </div>
                {/* row7 */}
                <div className="w-[240px] h-[66px] sm:w-[460px] sm:h-[51px] lg:w-[395px] lg:h-[51px] flex items-center text-base border-b gap-1">
                  <p className="w-[65px] h-[36px] sm:w-[125px] font-bold sm:h-[21px] text-xs">
                    Ship To:{" "}
                  </p>
                  <p className="w-[90px] h-[18px] sm:w-[105px] sm:h-[21px] text-xs">
                    Processing{" "}
                  </p>
                </div>
              </div>
              {/* row last */}
              <div>
                <ul className="ms-5 w-[240px] h-[54px] sm:w-[460px] sm:h-[26px] lg:w-[395px] lg:h-[36px] text-gray-500 text-xs">
                  <li className="list-disc">
                    NOTE: If the address we have on file is incorrect, please
                    contact us at 1-800-268-1466
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
