import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CommunicationPreferences = () => {
  const [Northcott, setNorthcott] = useState(true);
  const [Banyan, setBanyan] = useState(false);
  const [Patrick, setPatrick] = useState(false);

  // useEffect(() => {
  //   if (Banyan) {
  //     setNorthcott(false);
  //     setPatrick(false);
  //   }
  //   if (Patrick) {
  //     setNorthcott(false);
  //     setBanyan(false);
  //   }
  //   if (Northcott) {
  //     setBanyan(false);
  //     setPatrick(false);
  //   }
  // }, [Northcott, Banyan, Patrick]);

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
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/profileChangePassword"}>
                  <p className="ms-[15px]">Change Password</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px]  bg-[#F0EFEB] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/communicationPreferences"}>
                  <p className="ms-[15px]"> Communication Preferences</p>
                </Link>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-[280px] h-[607px] sm:w-[624px] sm:h-[475px] xl:w-[820px] xl:h-[193px] 2xl:h-[475px] flex flex-col gap-[60px]">
            {/* Communication Preferences */}
            {/* heading and line*/}
            <div className="w-[280px] h-[247px] sm:w-[624px] sm:h-[115px] xl:w-[820px] xl:h-[115px] flex flex-col gap-[20px]">
              <div className="w-[280px] h-[76px] sm:w-[398px] sm:h-[38px] font-bold text-[28px] text-center sm:text-start">
                Communication Preferences
              </div>
              {/* horizontal line */}
              <hr className=" text-gray-500 bg-gray-500 h-[1px] w-[280px] sm:w-[624px] xl:w-[820px]" />
              {/* buttons */}
              <div className="w-[280px] h-[131px] sm:w-[624px] sm:h-[37px] xl:w-[820px] flex flex-col sm:flex-row items-center justify-center gap-[10px] sm:justify-start">
                <button
                  type="button"
                  className={`text-[#9D9C99] hover:bg-gray-900 hover:text-white border-2 border-gray-400 font-medium rounded-full text-[14px] text-center w-[91px] h-[37px] ${
                    Northcott ? "bg-black text-white border-black" : "bg-white"
                  }`}
                  onClick={() => setNorthcott(true)}
                >
                  Northcott
                </button>
                <button
                  type="button"
                  className={`text-[#9D9C99] bg-white hover:bg-gray-900 hover:text-white border-2 border-gray-400 font-medium rounded-full text-[14px] text-center w-[125px] h-[37px] ${
                    Banyan ? "bg-black text-white border-black" : "bg-white"
                  }`}
                  onClick={() => setBanyan(true)}
                >
                  Banyan Batiks
                </button>
                <button
                  type="button"
                  className={`text-[#9D9C99] bg-white hover:bg-gray-900 hover:text-white border-2 border-gray-400 font-medium rounded-full text-[14px] text-center w-[110px] h-[37px] ${
                    Patrick ? "bg-black text-white border-black" : "bg-white"
                  }`}
                  onClick={() => setPatrick(true)}
                >
                  Patrick Lose
                </button>
              </div>
            </div>

            {/* content */}
            {/* <div className="w-[280px] h-[300px] flex flex-col sm:w-[624px] xl:w-[820px]">
              <p className="w-[280px] h-[36px] text-[12px] text-center sm:text-nowrap text-gray-500">
                Integrates with Mailchimp (Note: This text won't show on the UI)
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommunicationPreferences;
