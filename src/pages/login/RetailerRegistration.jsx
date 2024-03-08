import { Link } from "react-router-dom";

const RetailerRegistration = () => {
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <div className="min-h-screen flex flex-col justify-center py-2 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Retailer Registration
          </h2>
          <p className="mt-4 text-center text-sm text-gray-600 max-w">
            <a href="#" className="font-medium">
              Please Note: Registration is available only for existing Northcott
              customers in the USA and Canada. You will need your Northcott
              Customer # located on any Northcott invoice.
            </a>
          </p>

          {/* <p className="mt-4 text-center text-sm text-gray-600 max-w">

                        <a href="#" className="font-medium ">
                            If you are not a customer yet or need support, please contact one of the following:
                        </a>
                    </p> */}

          <p className="mt-4 text-center text-sm text-gray-600 max-w whitespace-normal sm:whitespace-nowrap">
            <a href="#" className="font-medium ">
              If you are not a customer yet or need support, please contact one
              of the following:
            </a>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 mt-4 text-center text-sm text-gray-600 max-w-lg">
            <div className="mt-2 md:mt-0 text-center md:text-left">
              <p className="font-semibold">USA:</p>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>
              <a href="tel:11111111111">1-800-223-6337</a>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
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

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 mt-4 text-center text-sm text-gray-600 max-w-lg">
            <div className="mt-2 md:mt-0 text-center md:text-left">
              <p className="font-semibold">Canada:</p>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>
              <a href="tel:11111111111">1-800-268-1466</a>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
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

        <div className="py-8  sm:rounded-lg sm:px-10 max-w-xl mx-auto">
          <form className="space-y-6" action="#" method="POST">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <div className="sm:w-2/3">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  Northcott Customer Number*
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full sm:w-5/6 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your customer number"
                  />
                </div>
              </div>
              <div className="sm:w-1/3">
                <label className="block text-sm font-bold text-gray-700">
                  Country*
                </label>
                <div className="flex items-center space-x-4">
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

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <div className="sm:w-2/3">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  ZIP/Postal Code*
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full sm:w-5/6 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="ZIP/Postal Code (no space or dashes)"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <div className="sm:w-2/3">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  First Name*
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full sm:w-5/6 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>

              <div className="sm:w-1/3">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  Last Name*
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full sm:w-5/6 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <div className="sm:w-2/3">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  Email*
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full sm:w-5/6 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="This email will be used for you log in"
                  />
                </div>
              </div>

              <div className="sm:w-1/3">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  Re-enter Your Email*
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full sm:w-5/6 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Re-enter your email"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <div className="sm:w-2/3">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  Password*
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full sm:w-5/6 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="sm:w-1/3">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  Re-enter Password*
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full sm:w-5/6 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Re-enter your password"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <input
                  id="remember_newsletters"
                  name="remember_newsletters"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_newsletters"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Sign up to receive Northcott’s Retail Newsletters
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="remember_promotions"
                  name="remember_promotions"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_promotions"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Sign up to receive notification of Northcott Promotions &
                  Specials
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="remember_monthly"
                  name="remember_monthly"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_monthly"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Sign up to receive Northcott’s Monthly Consumer Newsletter
                </label>
              </div>
            </div>

            <div>
              <Link to={"/regionCustomers"}>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-300 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  SUBMIT
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex justify-center text-[#6B6B66] cursor-pointer">
                <Link to={"/login"}>Return to sign in</Link>
              </span>
              <span className="flex justify-center text-[#6B6B66]">
                Contact our support
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RetailerRegistration;
