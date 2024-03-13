import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rectangle1 from "../../assets/BodyLogos/Rectangle1.svg";
import Rectangle2 from "../../assets/BodyLogos/Rectangle2.svg";
import Rectangle3 from "../../assets/BodyLogos/Rectangle3.svg";
import Rectangle4 from "../../assets/BodyLogos/Rectangle4.svg";
import Rectangle5 from "../../assets/BodyLogos/Rectangle5.svg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

export default function AboutUsCarouselBottom() {
  const slides = [Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5];

  return (
    <>
      <div className=" bg-white">
        <Carousel
          arrows
          centerMode={true}
          responsive={responsive}
          infinite={true}
          showDots={true}
          autoPlaySpeed={500}
          focusOnSelect={true}
          className="mx-6"
        >
          {slides.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-[200px] h-[130px] w-[260px] sm:h-[150px] sm:w-[624px] lg:w-[1200px] lg:h-[260px] lg:object-cover"
            >
              <img src={item} className="" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
