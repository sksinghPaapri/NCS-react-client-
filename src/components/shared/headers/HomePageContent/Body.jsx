import No1 from "../../../../assets/BodyFeaturedCategory/No1.svg";
import No2 from "../../../../assets/BodyFeaturedCategory/No2.svg";
import No3 from "../../../../assets/BodyFeaturedCategory/No3.svg";
import No4 from "../../../../assets/BodyFeaturedCategory/No4.svg";
import No5 from "../../../../assets/BodyFeaturedCategory/No5.svg";
import No6 from "../../../../assets/BodyFeaturedCategory/No6.svg";
import Mask1 from "../../../../assets/Resources/Mask1.svg";
import Mask2 from "../../../../assets/Resources/Mask2.svg";
import Mask3 from "../../../../assets/Resources/Mask3.svg";
import Mask4 from "../../../../assets/Resources/Mask4.svg";
import frame from "../../../../assets/Resources/Frame.png";
import Property1 from "../../../../assets/Resources/Property1.svg";
import Designer from "../../../../assets/BodyFeaturedCategory/Designer.svg";
import FollowUsF from "../../../../assets/BodyfooterLogos/FollowUsF.svg";
import Mask from "../../../../assets/others/Mask.png";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import CarouselTop from "./BodyComponents/CarouselTop";
import CarouselBottom from "./BodyComponents/CarouselTBottom";

