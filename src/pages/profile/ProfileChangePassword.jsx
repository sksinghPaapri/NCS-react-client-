import { Link } from "react-router-dom";

const ProfileChangePassword = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex items-center justify-center"
    >
      <div className="w-[320px] sm:w-[744px] xl:w-[1280px] flex items-center justify-center">
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
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] xl:text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/customerProfile"}>
                  <p className="ms-[15px]">Personal Info</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/shippingAddress"}>
                  <p className="ms-[15px]">Shipping Addresses</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] bg-[#F0EFEB] text-[14px] text-center flex items-center cursor-pointer">
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
          <div className="w-[280px] h-[425px] sm:w-[624px] xl:w-[820px] 2xl:w-[940px] flex flex-col gap-[20px]">
            {/* Change Password */}
            <div className="w-[280px] h-[277px] sm:w-[624px] sm:h-[181px]  xl:w-[820px] xl:h-[181px] flex flex-col gap-5">
              {/* heading */}
              <div className="w-[246px] h-[38px] font-bold text-[28px] text-center sm:text-start">
                Change Password
              </div>
              {/* horizontal line */}
              <hr className=" text-gray-500 bg-gray-500 h-[1px] w-[280px] sm:w-[624px] xl:w-[820px] 2xl:w-[940px]" />

              {/* content */}
              <div className="w-[280px] h-[347px] flex flex-col sm:w-[624px] sm:h-[347px] xl:w-[820px] gap-[30px]">
                {/* email */}
                <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                  <label
                    htmlFor="email"
                    className="block text-[14px] font-bold text-gray-700 w-[203px] h-[21px] text-nowrap"
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
                {/* password */}
                <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                  <label
                    htmlFor="password"
                    className="block text-[14px] font-bold text-gray-700 w-[203px] h-[21px] text-nowrap"
                  >
                    Password
                  </label>
                  <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="appearance-none relative block px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-[14px] w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                      placeholder=""
                    />
                  </div>
                </div>
                {/* re enter password */}
                <div className="w-[280px] h-[76px] sm:w-[624px] sm:h-[76px] xl:w-[320px] flex flex-col gap-[10px]">
                  <label
                    htmlFor="reEnterEMail"
                    className="block text-[14px] font-bold text-gray-700 sm:w-[77px] sm:h-[21px] text-nowrap"
                  >
                    Re-enter Your New Password
                  </label>
                  <div className="w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                    <input
                      id="reEnterPassword"
                      name="reEnterPassword"
                      type="password"
                      className="appearance-none relative block px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-[14px] w-[280px] h-[45px] sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* buttons */}
                <div className="h-[49px] flex items-center justify-center sm:justify-start">
                  <div className="w-[205px] h-[49px] flex items-center justify-between">
                    <Link to={"/product-collection/profileChangePassword"}>
                      <button
                        className=" w-[123px] h-[49px] rounded text-center text-[16px] font-semibold bg-[#E2A856] text-[#FFFFFF]"
                        type="button"
                      >
                        UPDATE
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
export default ProfileChangePassword;
