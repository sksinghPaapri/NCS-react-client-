// import React, { useContext } from 'react'
// import { Button, Col, Container, Row } from 'react-bootstrap'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
// // import './footer.css'

// import { CiFacebook } from "react-icons/ci"
// import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai"
// import { TiSocialFacebook } from "react-icons/ti";
// import { CiTwitter, CiInstagram, CiYoutube } from "react-icons/ci";
// import { FiInstagram } from "react-icons/fi"
// import Figo from "./../../../image/figo.jpg"
// import PinterestIcon from "./../../../image/pinterest-icon.jpg"
// import wordpressIcon from "./../../../image/wordpress-icon.jpg"
// import AppContentBody from '../../elements/builders/AppContentBody'

// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import brandLogo from '../../../assets/images/logo/brand-logo.png'
// import "./footer.css";
// import { BrandIconContext } from '../../../states/contexts/BrandIconContext'
// import NCSButton from '../../elements/designElement/NCSButton'

// export default function FooterNavigation() {
//     const { backgroundColor, darkBackgroundColor, color } = useContext(BrandIconContext)

//     return (
//         <div className="text-white bg-dark text-center">
//             <div className="" style={{ paddingTop: "10px" }}>
//                 <footer className="text-center text-lg-start">
//                     <section className="">
//                         <div className="container justify-content-center  mt-5">
//                             <div className="row mt-3">
//                                 <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 mx-auto mb-4 text-md-center text-lg-start text-xl-start text-sm-center">
//                                     <div className='container d-flex align-items-center justify-content-xl-start justify-content-center'>
//                                         <img src={brandLogo} height="60px"
//                                             width="180px" />
//                                     </div>
//                                     <section className="container d-flex align-items-center justify-content-xl-start justify-content-center mb-5 mt-2">
//                                         <a> <FaFacebookF className="me-4" color="#E2A856" /></a>
//                                         <FaTwitter className="me-4" color="#E2A856" />
//                                         <FaYoutube className="me-4" color="#E2A856" />
//                                         <FaInstagram className="me-4" color="#E2A856" />
//                                     </section>
//                                 </div>
//                                 <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 mx-auto mb-4">
//                                     <div className="row">
//                                         <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12" id="footerFirstDiv">
//                                             <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//                                                 HELP
//                                             </p>
//                                             <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//                                                 FAQ
//                                             </p>
//                                             <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//                                                 Web Tour
//                                             </p>
//                                             <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//                                                 Contact Us
//                                             </p>
//                                         </div>
//                                         <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12" id="footerSecondDiv">
//                                             <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//                                                 POLICIES
//                                             </p>
//                                             <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//                                                 Privacy Policy
//                                             </p>
//                                             <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//                                                 Terms And
//                                                 Condition
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 mx-auto mb-md-0 mb-4 ">
//                                     <p className="text-lg-end text-md-end text-sm-center text-center"
//                                         style={{ textAlign: "right", color: "white", fontSize: "22px", fontFamily: "Open Sans", fontWeight: 700, wordWrap: "break-word" }}>
//                                         GET THE INSIDE SCOOP!
//                                     </p>
//                                     <p className="text-lg-end text-md-end text-sm-center text-center"
//                                         style={{ textAlign: "right", color: "white", fontSize: "14px", fontFamily: "Open Sans", fontStyle: "italic", fontWeight: 400, lineHeight: "24px", wordWrap: "break-word" }}>
//                                         New collections, free patterns, quilting tips and more.
//                                     </p>
//                                     <p className="text-lg-end text-md-end text-sm-center">
//                                         <NCSButton props={{ buttonType: 'footerDefaultButton', buttonName: 'SUBSCRIBE TO OUR NEWSLETTER' }} />
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </footer>

//             </div>
//         </div>

