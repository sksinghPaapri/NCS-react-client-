import banyan from "../../assets/HeaderLogo/2ndHeaderBrandLogo/BANYAN.svg";
import patrick from "../../assets/HeaderLogo/2ndHeaderBrandLogo/PATRICK.svg";
import figo from "../../assets/HeaderLogo/2ndHeaderBrandLogo/FIGO.svg";
import Image from "../../assets/About/AboutUs/Image.svg";
import Image1 from "../../assets/About/AboutUs/Image1.svg";
import PageBanner from "../../assets/About/calender/PageTitle.svg";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import AboutUsCarouselBottom from "./AboutUsCarouselBottom";
import CarouselBottom from "../../components/shared/headers/HomePageContent/BodyComponents/CarouselTBottom";

const AboutCalender = () => {
  return (
    <div className="mb-[100px] flex items-center justify-center">
      <div className="w-[320px] sm:w-[744px] xl:w-[1280px] 2xl:w-[1728px] flex flex-col items-center justify-center gap-[100px]">
        {/* row 1 top banner */}
        <div className="">
          <img
            src={PageBanner}
            alt="Image"
            className="object-cover w-full h-[235px] sm:h-[257px] lg:h-[288px]"
          />
        </div>
        {/* row 2 top heading */}
        <h1
          className=" text-center mx-auto w-[320px] h-[55px] sm:w-[744px] sm:h-[77px] xl:w-[800px] xl:h-[88px] 2xl:w-[1320px] text-[40px] sm:text-[56px] xl:text-[64px]"
          style={{ fontFamily: "DM Serif Display" }}
        >
          Calendar
        </h1>
        {/* row 3 */}
        <div className="w-[320px] h-[1072px] sm:w-[744px] sm:h-[622px] xl:w-[1280px] xl:h-[513px] 2xl:w-[1320px] flex items-center justify-center">
          <div className="w-[280px] h-[1072px] sm:w-[624px] sm:h-[622px] xl:w-[1160px] xl:h-[513px] 2xl:w-[1200px] flex flex-col items-center xl:items-start justify-between xl:flex-row">
            <h2
              className="w-[280px] h-[220px] sm:w-[624px] sm:h-[154px] lg:w-[550px] lg:h-[264px] text-[40px] sm:text-[56px] lg:text-[64px] italic text-wrap text-center"
              style={{ fontFamily: "DM Serif Display" }}
            >
              We are the home of “cottons that feel like silk”
            </h2>
            <div className="w-[280px] h-[792px] sm:w-[624px] sm:h-[408px] xl:w-[550px] xl:h-[513px] 2xl:w-[570px] flex flex-col items-center sm:items-end justify-between">
              <p className="text-[18px] w-[280px] sm:w-[624px] xl:w-[550px] 2xl:w-[570px] text-center xl:text-start">
                Our fine cotton prints with a silky hand can be found in quilt
                and craft shops around the world. We are known for our superior
                quality and admirable customer service. The quilting industry is
                where we have built a name for ourselves and a community of
                great customers, distributors, and partners. We design and
                partner with the best designers to produce fabrics to sell
                wholesale to your local shops and distributors.
              </p>
              <p className="text-[18px] w-[280px] sm:w-[624px] xl:w-[550px] 2xl:w-[570px] text-center xl:text-start">
                Our mission is to offer a wide variety of quality fabrics that
                will inspire everyone to sew and craft! We want you to be able
                to find a fabric that motivates you to make something unique.
                The art of quilting and sewing is something we are very
                passionate about.
              </p>
              <p className="text-[18px] w-[280px] sm:w-[624px] xl:w-[550px] 2xl:w-[570px] text-center xl:text-start">
                We were founded in 1935, originally as a fashion textile
                converter. During the mid '80s we shifted our focus to the
                ever-expanding cotton print market of quilting! It has been an
                amazing journey and we continue to grow and expand each year. We
                launched Banyan Batiks in 2017, FIGO fabrics in 2018 and Patrick
                Lose Fabrics has partnered with us for 2020.
              </p>
            </div>
          </div>
        </div>

        {/* row 4 discover your division */}
        <div className="w-[320px] h-[611px] sm:w-[744px] sm:h-[261px] xl:w-[1280px] xl:h-[267px] 2xl:w-[1320px] flex flex-col items-center justify-between">
          {/* discover our divisions */}
          <div
            className="w-[280px] h-[88px] sm:w-[624px] sm:h-[80px] xl:w-[1160px] xl:h-[86px] flex items-center justify-center text-[32px] sm:text-[44px] xl:text-[48px] text-center"
            style={{ fontFamily: "DM Serif Display" }}
          >
            Discover Our Divisions
          </div>

          <div className="w-[280px] h-[443px] sm:w-[624px] sm:h-[121px] xl:w-[1160px] xl:h-[121px] flex flex-col sm:flex-row items-center justify-between sm:mx-[50px]">
            <div className="w-[152px] h-[121px] xl:w-[353.33px] flex flex-col items-center justify-between">
              <img
                src={banyan}
                alt="Banyan Batiks"
                className="w-[152px] h-[80px]"
              />
              <p className="w-[152px] h-[21px] text-center text-gray-500 text-sm">
                Banyan Batiks
              </p>
            </div>
            <div className="w-[240px] h-[121px] xl:w-[353.33px] flex flex-col items-center justify-between">
              <img
                src={patrick}
                alt="Patrick Lose"
                className="w-[240px] h-[80px]"
              />
              <p className="w-[240px] h-[21px] text-center text-gray-500 text-sm">
                Patrick Lose Fabrics
              </p>
            </div>
            <div className="w-[114px] h-[121px] xl:w-[353.33px] flex flex-col items-center justify-between">
              <img src={figo} alt="Figo" className="w-[114px] h-[80px]" />
              <p className="w-[114px] h-[21px] text-center text-gray-500 text-sm">
                Figo Fabrics
              </p>
            </div>
          </div>
        </div>

        {/* row 5 */}
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

        {/* 6) */}
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

export default AboutCalender;
