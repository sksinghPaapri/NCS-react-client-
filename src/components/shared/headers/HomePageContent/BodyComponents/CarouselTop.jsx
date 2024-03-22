import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiChevronLeft } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import C3 from "../../../../../assets/CarouselImages/C3.jpg";
import C5 from "../../../../../assets/CarouselImages/C5.jpg";
import C6 from "../../../../../assets/CarouselImages/C6.jpg";
import C7 from "../../../../../assets/CarouselImages/C7.jpg";
import C8 from "../../../../../assets/CarouselImages/C8.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CarouselTop() {
  const slides = [C3, C5, C6, C7, C8];
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="absolute top-48 md:top-96 lg:top-96 mb-4 gap-4 flex justify-between
        items-center w-full"
      >
        <button
          className="block p-3 bg-slate-300/55 ms-0 md:ms-10 lg:ms-20 rounded-full hover:bg-slate-300/100"
          onClick={() => previous()}
        >
          {" "}
          <FiChevronLeft />
        </button>
        <button onClick={() => next()}>
          <span className="block p-3 bg-slate-300/55 me-0 md:me-10 lg:me-20 rounded-full hover:bg-slate-300/100">
            <BiChevronRight />
          </span>
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="w-full relative">
        <Carousel
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          centerMode={false}
          responsive={responsive}
          infinite={true}
          showDots={true}
          autoPlaySpeed={1000}
          focusOnSelect={true}
          additionalTransfrom={0}
          keyBoardControl
        >
          {slides.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={item} className="object-cover" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

// import { FiChevronLeft } from "react-icons/fi";
// import { BiChevronRight } from "react-icons/bi";
// import C3 from "../../../../../assets/CarouselImages/C3.jpg";
// import C5 from "../../../../../assets/CarouselImages/C5.jpg";
// import C6 from "../../../../../assets/CarouselImages/C6.jpg";
// import C7 from "../../../../../assets/CarouselImages/C7.jpg";
// import C8 from "../../../../../assets/CarouselImages/C8.jpg";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// export default function ImageSliderBottom() {
//   const images = [C3, C5, C6, C7, C8];

//   return (
//     <div className="">
//       <Carousel
//         additionalTransfrom={0}
//         arrows
//         autoPlay
//         autoPlaySpeed={2000}
//         centerMode={true}
//         className=""
//         containerclassName="container-with-dots"
//         dotListclassName=""
//         draggable
//         focusOnSelect={false}
//         infinite
//         itemclassName=""
//         keyBoardControl
//         minimumTouchDrag={80}
//         pauseOnHover
//         renderArrowsWhenDisabled={false}
//         renderButtonGroupOutside={false}
//         renderDotsOutside={false}
//         responsive={{
//           desktop: {
//             breakpoint: {
//               max: 1728,
//               min: 1280,
//             },
//             items: 1,
//             partialVisibilityGutter: 40,
//           },
//           mobile: {
//             breakpoint: {
//               max: 745,
//               min: 320,
//             },
//             items: 1,
//             partialVisibilityGutter: 30,
//           },
//           tablet: {
//             breakpoint: {
//               max: 1280,
//               min: 745,
//             },
//             items: 1,
//             partialVisibilityGutter: 30,
//           },
//         }}
//         rewind={false}
//         rewindWithAnimation={false}
//         rtl={false}
//         shouldResetAutoplay
//         showDots={true}
//         sliderclassName=""
//         slidesToSlide={1}
//         swipeable
//       >
//         {images.map((item, index) => (
//           <div key={index}>
//             <img
//               src={item}
//               alt="Product"
//               className="w-[320px] h-[172px] sm:w-[745px] sm:h-[399px] xl:w-[1280px] xl:h-[687px] 2xl:w-[1728px] 2xl:h-[926px] object-cover"
//             />
//             a
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }
