// import { React, useState, useEffect, useContext } from "react";
// import { Container, Card, ListGroup, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// // import Carousel from 'react-multi-carousel';
// // import 'react-multi-carousel/lib/styles.css';
// // import Slider from "react-slick";
// import Carousel from "react-elastic-carousel";

// import HomeSliders from "../../components/blocks/HomeSliders";
// import ApiService from "../../helpers/ApiServices";
// import {
//   convertHtmlToString,
//   getModelRoute,
//   showMessage,
// } from "../../helpers/Utils";
// import { CustomerContext } from "../../states/contexts/CustomerContext";
// import { UserContext } from "../../states/contexts/UserContext";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// import No1 from "../../assets/BodyFeaturedCategory/No1.svg";
// import No2 from "../../assets/BodyFeaturedCategory/No2.svg";
// import No3 from "../../assets/BodyFeaturedCategory/No3.svg";
// import No4 from "../../assets/BodyFeaturedCategory/No4.svg";
// import No5 from "../../assets/BodyFeaturedCategory/No5.svg";
// import No6 from "../../assets/BodyFeaturedCategory/No6.svg";
// import Mask1 from "../../assets/Resources/Mask1.svg";
// import Mask2 from "../../assets/Resources/Mask2.svg";
// import Mask3 from "../../assets/Resources/Mask3.svg";
// import Mask4 from "../../assets/Resources/Mask4.svg";
// import frame from "../../assets/Resources/Frame.png";
// import Property1 from "../../assets/Resources/Property1.svg";
// import Designer from "../../assets/BodyFeaturedCategory/Designer.svg";
// import FollowUsF from "../../assets/BodyfooterLogos/FollowUsF.svg";
// import Mask from "../../assets/others/Mask.png";
// import { FaInstagram } from "react-icons/fa";
// import { AiFillYoutube } from "react-icons/ai";
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";

// import CarouselTop from "./BodyComponents/CarouselTop";
// import CarouselBottom from "./BodyComponents/CarouselTBottom";

// // import "./Home.css";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height,
//   };
// }

// export default function Home() {
//   const [state, setState] = useState(null);
//   const [collections, setCollections] = useState([]);
//   const [featuredDesigner, setFeaturedDesigner] = useState(null);
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   const { dispatch, user } = useContext(UserContext);
//   const { dispatch: customerDispatch, customer } = useContext(CustomerContext);

//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     nextArrow: (
//       <IoIosArrowForward
//         style={{ color: "black", background: "black", display: "block" }}
//       />
//     ),
//     prevArrow: (
//       <IoIosArrowBack
//         style={{ color: "black", background: "black", display: "block" }}
//       />
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 2,
//           // initialSlide: 2
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: false,
//         },
//       },
//     ],
//   };

//   let breakPoints = [
//     { width: 1, itemsToShow: 2 },
//     { width: 550, itemsToShow: 2 },
//     { width: 600, itemsToShow: 4 },
//     { width: 768, itemsToShow: 4 },
//     { width: 1200, itemsToShow: 4 },
//   ];

//   const setCustomer = async () => {
//     // console.log(user?._id);

//     let customers = JSON.parse(localStorage.getItem("PCTeRP.CUSTOMER_IDS"));
//     console.log(customers);

//     ApiService.setHeader();
//     // await ApiService.get(`shop/user/${CustomerService.getCustomer() ? CustomerService.getCustomer() : user?._id}`).then(response => {
//     ApiService.get(
//       `shop/customer/${
//         customers?.length ? customers[customers?.length - 1]?._id : user?._id
//       }?protectModel=${getModelRoute(user).model}`
//     )
//       .then((response) => {
//         // console.log(response.data);

//         if (response.data.isSuccess) {
//           let customer = response?.data.document;

//           // Load the selected customer into reducer
//           customerDispatch({
//             type: "SELECT_CUSTOMER",
//             payload: response.data.document,
//           });
//           if (user?.userTypes.includes("CUSTOMER"))
//             dispatch({
//               type: "LOGIN_SUCCESS",
//               payload: response.data.document,
//             });
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         // console.log("Else Catch")
//         // showMessage(error.response.data.message, "error")
//       });
//   };

//   const getLandingPage = () => {
//     ApiService.setHeader();
//     // await ApiService.get(`shop/user/${CustomerService.getCustomer() ? CustomerService.getCustomer() : user?._id}`).then(response => {
//     ApiService.get(`shop/landingPage`)
//       .then((response) => {
//         console.log(response.data);

