import { Link } from "react-router-dom";

export default function PasswordEmailSent() {
  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex items-center justify-center"
    >
      <div className="w-[280px] h-[360px] sm:w-[624px] xl:w-[1160px] my-[80px] sm:my-[100px] flex flex-col items-center justify-center gap-10 xl:gap-10">
        <div className=" w-[280px] h-[158px] sm:w-[500px] sm:h-[90px] flex flex-col items-center justify-between gap-[10px]">
          <h2 className="w-[280px] h-[76px] sm:w-[427px] sm:h-[44px] text-center text-[28px] sm:text-[32px] font-bold text-gray-900">
            Password Reset Email Sent
          </h2>

          <div className="w-[280px] h-[72px] sm:w-[500px] sm:h-[36px] text-center">
            <p className="text-[12px]  text-gray-600">
              Please check your email for further instructions. If you don't
              receive an email within the next few minutes, please make sure to
              check your spam folder.
            </p>
          </div>
        </div>

        <div className="w-[182px] h-[36px] flex flex-col items-center">
          <p className="flex justify-center text-[12px] h-[18px] text-gray-950 text-nowrap">
            Need help?{"  "}
            <span className="text-[#6B6B66] text-[12px] ms-1 cursor-pointer hover:text-[#E2A856]">
              Contact our support
            </span>
          </p>
          <span className="flex justify-center h-[18px] text-[12px] text-[#6B6B66] cursor-pointer hover:text-[#E2A856]">
            <Link to={"/login"}>Return to sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
