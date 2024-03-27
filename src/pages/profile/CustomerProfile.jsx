import { Link } from "react-router-dom";

const CustomerProfile = () => {
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
          <div className="w-[280px] h-[984px] sm:w-[624px] sm:h-[750px] xl:w-[820px] xl:h-[750px] 2xl:w-[940px] flex flex-col gap-[60px]">
            {/* personalinfo */}
            <div className="w-[280px] h-[277px] sm:w-[624px] sm:h-[181px]  xl:w-[820px] xl:h-[181px] flex flex-col gap-5">
              {/* heading and button */}
              <div className="w-[280px] h-[92px] sm:w-[624px] sm:h-[38px] xl:w-[820px] 2xl:w-[940px] flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-center gap-5 sm:gap-0">
                {/* heading */}
                <div className="w-[186px] h-[38px] font-bold text-[28px] text-center sm:text-start">
                  Personal Info
                </div>
                {/* button */}
                <div className="text-center w-[80px] h-[34px]">
                  <Link to={"/product-collection/editPersonalInfo"}>
                    <button
                      className=" w-[80px] h-[34px] text-center text-[12px] cursor-pointer bg-[#E2A856] text-[#FFFFFF] hover:bg-black rounded-[4px]"
                      type="button"
                    >
                      EDIT
                    </button>
                  </Link>
                </div>
              </div>
              {/* horizontal line */}
              <hr className=" text-gray-500 bg-gray-500 h-[1px] w-[280px] sm:w-[624px] xl:w-[820px] 2xl:w-[940px]" />

              {/* content */}
              <div className="w-[280px] h-[145px] flex flex-col sm:w-[624px] sm:h-[103px] xl:w-[820px] 2xl:w-[940px] gap-5">
                {/* first name */}
                <div className="w-[280px] h-[42px] sm:w-[480px] sm:h-[21px] gap-[10px] flex">
                  <div className="w-[80px] h-[42px]  sm:w-[150px] sm:h-[21px] font-bold text-[14px]">
                    First Name:
                  </div>
                  <div className="w-[190px] h-[21px] text-[14px]">
                    Christina
                  </div>
                </div>
                {/* last name */}
                <div className="flex w-[280px] h-[21px] sm:w-[480px] gap-[10px]">
                  <div className="text-[14px] font-bold w-[80px] sm:w-[150px]">
                    Last Name:
                  </div>
                  <div className="text-[14px] w-[190px] sm:w-[320px] lg:w-[320px]">
                    Pallotta
                  </div>
                </div>
                {/* email */}
                <div className="w-[280px] h-[42px] sm:w-[480px] sm:h-[21px] gap-[10px] flex">
                  <div className="w-[80px] h-[42px]  sm:w-[150px] sm:h-[21px] font-bold text-[14px]">
                    Email:
                  </div>
                  <div className="w-[190px] h-[21px] sm:w-[300px] text-[14px] text-wrap overflow-hidden">
                    christina.pallotta@northcott.com
                  </div>
                </div>
              </div>
            </div>

            {/* store info */}
            <div className="w-[280px] h-[647px] sm:w-[624px] sm:h-[509px] xl:w-[820px] flex flex-col gap-5">
              {/* heading and button */}
              <div className="w-[280px] h-[92px] sm:w-[624px] sm:h-[38px] xl:w-[820px] 2xl:w-[940px] flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-center gap-5 sm:gap-0">
                {/* heading */}
                <div className="w-[186px] h-[38px] font-bold text-[28px] text-center sm:text-start">
                  Store Info
                </div>
                {/* button */}
                <div className="text-center w-[80px] h-[34px]">
                  <Link to={"/product-collection/editStoreInfo"}>
                    <button
                      className="cursor-pointer w-[80px] h-[34px] text-center text-[12px] bg-[#E2A856] text-[#FFFFFF] hover:bg-black rounded-[4px]"
                      type="button"
                    >
                      EDIT
                    </button>
                  </Link>
                </div>
              </div>
              {/* horizontal line */}
              <hr className=" text-gray-500 bg-gray-500 h-[1px] w-[280px] sm:w-[624px] xl:w-[820px] 2xl:w-[940px]" />

              {/* content */}
              <div className="w-[280px] h-[515px] flex flex-col sm:w-[624px] sm:h-[431px] xl:w-[820px] 2xl:w-[940px]  gap-5">
                {/* comapny name */}
                <div className="w-[280px] h-[42px] sm:w-[480px] sm:h-[21px] gap-[10px] flex">
                  <div className="w-[80px] h-[42px]  sm:w-[150px] sm:h-[21px] font-bold text-[14px] sm:text-nowrap">
                    Company Name:
                  </div>
                  <div className="w-[190px] sm:w-[300px] h-[42px] text-[14px]">
                    CHRISTINA'S NORTHCOTT SHOP
                  </div>
                </div>
                {/* comapny number */}
                <div className="w-[280px] h-[42px] sm:w-[480px] sm:h-[21px] gap-[10px] flex">
                  <div className="w-[80px] h-[42px]  sm:w-[150px] sm:h-[21px] font-bold text-[14px]">
                    Company Number:
                  </div>
                  <div className="w-[190px] sm:w-[300px] h-[21px] text-[14px]">
                    CCHRP0
                  </div>
                </div>
                {/* contact name */}
                <div className="w-[280px] h-[42px] sm:w-[480px] sm:h-[21px] gap-[10px] flex">
                  <div className="w-[80px] h-[42px]  sm:w-[150px] sm:h-[21px] font-bold text-[14px]">
                    Contact Name :
                  </div>
                  <div className="w-[190px] sm:w-[300px] h-[21px] text-[14px]"></div>
                </div>
                {/* address 1*/}
                <div className="flex w-[280px] h-[21px] sm:w-[480px] gap-[10px]">
                  <div className="text-[14px] font-bold w-[80px] sm:w-[150px]">
                    Address 1 :
                  </div>
                  <div className="text-[14px] w-[190px] sm:w-[320px]">
                    123 Fun Street
                  </div>
                </div>
                {/* address 2*/}
                <div className="flex w-[280px] h-[21px] sm:w-[480px] gap-[10px]">
                  <div className="text-[14px] font-bold w-[80px] sm:w-[150px]">
                    Address 2 :
                  </div>
                  <div className="text-[14px] w-[190px] sm:w-[320px]"></div>
                </div>
                {/* city*/}
                <div className="flex w-[280px] h-[21px] sm:w-[480px] gap-[10px]">
                  <div className="text-[14px] font-bold w-[80px] sm:w-[150px]">
                    City:
                  </div>
                  <div className="text-[14px] w-[190px] sm:w-[320px]">
                    Vaughan
                  </div>
                </div>
                {/* state*/}
                <div className="w-[280px] h-[42px] sm:w-[480px] sm:h-[21px] gap-[10px] flex">
                  <div className="w-[80px] h-[42px] sm:w-[150px] sm:h-[21px] font-bold text-[14px] flex flex-col sm:flex-row">
                    <p>State/</p>
                    <p>Province:</p>
                  </div>
                  <div className="w-[190px] sm:w-[300px] h-[21px] text-[14px]">
                    Ontario
                  </div>
                </div>
                {/* phone*/}
                <div className="flex w-[280px] h-[21px] sm:w-[480px] gap-[10px]">
                  <div className="text-[14px] font-bold w-[80px] sm:w-[150px]">
                    Phone:
                  </div>
                  <div className="text-[14px] w-[190px] sm:w-[320px]"></div>
                </div>
                {/* cell*/}
                <div className="flex w-[280px] h-[21px] sm:w-[480px] gap-[10px]">
                  <div className="text-[14px] font-bold w-[80px] sm:w-[150px]">
                    Cell:
                  </div>
                  <div className="text-[14px] w-[190px] sm:w-[320px]"></div>
                </div>
                {/* email*/}
                <div className="flex w-[280px] h-[21px] sm:w-[480px] gap-[10px]">
                  <div className="text-[14px] font-bold w-[80px] sm:w-[150px]">
                    Email:
                  </div>
                  <div className="text-[14px] w-[190px] sm:w-[320px] "></div>
                </div>
                {/* website*/}
                <div className="flex w-[280px] h-[21px] sm:w-[480px] gap-[10px]">
                  <div className="text-[14px] font-bold w-[80px] sm:w-[150px]">
                    Website:
                  </div>
                  <div className="text-[14px] w-[190px] sm:w-[320px]">
                    www.northcott.com
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
export default CustomerProfile;
