import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex items-center justify-center"
    >
      <div className="w-[280px] h-[312px] sm:w-[624px] sm:h-[300px] xl:w-[1160px] 2xl:h-[340px] my-[80px] sm:my-[100px] flex flex-col items-center justify-center gap-10">
        {/* top heading */}
        <div className="w-[280px] h-[84px] sm:w-[624px] sm:h-[72px] xl:w-[1160px] flex flex-col gap-[10px] items-center justify-center">
          <h2 className="w-[280px] h-[38px] sm:w-[624px] sm:h-[44px] xl:w-[1160px] text-center text-[28px] sm:text-[32px] font-bold text-black">
            Reset Password
          </h2>
          <p className="w-[280px] h-[36px] sm:w-[624px] sm:h-[18px] xl:w-[1160px] text-[#090800] text-center text-[12px]">
            Enter your email address below to reset your password.
          </p>
        </div>

        {/* input and submit button */}
        <div className="w-[280px] h-[188px] sm:w-[320px] flex flex-col justify-between items-center">
          {/* input */}
          <div className="w-[280px] h-[76px] sm:w-[320px]">
            <label
              htmlFor="email"
              className="block text-[14px] font-bold text-black "
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
                className="appearance-none  relative block w-full px-3 py-3 border border-gray-300 placeholder-[#9D9C99] text-[#090800] focus:outline-non focus:z-10 text-[14px]"
                placeholder="Enter your email"
              />
            </div>
          </div>
          {/* submit button and footer */}
          <div className="w-[280px] h-[82px] sm:w-[320px] flex flex-col justify-between items-center">
            {/* button */}

            <Link to={"/passwordEmailSent"}>
              <button
                type="submit"
                className="w-[280px] h-[49px] sm:w-[320px] flex justify-center items-center font-semibold px-2 border border-transparent text-base rounded-md text-white bg-[#E2A856] focus:outline-none focus:ring-2 focus:ring-offset-2 text-center hover:bg-black hover:border-black"
              >
                SUBMIT
              </button>
            </Link>

            {/* return to sign in */}
            <div className="flex justify-center items-center h-[18px]">
              <span className="text-[12px] text-[#6B6B66] cursor-pointer hover:text-[#E2A856]">
                <Link to={"/login"}>Return to sign in</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
