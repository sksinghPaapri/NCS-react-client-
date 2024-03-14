import Image from "../../assets/About/AboutUs/Image.svg";
import call from "../../assets/About/contact/call.svg";
import local_shipping from "../../assets/About/contact/local_shipping.svg";
import location from "../../assets/About/contact/location.svg";
import mail from "../../assets/About/contact/mail.svg";
import schedule from "../../assets/About/contact/schedule.svg";
import Image1 from "../../assets/About/AboutUs/Image1.svg";
import PageBanner from "../../assets/About/contact/PageTitle.svg";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import AboutUsCarouselBottom from "./AboutUsCarouselBottom";
import CarouselBottom from "../../components/shared/headers/HomePageContent/BodyComponents/CarouselTBottom";

const AboutContact = () => {
  return (
    <div className="mb-[100px] flex items-center justify-center">
      <div className="w-[320px] sm:w-[744px] xl:w-[1280px] 2xl:w-[1728px] flex flex-col items-center justify-center gap-[100px]">
        {/* row 1 top banner */}
        <div className=" bg-white w-[320px] h-[235px] sm:w-[744px] sm:h-[257px] xl:w-[1280px] xl:h-[288px] 2xl:w-[1728px]">
          <img
            src={PageBanner}
            alt="Image"
            className="object-cover w-[320px] h-[235px] sm:w-[744px] sm:h-[257px] xl:w-[1280px] xl:h-[288px] 2xl:w-[1728px]"
          />
        </div>
        {/* row 2 top heading */}
        <h1
          className=" text-center mx-auto w-[320px] h-[55px] sm:w-[744px] sm:h-[77px] xl:w-[800px] xl:h-[88px] 2xl:w-[1320px] text-[40px] sm:text-[56px] xl:text-[64px]"
          style={{ fontFamily: "DM Serif Display" }}
        >
          Contact
        </h1>
        {/* row 3 */}
        <div className="w-[320px] h-[1930px] sm:w-[744px] sm:h-[1778px] xl:w-[1280px] xl:h-[866px] 2xl:w-[1320px] flex items-center justify-center">
          <div className="w-[280px] h-[1870px] sm:w-[624px] sm:h-[1718px] xl:w-[1160px] xl:h-[806px] 2xl:w-[1200px] flex flex-col items-center xl:items-start justify-between xl:flex-row gap-[120px]">
            {/* USA */}
            <div className="w-[280px] h-[875px] sm:w-[624px] sm:h-[799px] xl:w-[1160px] xl:h-[343px] 2xl:w-[1200px] flex flex-col items-center sm:items-end justify-between">
              {/* USA Address */}
              <div className="w-[280px] h-[555px] sm:w-[624px] sm:h-[343px] xl:w-[598px] flex flex-col items-center justify-center gap-5">
                <p className="w-[280px] h-[44px] sm:w-[624px] xl:w-[598px]">
                  USA Office
                </p>
                <div className="w-[280px] h-[491px] sm:w-[624px] sm:h-[279px] xl:w-[598px] xl:h-[343px] flex flex-col items-center justify-center gap-5">
                  <div className="w-[280px] h-[54px] sm:w-[624px] xl:w-[598px] flex items-center justify-between">
                    <img src={location} alt="Location" />
                    <p className="w-[218px] h-[54px]">
                      1050 Valley Brook Avenue Lyndhurst, NJ 07071
                    </p>
                  </div>
                  <div className="w-[280px] h-[1px] bg-gray-400"></div>
                  <div className="w-[280px] h-[148px] sm:w-[624px] sm:h-[64px] xl:w-[598px] flex items-center justify-between">
                    <div className="w-[280px] h-[64px] sm:w-[302px] xl:w-[289px] flex items-center gap-5">
                      <img src={call} alt="call" />
                      <div className="w-[220px] h-[64px] flex flex-col items-center justify-between">
                        <p>T: (201) 672-9600</p>
                        <p>F: (201) 672 -9675</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[280px] h-[1px] bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* row 4 */}
        <div className="w-[320px] h-[1042px] sm:w-[744px] sm:h-[1006px] xl:w-[1280px] xl:h-[549px] 2xl:w-[1320px] flex flex-col items-center justify-between">
          <div className="w-[280px] h-[108px] sm:w-[624px] sm:h-[80px] xl:w-[1160px] xl:h-[86px] flex flex-col items-center justify-center text-center text-[32px] sm:text-[44px] xl:text-[48px]">
            Learn More About Us
          </div>
          <div className="w-[280px] h-[874px] sm:w-[624px] sm:h-[866px] xl:w-[1160px] xl:h-[403px] flex flex-col items-center justify-center xl:flex-row gap-[60px]">
            {/* card 1*/}
            <div className="w-[280px] h-[407px] sm:w-[550px] sm:h-[403px] flex flex-col items-center justify-between border">
              <img
                src={Image}
                alt="Image"
                className="w-[280px] h-[280px] sm:w-[550px] sm:h-[265px] object-cover"
              />
              <div className="pb-4 w-[280px] h-[97px] sm:w-[550px] sm:h-[108px] flex flex-col items-center justify-between px-5">
                <p className="w-[240px] h-[33px] sm:w-[510px] sm:h-[44px] text-[24px] sm:text-[32px] font-bold">
                  Wholesale Contacts
                </p>
                <p className="w-[240px] h-[24px] sm:w-[510px] flex text-[#E2A856] text-start items-center justify-start">
                  Explore <IoIosArrowRoundForward size={30} color="#E2A856" />
                </p>
              </div>
            </div>
            {/* card 2*/}
            <div className="w-[280px] h-[407px] sm:w-[550px] sm:h-[403px] flex flex-col items-center justify-between border">
              <img
                src={Image1}
                alt="Image"
                className="w-[280px] h-[280px] sm:w-[550px] sm:h-[265px] object-cover"
              />
              <div className="pb-4 w-[280px] h-[97px] sm:w-[550px] sm:h-[108px] flex flex-col items-center justify-between px-5">
                <p className="w-[240px] h-[33px] sm:w-[510px] sm:h-[44px] text-[24px] sm:text-[32px] font-bold">
                  Calendar
                </p>
                <p className="w-[240px] h-[24px] sm:w-[510px] flex text-[#E2A856] text-start items-center justify-start">
                  Explore <IoIosArrowRoundForward size={30} color="#E2A856" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* row 5 */}
        <div className="w-[320px] h-[382px] sm:w-[744px] sm:h-[361px] xl:w-[1280px] xl:h-[491px] 2xl:w-[1320px] gap-[60px] flex flex-col items-center justify-center">
          <div className="w-[280px] h-[108px] sm:w-[624px] sm:h-[66px] xl:w-[1160px] xl:h-[84px] text-[18px] sm:text-[22px] xl:text-[28px] font-bold text-center flex items-center justify-center flex-col">
            Follow us on social media as we always have something exciting to
            share{" "}
            <span className="italic text-[#E2A856]"> #NorthcottFabrics</span>
          </div>
          {/* <Carousel /> */}
          {/* <div className="w-[280px] h-[130px] sm:w-[624px] sm:h-[150px] xl:w-[800px] xl:h-[260px] flex flex-col items-center justify-center"> */}
          {/* <div className="mt-36 xl:mx-[264px] h-[130px]">
            <AboutUsCarouselBottom />
          </div> */}
          <div className="mt-36 xl:mx-[264px]">
            <CarouselBottom />
          </div>
          {/* body footer */}
          <div className="w-[246px] h-[24px] sm:w-[296px] sm:h-[25px] xl:w-[309px] xl:h-[27px]">
            <div className="flex flex-row items-center justify-center">
              <div className="w-[102px] h-[24px] xl:w-[115px] xl:h-[27px] text-[16px] sm:text-[18px]">
                Follow us on :
              </div>
              <div className="w-[124px] h-[20px] sm:w-[174px] sm:h-[25px] flex items-center justify-evenly">
                <a href="#" className="cursor-pointer relative">
                  <div className="absolute top-0 left-0 hover:hidden">
                    <FaFacebookF color="#E2A856" size={"1.5rem"} />
                  </div>
                  <div className="block">
                    <FaFacebookF size={"1.5rem"} />
                  </div>
                </a>
                <a href="#" className="cursor-pointer relative">
                  <div className="absolute top-0 left-0 hover:hidden">
                    <FaTwitter color="#E2A856" size={"1.5rem"} />
                  </div>
                  <div className="block">
                    <FaTwitter size={"1.5rem"} />
                  </div>
                </a>
                <a href="#" className="cursor-pointer relative">
                  <div className="absolute top-0 left-0 hover:hidden">
                    <AiFillYoutube color="#E2A856" size={"1.5rem"} />
                  </div>
                  <div className="block">
                    <AiFillYoutube size={"1.5rem"} />
                  </div>
                </a>
                <a href="#" className="cursor-pointer relative">
                  <div className="absolute top-0 left-0 hover:hidden">
                    <FaInstagram color="#E2A856" size={"1.5rem"} />
                  </div>
                  <div className="block">
                    <FaInstagram size={"1.5rem"} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
