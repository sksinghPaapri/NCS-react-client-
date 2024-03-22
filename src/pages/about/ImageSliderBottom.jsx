import Rectangle1 from "../../assets/BodyLogos/Rectangle1.svg";
import Rectangle2 from "../../assets/BodyLogos/Rectangle2.svg";
import Rectangle3 from "../../assets/BodyLogos/Rectangle3.svg";
import Rectangle4 from "../../assets/BodyLogos/Rectangle4.svg";
import Rectangle5 from "../../assets/BodyLogos/Rectangle5.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ImageSliderBottom() {
  const images = [Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5];

  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
        centerMode={true}
        className=""
        containerclassName="container-with-dots"
        dotListclassName=""
        draggable
        focusOnSelect={false}
        infinite
        itemclassName=""
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
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderclassName=""
        slidesToSlide={1}
        swipeable
      >
        {images.map((item, index) => (
          <div key={index}>
            <img
              src={item}
              alt="Product"
              className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] xl:w-[260px] xl:h-[260px] object-cover px-1 sm:px-2"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