//         // OLD CODE
//         // <AppContentBody>
//         // <Container fluid className="text-white bg-dark text-center pt-4">
//         //     <div className="container-fluid" style={{ paddingTop: "10px" }}>
//         //         {/* <!-- Footer --> */}
//         //         <footer className="text-center text-lg-start">
//         //             {/* <!-- Section: Social media -->

//         //     <!-- Section: Social media -->

//         //     <!-- Section: Links  --> */}
//         //             <section className="">
//         //                 <div className="container justify-content-center  mt-5">
//         //                     {/* <!-- Grid row --> */}
//         //                     <div className="row mt-3">
//         //                         {/* <!-- Grid column --> */}
//         //                         <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 mx-auto mb-4 text-md-center text-lg-start text-xl-start text-sm-center">
//         //                             <div className='container d-flex align-items-center justify-content-xl-start justify-content-center' style={{}}>
//         //                                 <img src="https://northcott.com/images/Northcott-Logo-Web-2x.png" height="60px" width="180px" />
//         //                             </div>
//         //                             {/* <!-- Content --> */}
//         //                             {/* <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">HEELO HERE <img src="https://northcott.com/images/Northcott-Logo-Web-2x.png" height="60px"
//         //                             width="180px" />
//         //                         </p> */}

//         //                             {/* <!-- Section: Social --> */}
//         //                             <section className="mb-5" style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", }}>

//         //                                 <a href="" className="text-white  anchorTagTextDecorationNone">
//         //                                     <i className="" style={{ fontSize: '24px', color: "#E2A856" }}><TiSocialFacebook /></i>
//         //                                 </a>
//         //                                 <a href="" className="text-white  anchorTagTextDecorationNone">
//         //                                     <i className="" style={{ fontSize: '24px', color: "#E2A856" }}><CiTwitter /></i>
//         //                                 </a>

//         //                                 <a href="" className="text-white   anchorTagTextDecorationNone">
//         //                                     <i className="" style={{ fontSize: '24px', color: "#E2A856" }}><CiYoutube /></i>
//         //                                 </a>
//         //                                 <a href="" className="text-white  anchorTagTextDecorationNone">
//         //                                     <i className="" style={{ fontSize: '24px', color: "#E2A856" }}><CiInstagram /></i>
//         //                                 </a>

//         //                             </section>
//         //                             {/* <!-- Section: Social --> */}
//         //                         </div>
//         //                         {/* <!-- Grid column --> */}

//         //                         {/* <!-- <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
//         //                 </div> --> */}
//         //                         {/* <!-- Grid column -->

//         //                 <!-- Grid column --> */}
//         //                         <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 mx-auto mb-4">
//         //                             {/* <!-- Links --> */}

//         //                             <div className="row">
//         //                                 <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
//         //                                     <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//         //                                         HELP
//         //                                     </p>

//         //                                     <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//         //                                         <a href="#!" className="anchorTagTextDecorationNone text-white">FAQ
//         //                                         </a>
//         //                                     </p>
//         //                                     <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//         //                                         <a href="#!" className="text-white anchorTagTextDecorationNone">Web
//         //                                             Tour</a>
//         //                                     </p>
//         //                                     <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//         //                                         <a href="#!"
//         //                                             className="text-white anchorTagTextDecorationNone">Contact
//         //                                             Us</a>
//         //                                     </p>
//         //                                 </div>
//         //                                 <div className="ol-md-6 col-lg-6 col-sm-6 col-xs-12">
//         //                                     <p className="text-lg-start text-xl-start text-md-center text-sm-center sm">
//         //                                         POLICIES
//         //                                     </p>

//         //                                     <p className="text-lg-start text-xl-start text-md-center text-sm-center">
//         //                                         <a href="#!"
//         //                                             className="text-white anchorTagTextDecorationNone">Privacy
//         //                                             Policy</a>
//         //                                     </p>
//         //                                     <p className="text-lg-start text-xl-start text-md-center text-sm-center">
//         //                                         <a href="#!"
//         //                                             className="text-white anchorTagTextDecorationNone">Terms And
//         //                                             Condition</a>
//         //                                     </p>
//         //                                 </div>
//         //                             </div>