const Body = () => {
  return (
    <div className="mt-[1px]">
      <div className="">
        <CarouselTop />
      </div>
      {/* 2) */}
      {/* Whats new */}
      <div className="mt-[100px] lg:mx-[60px] xl:w-[1160px] xl:h-[555px] xl:mx-auto xl:mb-[250vh] 2xl:mb-[200vh]">
        <div
          className="mb-[40px] text-3xl sm:text-5xl flex justify-center lg:justify-start"
          style={{ fontFamily: "DM Serif Display" }}
        >
          What's New
        </div>
        <div className="flex gap-10 flex-col mx-[20px] sm:mx-[60px] lg:mx-0 items-center justify-center">
          <div className="lg:h-[555px] flex flex-col gap-8 sm:gap-20 lg:gap-[60px] lg:flex-row lg:justify-around">
            {/* 1st img */}
            <div className="sm:w-full sm:h-[626px] lg:h-[555px] lg:w-1/2 flex flex-col justify-center">
              <img
                src={Mask}
                alt="Image"
                className="h-[210.24px] sm:w-[624px] sm:h-[468.56px] lg:w-[550px] lg:h-[413px]"
              />
              <div
                className="flex justify-center mx-6 lg:mx-0 lg:justify-start my-6 text-2xl tracking-wide"
                style={{ fontFamily: "DM Serif Display" }}
              >
                Promotion Example
              </div>
              <div className="flex justify-center lg:justify-start">
                <button
                  type="button"
                  className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded px-5 py-2.5 text-center w-[148px] h-[49px] text-base"
                >
                  SHOP NOW
                </button>
              </div>
            </div>
            {/* 2nd Image */}
            <div className="sm:w-[624px] sm:h-[626px] lg:h-[555px] lg:w-1/2 h-auto flex flex-col justify-center">
              <img
                src={Mask}
                alt="Image"
                className="h-[210.24px] sm:w-[624px] sm:h-[468.56px] lg:w-[550px] lg:h-[413px]"
              />
              <div
                className="flex justify-center mx-0 lg:mx-6 lg:justify-start my-6 text-2xl"
                style={{ fontFamily: "DM Serif Display" }}
              >
                New Collection Example
              </div>
              <div className="flex justify-center lg:justify-start">
                <button
                  type="button"
                  className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded px-5 py-2.5 text-center w-[148px] h-[49px] text-base"
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          {/* 3rd Image */}
          <div
            className=" text-center text-3xl sm:text-5xl mt-20"
            style={{ fontFamily: "DM Serif Display" }}
          >
            What's New
          </div>
          <div className="min-w-[320px] sm:min-w-[768px] sm:h-[460.77px] lg:h-[639px] xl:w-[1160px] flex justify-center lg:justify-end flex-col w-full xl:mt-14">
            <img
              src={Mask}
              alt="Image"
              className="h-60 min-w-[320px] sm:w-[768px] sm:h-[318.77px] lg:h-[497px] lg:w-[900px] xl:h-[564.61px] w-auto xl:w-[1160px]"
            />
            <div
              className="flex justify-center mx-0 lg:mx-6 my-6 lg:mb-[30px] text-2xl sm:text-3xl text-center"
              style={{ fontFamily: "DM Serif Display" }}
            >
              Promotion Collection Example
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded px-5 sm:px-3 lg:px-1 py-2.5 text-center w-[240px] h-[49px] text-base uppercase"
              >
                shop the collection
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 3) */}
      {/* Northcott Fabrics */}
      <div className="xl:w-full sm:w-[768px] md:w-full my-12">
        <div className="h-[664px] sm:h-[390px] lg:h-[369px] flex flex-col items-center justify-center text-center w-full text-white bg-black bg-[url('https://media.istockphoto.com/id/184601291/photo/xxxl-dark-concrete.webp?b=1&s=170667a&w=0&k=20&c=KRRXq0P41imqerPjYF4EgX7QOdbybyprM8ofKYoIzT4=')] bg-no-repeat bg-center bg-cover">
          <div className="p-[60px] sm:w-[624px]">
            <div
              className="flex justify-center text-3xl"
              style={{ fontFamily: "DM Serif Display" }}
            >
              Northcott Fabrics
            </div>
            <div className="text-sm mb-[30px]">
              We are the home of “cottons that feel like silk”. Our fine cotton
              prints with a silky hand can be found in quilt and craft shops
              around the world. We are known for our superior quality and
              admirable customer service. The quilting industry is where we have
              built a name for ourselves and a community of great customers,
              distributors and partners. We design and partner with the best
              designers to produce fabrics to sell wholesale to your local shops
              and distributors.
            </div>
            <div className="mx-auto h-[49px] w-[162px] flex justify-center">
              <button
                type="button"
                className=" text-black bg-[#E2A856] font-medium rounded-sm text-base px-5 lg:px-1 py-2.5 text-center w-44 hover:text-[#E2A856] hover:border-[#E2A856] hover:border-2 hover:bg-transparent"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 4) */}
      {/* Featured Categories */}
      <div className="xl:max-w-[1320px] mx-[20px] md:mx-[50px] xl:mx-auto xl:flex xl:flex-col xl:items-center xl:justify-center">
        <div
          className="sm:pt-10 text-center text-2xl sm:text-5xl tracking-wide"
          style={{ fontFamily: "DM Serif Display" }}
        >
          Featured Categories
        </div>
        <div className="xl:w-[1200px] sm:mt-20 grid grid-cols-1 lg:grid-cols-3 grid-flow-row xl:mx-20 my-10 gap-10">
          <div className="w-full flex items-center justify-center bg-white">
            <a href="#" className="border border-gray-200 shadow">
              <img className="w-[345px]" src={No1} alt="Image" />
            </a>
          </div>
          <div className="w-full flex items-center justify-center bg-white">
            <a href="#" className="border border-gray-200 shadow">
              <img className="w-[345px]" src={No2} alt="Image" />
            </a>
          </div>
          <div className="w-full flex items-center justify-center bg-white">
            <a href="#" className="border border-gray-200 shadow">
              <img className="w-[345px]" src={No3} alt="Image" />
            </a>
          </div>
          <div className="w-full flex items-center justify-center bg-white">
            <a href="#" className="border border-gray-200 shadow">
              <img className="w-[345px]" src={No4} alt="Image" />
            </a>
          </div>
          <div className="w-full flex items-center justify-center bg-white">
            <a href="#" className="border border-gray-200 shadow">
              <img className="w-[345px]" src={No5} alt="Image" />
            </a>
          </div>
          <div className="w-full flex items-center justify-center bg-white ">
            <a href="#" className="border border-gray-200 shadow">
              <img className="w-[345px]" src={No6} alt="Image" />
            </a>
          </div>
        </div>
      </div>
      {/* 5) */}
      {/* featured designer */}
      <div className="mt-[120px] lg:mt-[100px] h-[892px] lg:h-[570px] flex flex-col lg:flex-row lg:gap-14 xl:gap-20 2xl:gap-20 lg:items-center justify-center lg:justify-between text-white bg-[#CECECC]">
        <div className=" w-full lg:w-1/2 flex justify-center xl:justify-end">
          <img
            src={Designer}
            alt="Image"
            className="h-[260px] w-[260px] rounded-full lg:h-[450px] lg:w-[450px]"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-16">
          <div className="lg:h-[307px] flex flex-col gap-5 justify-center text-center lg:text-left text-black">
            <h1
              className="italic text-xl mt-10 lg:mt-0"
              style={{ fontFamily: "DM Serif Display" }}
            >
              Featured Designer
            </h1>
            <h1 className="text-3xl" style={{ fontFamily: "DM Serif Display" }}>
              Designer Name
            </h1>
            <p className="text-sm lg:text-xs lg:pe-20 px-10 lg:px-0 xl:pe-52 lg:h-[105px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse et dolore magna aliqua
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="mt-3 sm:mt-10 lg:mt-7 flex items-center justify-center lg:justify-start">
              <button
                type="button"
                className="uppercase font-semibold text-black bg-[#E2A856] hover:text-[#E2A856] hover:bg-[#CECECC] hover:border-2 hover:border-[#E2A856] rounded-sm text-base py-2.5 px-2 text-center mb-10 w-[280px] h-[68px] sm:h-[49px] md:w-96"
              >
                Shop designer name’s collection
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 6) */}
      {/* Resources */}
      <div className="mx-[20px] lg:mx-[60px] py-5 sm:mb-[60vh] lg:mb-[20vh] 2xl:w-[1160px] 2xl:h-[667px] 2xl:mb-[80vh] 2xl:mx-auto">
        <div>
          <div className="mx-auto mt-16">
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:ms-10 xl:gap-0">
              <div
                className="text-center lg:text-left text-5xl"
                style={{ fontFamily: "DM Serif Display" }}
              >
                Resources
              </div>
              <div className="flex justify-center mx-5 lg:mx-0 lg:justify-start xl:me-20 2xl:ms-[25vw]">
                <button
                  type="button"
                  className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded px-5 py-2.5 text-center me-2 mb-10 w-[132px] h-[49px] text-base"
                >
                  VIEW ALL
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="xl:w-[1160px] xl:h-[667px] lg:w-auto lg:h-[667px] lg:mt-14 flex flex-col lg:flex-row items-center xl:items-start justify-center lg:justify-between lg:gap-24 xl:gap-20 lg:mx-10">
            <div className=" lg:w-1/2 md:w-fit bg-white flex justify-center mx-5 lg:mx-0 border">
              <a
                href="#"
                className="sm:w-[624px] sm:h-[779px] lg:w-[515px] lg:h-[667px]"
              >
                <img
                  src={Property1}
                  alt="Image"
                  className="w-[217px] h-[280px] sm:w-[624px] sm:h-[624px] lg:w-auto lg:h-[515px]"
                />
                <div className="w-[217px] h-[182px] sm:w-[320px] sm:h-[129px] flex flex-col gap-3 sm:gap-1 sm:mt-5 items-start justify-center sm:justify-start px-7 sm:px-5">
                  <h4 className="text-gray-400">Editorial Features</h4>
                  <h2 className="font-bold w-56 sm:w-full sm:text-nowrap text-lg text-start">
                    Follow The Star by TeriAnn Harms{" "}
                  </h2>
                  <img className="w-24" src={frame} alt="Image" />
                </div>
              </a>
            </div>
            <div className="w-[260px] sm:w-[624px] sm:h-[665px] lg:w-1/2 flex flex-col items-center gap-10 lg:gap-4 mt-10 lg:mt-0 me-0 md:me-28 lg:me-0">
              <a href="#" className="sm:max-w-[550px] sm:h-[140px]">
                <div className="flex flex-col md:flex-row gap-5 sm:gap-10">
                  <img
                    className="w-[260px] sm:w-[140px] sm:h-[140px] lg:h-32"
                    src={Mask1}
                    alt="Image"
                  />
                  <div className="sm:w-[320px] sm:h-[129px] flex flex-col gap-3 items-center justify-center sm:items-start sm:justify-start">
                    <h4 className="text-gray-400">Free Patterns</h4>
                    <h2 className="font-bold w-60 lg:w-52 lg:text-sm text-lg text-center sm:text-start">
                      Patrick Lose Cake Block - FREE DOWNLOAD
                    </h2>
                    <img className="w-24" src={frame} alt="Image" />
                  </div>
                </div>
              </a>
              <hr className=" text-black w-4/5 lg:w-full sm:me-12" />
              <a href="#" className="sm:max-w-[550px] sm:h-[140px]">
                <div className="flex flex-col md:flex-row gap-5 sm:gap-10">
                  <img
                    className="w-[260px] sm:w-[140px] sm:h-[140px] lg:h-32"
                    src={Mask2}
                    alt="Image"
                  />
                  <div className="sm:w-[320px] sm:h-[129px] flex flex-col gap-3 items-center justify-center sm:items-start sm:justify-start">
                    <h4 className="text-gray-400">Editorial Features</h4>
                    <h2 className="font-bold w-60 lg:w-52 lg:text-sm text-lg text-center sm:text-start">
                      Lemon Sorbet by TeriAnn Harms{" "}
                    </h2>
                    <img className="w-24" src={frame} alt="Image" />
                  </div>
                </div>
              </a>
              <hr className=" text-black w-4/5 lg:w-full sm:me-12" />
              <a href="#" className="sm:max-w-[550px] sm:h-[140px]">
                <div className="flex flex-col md:flex-row gap-5 sm:gap-10">
                  <img
                    className="w-[260px] sm:w-[140px] sm:h-[140px] lg:h-32"
                    src={Mask3}
                    alt="Image"
                  />
                  <div className="sm:w-[320px] sm:h-[129px] flex flex-col gap-3 items-center justify-center sm:items-start sm:justify-start">
                    <h4 className="text-gray-400">Free Patterns</h4>
                    <h2 className="font-bold w-60 lg:w-52 lg:text-sm text-lg text-center sm:text-start">
                      Beach Blanket - FREE DOWNLOAD{" "}
                    </h2>
                    <img className="w-24" src={frame} alt="Image" />
                  </div>
                </div>
              </a>
              <hr className=" text-black w-4/5 lg:w-full sm:me-12" />
              <a href="#" className="sm:max-w-[550px] sm:h-[140px]">
                <div className="flex flex-col md:flex-row gap-5 sm:gap-10">
                  <img
                    className="w-[260px] sm:w-[140px] sm:h-[140px] lg:h-32"
                    src={Mask4}
                    alt="Image"
                  />
                  <div className="sm:w-[320px] sm:h-[129px] flex flex-col gap-3 items-center justify-center sm:items-start sm:justify-start">
                    <h4 className="text-gray-400">Editorial Features</h4>
                    <h2 className="font-bold w-60 lg:w-52 lg:text-sm text-lg text-center sm:text-start">
                      Lemon Sorbet by TeriAnn Harms{" "}
                    </h2>
                    <img className="w-24" src={frame} alt="Image" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 7) */}
      <div className="mx-[20px] sm:mx-[60px] w-[260px] sm:w-full h-[108px] flex items-center justify-center my-10 ms-7 sm:ms-0 mt-[100px]">
        <div className="font-bold text-[28px] lg:min-w-96 max-w-2xl text-center">
          <p className="text-center sm:w-[624px] sm:h-[66px] lg:w-[800px] lg:h-[84px]">
            Follow us on social media as we always have something exciting to
            share <span className="text-[#E2A856]">#NorthcottFabrics</span>
          </p>
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
  );
};

export default Body;
