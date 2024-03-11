import { Link } from "react-router-dom";

const RetailerRegistration = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="my-[80px] sm:my-[100px] flex flex-col items-center justify-center"
    >
      <div className="w-[280px] h-[1575px] sm:w-[624px] sm:h-[943px] xl:w-[1160x] 2xl:w-[1608px] 2xl:h-[983px] flex flex-col items-center justify-between ">
        {/* top heading */}
        <div className="w-[280px] h-[388px] sm:w-[624px] sm:h-[198px] xl:w-[1160x] 2xl:w-[1608px] flex flex-col items-center justify-between">
          <div className="h-[76px] sm:h-[44px]">
            <h2 className="text-center text-[28px] sm:text-[32px] font-bold text-gray-900">
              Retailer Registration
            </h2>
          </div>
          <div className="h-[282px] sm:h-[124px] flex flex-col items-center justify-between">
            <div className="h-[90px] sm:h-[36px] flex flex-col items-end justify-center">
              <p className="text-center text-xs text-gray-600">
                Please Note: Registration is available only for existing
                Northcott customers in the USA and Canada.
              </p>
              <p className="text-center text-xs text-gray-600">
                You will need your Northcott Customer # located on any Northcott
                invoice.
              </p>
            </div>
            <div className="h-[172px] sm:h-[68px] flex-col items-center justify-center gap-[10px]">
              <div className="h-[36px] sm:h-[18px]">
                <p className="text-center text-xs text-gray-600 whitespace-normal sm:whitespace-nowrap">
                  If you are not a customer yet or need support, please contact
                  one of the following:
                </p>
              </div>
              <div className="h-[126px] sm:h-[40px] flex flex-col items-center justify-normal mt-2">
                <div className=" h-[58px] sm:h-[20px] flex flex-col sm:flex-row items-center justify-center text-center text-xs text-gray-600 sm:gap-3">
                  <div className="h-[18px] text-center md:text-left text-xs sm:me-3">
                    <p className="">USA:</p>
                  </div>
                  <div className="h-[20px] sm:h-[18px] flex items-center text-xs space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      ></path>
                    </svg>
                    <a href="tel:11111111111">1-800-223-6337</a>
                  </div>
                  <div className="h-[20px] sm:h-[18px] flex items-center space-x-1 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      ></path>
                    </svg>
                    <a href="mailto:hello@company.com">info@northcott.com</a>
                  </div>
                </div>

                <div className="h-[58px] sm:h-[20px] flex flex-col sm:flex-row items-center justify-center text-center text-xs text-gray-600 sm:gap-3">
                  <div className="mt-2 md:mt-0 text-center md:text-left text-xs">
                    <p className="">Canada:</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      ></path>
                    </svg>
                    <a href="tel:11111111111">1-800-268-1466</a>
                  </div>
                  <div className="flex items-center space-x-1 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      ></path>
                    </svg>
                    <a href="mailto:hello@company.com">info@northcott.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* form section */}
        <div className=" w-[280px] h-[1137px] sm:w-[624px] sm:h-[695px] xl:w-[660px] flex flex-col gap-[30px]">
          {/* input fields */}
          <div className="w-[280px] h-[844px] sm:w-[624px] sm:h-[460px] xl:w-[660px] flex flex-col gap-5">
            {/* Input field and submit button */}
            {/* customer number and country*/}
            <div className="w-[280px] h-[172px] sm:w-[624px] sm:h-[76px] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              {/* customer name */}
              <div className="w-[280px] h-[76px] sm:w-[302px] xl:w-[320px] flex flex-col justify-between">
                <label
                  htmlFor="email"
                  className="w-[211px] h-[21px] block text-sm font-bold text-gray-700 text-nowrap"
                >
                  Northcott Customer Number*
                </label>
                <div className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px]">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px] px-2 text-sm border border-gray-300 placeholder-gray-500 text-gray-900"
                    placeholder="Enter your customer number"
                  />
                </div>
              </div>
              {/* country */}
              <div className="w-[280px] h-[76px] flex flex-col justify-between">
                <label className="w-[65px] h-[21px] block text-sm font-bold text-gray-700">
                  Country*
                </label>
                <div className="w-[149px] h-[45px] flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="country"
                      value="USA"
                    />
                    <span className="ml-2 text-sm text-gray-700">USA</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="country"
                      value="Canada"
                    />
                    <span className="ml-2 text-sm text-gray-700">Canada</span>
                  </label>
                </div>
              </div>
            </div>
            {/* zip postal code */}
            <div className="w-[280px] h-[76px] sm:w-[302px] xl:w-[320px] flex flex-col justify-between">
              <label
                htmlFor="zipCode"
                className="w-[211px] h-[21px] block text-sm font-bold text-gray-700 text-nowrap"
              >
                ZIP/Postal Code*
              </label>
              <div className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px]">
                <input
                  id="zipCode"
                  name="zipCode"
                  type="number"
                  className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px] px-2 text-sm border border-gray-300 placeholder-gray-500 text-gray-900"
                  placeholder="ZIP/Postal Code (no space or dashes)"
                />
              </div>
            </div>
            {/* first and last name */}
            <div className="w-[280px] h-[172px] sm:w-[624px] sm:h-[76px] xl:w-[660px] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              {/* first name */}
              <div className="w-[280px] h-[76px] sm:w-[302px] xl:w-[320px] flex flex-col justify-between">
                <label
                  htmlFor="firstName"
                  className="w-[211px] h-[21px] block text-sm font-bold text-gray-700 text-nowrap"
                >
                  First Name*{" "}
                </label>
                <div className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px]">
                  <input
                    id="zipCode"
                    name="zipCode"
                    type="number"
                    className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px] px-2 text-sm border border-gray-300 placeholder-gray-500 text-gray-900"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>
              {/* last name */}
              <div className="w-[280px] h-[76px] sm:w-[302px] xl:w-[320px] flex flex-col justify-between">
                <label
                  htmlFor="lastName"
                  className="w-[211px] h-[21px] block text-sm font-bold text-gray-700 text-nowrap"
                >
                  Last Name*{" "}
                </label>
                <div className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px]">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px] px-2 text-sm border border-gray-300 placeholder-gray-500 text-gray-900"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>
            {/* email and re enter email*/}
            <div className="w-[280px] h-[172px] sm:w-[624px] sm:h-[76px] xl:w-[660px] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              {/* email */}
              <div className="w-[280px] h-[76px] sm:w-[302px] xl:w-[320px] flex flex-col justify-between">
                <label
                  htmlFor="email"
                  className="w-[211px] h-[21px] block text-sm font-bold text-gray-700 text-nowrap"
                >
                  Email*
                </label>
                <div className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px]">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px] px-2 text-sm border border-gray-300 placeholder-gray-500 text-gray-900"
                    placeholder="This email will be used for you log in"
                  />
                </div>
              </div>
              {/* re enter email */}
              <div className="w-[280px] h-[76px] sm:w-[302px] xl:w-[320px] flex flex-col justify-between">
                <label
                  htmlFor="lastName"
                  className="w-[211px] h-[21px] block text-sm font-bold text-gray-700 text-nowrap"
                >
                  Re-enter Your Email*
                </label>
                <div className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px]">
                  <input
                    id="confirmEmail"
                    name="confirmEmail"
                    type="email"
                    className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px] px-2 text-sm border border-gray-300 placeholder-gray-500 text-gray-900"
                    placeholder="Re-enter your email"
                  />
                </div>
              </div>
            </div>
            {/* password */}
            <div className="w-[280px] h-[172px] sm:w-[624px] sm:h-[76px] xl:w-[660px] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              {/* password */}
              <div className="w-[280px] h-[76px] sm:w-[302px] xl:w-[320px] flex flex-col justify-between">
                <label
                  htmlFor="email"
                  className="w-[211px] h-[21px] block text-sm font-bold text-gray-700 text-nowrap"
                >
                  Password*
                </label>
                <div className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px]">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px] px-2 text-sm border border-gray-300 placeholder-gray-500 text-gray-900"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              {/* re-enter password */}
              <div className="w-[280px] h-[76px] sm:w-[302px] xl:w-[320px] flex flex-col justify-between">
                <label
                  htmlFor="confirPassword"
                  className="w-[211px] h-[21px] block text-sm font-bold text-gray-700 text-nowrap"
                >
                  Re-enter Your Password*
                </label>
                <div className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px]">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="w-[280px] h-[45px] sm:w-[302px] xl:w-[320px] px-2 text-sm border border-gray-300 placeholder-gray-500 text-gray-900"
                    placeholder="Re-enter your password"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* checkbox input */}
          <div className="w-[280px] h-[118px] sm:w-[624px] sm:h-[60px] xl:w-[660px] flex flex-col gap-[5px] sm:gap-[3px]">
            <div className="w-[280px] h-[36px] sm:h-[18px] flex items-center">
              <input
                id="remember_newsletters"
                name="remember_newsletters"
                type="checkbox"
                className="h-[15px] w-[15px] text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_newsletters"
                className="ml-2 block text-xs text-gray-900 sm:text-nowrap"
              >
                Sign up to receive Northcott’s Retail Newsletters
              </label>
            </div>
            <div className="w-[280px] h-[36px] sm:h-[18px] flex items-center">
              <input
                id="remember_newsletters"
                name="remember_newsletters"
                type="checkbox"
                className="h-[15px] w-[15px] text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_newsletters"
                className="ml-2 block text-xs text-gray-900 sm:text-nowrap"
              >
                Sign up to receive notification of Northcott Promotions &
                Specials
              </label>
            </div>
            <div className="w-[280px] h-[36px] sm:h-[18px] flex items-center">
              <input
                id="remember_newsletters"
                name="remember_newsletters"
                type="checkbox"
                className="h-[15px] w-[15px] text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_newsletters"
                className="ml-2 block text-xs text-gray-900 sm:text-nowrap"
              >
                Sign up to receive Northcott’s Monthly Consumer Newsletter
              </label>
            </div>
          </div>
          {/* submit button */}
          <div className="w-[280px] h-[49px] sm:w-[624px] xl:w-[660px] flex items-center justify-center">
            <Link to={"/regionCustomers"}>
              <button
                type="submit"
                className="w-[280px] h-[49px] sm:w-[320px] flex justify-center items-center font-semibold px-2 border border-transparent text-base rounded-md text-white bg-[#E2A856] focus:outline-none focus:ring-2 focus:ring-offset-2 text-center"
              >
                SUBMIT
              </button>
            </Link>
          </div>
          {/* footer */}
          <div className="w-[280px] h-[36px] sm:w-[624px] xl:w-[660px] flex flex-col items-center">
            <span className="flex justify-center text-[#6B6B66] cursor-pointer text-xs h-[18px] items-center">
              <Link to={"/login"}>Return to sign in</Link>
            </span>
            <span className="flex justify-center text-[#6B6B66] text-xs h-[18px] items-center">
              Contact our support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerRegistration;
