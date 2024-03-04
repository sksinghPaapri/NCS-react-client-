// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import C1 from "../../../assets/CarouselImages/C1.jpg";
// import C2 from "../../../assets/CarouselImages/C2.jpg";
// import C3 from "../../../assets/CarouselImages/C3.jpg";
// import C4 from "../../../assets/CarouselImages/C4.jpg";
// import C5 from "../../../assets/CarouselImages/C5.jpg";
// import C6 from "../../../assets/CarouselImages/C6.jpg";
// import C7 from "../../../assets/CarouselImages/C7.jpg";
// import C8 from "../../../assets/CarouselImages/C8.jpg";

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// export default function CarouselTop() {
//   const slides = [C1, C2, C3, C4, C5, C6, C7, C8];
//   return (
//     <>
//       <div className="w-full">
//         <Carousel
//           arrows
//           centerMode={false}
//           responsive={responsive}
//           infinite={true}
//           showDots={true}
//           autoPlaySpeed={1000}
//           focusOnSelect={true}
//           additionalTransfrom={0}
//           keyBoardControl
//         >
//           {slides.map((item, index) => (
//             <div key={index} className="flex items-center justify-center">
//               <img src={item} className="object-cover" />
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </>
//   );
// }

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { FiChevronLeft } from "react-icons/fi";
// import { BiChevronRight } from "react-icons/bi";
// import C1 from "../../../../../assets/CarouselImages/C1.jpg";
// import C2 from "../../../../../assets/CarouselImages/C2.jpg";
// import C3 from "../../../../../assets/CarouselImages/C3.jpg";
// import C4 from "../../../../../assets/CarouselImages/C4.jpg";
// import C5 from "../../../../../assets/CarouselImages/C5.jpg";
// import C6 from "../../../../../assets/CarouselImages/C6.jpg";
// import C7 from "../../../../../assets/CarouselImages/C7.jpg";
// import C8 from "../../../../../assets/CarouselImages/C8.jpg";

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// export default function CarouselTop() {
//   const slides = [C3, C5, C6, C7, C8];
//   const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//     const {
//       carouselState: { currentSlide },
//     } = rest;
//     return (
//       <div
//         className="absolute top-40 md:top-56 lg:top-96 mb-4 gap-4 flex justify-between
//         items-center w-full"
//       >
//         <button
//           className="block p-3 bg-slate-300/45 ms-0 md:ms-10 lg:ms-20 rounded-full hover:bg-slate-400"
//           onClick={() => previous()}
//         >
//           {" "}
//           <FiChevronLeft />
//         </button>
//         <button onClick={() => next()}>
//           <span className="block p-3 bg-slate-300/45 me-0 md:me-10 lg:me-20 rounded-full hover:bg-slate-400">
//             <BiChevronRight />
//           </span>
//         </button>
//       </div>
//     );
//   };
//   return (
//     <>
//       <div className="w-full relative">
//         <Carousel
//           arrows={false}
//           renderButtonGroupOutside={true}
//           customButtonGroup={<ButtonGroup />}
//           centerMode={false}
//           responsive={responsive}
//           infinite={true}
//           showDots={true}
//           autoPlaySpeed={1000}
//           focusOnSelect={true}
//           additionalTransfrom={0}
//           keyBoardControl
//         >
//           {slides.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center h-[426px] sm:h-[687px] max-h-[927px] w-auto lg:mt-28"
//             >
//               <img
//                 src={item}
//                 className="h-[426px] w-[320px] sm:h-[680px] sm:w-[744px]  xl:h-[927px] object-fill"
//               />
//               {/* <img src={item} className="object-cover" /> */}
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </>
//   );
// }

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import C1 from "../../../assets/CarouselImages/C1.jpg";
// import C2 from "../../../assets/CarouselImages/C2.jpg";
// import C3 from "../../../assets/CarouselImages/C3.jpg";
// import C4 from "../../../assets/CarouselImages/C4.jpg";
// import C5 from "../../../assets/CarouselImages/C5.jpg";
// import C6 from "../../../assets/CarouselImages/C6.jpg";
// import C7 from "../../../assets/CarouselImages/C7.jpg";
// import C8 from "../../../assets/CarouselImages/C8.jpg";

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// export default function CarouselTop() {
//   const slides = [C1, C2, C3, C4, C5, C6, C7, C8];
//   return (
//     <>
//       <div className="w-full">
//         <Carousel
//           arrows
//           centerMode={false}
//           responsive={responsive}
//           infinite={true}
//           showDots={true}
//           autoPlaySpeed={1000}
//           focusOnSelect={true}
//           additionalTransfrom={0}
//           keyBoardControl
//         >
//           {slides.map((item, index) => (
//             <div key={index} className="flex items-center justify-center">
//               <img src={item} className="object-cover" />
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </>
//   );
// }

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
          className="block p-3 bg-slate-300/45 ms-0 md:ms-10 lg:ms-20 rounded-full hover:bg-slate-400"
          onClick={() => previous()}
        >
          {" "}
          <FiChevronLeft />
        </button>
        <button onClick={() => next()}>
          <span className="block p-3 bg-slate-300/45 me-0 md:me-10 lg:me-20 rounded-full hover:bg-slate-400">
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
            <div
              key={index}
              className="flex items-center justify-center h-[426px] sm:h-[687px] max-h-[927px] w-auto xl:mt-28"
            >
              <img
                src={item}
                className="h-[426px] min-w-[320px] sm:h-[680px] sm:w-[744px] md:w-full  xl:h-[927px] object-fill lg:object-center"
              />
              {/* <img src={item} className="object-cover" /> */}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
