import { Link } from "react-router-dom";

const editPersonalInfo = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex items-center justify-center"
    >
      <div className="w-[320px] sm:w-[744px] xl:w-[1280px] 2x:w-[1728px] flex items-center justify-center">
        <div className="my-[80px] sm:my-[100px] w-[280px] sm:w-[624px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col items-center xl:flex-row xl:items-start gap-[60px] 2xl:gap-[100px]">
          {/* left side */}
          <div className="w-[280px] h-[258px] sm:w-[624px] xl:w-[280px] xl:h-[258px] flex flex-col gap-5">
            {/* heading */}
            <div className="w-[280px] h-[38px] sm:w-[624px] xl:w-[280px] text-center sm:text-start font-bold text-[28px]">
              Customer Profile
            </div>
            {/* horizontal line */}
            <hr className=" text-gray-500 bg-gray-500 h-1 w-[280px] sm:w-[624px] xl:w-[280px]" />
            {/* content */}
            <div className="w-[280px] h-[180px] flex flex-col sm:w-[624px] xl:w-[280px] bg-white">
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] bg-[#F0EFEB] text-[14px] xl:text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/customerProfile"}>
                  <p className="ms-[15px]">Personal Info</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/shippingAddress"}>
                  <p className="ms-[15px]">Shipping Addresses</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/profileChangePassword"}>
                  <p className="ms-[15px]">Change Password</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/communicationPreferences"}>
                  <p className="ms-[15px]"> Communication Preferences</p>
                </Link>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-[280px] h-[521px] sm:w-[624px] sm:h-[521px] xl:w-[820px] 2xl:w-[940px] flex flex-col gap-[60px]">
            {/* personalinfo */}
            <div className="w-[280px] h-[277px] sm:w-[624px] sm:h-[181px]  xl:w-[820px] xl:h-[181px] flex flex-col gap-5">
              {/* heading */}
              <div className="w-[280px] h-[92px] sm:w-[624px] sm:h-[38px] xl:w-[820px] 2xl:w-[940px] flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-center gap-5 sm:gap-0">
                {/* heading */}
                <div className="w-[186px] h-[38px] font-bold text-[28px] text-center sm:text-start">
                  Personal Info
                </div>
              </div>
              {/* horizontal line */}
              <hr className=" text-gray-500 bg-gray-500 h-[1px] w-[280px] sm:w-[624px] xl:w-[820px] 2xl:w-[940px]" />
              {/* content */}
              <div className="w-[280px] h-[443px] flex flex-col sm:w-[624px] sm:h-[443px] xl:w-[820px] 2xl:w-[940px] gap-[30px]">
                {/* input fields */}
                <form className="w-[280px] h-[364px] sm:w-[624px] sm:h-[364px] xl:w-[820px] 2xl:w-[940px] flex flex-col gap-[20px]">
                  {/* firstname */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="firstName"
                      className="block text-[14px] font-bold text-[#090800] sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      First Name
                    </label>
                    <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="appearance-none relative block px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-[14px] w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* lastname */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="lastName"
                      className="block text-[14px] font-bold text-[#090800] sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      Last Name
                    </label>
                    <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="appearance-none relative block px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-[14px] w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* email */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="email"
                      className="block text-[14px] font-bold text-[#090800] sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      Email
                    </label>
                    <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="appearance-none relative block px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-[14px] w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* reEnterEMail */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="reEnterEMail"
                      className="block text-[14px] font-bold text-[#090800] sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      Re-enter Your Email
                    </label>
                    <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="reEnterEMail"
                        name="reEnterEMail"
                        type="email"
                        className="appearance-none relative block px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-[14px] w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                </form>

                {/* buttons */}
                <div className="h-[49px] flex items-center justify-center sm:justify-start">
                  <div className="w-[205px] h-[49px] flex items-center justify-between">
                    <Link to={"/product-collection/customerProfile"}>
                      <button
                        className=" w-[123px] h-[49px] rounded text-center text-[16px] font-semibold bg-[#E2A856] text-[#FFFFFF] hover:bg-black"
                        type="button"
                      >
                        UPDATE
                      </button>
                    </Link>
                    <Link to={"/product-collection/customerProfile"}>
                      <button
                        className="underline w-[62px] h-[24px] text-center text-[16px] text-[#E2A856] font-semibold bg-white text-nowrap hover:text-black"
                        type="button"
                      >
                        Go Back
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default editPersonalInfo;
