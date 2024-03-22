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
    // <div className="w-[320px] h-[172px] sm:w-[745px] sm:h-[399px] xl:w-[1280px] xl:h-[687px] 2xl:w-[1728px] 2xl:h-[926px] flex items-center justify-center">
    <div className="w-full h-[172px] sm:h-[399px] xl:h-[687px] 2xl:h-[926px] flex items-center justify-center">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
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
              max: 1725,
              min: 1024,
              // max: 3000,
              // min: 1024,
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
    </div>
  );
}