//         if (response.data.isSuccess) {
//           setState(response.data.document);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         // console.log("Else Catch")
//         // showMessage(error.response.data.message, "error")
//       });
//   };

//   const getFeatureddesigner = () => {
//     ApiService.setHeader();
//     ApiService.get(`shop/designer/getFeatured`)
//       .then((response) => {
//         console.log(response.data);

//         if (response.data.isSuccess) {
//           setFeaturedDesigner(response.data.document);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         // console.log("Else Catch")
//         // showMessage(error.response.data.message, "error")
//       });
//   };

//   const getAllCollection = async () => {
//     try {
//       ApiService.setHeader();
//       const response = await ApiService.get("shop/collection");
//       if (response.data.isSuccess) {
//         console.log(
//           response.data.documents.filter((ele) => ele?.image?.url !== "")
//         );
//         setCollections(
//           response.data.documents.filter((ele) => ele?.image?.url !== "")
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // setTimeout(() => {
//   //     getWindowDimensions()
//   // }, 1000);

//   useEffect(() => {
//     setCustomer();
//     getLandingPage();
//     getFeatureddesigner();
//     getAllCollection();
//     // console.log(windowDimensions);
//   }, []);

//   return (
//     <div className="mt-[1px]">
//       <div className="lg:h-[60vh]">
//         <CarouselTop />
//       </div>
//       {/* 2) */}
//       {/* Whats new */}
//       <div className="mt-[100px]">
//         <div
//           className="mb-[40px] xl:ms-16 text-3xl sm:text-5xl flex justify-center lg:justify-start"
//           style={{ fontFamily: "DM Serif Display" }}
//         >
//           What's New
//         </div>
//         <div className="flex gap-10 flex-col mx-[20px]">
//           <div className=" flex flex-col gap-8 lg:flex-row">
//             <div className="lg:w-1/2 flex flex-col justify-center">
//               <img src={Mask} alt="Image" className="h-[210.24px]" />
//               <div
//                 className="flex justify-center mx-6 lg:justify-start my-6 text-2xl sm:text-3xl tracking-wide"
//                 style={{ fontFamily: "DM Serif Display" }}
//               >
//                 Promotion Example
//               </div>
//               <div className="flex justify-center mx-5 lg:justify-start">
//                 <button
//                   type="button"
//                   className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded px-5 py-2.5 text-center me-2 mb-10  w-[148px] h-[49px] text-base"
//                 >
//                   SHOP NOW
//                 </button>
//               </div>
//             </div>
//             <div className="lg:w-1/2 h-auto flex flex-col justify-center">
//               <img src={Mask} alt="Image" className="h-[210.24px]" />
//               <div
//                 className="flex justify-center mx-0 md:mx-6 lg:justify-start my-6 text-2xl"
//                 style={{ fontFamily: "DM Serif Display" }}
//               >
//                 New Collection Example
//               </div>
//               <div className="flex justify-center mx-5 lg:justify-start">
//                 <button
//                   type="button"
//                   className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded px-5 py-2.5 text-center me-2 mb-10  w-[148px] h-[49px] text-base"
//                 >
//                   SHOP NOW
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div
//             className=" text-center text-3xl sm:text-5xl"
//             style={{ fontFamily: "DM Serif Display" }}
//           >
//             What's New
//           </div>
//           <div className="flex justify-center flex-col w-full">
//             <img
//               src={Mask}
//               alt="Image"
//               className="h-60 xl:h-96 w-auto mx-0 xl:mx-20 lg:mx-10"
//             />
//             <div
//               className="flex justify-center mx-0 lg:mx-6 my-6 text-2xl sm:text-3xl text-center"
//               style={{ fontFamily: "DM Serif Display" }}
//             >
//               Promotion Collection Example
//             </div>
//             <div className="flex justify-center mx-5 ">
//               <button
//                 type="button"
//                 className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded px-5 py-2.5 text-center me-2 mb-10  w-[240px] h-[49px] text-base uppercase"
//               >
//                 shop the collection
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Northcott Fabrics */}
//       <div className="my-12 h-[664px] flex flex-col justify-center text-center w-full lg:h-72 text-white bg-black bg-[url('https://media.istockphoto.com/id/184601291/photo/xxxl-dark-concrete.webp?b=1&s=170667a&w=0&k=20&c=KRRXq0P41imqerPjYF4EgX7QOdbybyprM8ofKYoIzT4=')] bg-no-repeat bg-center bg-cover sm:h-auto">
//         <div className="px-[60px]">
//           <div
//             className="flex justify-center text-3xl"
//             style={{ fontFamily: "DM Serif Display" }}
//           >
//             Northcott Fabrics
//           </div>
//           <div className="text-sm my-10">
//             We are the home of “cottons that feel like silk”. Our fine cotton
//             prints with a silky hand can be found in quilt and craft shops
//             around the world. We are known for our superior quality and
//             admirable customer service. The quilting industry is where we have
//             built a name for ourselves and a community of great customers,
//             distributors and partners. We design and partner with the best
//             designers to produce fabrics to sell wholesale to your local shops
//             and distributors.
//           </div>
//           <div className="mx-auto h-[49px] w-[162px] flex justify-center">
//             <button
//               type="button"
//               className=" text-black bg-[#E2A856] font-medium rounded-sm text-base px-5 py-2.5 text-center w-44 hover:text-[#E2A856] hover:border-[#E2A856] hover:border-2 hover:bg-transparent "
//             >
//               LEARN MORE
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* 4) */}
//       {/* Featured Categories */}
//       <div className="mx-[20px]">
//         <div
//           className="my-10 pt-10 text-center text-2xl sm:text-5xl tracking-wide"
//           style={{ fontFamily: "DM Serif Display" }}
//         >
//           Featured Categories
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row lg:px-20 lg:gap-16 my-10 gap-10 lg:mx-0 sm:mx-40 ">
//           <div className="max-w-sm bg-white border border-gray-200 shadow">
//             <a href="#" className="">
//               <img className="w-full" src={No1} alt="Image" />
//             </a>
//           </div>
//           <div className="max-w-sm bg-white border border-gray-200 shadow">
//             <a href="#">
//               <img className="w-full" src={No2} alt="Image" />
//             </a>
//           </div>
//           <div className="max-w-sm bg-white border border-gray-200 shadow">
//             <a href="#">
//               <img className="w-full" src={No3} alt="Image" />
//             </a>
//           </div>
//           <div className="max-w-sm bg-white border border-gray-200 shadow">
//             <a href="#">
//               <img className="w-full" src={No4} alt="Image" />
//             </a>
//           </div>
//           <div className="max-w-sm bg-white border border-gray-200 shadow">
//             <a href="#">
//               <img className="w-full" src={No5} alt="Image" />
//             </a>
//           </div>
//           <div className="max-w-sm bg-white border border-gray-200 shadow">
//             <a href="#">
//               <img className="w-full" src={No6} alt="Image" />
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* 5) */}
//       {/* featured designer */}
//       <div className="mt-[80px] h-[892px] flex flex-col lg:flex-row justify-center text-white bg-[#CECECC]">
//         <div className=" w-full lg:w-1/2 flex justify-center">
//           <img
//             src={Designer}
//             alt="Image"
//             className="h-[260px] w-[260px] rounded-full"
//           />
//         </div>
//         <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center text-center lg:text-left text-black">
//           <h1
//             className="italic text-xl mt-10"
//             style={{ fontFamily: "DM Serif Display" }}
//           >
//             Featured Designer
//           </h1>
//           <h1 className="text-3xl" style={{ fontFamily: "DM Serif Display" }}>
//             Designer Name
//           </h1>
//           <p className="text-sm lg:pe-20 px-10 lg:px-0">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse et dolore magna aliqua cillum
//             dolore eu fugiat nulla pariatur.
//           </p>
//           <div className="mt-3">
//             <button
//               type="button"
//               className="uppercase font-semibold text-black bg-[#E2A856] hover:text-[#E2A856] hover:bg-[#CECECC] hover:border-2 hover:border-[#E2A856] rounded-sm text-base py-2.5 px-2 text-center mb-10 w-[280px] h-[68px] md:w-96"
//             >
//               Shop designer name’s collection
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* 6) */}
//       {/* Resources */}
//       <div className="mx-[20px] py-5">
//         <div className="mx-auto xl:mx-20 lg:mx-20 mt-16">
//           <div className="flex flex-col lg:flex-row justify-between gap-10">
//             <div
//               className="text-center lg:text-left text-5xl"
//               style={{ fontFamily: "DM Serif Display" }}
//             >
//               Resources
//             </div>
//             <div className="flex justify-center mx-5 lg:justify-start">
//               <button
//                 type="button"
//                 className=" text-[#E2A856] hover:text-white border border-[#E2A856] hover:border-none hover:bg-black font-semibold rounded px-5 py-2.5 text-center me-2 mb-10 w-[132px] h-[49px] text-base"
//               >
//                 VIEW ALL
//               </button>{" "}
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col xl:mx-20 lg:mx-20 lg:flex-row lg:w-3/4 md:gap-5 items-center justify-center">
//           <div className=" lg:w-1/2 md:w-fit bg-white flex justify-center mx-5 lg:mx-0 md:mx-28">
//             <a href="#">
//               <img src={Property1} alt="Image" />
//             </a>
//           </div>
//           <div className="w-[260px] lg:w-1/2 flex flex-col items-center gap-10 lg:gap-6 mt-10 lg:mt-0 me-0 md:me-6 lg:me-0 lg:px-48">
//             <a href="#">
//               <div className="flex flex-col md:flex-row gap-5">
//                 <img className="w-[260px] lg:h-32" src={Mask1} alt="Image" />
//                 <div className="flex flex-col gap-5 items-center justify-center sm:justify-start">
//                   <h4 className="text-gray-400">Free Patterns</h4>
//                   <h2 className="font-bold w-60 text-lg text-center">
//                     Patrick Lose Cake Block - FREE DOWNLOAD
//                   </h2>
//                   <img className="w-24" src={frame} alt="Image" />
//                 </div>
//               </div>
//             </a>
//             <hr className=" text-black w-4/5 lg:w-full ms-0 md:ms-20 lg:ms-36" />
//             <a href="#">
//               <div className="flex flex-col md:flex-row gap-5">
//                 <img className="w-[260px] lg:h-32" src={Mask2} alt="Image" />
//                 <div className="flex flex-col gap-5 items-center justify-center sm:justify-start">
//                   <h4 className="text-gray-400">Get Inspired!</h4>
//                   <h2 className="font-bold w-60 text-lg text-center">
//                     Whiskers and Wine{" "}
//                   </h2>
//                   <img className="w-24" src={frame} alt="Image" />
//                 </div>
//               </div>
//             </a>
//             <hr className=" text-black w-4/5 lg:w-full ms-0 md:ms-20 lg:ms-36" />
//             <a href="#">
//               <div className="flex flex-col md:flex-row gap-5">
//                 <img className="w-[260px] lg:h-32" src={Mask3} alt="Image" />
//                 <div className="flex flex-col gap-5 items-center justify-center sm:justify-start">
//                   <h4 className="text-gray-400">Editorial Features</h4>
//                   <h2 className="font-bold w-60 text-lg text-center">
//                     Lemon Sorbet by TeriAnn Harms
//                   </h2>
//                   <img className="w-24" src={frame} alt="Image" />
//                 </div>
//               </div>
//             </a>
//             <hr className=" text-black w-4/5 lg:w-full ms-0 md:ms-20 lg:ms-36 flex lg:hidden xl:flex" />
//             <a href="#" className="flex lg:hidden xl:flex">
//               <div className="flex flex-col md:flex-row gap-5">
//                 <img className="w-[260px] lg:h-32" src={Mask4} alt="Image" />
//                 <div className="flex flex-col gap-5 items-center justify-center sm:justify-start">
//                   <h4 className="text-gray-400">Free Patterns</h4>
//                   <h2 className="font-bold w-60 text-lg text-center">
//                     Beach Blanket - FREE DOWNLOAD
//                   </h2>
//                   <img className="w-24" src={frame} alt="Image" />
//                 </div>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* 7) */}
//       <div className="mx-[20px] w-[260px] h-[108px] flex items-center justify-center my-10 ms-7 sm:ms-0 mt-[100px]">
//         <div className="font-bold text-[28px] lg:min-w-96 max-w-2xl md:p-10 text-center">
//           <p className="text-center">
//             Follow us on social media as we always have something exciting to
//             share <span className="text-[#E2A856]">#NorthcottFabrics</span>
//           </p>
//         </div>
//       </div>
//       {/* 8) */}
//       {/* <Carousel /> */}
//       <div className="mt-36">
//         <CarouselBottom />
//       </div>
//       {/* 9) */}
//       {/* body footer */}
//       <div className="w-[246px] h-[24px] mb-[100px] md:mt-44 flex flex-row items-center justify-center gap-5 m-10">
//         <a href="#">
//           <img src={FollowUsF} alt="Follow Us" />
//         </a>
//         <a href="#" className="cursor-pointer relative">
//           <div className="absolute top-0 left-0 hover:hidden">
//             <FaFacebookF color="#E2A856" size={"1.5rem"} />
//           </div>
//           <div className="block">
//             <FaFacebookF size={"1.5rem"} />
//           </div>
//         </a>
//         <a href="#" className="cursor-pointer relative">
//           <div className="absolute top-0 left-0 hover:hidden">
//             <FaTwitter color="#E2A856" size={"1.5rem"} />
//           </div>
//           <div className="block">
//             <FaTwitter size={"1.5rem"} />
//           </div>
//         </a>
//         <a href="#" className="cursor-pointer relative">
//           <div className="absolute top-0 left-0 hover:hidden">
//             <AiFillYoutube color="#E2A856" size={"1.5rem"} />
//           </div>
//           <div className="block">
//             <AiFillYoutube size={"1.5rem"} />
//           </div>
//         </a>
//         <a href="#" className="cursor-pointer relative">
//           <div className="absolute top-0 left-0 hover:hidden">
//             <FaInstagram color="#E2A856" size={"1.5rem"} />
//           </div>
//           <div className="block">
//             <FaInstagram size={"1.5rem"} />
//           </div>
//         </a>
//       </div>
//     </div>