//         //                         </div>
//         //                         {/* <!-- Grid column -->

//         //                 <!-- Grid column --> */}
//         //                         <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 mx-auto mb-md-0 mb-4 ">
//         //                             {/* <!-- Links --> */}
//         //                             <p className="text-lg-end text-md-end text-sm-center text-center"
//         //                                 // style="text-align: right; color: white; font-size: 22px; font-family: Open Sans; font-weight: 700; word-wrap: break-word">
//         //                                 style={{ textAlign: "right", color: "white", fontSize: "22px", fontFamily: "Open Sans", fontWeight: 700, wordWrap: "break-word" }}>
//         //                                 GET THE INSIDE SCOOP!
//         //                             </p>
//         //                             <p className="text-lg-end text-md-end text-sm-center"
//         //                                 // style="text-align: right; color: white; font-size: 14px; font-family: Open Sans; font-style: italic; font-weight: 400; line-height: 24px; word-wrap: break-word">
//         //                                 style={{ textAlign: "right", color: "white", fontSize: "14px", fontFamily: "Open Sans", fontStyle: "italic", fontWeight: 400, lineHeight: "24px", wordWrap: "break-word" }}>
//         //                                 New collections, free patterns, quilting tips and more.
//         //                             </p>
//         //                             <p className="text-lg-end text-md-end text-sm-center">
//         //                                 <button className="btn  primaryButton"
//         //                                     type="button">subscribe to our newsletter</button>
//         //                             </p>
//         //                             {/* <!-- <div style="width: 100%; height: 100%; padding-left: 30px; padding-right: 30px; padding-top: 15px; padding-bottom: 15px; background: #E2A856; border-radius: 4px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
//         //                         <div style="flex: 1 1 0; text-align: center; color: #090806; font-size: 16px; font-family: Open Sans; font-weight: 700; text-transform: uppercase; line-height: 19.20px; word-wrap: break-word">subscribe to our newsletter</div>
//         //                         </div> -->

//         //                     <!-- <div className="d-grid gap-2 col-6 mx-auto">
//         //                         <button className="btn btn-primary" type="button">subscribe to our newsletter</button>
//         //                         <button className="btn btn-primary" type="button">Button</button>
//         //                       </div> --> */}
//         //                         </div>
//         //                         {/* <!-- Grid column --> */}
//         //                     </div>
//         //                     {/* <!-- Grid row --> */}
//         //                 </div>
//         //             </section>
//         //             {/* <!-- Section: Links  -->

//         //     <!-- Copyright -->

//         //     <!-- Copyright --> */}
//         //         </footer>
//         //         {/* <!-- Footer --> */}
//         //     </div>
//         // </Container>
//         // </AppContentBody>

//         // <Container className='border-top border-3 pt-4'>
//         //     <Row xs={1} sm={2} md={4} lg={4}>
//         //         <Col className=' col-lg-7 col-md-7 col-sm-12 col-xs-12 p-0 m-0 footer-left-division'
//         //             style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: "3px" }}>
//         //             <img className='' src={Figo} alt="" style={{ borderRadius: "50%", width: "50px", height: "50px", cursor: "pointer" }} />
//         //             <a className='' style={{ fontSize: "12px", fontWeight: 400, textDecoration: "none", color: "black", cursor: "pointer" }} target='__blank' href='http://localhost:3002'>DIVISION OF NRTHCOTT</a>
//         //         </Col>

//         //         <Col className='col-lg-2 col-md-2 col-sm-12 col-xs-12 p-0 m-0' style={{ fontSize: "14px", fontWeight: 700, display: "flex", flexDirection: "column", gap: "0px" }}>
//         //             <span style={{ color: "black", cursor: "pointer" }}>Privacy Policy</span>
//         //             <span style={{ color: "black", cursor: "pointer" }}>Contact Us</span>
//         //             <span style={{ color: "black", cursor: "pointer" }}>Current Collection</span>
//         //             <span style={{ color: "black", cursor: "pointer" }}>Comming Soon</span>
//         //         </Col>

