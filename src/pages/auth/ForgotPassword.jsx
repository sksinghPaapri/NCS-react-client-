import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            <a href="#" className="font-medium hover:text-blue-500">
              Enter your email address below to reset your password.
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8 px-4  sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700 "
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
                    className="appearance-none  relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <Link to={"/passwordEmailSent"}>
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
              </div>
            </form>
            <div className="mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