//     // WORKING CODE
//     // <Container className='m-0 p-0' fluid>
//     //     <HomeSliders />

//     //     {/* WHAT'S NEW CONTAINER */}
//     //     <Container className='m-0 p-0 whatsNew_container' fluid>

//     //         {/* WHAT'S NEWS CONTAINER */}
//     //         <Container className='p-0 whatsNews'>
//     //             <Row className='m-0 p-0 mt-5 whatsNews_text'>
//     //                 What's New
//     //             </Row>

//     //             <Row className='m-0 p-0 whatsNews_items' xs={1} sm={1} md={2} lg={2}>
//     //                 {
//     //                     state?.whatsNews?.length ? state?.whatsNews?.map(whatsNew =>
//     //                         <Card className='m-0 p-0 mt-3 mb-3 whatsNews_items_card' key={whatsNew?._id} as={Link} to={``} >

//     //                             <Card.Img className='whatsNews_items_image' variant="top" src={whatsNew?.image.url}
//     //                                 // width={550} height={413}
//     //                                 style={{ objectFit: "fill", borderRadius: "1px" }}
//     //                             />
//     //                             {/* <Card.Body className='whatsNews_items_card_body border' style={{ height: "80px" }}> */}
//     //                             <Card.Title className='whatsNews_items_card_body' style={{ fontSize: "15px", }}>{whatsNew.title}</Card.Title>
//     //                             {/* </Card.Body> */}
//     //                             <Card.Footer className='m-0 p-0 whatsNews_items_card_footer' style={{ background: "none" }}>
//     //                                 <Button className='ncsButton' size='sm'>{whatsNew?.buttonLabel}</Button>
//     //                             </Card.Footer>
//     //                         </Card>
//     //                     )