//         //         <Col className='col-lg-3 col-md-3 col-sm-12 col-xs-12 p-0 m-0' style={{ fontSize: "12px", fontWeight: 700, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "9px" }}>
//         //             <div className="text">
//         //                 GET THE INSIDE SCOOP — NEW COLLECTIONS,
//         //                 FREE PATTERNS, QUILTING TIPS AND MORE
//         //             </div>
//         //             <div className="subscribeNewsletter">
//         //                 {/* <Button className='' size='sm' style={{ background: "linear-gradient(to bottom, #f1e767 0%, #e3a856 100%)", width: "100%", fontSize: "15px", fontWeight: 700 }}>Subscribe to our Newsletter!</Button> */}
//         //                 <Button className='button' size='sm' style={{ width: "100%", fontSize: "15px", fontWeight: 700, background: `linear-gradient(to bottom, ${backgroundColor} 16%,${backgroundColor} 16%,${backgroundColor} 34%,${darkBackgroundColor} 100%)` }}>Subscribe to our Newsletter!</Button>
//         //             </div>
//         //             <div className="icons">
//         //                 {/* <wordpressIcon className="icon" /> */}
//         //                 {/* <PinterestIcon className="icon" /> */}
//         //                 <CiFacebook className="icon" style={{ color: backgroundColor }} />
//         //                 <AiOutlineTwitter className="icon" style={{ color: backgroundColor }} />
//         //                 <AiFillYoutube className="icon" style={{ color: backgroundColor }} />
//         //                 <FiInstagram className="icon" style={{ color: backgroundColor }} />
//         //             </div>
//         //         </Col>
//         //     </Row>
//         // </Container>

//     )
// }
// import React from "react";

// const FooterNavigation = () => {
//   return <div>FooterNavigation</div>;
// };

// export default FooterNavigation;

import NorthcottLogoDark from "../../../assets/FooterLogo/NorthcottLogoDark.svg";
import X from "../../../assets/FooterLogo/X.svg";
import Fb from "../../../assets/FooterLogo/Fb.svg";
import YT from "../../../assets/FooterLogo/YT.svg";
import Instagram from "../../../assets/FooterLogo/Instagram.svg";
import FBHover from "../../../assets/FooterLogo/Hover/FBHover.svg";
import InstaHover from "../../../assets/FooterLogo/Hover/InstaHover.svg";
import YTHover from "../../../assets/FooterLogo/Hover/YTHover.svg";
import XHover from "../../../assets/FooterLogo/Hover/XHover.svg";

