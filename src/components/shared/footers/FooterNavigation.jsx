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
      <footer
        className="bg-black h-[912.77px] sm:h-[787px] sm:w-auto xl:h-[342px] px-[20px] pt-[90px] pb-[100px] sm:p-0 text-white"
        style={{ fontFamily: "Open Sans", fontWeight: "400" }}
      >
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[80px] sm:gap-[100px] sm:px-[60px] sm:pt-[90px] sm:pb-[100px] xl:gap-20 place-items-center justify-center xl:justify-between">
          {/* col 1 */}
          <div className="w-[250px] h-[113.77px] sm:w-[290px] sm:h-[126.54px] xl:w-[269.95px] xl:h-[108.14px] flex flex-col gap-[40px] xl:gap-[30px] items-center justify-center mx-auto">
            <div className="xl:mb-0 xl:flex xl:justify-start">
              <img
                src={NorthcottLogoDark}
                className="h-[54.77px] w-[250px] sm:w-[290px] sm:h-[63.54px] xl:w-[269.95px] xl:h-[59.14px]"
                alt="Northcott"
              />
            </div>
            <div className="h-[19px] w-[168.88px] sm:w-[229px] sm:h-[23px] xl:w-[123.88px] xl:h-[19px] xl:mb-0 grid grid-flow-col xl:gap-[20px] items-center justify-between xl:mr-32">
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
          <div className="h-[263px] w-[76px] sm:w-[252px] sm:h-[119px] xl:w-[252px] xl:h-[119px] text-white text-xs xl:mx-1 flex flex-col gap-[60px] xl:gap-[100px] mx-auto sm:grid sm:grid-cols-2">
            <div className="h-[119px] w-[76px] flex flex-col gap-[20px] text-center xl:text-left cursor-pointer">
              <h2 className=" text-sm font-bold cursor-default">HELP</h2>
              <h3 className="hover:text-[#EECB9A]">FAQ</h3>
              <h3 className="hover:text-[#EECB9A]">Web Tour</h3>
              <h3 className="hover:text-[#EECB9A]">Contact Us</h3>
            </div>
            <div className="h-[84px] w-[79px] mx-auto flex flex-col gap-[20px] place-items-center xl:place-items-start xl:text-left cursor-pointer">
              <h3 className=" font-bold cursor-default">POLICIES</h3>
              <h3 className=" mx-auto hover:text-[#EECB9A] text-nowrap">
                Privacy Policy
              </h3>
              <h3 className="w-32 hover:text-[#EECB9A] text-nowrap ">
                Terms And Conditions
              </h3>
            </div>
          </div>
          {/* col 3 */}
          <div>
            <ul className="h-[186px] w-[280px] sm:h-[143px] sm:w-[328px] flex flex-col gap-[30px]">
              <li className="h-[88px] w-[280px] sm:h-[64px] sm:w-[328px] flex flex-col gap-[10px]">
                <div className="uppercase font-bold	text-[22px] text-white text-center xl:text-right">
                  GET THE INSIDE SCOOP!
                </div>
                <div className="text-gray-300 italic text-center xl:text-right sm:text-nowrap text-sm xl:text-xs">
                  New collections,free patterns,quilting tips and more.
                </div>
              </li>
              <li className="flex items-center justify-center rounded">
                <div className="h-[68px] w-[260px] sm:h-[49px] sm:w-[319px] xl:h-[49px] xl:w-[319px] hover:text-[#E2A856] bg-[#E2A856] hover:bg-black hover:border-2 hover:border-[#E2A856] flex items-center justify-center">
                  <p className="h-[38px] px-3 sm:px-0 py-0 w-full text-center cursor-pointer hover:text-[#E2A856] font-bold text-base uppercase leading-5 text-black sm:text-nowrap pt-0 sm:pt-[8px]">
                    subscribe to our newsletter
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterNavigation;