//     //                         : ""
//     //                 }
//     //             </Row>
//     //         </Container>

//     //         {/* WHAT'S NEW CONTAINER */}
//     //         <Container className='p-0 whatsNew'>
//     //             <Row className='m-0 p-0 whatsNew_text'>
//     //                 What's New
//     //             </Row>

//     //             <Row className='whatsNew_item' xs={1} sm={1} md={1} lg={1}>
//     //                 {
//     //                     state?.whatsNews?.length ?

//     //                         <Card className='m-0 p-0 whatsNew_item_card' key={state?.whatsNews[0]?._id} as={Link} to={``} >

//     //                             <Card.Img variant="top" className='whatsNew_item_card_image' src={state?.whatsNews[0]?.image.url}
//     //                                 // width={1200} height={564.61}
//     //                                 style={{ objectFit: "fill", borderRadius: "1px" }}
//     //                             />

//     //                             <Card.Title className='whatsNew_item_card_body' style={{ fontSize: "15px", }}>{state?.whatsNews[0].title}</Card.Title>

//     //                             <Card.Footer className='m-0 p-0 whatsNew_item_card_footer' style={{ background: "none" }}>
//     //                                 <Button className='ncsButton' size='sm'>{state?.whatsNews[0]?.buttonLabel}</Button>
//     //                             </Card.Footer>
//     //                         </Card>