const FooterNavigation = () => {
  return (
    <>
      <footer
        className="bg-black h-[912.77px] sm:h-[778.54px] sm:w-auto lg:h-[333px] px-[20px] pt-[90px] pb-[100px] sm:p-0 text-white"
        style={{ fontFamily: "Open Sans", fontWeight: "400" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[80px] sm:gap-[100px] sm:px-[60px] sm:pt-[90px] sm:pb-[100px] lg:gap-20 place-items-center justify-center lg:justify-between">
          {/* col 1 */}
          <div className="w-[250px] h-[113.77px] sm:w-[290px] sm:h-[126.54px] lg:w-[269.95px] lg:h-[108.14px] flex flex-col gap-[40px] lg:gap-[30px] items-center justify-center mx-auto">
            <div className="lg:mb-0 lg:flex lg:justify-start">
              <img
                src={NorthcottLogoDark}
                className="h-[54.77px] w-[250px] sm:w-[290px] sm:h-[63.54px] lg:w-[269.95px] lg:h-[59.14px]"
                alt="Northcott"
              />
            </div>
            <div className="h-[19px] w-[168.88px] sm:w-[229px] sm:h-[23px] lg:w-[123.88px] lg:h-[19px] lg:mb-0 grid grid-flow-col lg:gap-[20px] items-center justify-between lg:mr-32">
              <a href="#" className="relative">
                <img
                  src={Fb}
                  className="absolute top-0 left-0 hover:hidden h-[19px] w-[9.87x]"
                  alt="facebook"
                />
                <img
                  src={FBHover}
                  className="block h-[19px] w-[9.87x]"
                  alt="facebook"
                />
              </a>
              <a href="#" className="relative">
                <img
                  src={X}
                  className="absolute top-0 left-0 hover:hidden h-[15px] w-[18.46px]"
                  alt="X"
                />
                <img
                  src={XHover}
                  className="block h-[15px] w-[18.46px]"
                  alt="X"
                />
              </a>
              <a href="#" className="relative">
                <img
                  src={YT}
                  className="absolute top-0 left-0 hover:hidden h-[13px] w-[18.55px]"
                  alt="Youtube"
                />
                <img
                  src={YTHover}
                  className="block h-[13px] w-[18.55px]"
                  alt="Youtube"
                />
              </a>
              <a href="#" className="relative">
                <img
                  src={Instagram}
                  className="absolute top-0 left-0 hover:hidden h-[17px] w-[17px]"
                  alt="Instagram"
                />
                <img
                  src={InstaHover}
                  className="block h-[17px] w-[17px]"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
          {/* col 2 */}
          <div className="h-[263px] w-[76px] sm:w-[252px] sm:h-[119px] lg:w-[252px] lg:h-[119px] text-white text-xs lg:mx-1 flex flex-col gap-[60px] lg:gap-[100px] mx-auto sm:grid sm:grid-cols-2">
            <div className="h-[119px] w-[76px] flex flex-col gap-[20px] text-center lg:text-left cursor-pointer">
              <h2 className=" text-sm font-bold cursor-default">HELP</h2>
              <h3 className="hover:text-[#EECB9A]">FAQ</h3>
              <h3 className="hover:text-[#EECB9A]">Web Tour</h3>
              <h3 className="hover:text-[#EECB9A]">Contact Us</h3>
            </div>
            <div className="h-[84px] w-[79px] mx-auto flex flex-col gap-[20px] place-items-center lg:place-items-start lg:text-left cursor-pointer">
              <h3 className=" font-bold cursor-default">POLICIES</h3>
              <h3 className=" mx-auto hover:text-[#EECB9A] text-nowrap">
                Privacy Policy
              </h3>
              <h3 className="w-32 hover:text-[#EECB9A] text-nowrap ">
                Terms And Conditions
              </h3>
            </div>
          </div>
          {/* col 3 */}
          <div>
            <ul className="h-[186px] w-[280px] sm:h-[143px] sm:w-[328px] flex flex-col gap-[30px]">
              <li className="h-[88px] w-[280px] sm:h-[64px] sm:w-[328px] flex flex-col gap-[10px]">
                <div className="uppercase font-bold	text-[22px] text-white text-center lg:text-right">
                  GET THE INSIDE SCOOP!
                </div>
                <div className="text-gray-300 italic text-center lg:text-right sm:text-nowrap text-sm">
                  New collections,free patterns,quilting tips and more.
                </div>
              </li>
              <li className="flex items-center justify-center rounded">
                <div className="h-[68px] w-[260px] sm:h-[49px] sm:w-[319px] lg:h-[49px] lg:w-[319px] hover:text-[#E2A856] bg-[#E2A856] hover:bg-black hover:border-2 hover:border-[#E2A856] flex items-center justify-center">
                  <p className="h-[38px] px-3 sm:px-0 py-0 w-full text-center cursor-pointer hover:text-[#E2A856] font-bold text-base uppercase leading-5 text-black sm:text-nowrap pt-0 sm:pt-[8px]">
                    subscribe to our newsletter
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterNavigation;
