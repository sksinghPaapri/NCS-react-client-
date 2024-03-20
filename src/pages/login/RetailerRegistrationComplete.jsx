import React from "react";
import { Link } from "react-router-dom";

const RetailerRegistrationComplete = () => {
  return (
    <div>
      <div
        style={{ fontFamily: "Open Sans" }}
        className="flex items-center justify-center"
      >
        <div className="w-[280px] h-[360px] sm:w-[624px] my-[80px] sm:my-[100px] flex flex-col items-center justify-center gap-[40px]">
          <div className=" w-[280px] h-[196px] sm:w-[502px] sm:h-[108px] flex flex-col items-center justify-between gap-[15px]">
            <h2 className="w-[280px] h-[114px] sm:text-nowrap sm:w-[502px] sm:h-[44px] text-center sm:text-start text-[28px] sm:text-[32px] font-bold text-gray-900">
              Retailer Registration Complete!
            </h2>
            <div className="w-[280px] h-[72px] sm:w-[500px] sm:h-[54px] text-center">
              <p className="text-xs  text-gray-600">
                Congratulations! Your retailer registration is now successfully
                submitted. Thank you for choosing to partner with us. We will
                review your information, and you will receive a confirmation
                email shortly.
              </p>
            </div>
          </div>

          <div className="w-[182px] h-[36px] flex flex-col items-center">
            <p className="flex justify-center text-xs h-[18px] text-gray-950 text-nowrap">
              Need help?{"  "}
              <span className="text-[#6B6B66] text-xs ms-1">
                Contact our support
              </span>
            </p>
            <span className="flex justify-center h-[18px] text-xs text-[#6B6B66] cursor-pointer">
              <Link to={"/login"}>Return to sign in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerRegistrationComplete;