//     //                         : ""
//     //                 }
//     //             </Row>
//     //         </Container>
//     //     </Container>

//     //     <Container fluid className=' m-0 p-0 mt-5 pt-5 pb-5' style={{ backgroundColor: "black" }}>
//     //         <div className=' m-0 p-0' style={{ fontFamily: "sans-serif", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", opacity: 0.9, color: "white" }}>
//     //             <h2>Northcott Fabrics</h2>
//     //             <p style={{ fontFamily: "sans-serif", textAlign: "center", width: "70%", fontSize: "15px" }}>
//     //                 We are the home of “cottons that feel like silk”. Our fine cotton prints with a silky hand can be found in quilt and craft shops around the world. We are known for our superior quality and admirable customer service. The quilting industry is where we have built a name for ourselves and a community of great customers, distributors and partners. We design and partner with the best designers to produce fabrics to sell wholesale to your local shops and distributors.
//     //             </p>
//     //             <Button className='ncsButton' size='sm'>LEARN MORE</Button>
//     //         </div>
//     //     </Container>

//     //     {/* FEATURED CATEGORIES */}
//     //     <Container className='p-0 featuredCategories'>
//     //         <Row className='m-0 p-0 mt-5 featuredCategories_text'>
//     //             Featured Categories
//     //         </Row>

