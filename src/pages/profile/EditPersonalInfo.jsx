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
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] bg-[#F0EFEB] text-sm xl:text-sm text-center flex items-center">
                <p className="ms-[15px]">Personal Info</p>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-sm text-center flex items-center">
                <p className="ms-[15px]">Shipping Addresses</p>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-sm text-center flex items-center">
                <p className="ms-[15px]">hange Password</p>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-sm text-center flex items-center">
                <p className="ms-[15px]"> Communication Preferences</p>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-[280px] h-[839px] sm:w-[624px] sm:h-[521px] xl:w-[820px] 2xl:w-[940px] flex flex-col gap-[60px]">
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
              <div className="w-[280px] h-[145px] flex flex-col sm:w-[624px] sm:h-[443px] xl:w-[820px] 2xl:w-[940px] gap-[30px]">
                {/* input fields */}
                <div className="sm:w-[624px] sm:h-[364px] xl:w-[820px] 2xl:w-[940px] flex flex-col gap-5">
                  {/* firstname */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-bold text-gray-700 sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      First Name
                    </label>
                    <div className="sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="appearance-none  relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-sm sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* LastName */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-bold text-gray-700 sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      Last Name
                    </label>
                    <div className="sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="appearance-none  relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-sm sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 sm:w-[77px] sm:h-[21px] text-nowrap"
                    >
                      Email
                    </label>
                    <div className="sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="appearance-none  relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-sm sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/*reEnter Email */}
                  <div className="w-[280px] h-[76px] sm:w-[624px] xl:w-[320px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="reEnterEmail"
                      className="block text-sm font-bold text-gray-700 sm:w-[150px] sm:h-[21px] text-nowrap"
                    >
                      Re-enter Your Email
                    </label>
                    <div className="sm:w-[624px] sm:h-[45px] xl:w-[320px]">
                      <input
                        id="reEnterEmail"
                        name="reEnterEmail"
                        type="email"
                        className="appearance-none  relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-non focus:z-10 text-sm sm:w-[624px] sm:h-[45px] xl:w-[320px]"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                {/* buttons */}
                <div className="sm:w-[205px] sm:h-[49px] flex items-center justify-between">
                  <Link to={"/product-collection/customer-profile"}>
                    <button
                      className=" w-[123px] h-[49px] rounded text-center text-[16px] font-semibold bg-[#E2A856] text-[#FFFFFF]"
                      type="button"
                    >
                      UPDATE
                    </button>
                  </Link>
                  <Link to={"/product-collection/customer-profile"}>
                    <button
                      className=" w-[62px] h-[24px] text-center text-[16px] text-[#E2A856] font-semibold bg-white text-nowrap"
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
  );
};
export default editPersonalInfo;
