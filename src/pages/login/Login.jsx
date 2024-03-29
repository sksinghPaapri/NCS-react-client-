import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex items-center justify-center"
    >
      <div className="w-[280px] h-[446px] sm:w-[624px] sm:h-[452px] xl:w-[1160px] 2xl:w-[1608px] flex flex-col justify-center items-center my-[80px] sm:my-[100px] gap-10">
        {/* heading */}
        <div className="w-[280px] h-[66px] sm:w-[624px] sm:h-[72px] xl:w-[1160px] 2xl:w-[1608px] flex flex-col items-center justify-center gap-[10px]">
          <h2 className="w-[280px] h-[38px] sm:w-[624px] sm:h-[44px] xl:w-[1160px] 2xl:w-[1608px] text-center text-[28px] xl:text-[32px] font-bold text-black">
            Sign In
          </h2>
          <p className="text-nowrap text-center text-[12px] text-[#090800] w-[225px] h-[18px]">
            Welcome back! Please enter your details
          </p>
        </div>
        {/* form and button*/}
        <div className="w-[280px] h-[340px] sm:w-[320px] sm:h-[340px] flex items-center justify-center">
          <form>
            {/* input fields */}
            <div className="w-[280px] h-[210px] sm:w-[320px] flex flex-col gap-5">
              {/* email */}
              <div className="w-[280px] h-[76px] sm:w-[320px] flex flex-col justify-between">
                <label
                  htmlFor="email"
                  className="block text-[14px] font-bold text-black "
                >
                  Email*
                </label>
                <div className="">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none bg-white relative block w-full px-3 py-2 border border-gray-300 placeholder-[#9D9C99] text-black sm:text-[14px]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              {/* password */}
              <div className="w-[280px] h-[76px] sm:w-[320px] flex flex-col justify-between">
                <label
                  htmlFor="password"
                  className="block text-[14px] font-bold text-black"
                >
                  Password*
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-[#9D9C99] text-black bg-white focus:z-10 sm:text-[14px]"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="w-[280px] h-[18px] sm:w-[320px] flex items-center justify-between">
                {/* remember me */}
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    // className="h-4 w-4 rounded text-[12px] checked:bg-black checked:text-white"
                    className="h-4 w-4 rounded bg-transparent border-gray-300 checked:bg-black checked:border-transparent checked:text-white ring-transparent cursor-pointer"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-[12px] text-gray-900 cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                {/* forgot password */}
                <div className="text-[12px]">
                  <Link
                    to={"/forgot-password"}
                    className="text-[12px] hover:text-[#E2A856] text-[#9D9C99]"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>
            {/* sign in button */}
            <div className="mt-[30px] w-[280px] h-[49px] sm:w-[320px] flex items-center justify-center">
              <Link to={"/retailerRegistration"}>
                <button
                  type="submit"
                  className="w-[280px] h-[49px] sm:w-[320px] uppercase text-base font-semibold rounded text-white bg-[#E2A856] hover:bg-black hover:border-black"
                >
                  Sign in
                </button>
              </Link>
            </div>
            {/* bottom footer */}
            <div className="flex flex-col items-center mt-[15px]">
              <span className="flex justify-center text-[#6B6B66] text-[12px] hover:text-[#E2A856] cursor-pointer">
                Not signed up?
              </span>
              <span className="flex justify-center text-[#6B6B66] text-[12px] hover:text-[#E2A856] cursor-pointer">
                Contact our support
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