//     //         <Row className='m-0 p-0 featuredCategories_items' xs={1} sm={1} md={1} lg={3}>
//     //             {
//     //                 state?.featuredCategories?.length ? state?.featuredCategories?.map(featuredCategory =>
//     //                     <Card className='m-0 p-0 mt-3 mb-3 featuredCategories_items_card' key={featuredCategory?._id} as={Link} to={``} >

//     //                         <Card.Img className='featuredCategories_items_card_image' variant="top" src={featuredCategory?.image.url}
//     //                             // width={345} height={345}
//     //                             style={{ objectFit: "fill", borderRadius: "1px" }}
//     //                         />

//     //                         <Card.Title className='featuredCategories_items_card_title' style={{}}>{featuredCategory.title}</Card.Title>

//     //                         <Card.Footer className='m-0 p-0 featuredCategories_items_card_footer'>
//     //                             <Button className='ml-3 ncsButtonWithoutOutline' size='sm' style={{ marginLeft: 12 }}>{featuredCategory?.buttonLabel} -- <i class="arrow right"></i></Button>
//     //                         </Card.Footer>
//     //                     </Card>
//     //                 )

//     //                     : ""
//     //             }
//     //         </Row>
//     //     </Container>

//     //     {/* DESIGNER */}
//     //     <Container fluid className=' m-0 p-0 mt-5 center_element designer_container' style={{}}>
//     //         <Container className='m-0 p-0 designer_container_box' style={{}}>
//     //             {/* <Row className='m-0 p-0'> */}
//     //             <Container className='m-0 p-0 designer_container_box_image_container'>
//     //                 <img className='m-0 p-0 designer_container_box_image' src={featuredDesigner?.image?.url} />
//     //             </Container>
//     //             <Container className='m-0 p-0 designer_container_box_content'>
//     //                 <p className='m-0 p-0'>Featured Designer</p>
//     //                 <p className='m-0 p-0 designer_name' style={{}}>{featuredDesigner?.name}</p>
//     //                 {/* <p className='m-0 p-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse et dolore magna aliqua cillum dolore eu fugiat nulla pariatur.</p> */}
//     //                 {
//     //                     featuredDesigner?.bioData.includes("&lt;") ?
//     //                         <p className='m-0 p-0' dangerouslySetInnerHTML={convertHtmlToString(featuredDesigner?.bioData)}></p>
//     //                         :
//     //                         <p className='m-0 p-0'> {featuredDesigner?.bioData.replace(/<[^>]+>/g, '')}</p>

//     //                 }
//     //                 <Button className='m-0 p-0 ncsDesignerButton border' size='sm' style={{ paddingTop: "5px", paddingRight: "10px", paddingBottom: "5px", paddingLeft: "10px" }}>SHOP DESIGNER NAME'S COLLECTIONS</Button>
//     //             </Container>
//     //             {/* </Row> */}
//     //         </Container>
//     //     </Container>

//     //     {/* RESOURCES */}
//     //     <Container className='p-0 mt-5 resources_container'>
//     //         <div className='m-0 p-0 resources_container_header'>
//     //             <p className='m-0 p-0' style={{ fontSize: "30px" }}>Resources</p>
//     //             <Button className='ncsButton' size='sm' style={{ height: 35, width: 100 }}>VIEW ALL</Button>
//     //         </div>

