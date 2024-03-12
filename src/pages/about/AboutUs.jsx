import banyan from "../../assets/HeaderLogo/2ndHeaderBrandLogo/BANYAN.svg";
import patrick from "../../assets/HeaderLogo/2ndHeaderBrandLogo/PATRICK.svg";
import figo from "../../assets/HeaderLogo/2ndHeaderBrandLogo/FIGO.svg";
import Image from "../../assets/About/AboutUs/Image.svg";
import Image1 from "../../assets/About/AboutUs/Image1.svg";
import topBanner from "../../assets/About/AboutUs/topBanner.svg";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import CarouselBottom from "../../components/shared/headers/HomePageContent/BodyComponents/CarouselTBottom";
import FollowUsF from "../../assets/BodyfooterLogos/FollowUsF.svg";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[320px] sm:w-[744px] xl:w-[1280px] 2xl:w-[1728px] flex flex-col items-center justify-center gap-[100px]">
        {/* row 1 top banner */}
        <div className=" bg-white w-[320px] h-[235px] sm:w-[744px] sm:h-[257px] xl:w-[1280px] xl:h-[288px] 2xl:w-[1728px]">
          <img
            src={topBanner}
            alt="Image"
            className="object-cover w-[320px] h-[235px] sm:w-[744px] sm:h-[257px] xl:w-[1280px] xl:h-[288px] 2xl:w-[1728px]"
          />
        </div>
        {/* row 2 top heading */}
        <h1
          className=" text-center mx-auto w-[320px] h-[55px] sm:w-[744px] sm:h-[77px] xl:w-[800px] xl:h-[88px] 2xl:w-[1320px] text-[40px] sm:text-[56px] xl:text-[64px]"
          style={{ fontFamily: "DM Serif Display" }}
        >
          About Us
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
              <p className="text-[16px] w-[280px] sm:w-[624px] xl:w-[550px] 2xl:w-[570px] text-center xl:text-start">
                Our fine cotton prints with a silky hand can be found in quilt
                and craft shops around the world. We are known for our superior
                quality and admirable customer service. The quilting industry is
                where we have built a name for ourselves and a community of
                great customers, distributors, and partners. We design and
                partner with the best designers to produce fabrics to sell
                wholesale to your local shops and distributors.
              </p>
              <p className="text-[16px] w-[280px] sm:w-[624px] xl:w-[550px] 2xl:w-[570px] text-center xl:text-start">
                Our mission is to offer a wide variety of quality fabrics that
                will inspire everyone to sew and craft! We want you to be able
                to find a fabric that motivates you to make something unique.
                The art of quilting and sewing is something we are very
                passionate about.
              </p>
              <p className="text-[16px] w-[280px] sm:w-[624px] xl:w-[550px] 2xl:w-[570px] text-center xl:text-start">
                We were founded in 1935, originally as a fashion textile
                converter. During the mid '80s we shifted our focus to the
                ever-expanding cotton print market of quilting! It has been an
                amazing journey and we continue to grow and expand each year. We
                launched Banyan Batiks in 2017, FIGO fabrics in 2018 and Patrick
                Lose Fabrics has partnered with us for 2020.
              </p>
            </div>
          </div>

          {/* <h1
          className="text-center mx-auto w-[320px] h-[55px] sm:w-[744px] sm:h-[77px] lg:w-[800px] lg:h-[88px]  mt-16 mb-16 text-[40px] sm:text-[56px]"
          style={{ fontFamily: "DM Serif Display" }}
        >
          Discover Our Divisions
        </h1> */}

          {/* <div className="w-full flex items-center justify-center sm:mr-[-20px], sm:ml-[-20px] sm:pl-[70px] pl-[20px] py-[150px] sm:mt-[-150px] ">
          <div className="lg:w-[1160px] lg:h-[121px] text-center sm:w-[624px] sm:h-[121px] w-[280px] h-[443px] flex flex-col sm:flex-row items-center justify-between bg-white ">
            <div className="flex flex-col ">
              {" "}
              <img src={banyan} alt="Image" className="w-[152px] h-[52px]  " />
              <p className="sm:mt-6 text-[#6B6B66] "> Banyan Batiks</p>{" "}
            </div>

            <div className="flex flex-col ">
              <img src={patrick} alt="Image" className=" w-[152px] h-[80px] " />
              <p className=" text-[#6B6B66]  "> Patrick Lose Fabrics</p>
            </div>

            <div className="flex flex-col ">
              <img src={figo} alt="Image" className=" w-[152px] h-[80px] " />
              <p className="sm:mt-2 text-[#6B6B66]  "> Figo Fabrics</p>
            </div>
          </div>
        </div> */}

          {/* <h1
          className="text-center mx-auto w-[320px] h-[55px] sm:w-[744px] sm:h-[77px] lg:w-[800px] lg:h-[88px]  sm:mt-[-60px] mt-[-40px] mb-16 text-[40px] sm:text-[56px]   pl-4 pr-4   "
          style={{ fontFamily: "DM Serif Display" }}
        >
          Learn More About Us
        </h1> */}
        </div>

        {/* row 4 discover your division */}
        <div className="w-[320px] h-[611px] sm:w-[744px] sm:h-[261px] xl:w-[1280px] xl:h-[267px] 2xl:w-[1320px] flex flex-col items-center justify-between">
          <div
            className="w-[280px] h-[88px] sm:w-[624px] sm:h-[80px] xl:w-[1160px] xl:h-[86px] flex items-center justify-center text-[32px] sm:text-[44px] xl:text-[48px] text-center"
            style={{ fontFamily: "DM Serif Display" }}
          >
            Discover Our Divisions
          </div>
          <div className="w-[280px] h-[443px] sm:w-[624px] sm:h-[121px] xl:w-[1160px] xl:h-[121px] flex flex-row sm:flex-col items-center justify-between">
            <div className="w-[280px] h-[121px] sm:w-[624px] xl:w-[1160px]">
              <img src="" alt="" className="w-[152px] h-[80px]" />
              <div></div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* 8) */}
        {/* <Carousel /> */}
        <div className="mt-36 xl:mx-[264px]">
          <CarouselBottom />
        </div>
        {/* 9) */}
        {/* body footer */}
        <div className="flex flex-row items-center justify-center">
          <div className="w-[246px] sm:w-[296px] mb-[100px] gap-5 mx-10 flex items-center justify-center">
            <a href="#">
              <img src={FollowUsF} alt="Follow Us" />
            </a>
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
  );
};

export default AboutUs;
