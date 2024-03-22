import { Link } from "react-router-dom";
import C3 from "../../../../../assets/CarouselImages/C3.jpg";
import C5 from "../../../../../assets/CarouselImages/C5.jpg";
import C6 from "../../../../../assets/CarouselImages/C6.jpg";
import C7 from "../../../../../assets/CarouselImages/C7.jpg";
import C8 from "../../../../../assets/CarouselImages/C8.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselTop() {
  const images = [C3, C5, C6, C7, C8];

  return (
    <div className="w-[320px] h-[172px] sm:w-[745px] sm:h-[399px] xl:w-[1280px] xl:h-[687px] 2xl:w-[1728px] 2xl:h-[926px] flex items-center justify-center">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {images?.map((item, index) => (
          <img
            src={item}
            alt="Images"
            key={index}
            className="object-cover w-full"
          />
        ))}
      </Carousel>

      <div
        className="w-[221px] h-[132px] sm:w-[449px] sm:h-[243px] xl:w-[489px] xl:h-[284px] absolute bg-black/80"
        style={{ fontFamily: "Open Sans" }}
      >
        <div className="mx-[30px] my-[20px] sm:mx-[80px] sm:my-[35px] xl:mx-[100px] xl:my-[40px] flex flex-col items-center justify-between gap-[10px] sm:gap-[20px] xl:gap-[40px]">
          <div className="w-[161px] h-[48px] sm:w-[289px] sm:h-[104px] xl:w-[289px] xl:h-[115px] flex flex-col items-center justify-between text-white">
            <div
              className="w-[84px] h-[33px] sm:w-[195px] sm:h-[77px] xl:w-[223px] xl:h-[88px] text-[24px] sm:text-[56px] xl:text-[64px] text-nowrap"
              style={{ fontFamily: "DM Serif Display" }}
            >
              20% Off
            </div>
            <div className="w-[161px] h-[15px] sm:w-[289px] sm:h-[27px] text-[10px] sm:text-[18px] font-bold">
              Example Promotion Banner Sale
            </div>
          </div>
          <Link
            to={"/"}
            className="w-[106px] h-[34px] sm:w-[148px] sm:h-[49px] uppercase bg-[#E2A856] text-black flex items-center justify-center rounded cursor-pointer hover:bg-black/20 hover:text-[#E2A856] hover:border-2 hover:border-[#E2A856]"
          >
            shop now
          </Link>
        </div>
      </div>
    </div>
  );
}