//     //         <Container className='m-0 p-0 resources_container_content'>
//     //             <Container className='m-0 p-0 resources_container_box' >
//     //                 {
//     //                     state?.resources?.length ?
//     //                         <Card className='m-0 p-0 resources_container_card' key={state?.resources[0]?._id} as={Link} to={``} >

//     //                             <Card.Img variant="top" className='resources_container_card_image' src={state?.resources[0]?.image.url}
//     //                                 // width={515} height={515}
//     //                                 style={{ objectFit: "fill", borderRadius: "1px" }}
//     //                             />

//     //                             <Card.Title className='mt-4 resources_container_card_title'>
//     //                                 <div className='m-0 p-0' style={{ fontSize: "15px", color: "GrayText" }}>Editorials Features</div>
//     //                                 <div className='m-0 p-0 pt-2'>{state?.resources[0].title}</div>
//     //                             </Card.Title>

//     //                             <Card.Footer className='mt-3 m-0 p-0 resources_container_card_footer'>
//     //                                 <Button className='ml-3 ncsButtonWithoutOutline' size='sm' style={{ marginLeft: 12 }}>{state?.resources[0]?.buttonLabel} -- <i class="arrow right"></i></Button>
//     //                             </Card.Footer>
//     //                         </Card>

//     //                         : ""
//     //                 }
//     //             </Container>

//     //             <Container className="m-0 p-0 resources_container_list">
//     //                 {
//     //                     state?.resources?.length ? state?.resources?.map((resource, index) =>
//     //                         <>
//     //                             <div className='m-0 p-0 resources_container_list_card'>
//     //                                 <img className='resources_container_list_card_image' src={resource?.image?.url} alt="" srcset=""
//     //                                     height={140} width={140}
//     //                                 />
//     //                                 <div className="m-0 resources_container_list_card_content">
//     //                                     <div className='m-0 p-0' style={{ fontSize: "14px", color: "GrayText" }}>Free Pattern</div>
//     //                                     <div className='m-0 p-0 mt-1' style={{ fontSize: "17px", fontWeight: "bold", textAlign: "center" }}>{resource?.image?.text}</div>
//     //                                     <div className='mt-5 p-0'>
//     //                                         <Button className='m-0 p-0 ncsButtonWithoutOutline' size='sm' style={{}}>{resource?.buttonLabel} -- <i class="arrow right"></i></Button>
//     //                                     </div>
//     //                                 </div>
//     //                             </div>
//     //                             {(state?.resources?.length === 0 || state?.resources?.length === 1 || (state?.resources?.length - 1 === index)) ? "" : <hr className='border border-3' style={{ width: "100%", }} />}
//     //                         </>
//     //                     )
//     //                         : ""
//     //                 }

//     //             </Container>
//     //         </Container>
//     //     </Container>

//     //     <Container className='p-0 mt-5 carosel_container'>
//     //         <Container className="m-0 p-0 carosel_header">
//     //             <span className='m-0 p-0'>Follow us on social media as we always have something</span>
//     //             <span className='m-0 p-0'>exciting to share <span style={{ color: "#e3a856", fontStyle: "italic" }}>#NorthcottFabrics</span></span>
//     //         </Container>
//     //         {/* <Container fl className="m-0 p-0 carosel"> */}
//     //         <Container fluid className="m-0 p-0 carosel">

//     //             {/* <Slider className='ml-2' {...settings}>
//     //                 {
//     //                     collections?.length && collections.filter(ele => ele?.image?.url !== '').map(e => {
//     //                         if (e?.image?.url) {
//     //                             return (
//     //                                 // <Carousel.Item key={e._id} className=''>
//     //                                 <div>
//     //                                     <img src={e?.image?.url} alt="" srcset="" width={260}
//     //                                         height={260} />

//     //                                 </div>
//     //                                 // </Carousel.Item>
//     //                             )
//     //                         }

//     //                     })
//     //                 }
//     //             </Slider> */}

//     //             {collections?.length ? <Carousel breakPoints={breakPoints} pagination={false}>
//     //                 {
//     //                     collections.filter(ele => ele?.image?.url !== '').map(e => {
//     //                         if (e?.image?.url) {
//     //                             return (
//     //                                 // <Carousel.Item key={e._id} className=''>
//     //                                 <div style={{}} key={e._id}>
//     //                                     <img className='carousel_img' src={e?.image?.url} alt="" srcset=""
//     //                                         width={260} height={260}
//     //                                         style={{ padding: "10px" }} />

