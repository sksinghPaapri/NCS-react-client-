import { useState, useEffect } from "react";

// export default function Carousel({
//   children: slides,
//   autoSlide = false,
//   autoSlideInterval = 3000,
// }) {
//   const [curr, setCurr] = useState(0);

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, []);
//   return (
//     <div className="overflow-hidden relative">
//       <div
//         className="flex transition-transform ease-out duration-1000"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-2 rounded-full shadow bg-white/90 text-black hover:bg-white/10"
//         >
//           {" "}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5 8.25 12l7.5-7.5"
//             />
//           </svg>
//         </button>
//         <button
//           onClick={next}
//           className="p-2 rounded-full shadow bg-white/90 text-black hover:bg-white/10"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m8.25 4.5 7.5 7.5-7.5 7.5"
//             />
//           </svg>
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {slides.map((_, i) => (
//             <div
//               className={`
//               transition-all w-3 h-3 bg-black/50 rounded-full
//               ${curr === i ? "p-2 bg-black/80" : "bg-opacity-50"}
//             `}
//               key={i}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

const Carousel = () => {
  return <div>Carousel</div>;
};

export default Carousel;
