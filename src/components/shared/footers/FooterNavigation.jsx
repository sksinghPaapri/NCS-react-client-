import NorthcottLogoDark from "../../../assets/FooterLogo/NorthcottLogoDark.svg";
import X from "../../../assets/FooterLogo/X.svg";
import Fb from "../../../assets/FooterLogo/Fb.svg";
import YT from "../../../assets/FooterLogo/YT.svg";
import Instagram from "../../../assets/FooterLogo/Instagram.svg";
import FBHover from "../../../assets/FooterLogo/Hover/FBHover.svg";
import InstaHover from "../../../assets/FooterLogo/Hover/InstaHover.svg";
import YTHover from "../../../assets/FooterLogo/Hover/YTHover.svg";
import XHover from "../../../assets/FooterLogo/Hover/XHover.svg";

const FooterNavigation = () => {
  return (
    <>
      <div
        className="flex items-center justify-center bg-black"
        style={{ fontFamily: "Open Sans", fontWeight: "400" }}
      >
        <div className="w-full h-[912.77px] sm:h-[778.54px] xl:h-[333px] 2xl:h-[333px] flex items-center justify-center">
          <div className="w-[320px] h-[912.77px] sm:w-[744px] sm:h-[778.54px] xl:w-[1280px] xl:h-[333px] 2xl:w-[1440px] 2xl:h-[333px] text-white flex flex-col items-center xl:flex-row gap-[80px] sm:gap-[100px] xl:gap-[154.03px] 2xl:gap-[234.03px] justify-center px-[20px] sm:px-[60px] 2xl:justify-between pt-[90px] pb-[100px]">
            {/* col 1 */}
            <div className="w-[250px] h-[113.77px] sm:w-[290px] sm:h-[126.54px] xl:w-[269.95px] xl:h-[108.14px] flex flex-col gap-[40px] xl:gap-[30px] items-center justify-center">
              <div className="xl:flex xl:justify-start">
                <img
                  src={NorthcottLogoDark}
                  className="h-[54.77px] w-[250px] sm:w-[290px] sm:h-[63.54px] xl:w-[269.95px] xl:h-[59.14px]"
                  alt="Northcott"
                />
              </div>
              <div className="h-[19px] w-[168.88px] sm:w-[229px] sm:h-[23px] xl:w-[123.88px] xl:h-[19px] flex items-center justify-center gap-[35px] sm:gap-[50px] xl:gap-[20px]">
                <a href="#" className="relative">
                  <img
                    src={Fb}
                    className="absolute top-0 left-0 hover:hidden h-[19px] w-[9.87x]"
                    alt="facebook"
                  />
                  <img
                    src={FBHover}
                    className="block h-[19px] w-[9.87x]"
                    alt="facebook"
                  />
                </a>
                <a href="#" className="relative">
                  <img
                    src={X}
                    className="absolute top-0 left-0 hover:hidden h-[15px] w-[18.46px]"
                    alt="X"
                  />
                  <img
                    src={XHover}
                    className="block h-[15px] w-[18.46px]"
                    alt="X"
                  />
                </a>
                <a href="#" className="relative">
                  <img
                    src={YT}
                    className="absolute top-0 left-0 hover:hidden h-[13px] w-[18.55px]"
                    alt="Youtube"
                  />
                  <img
                    src={YTHover}
                    className="block h-[13px] w-[18.55px]"
                    alt="Youtube"
                  />
                </a>
                <a href="#" className="relative">
                  <img
                    src={Instagram}
                    className="absolute top-0 left-0 hover:hidden h-[17px] w-[17px]"
                    alt="Instagram"
                  />
                  <img
                    src={InstaHover}
                    className="block h-[17px] w-[17px]"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
            {/* col 2 */}
            <div className="h-[263px] w-[76px] sm:w-[252px] sm:h-[119px] text-white text-[12px] flex flex-col gap-[60px] sm:gap-[100px]  sm:grid sm:grid-cols-2">
              <div className="h-[119px] w-[76px] flex flex-col gap-[20px] text-center xl:text-left cursor-pointer">
                <h2 className="font-bold cursor-default h-[14px]">HELP</h2>
                <h3 className="hover:text-[#EECB9A] h-[14px]">FAQ</h3>
                <h3 className="hover:text-[#EECB9A] h-[14px]">Web Tour</h3>
                <h3 className="hover:text-[#EECB9A] h-[14px]">Contact Us</h3>
              </div>
              <div className="h-[84px] w-[76px] mx-auto flex flex-col gap-[20px] place-items-center xl:place-items-start xl:text-left cursor-pointer">
                <h3 className=" font-bold cursor-default h-[14px]">POLICIES</h3>
                <h3 className=" mx-auto hover:text-[#EECB9A] text-nowrap h-[14px]">
                  Privacy Policy
                </h3>
                <h3 className="w-32 hover:text-[#EECB9A] text-nowrap h-[14px]">
                  Terms And Conditions
                </h3>
              </div>
            </div>
            {/* col 3 */}
            <div className="h-[186px] w-[280px] sm:h-[143px] sm:w-[330px] flex flex-col items-center xl:items-end gap-[30px]">
              <div className="h-[88px] w-[280px] sm:h-[64px] sm:w-[330px] flex flex-col items-center justify-center xl:items-end gap-[10px]">
                <div className="w-[280px] h-[30px] sm:w-[255px] uppercase font-bold	text-[22px] text-white text-center xl:text-right">
                  GET THE INSIDE SCOOP!
                </div>
                <div className="w-[280px] h-[48px] sm:h-[24px] sm:w-[330px] text-gray-300 italic text-center xl:text-right sm:text-nowrap text-[14px]">
                  New collections,free patterns,quilting tips and more.
                </div>
              </div>
              <div className="rounded h-[68px] w-[260px] sm:h-[49px] sm:w-[319px] hover:text-[#E2A856] bg-[#E2A856] hover:bg-black hover:border-2 hover:border-[#E2A856] flex items-center justify-center text-center cursor-pointer font-bold px-3 sm:px-0 text-[16px] uppercase text-black sm:text-nowrap">
                subscribe to our newsletter
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNavigation;