//     //                                 </div>
//     //                                 // </Carousel.Item>
//     //                             )
//     //                         }

//     //                     })
//     //                 }
//     //             </Carousel> : ""}
//     //         </Container>
//     //         {/* </Container> */}
//     //     </Container>
//     // </Container>

//     // <Container>
//     //     <HomeSliders />

//     //     <Container className=' mt-5 m-0 p-0' style={{ fontFamily: "sans-serif", }}>
//     //         <h2 style={{ marginLeft: 60 }}>What's New</h2>

//     //         <Row className='m-0 p-0' xs={1} sm={1} md={2} lg={2} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 70 }}>
//     //             {
//     //                 state?.whatsNews?.length ? state?.whatsNews?.map(whatsNew =>
//     //                     <Card className='m-0 p-0 ' key={whatsNew?._id} as={Link} to={``} style={{ width: 550, height: 555 }}>

//     //                         <Card.Img variant="top" src={whatsNew?.image.url} width={550} height={413}
//     //                             style={{ objectFit: "fill", }}
//     //                         />
//     //                         <Card.Body>
//     //                             <Card.Title style={{ fontSize: "15px", textAlign: "center", verticalAlign: "middle", color: "black" }}>{whatsNew.title}</Card.Title>
//     //                         </Card.Body>
//     //                         <Card.Footer>
//     //                             <Button>{whatsNew?.buttonLabel}</Button>
//     //                         </Card.Footer>
//     //                     </Card>
//     //                 )

//     //                     : ""
//     //             }

//     //         </Row>

//     //     </Container>

//     //     <Container className=' mt-5 mb-5 m-0 p-0 border' style={{ fontFamily: "sans-serif", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
//     //         <h2>What's New</h2>
//     //         <div className='m-0 p-0' style={{ display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: "column", gap: 10 }}>
//     //             <img src={state?.whatsNews[0]?.image.url} width={1200} height={564.61} style={{ objectFit: "fill", }} alt="" srcset="" />
//     //             <h5>{state?.whatsNews[0].title}</h5>
//     //             <Button>{state?.whatsNews[0]?.buttonLabel}</Button>
//     //         </div>
//     //     </Container>

//     //     <Container className=' mt-5 m-0 p-0 pt-5 pb-5 border' style={{ fontFamily: "sans-serif", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "black", opacity: 0.8, color: "white" }}>
//     //         <h2>Northcott Fabrics</h2>
//     //         <p style={{ fontFamily: "sans-serif", textAlign: "center" }}>
//     //             We are the home of “cottons that feel like silk”. Our fine cotton prints with a silky hand can be found in quilt and craft shops around the world. We are known for our superior quality and admirable customer service. The quilting industry is where we have built a name for ourselves and a community of great customers, distributors and partners. We design and partner with the best designers to produce fabrics to sell wholesale to your local shops and distributors.
//     //         </p>
//     //         <Button>LEARN MORE</Button>
//     //     </Container>

//     //     <Container className=' mt-5 m-0 p-0' style={{ fontFamily: "sans-serif", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

//     //         <h2 style={{}}>Featured Categories</h2>

//     //         <Row className='m-0 p-0' xs={1} sm={1} md={3} lg={3} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 70 }}>
//     //             {
//     //                 state?.featuredCategories?.length ? state?.featuredCategories?.map(featuredCategory =>

//     //                     <Card className='m-0 p-0 ' key={featuredCategory?._id} as={Link} to={``} style={{ width: 550, height: 555 }}>

//     //                         <Card.Img variant="top" src={featuredCategory?.image.url} width={550} height={413}
//     //                             style={{ objectFit: "fill", }}
//     //                         />
//     //                         <Card.Body>
//     //                             <Card.Title style={{ fontSize: "15px", textAlign: "center", verticalAlign: "middle", color: "black" }}>{featuredCategory.title}</Card.Title>
//     //                         </Card.Body>
//     //                         <Card.Footer>
//     //                             <Button>{featuredCategory?.buttonLabel}</Button>
//     //                         </Card.Footer>
//     //                     </Card>
//     //                 )

//     //                     : ""
//     //             }

//     //         </Row>

//     //     </Container>
//     // </Container >
//   );
// }

import React from "react";

const Home = () => {
  return <div>Home</div>;
};

export default Home;
