import NorthcottFabricBg from "../../../../assets/bodyFabrics/NorthcottFabricBg.svg";
import arrow_right_alt from "../../../../assets/BodyFeaturedCategory/arrow_right_alt.svg";
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
import Property1 from "../../../../assets/Resources/Property1.svg";
import Designer from "../../../../assets/BodyFeaturedCategory/Designer.svg";
import Mask from "../../../../assets/others/Mask.png";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import CarouselTop from "./BodyComponents/CarouselTop";
import { Link } from "react-router-dom";
import ImageSliderBottom from "../../../../pages/about/ImageSliderBottom";

const Body = () => {
  const featuredCategory = [
    { img: No1, title: "Holiday 2023 Release Collections" },
    { img: No2, title: "September 2023 Release Collections" },
    { img: No3, title: "September 2023 Collection Precuts" },
    { img: No4, title: "April 2023 Release Collections" },
    { img: No5, title: "April 2023 Collection Precuts" },
    { img: No6, title: "Coming Soon" },
  ];
  return (
    <div
      className="flex items-center justify-center w-full"
      style={{ fontFamily: "Open Sans" }}
    >
      <div className="w-full h-[9823.73px] sm:h-[9879.77px] xl:h-[6228px] 2xl:h-[6534.61px] flex flex-col items-center gap-y-[80px] sm:gap-[100px]">
        {/* <div className="w-full min-w-[320px] h-[9823.73px] sm:w-[745px] sm:h-[9879.77px] xl:w-[1280px] xl:h-[6228px] 2xl:w-[1728px] 2xl:h-[6534.61px] flex flex-col items-center gap-y-[80px] sm:gap-[100px]"> */}
        {/* row1 */}
        {/* <div className="w-[320px] h-[172px] sm:w-[745px] sm:h-[399px] xl:w-[1280px] xl:h-[687px] 2xl:w-[1728px] 2xl:h-[926px] flex items-center justify-center"> */}
        <div className="w-full h-[172px] sm:h-[399px] xl:h-[687px] 2xl:h-[926px] flex items-center justify-center">
          <CarouselTop />
        </div>

        {/* row2 */}
        <div className="w-[320px] h-[1193.73px] sm:w-[744px] sm:h-[1432px] xl:w-[1280px] xl:h-[661px] 2xl:w-[1320px] flex flex-col items-center justify-center gap-10 mx-[20px] sm:mx-[60px]">
          {/* whats new heading */}
          <div
            className=" w-[280px] sm:w-[624px] xl:w-[1160px] 2xl:w-[1200px] h-[44px] sm:h-[60px] xl:h-[66px] text-[32px] sm:text-[44px] xl:text-[48px] text-center xl:text-start"
            style={{ fontFamily: "DM Serif Display" }}
          >
            What's New
          </div>
          {/* 1 and 2 card for all and 3 card for mobile only */}
          <div className="sm:w-[624px] sm:h-[1332px] xl:w-[1160px] xl:h-[555px] 2xl:w-[1200px] sm:flex sm:flex-col xl:flex-row sm:items-center sm:justify-center xl:justify-between sm:gap-[80px] xl:gap-[60px] 2xl:gap-[100px]">
            {/* 1st card */}
            <div className="w-[280px] h-[343.24px] sm:w-[624px] sm:h-[626px] xl:w-[550px] xl:h-[555px] flex flex-col items-center justify-between xl:items-start">
              <img
                src={Mask}
                alt="Image"
                className="w-[280px] h-[201.24px] sm:w-[624px] sm:h-[468.56px] xl:w-[550px] xl:h-[413px]"
              />
              <div className="w-[211px] h-[112px] flex flex-col justify-between items-center xl:items-start">
                <div
                  className="w-[211px] h-[33px] text-[24px] flex items-center justify-center xl:justify-start"
                  style={{ fontFamily: "DM Serif Display" }}
                >
                  Promotion Example
                </div>
                <div className="w-[148px] h-[49px] flex justify-center items-center xl:justify-start">
                  <button
                    type="button"
                    className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded text-center w-[148px] h-[49px] text-[16px]"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
            {/* 2nd card */}
            <div className="my-[40px] sm:my-0 w-[280px] h-[343.24px] sm:w-[624px] sm:h-[626px] xl:w-[550px] xl:h-[555px] flex flex-col items-center justify-between xl:items-start">
              <img
                src={Mask}
                alt="Image"
                className="w-[280px] h-[201.24px] sm:w-[624px] sm:h-[468.56px] xl:w-[550px] xl:h-[413px]"
              />
              <div className="w-[257px] h-[112px] flex flex-col justify-between items-center xl:items-start">
                <div
                  className="w-[211px] h-[33px] text-[24px] flex items-center justify-center xl:justify-start text-nowrap"
                  style={{ fontFamily: "DM Serif Display" }}
                >
                  New Collection Example
                </div>
                <div className="w-[148px] h-[49px] flex justify-center items-center xl:justify-start">
                  <button
                    type="button"
                    className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded text-center w-[148px] h-[49px] text-[16px]"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>

            {/* 3rd card for mobile only */}
            <div className="sm:hidden w-[280px] h-[343.24px] sm:w-[624px] sm:h-[626px] xl:w-[550px] xl:h-[555px] flex flex-col items-center justify-between xl:items-start">
              <img
                src={Mask}
                alt="Image"
                className="w-[280px] h-[201.24px] sm:w-[624px] sm:h-[468.56px] xl:w-[550px] xl:h-[413px]"
              />
              <div className="w-[257px] h-[112px] flex flex-col justify-between items-center xl:items-start">
                <div
                  className="w-[211px] h-[33px] text-[24px] flex items-center justify-center xl:justify-start text-nowrap"
                  style={{ fontFamily: "DM Serif Display" }}
                >
                  New Collection Example
                </div>
                <div className="w-[148px] h-[49px] flex justify-center items-center xl:justify-start">
                  <button
                    type="button"
                    className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded text-center w-[148px] h-[49px] text-[16px]"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd row */}
        {/* 3rd card */}
        <div
          className="w-[320px] h-[499px] sm:w-[744px] sm:h-[560.77px] xl:w-[1280px] xl:h-[745px] 2xl:w-[1320px] 2xl:h-[812.61px] flex flex-col items-center justify-center gap-[40px]"
          style={{ fontFamily: "DM Serif Display" }}
        >
          {/* heading */}
          <div className="text-[32px] sm:text-[44px] xl:text-[48px] w-[164px] h-[44px] sm:w-[225px] sm:h-[60px] xl:w-[246px] xl:h-[66px]">
            What's New
          </div>
          {/* card 3 */}
          <div className="w-[280px] h-[415px] sm:w-[744px] sm:h-[460.77px] xl:w-[1160px] xl:h-[639px] 2xl:w-[1200px] 2xl:h-[706.61px] flex flex-col items-center justify-between">
            <img
              src={Mask}
              alt="Image"
              className="w-full h-[240px] sm:h-[318.77px] xl:w-[1160px] xl:h-[497px] 2xl:w-[1200px] 2xl:h-[564.61px]"
            />
            <div className="w-[240px] h-[145px] sm:w-[324px] sm:h-[112px] flex flex-col justify-between items-center">
              <div
                className="w-[240px] h-[66px] sm:text-nowrap text-[24px] sm:w-[324px] sm:h-[33px] flex items-center justify-center xl:justify-start text-center"
                style={{ fontFamily: "DM Serif Display" }}
              >
                Promotion Collection Example
              </div>
              <div className="w-[240px] h-[49px] flex justify-center items-center">
                <button
                  type="button"
                  className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded text-center w-[240px] h-[49px] text-[16px]"
                  style={{ fontFamily: "Open Sans" }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4) */}
        {/* Northcott Fabrics */}
        <div className="w-full h-[664px] sm:h-[390px] xl:h-[369px] flex flex-col items-center justify-center text-white relative">
          {/* <div className="w-[320px] h-[664px] sm:w-[744px] sm:h-[390px] xl:w-[1280px] xl:h-[369px] 2xl:w-[1728px] flex flex-col items-center justify-center text-white bg-black relative"> */}
          {/* img */}
          <img
            src={NorthcottFabricBg}
            alt="Fabrics"
            // className="w-[320px] h-[664px] sm:w-[744px] sm:h-[390px] xl:w-[1280px] xl:h-[369px] 2xl:w-[1728px] object-cover"
            className="w-[320px] sm:w-[768px] xl:w-[1440px] 2xl:w-[2560px] h-[664px] sm:h-[390px] xl:h-[369px] object-cover"
          />
          {/* text */}
          <div className="w-[200px] h-[544px] sm:w-[624px] sm:h-[270px] xl:w-[800px] xl:h-[249px] flex flex-col items-center justify-center text-center text-white absolute">
            <div
              className="w-[200px] h-[88px] sm:w-[624px] sm:h-[66px] xl:w-[800px] flex justify-center text-3xl text-center items-center"
              style={{ fontFamily: "DM Serif Display" }}
            >
              Northcott Fabrics
            </div>
            <div className="mt-[20px] mb-[30px] w-[200px] h-[357px] sm:w-[624px] sm:h-[105px] xl:w-[800px] xl:h-[84px] text-[14px]">
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
          {/* </img> */}
          {/* </div> */}
        </div>
        {/* 5) */}
        {/* Featured Categories */}
        <div className="w-[320px] h-[2788px] sm:w-[744px] sm:h-[3338px] xl:w-[1280px] xl:h-[1172px] 2xl:w-[1320px] flex flex-col items-center justify-center gap-[40px] mx-[20px] sm:mx-[40px] xl:mx-[60px]">
          {/* heading */}
          <div
            className="w-[280px] h-[64px] sm:w-[664px] sm:h-[80px] xl:w-[1160px] xl:h-[86px] 2xl:w-[1200px] text-center text-[32px] sm:text-[44px] xl:text-[48px] pb-[20px] text-nowrap"
            style={{ fontFamily: "DM Serif Display" }}
          >
            Featured Categories
          </div>
          <div className="grid grid-rows-6 xl:grid-rows-2 grid-flow-col gap-y-[40px] xl:gap-x-[62.5px] 2xl:gap-x-[82.5px]">
            {featuredCategory?.map((item, index) => (
              <div
                key={index}
                className="col-span-1 w-[260px] h-[412px] sm:w-[345px] sm:h-[503px] flex flex-col items-center justify-center bg-white gap-[30px]  border border-gray-400"
              >
                <img
                  className="w-[260px] h-[260px] sm:w-[345px] sm:h-[345px] object-cover"
                  src={item?.img}
                  alt="Image"
                />
                <div className="w-[260px] h-[122px] sm:w-[345px] sm:h-[128px] flex flex-col justify-center gap-[20px]">
                  <div className="w-[220px] h-[48px] sm:w-[305px] sm:h-[54px] flex  font-bold text-[16px] sm:text-[18px] mx-[20px]">
                    {item?.title}
                  </div>
                  <div className="w-[110px] h-[24px] sm:w-[305px] sm:h-[54px] flex items-center font-bold  text-[#E2A856] gap-[9px] text-[16px] mx-[20px] mb-[30px]">
                    <p>Shop Now</p>
                    <p>
                      <img src={arrow_right_alt} alt="Arrow" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 6) */}
        {/* featured designer */}
        <div className="w-[320px] sm:w-auto h-[892px] sm:h-[911px] xl:h-[570px] flex items-center justify-center text-white bg-[#F0EFEB]">
          <div className="min-w-[320px] h-[772px] sm:min-w-[650px] sm:h-[791px] xl:w-[1280px] xl:h-[450px] 2xl:w-[1728px] flex flex-col xl:flex-row gap-[40px] xl:gap-[120px] items-center justify-center my-[60px] mx-[20px] sm:m-[60px] xl:mx-[80px] xl:my-[60px] 2xl:my-[60px] 2xl:mx-[204px]">
            {/* img */}
            <img
              src={Designer}
              alt="Image"
              className="h-[260px] w-[260px] rounded-full sm:h-[450px] sm:w-[450px] object-cover"
            />
            {/* content */}
            <div className="w-[280px] h-[472px] sm:w-[550px] sm:h-[301px] xl:h-[307px] flex flex-col gap-[30px] items-center justify-center text-center xl:text-left text-black xl:items-start">
              <div className="w-[214px] h-[374px] sm:w-[550px] sm:h-[222px] xl:h-[228px] flex flex-col items-center justify-center gap-[20px] xl:items-start">
                <div className="w-[214px] h-[81px] sm:w-[293px] sm:h-[97px] xl:w-[320px] xl:h-[103px] flex flex-col items-center justify-between gap-[10px] xl:items-start">
                  <h1
                    className="italic text-[20px] w-[156px] h-[27px] sm:w-[156px]"
                    style={{ fontFamily: "DM Serif Display" }}
                  >
                    Featured Designer
                  </h1>
                  <h1
                    className="text-[32px] sm:text-[44px] xl:text-[48px] w-[214px] h-[44px] sm:w-[293px] sm:h-[60px] xl:w-[320px] xl:h-[66px]"
                    style={{ fontFamily: "DM Serif Display" }}
                  >
                    Designer Name
                  </h1>
                </div>
                <p className="w-[214px] h-[273px] sm:w-[550px] sm:h-[105px] text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse et dolore
                  magna aliqua cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              {/* button */}
              <div className="w-[280px] h-[68px] sm:w-[351px] sm:h-[49px] flex items-center justify-center">
                <button
                  type="button"
                  className="w-[280px] h-[68px] sm:w-[351px] sm:h-[49px] uppercase font-semibold text-black bg-[#E2A856] hover:text-[#E2A856] hover:bg-[#CECECC] hover:border-2 hover:border-[#E2A856] rounded-sm text-[16px] text-center"
                >
                  Shop designer name’s collection
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 7) */}
        {/* Resources */}
        <div className="w-[320px] h-[2593px] sm:w-[744px] sm:h-[1728px] xl:w-[1280px] xl:h-[773px] 2xl:w-[1320px] flex flex-col items-center justify-center">
          <div className="mx-[20px] sm:mx-[60px] flex flex-col items-center justify-center gap-[40px]">
            {/* top heading and button */}
            <div className="w-[217px] h-[155px] sm:w-[199px] sm:h-[149px] xl:w-[1160px] xl:h-[66px] 2xl:w-[1200px] flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-[40px] xl:gap-0">
              <div
                className="w-[217px] h-[66px] sm:w-[199px] sm:h-[60px] xl:w-[217px] 2xl:w-[217px] 2xl:h-[66px] text-center lg:text-left text-[32px] sm:text-[44px] xl:text-[48px]"
                style={{ fontFamily: "DM Serif Display" }}
              >
                Resources
              </div>
              <button
                type="button"
                className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded text-center  w-[132px] h-[49px] text-[16px]"
              >
                VIEW ALL
              </button>
            </div>

            {/* content */}
            <div className="w-[280px] h-[2398px] sm:w-[624px] sm:h-[1539px] xl:w-[1160px] xl:h-[667px] 2xl:w-[1200px] flex flex-col items-center justify-center xl:flex-row xl:justify-between gap-[80px] xl:gap-0">
              {/* left side */}
              <div className="w-[280px] h-[462px] sm:w-[624px] sm:h-[779px] xl:w-[515px] xl:h-[667px] flex flex-col items-center justify-center bg-white gap-[30px]  border border-gray-400">
                <img
                  className="w-[280px] h-[280px] sm:w-[624px] sm:h-[624px] xl:w-[515px] xl:h-[515px] 2xl:w-[512px] 2xl:h-[512px] object-cover"
                  src={Property1}
                  alt="Image"
                />
                <div className="w-[280px] h-[152px] sm:w-[624px] sm:h-[125px] xl:w-[515px] xl:h-[122px] 2xl:w-[512px] flex flex-col justify-center gap-[20px]">
                  <div className="mx-[20px] mb-[20px] flex flex-col justify-between gap-[20px]">
                    <div className="w-[240px] h-[88px] sm:w-[584px] sm:h-[61px] xl:w-[475px] xl:h-[58px] 2xl:w-[472px] flex flex-col items-center justify-center gap-[10px]">
                      <div className="w-[240px] h-[24px] sm:w-[584px] xl:w-[475px] xl:h-[21px] 2xl:w-[472px] flex  text-[14px] text-[#6B6B66]">
                        Editorial Features
                      </div>
                      <div className="w-[240px] h-[54px] sm:w-[584px] xl:w-[475px] sm:h-[27px] 2xl:w-[472px] flex font-bold text-[18px]">
                        Follow The Star by TeriAnn Harms
                      </div>
                    </div>
                    <div className="w-[115px] h-[24px] flex items-center justify-start font-bold text-[#E2A856] gap-[9px] text-[16px] mb-[30px]">
                      <p>Read More</p>
                      <p>
                        <img src={arrow_right_alt} alt="Arrow" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* right side */}
              <div className="w-[280px] h-[1856px] sm:w-[624px] sm:h-[680px] xl:w-[550px] xl:h-[667px] flex flex-col items-center sm:items-start gap-[40px] sm:gap-[20px] xl:gap-[17.83px]">
                <Link
                  to="/"
                  className="w-[280px] h-[416px] sm:w-[550px] sm:h-[140px] flex flex-col items-center justify-center gap-[30px] sm:flex-row sm:justify-start"
                >
                  <img
                    className="w-[260px] h-[260px] sm:w-[140px] sm:h-[140px] object-cover"
                    src={Mask1}
                    alt="Image"
                  />
                  <div className="w-[260px] h-[126px] sm:w-[320px] sm:h-[129px] flex flex-col justify-between gap-[20px]">
                    <div className="w-[260px] h-[82px] sm:w-[320px] sm:h-[85px] flex flex-col items-center justify-center gap-[10px]">
                      <div className="w-[260px] h-[24px] sm:w-[320px] sm:h-[21px] flex text-[14px] text-[#6B6B66]">
                        Free Patterns
                      </div>
                      <div className="w-[260px] h-[48px] sm:w-[320px] sm:h-[54px] flex font-bold text-[18px] ">
                        Patrick Lose Cake Block - FREE DOWNLOAD
                      </div>
                    </div>
                    <div className="w-[115px] h-[24px] flex items-center justify-start font-bold text-[#E2A856] gap-[9px] text-[16px]">
                      <p>Read More</p>
                      <p>
                        <img src={arrow_right_alt} alt="Arrow" />
                      </p>
                    </div>
                  </div>
                </Link>
                <hr className=" text-black h-[1px] w-[ 280px] sm:w-[624px] xl:w-[550px]" />
                <Link
                  to="/"
                  className="w-[280px] h-[416px] sm:w-[550px] sm:h-[140px] flex flex-col items-center justify-center gap-[30px] sm:flex-row sm:justify-start"
                >
                  <img
                    className="w-[260px] h-[260px] sm:w-[140px] sm:h-[140px] object-cover"
                    src={Mask2}
                    alt="Image"
                  />
                  <div className="w-[260px] h-[126px] sm:w-[320px] sm:h-[129px] flex flex-col justify-between gap-[20px]">
                    <div className="w-[260px] h-[82px] sm:w-[320px] sm:h-[85px] flex flex-col items-center justify-center gap-[10px]">
                      <div className="w-[260px] h-[24px] sm:w-[320px] sm:h-[21px] flex text-[14px] text-[#6B6B66]">
                        Get Inspired!
                      </div>
                      <div className="w-[260px] h-[48px] sm:w-[320px] sm:h-[54px] flex font-bold text-[18px] ">
                        Whiskers and Wine
                      </div>
                    </div>
                    <div className="w-[115px] h-[24px] flex items-center justify-start font-bold text-[#E2A856] gap-[9px] text-[16px]">
                      <p>Read More</p>
                      <p>
                        <img src={arrow_right_alt} alt="Arrow" />
                      </p>
                    </div>
                  </div>
                </Link>
                <hr className=" text-black h-[1px] w-[ 280px] sm:w-[624px] xl:w-[550px]" />
                <Link
                  to="/"
                  className="w-[280px] h-[416px] sm:w-[550px] sm:h-[140px] flex flex-col items-center justify-center gap-[30px] sm:flex-row sm:justify-start"
                >
                  <img
                    className="w-[260px] h-[260px] sm:w-[140px] sm:h-[140px] object-cover"
                    src={Mask3}
                    alt="Image"
                  />
                  <div className="w-[260px] h-[126px] sm:w-[320px] sm:h-[129px] flex flex-col justify-between gap-[20px]">
                    <div className="w-[260px] h-[82px] sm:w-[320px] sm:h-[85px] flex flex-col items-center justify-center gap-[10px]">
                      <div className="w-[260px] h-[24px] sm:w-[320px] sm:h-[21px] flex text-[14px] text-[#6B6B66]">
                        Editorial Features
                      </div>
                      <div className="w-[260px] h-[24px] sm:w-[320px] sm:h-[54px] flex font-bold text-[18px] ">
                        Lemon Sorbet by TeriAnn Harms
                      </div>
                    </div>
                    <div className="w-[115px] h-[24px] flex items-center justify-start font-bold text-[#E2A856] gap-[9px] text-[16px]">
                      <p>Read More</p>
                      <p>
                        <img src={arrow_right_alt} alt="Arrow" />
                      </p>
                    </div>
                  </div>
                </Link>
                <hr className=" text-black h-[1px] w-[ 280px] sm:w-[624px] xl:w-[550px]" />
                <Link
                  to="/"
                  className="w-[280px] h-[416px] sm:w-[550px] sm:h-[140px] flex flex-col items-center justify-center gap-[30px] sm:flex-row sm:justify-start"
                >
                  <img
                    className="w-[260px] h-[260px] sm:w-[140px] sm:h-[140px] object-cover"
                    src={Mask4}
                    alt="Image"
                  />
                  <div className="w-[260px] h-[126px] sm:w-[320px] sm:h-[129px] flex flex-col justify-between gap-[20px]">
                    <div className="w-[260px] h-[82px] sm:w-[320px] sm:h-[85px] flex flex-col items-center justify-center gap-[10px]">
                      <div className="w-[260px] h-[24px] sm:w-[320px] sm:h-[21px] flex text-[14px] text-[#6B6B66]">
                        Free Patterns
                      </div>
                      <div className="w-[260px] h-[24px] sm:w-[320px] sm:h-[54px] flex font-bold text-[18px] ">
                        Beach Blanket - FREE DOWNLOAD
                      </div>
                    </div>
                    <div className="w-[115px] h-[24px] flex items-center justify-start font-bold text-[#E2A856] gap-[9px] text-[16px]">
                      <p>Read More</p>
                      <p>
                        <img src={arrow_right_alt} alt="Arrow" />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 8) */}
        <div className="w-[320px] h-[382px] sm:w-[744px] sm:h-[321px] xl:w-[1280px] xl:h-[451px] 2xl:w-[1320px] gap-[60px] sm:gap-[40px] flex flex-col items-center justify-center">
          <div className="w-[280px] h-[108px] sm:w-[624px] sm:h-[66px] xl:w-[800px] xl:h-[84px] text-[18px] sm:text-[22px] xl:text-[28px] font-bold text-center flex items-center justify-center flex-col">
            <p className="">
              Follow us on social media as we always have something exciting to
              share{" "}
              <span className="italic text-[#E2A856]"> #NorthcottFabrics</span>
            </p>
          </div>
          {/* <Carousel /> */}
          <div className="w-[280px] h-[130px] sm:w-[624px] sm:h-[150px] xl:w-[1160px] xl:h-[260px] 2xl:w-[1200px]">
            <ImageSliderBottom />
          </div>
          {/* body footer */}
          <div className="w-[246px] h-[24px] sm:w-[296px] sm:h-[25px] xl:w-[309px] xl:h-[27px]">
            <div className="flex flex-row items-center justify-center">
              <div className="w-[102px] h-[24px] xl:w-[115px] xl:h-[27px] text-[16px] sm:text-[18px] text-nowrap">
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

export default Body;
