// import React, { useEffect, useContext, useState } from 'react'
// import { CustomerContext } from '../../../states/contexts/CustomerContext';
// import { UserContext } from '../../../states/contexts/UserContext'
// import { Button } from 'react-bootstrap'

// import NorthcottIcon from '../../../assets/images/northcott.png'
// import BanyanBatiks from '../../../assets/images/banyan-batiks.png'
// import PatrikLose from '../../../assets/images/patrik-lose.png'
// import Figo from '../../../assets/images/figo.jpg'
// import { BrandIconContext } from '../../../states/contexts/BrandIconContext';
// import { ToastContainer, toast, cssTransition } from "react-toastify";
// import ApiService from '../../../helpers/ApiServices';
// import { CustomerService, TokenService } from '../../../helpers/StorageServices';
// import { getModelRoute, logout, showMessage } from '../../../helpers/Utils';

// import DesktopNavigation from '../navigations/DesktopNavigation'
// import MobileBottomNavigation from '../navigations/MobileBottomNavigation'
// import MobileNavigation from '../navigations/MobileNavigation'
// import InnerHeader from './InnerHeader'
// import TopHeader from './TopHeader'
// import { Link, useNavigate } from 'react-router-dom'
// import { CartContext } from '../../../states/contexts/CartContext';
// import { WishListContext } from '../../../states/contexts/wishListContext';
// import Body from './HomePageContent/Body';

// export default function AppHeader() {
//     const [userId, setUserId] = useState()

//     const { dispatch, user } = useContext(UserContext);
//     const { dispatch: cartDispatch, quantity } = useContext(CartContext)
//     const { dispatch: wishListDispatch, quantity: wishListQuantity } = useContext(WishListContext)
//     const { dispatch: customerDispatch, customer } = useContext(CustomerContext);
//     const { dispatch: iconDispatch, ...rest } = useContext(BrandIconContext)

//     const navigate = useNavigate();

//     let customers = JSON.parse(localStorage.getItem("PCTeRP.CUSTOMER_IDS"))

//     const changeToNortncott = () => { iconDispatch({ type: "IS_NORTHCOTT" }) }
//     const changeToBanyan = () => { iconDispatch({ type: "IS_BANYAN" }) }
//     const changeToPatrick = () => { iconDispatch({ type: "IS_PATRICK" }) }
//     const changeToFigo = () => { iconDispatch({ type: "IS_FIGO" }) }

//     const bounce = cssTransition({
//         enter: 'zoomIn',
//         exit: 'zoomOut',
//         appendPosition: false,
//         collapse: true,
//         collapseDuration: 300
//     });

//     const handleLogout = async () => {
//         // try {
//         //     const response = await ApiService.get(`shop/user/logout`)
//         //     if (response?.data.isSuccess) {

//         //         dispatch({ type: "LOGOUT_SUCCESS" });
//         //         customerDispatch({ type: "SELECT_CUSTOMER", payload: null })

//         //         // TokenService.removeToken()
//         //         TokenService.saveToken(response?.data.token)
//         //         CustomerService.removeCustomer()
//         //         localStorage.removeItem("PCTeRP.CUSTOMER_IDS")
//         //         localStorage.removeItem("PCTeRP.TEST_CUSTOMER")

//         //         showMessage("You've successfully logged out.", "success")
//         //     }

//         // } catch (error) {
//         //     dispatch({ type: "LOGIN_FAILURE" });

//         // }
//         // navigate(`/`)

//         try {
//             await logout()
//             dispatch({ type: "LOGOUT_SUCCESS" });
//             customerDispatch({ type: "SELECT_CUSTOMER", payload: null })
//         } catch (error) {
//             dispatch({ type: "LOGIN_FAILURE" });
//         }
//         navigate(`/`)
//     }

//     const isLoggedIn = async () => {
//         ApiService.setHeader()
//         ApiService.get(`shop/user/loggedIn?model=${getModelRoute(user).model}`).then(async response => {
//             console.log(response?.data);
//             dispatch({ type: "LOGIN_SUCCESS", payload: response.data.document });
//             setUserId(response.data.document._id)

//             setModelAndRoute(response.data.document)

//             if (!response?.data.document.savePassword && window.performance.getEntriesByType("navigation")[0].type == "navigate") {
//                 const response = await ApiService.get(`shop/user/logout`)
//                 if (response?.data.isSuccess) {
//                     console.log(response.data);

//                     dispatch({ type: "LOGOUT_SUCCESS" });
//                     customerDispatch({ type: "SELECT_CUSTOMER", payload: null })

//                     // TokenService.removeToken()
//                     TokenService.saveToken(response?.data.token)
//                     CustomerService.removeCustomer()
//                     localStorage.removeItem("PCTeRP.CUSTOMER_IDS")
//                     localStorage.removeItem("PCTeRP.TEST_CUSTOMER")

//                     showMessage("You've successfully logged out.", "success")
//                 }
//             }

//             if (response?.data.document.savePassword && window.performance.getEntriesByType("navigation")[0].type == "navigate") {
//                 // ApiService.setHeader()
//                 // ApiService.get(`shop/user/${customers[0]._id}`).then(response => {
//                 //     console.log(response.data);
//                 //     // Load the selected customer into reducer
//                 //     customerDispatch({ type: "SELECT_CUSTOMER", payload: response?.data.document });
//                 // }).then(error => {
//                 //     console.log(error.response.data)
//                 //     // console.log("Else Catch")
//                 //     showMessage(error.response.data.message, "error")
//                 // })

//                 console.log((new Date().getTime() - response?.data.document.browserClosingTime) / 60000);
//                 if ((new Date().getTime() - response?.data.document.browserClosingTime) / 60000 > 60) {
//                     customerDispatch({ type: "SELECT_CUSTOMER", payload: customers[0] });
//                 } else {
//                     customerDispatch({ type: "SELECT_CUSTOMER", payload: customers[customers?.length - 1] });

//                 }
//             }

//         }).catch(async error => {
//             // showMessage(error.response.data.message, "error")

//             // const response = await ApiService.get(`shop/user/logout`)
//             // if (response?.data.isSuccess) {
//             //     console.log(response.data);

//             //     dispatch({ type: "LOGOUT_SUCCESS" });
//             //     customerDispatch({ type: "SELECT_CUSTOMER", payload: null })

//             //     // TokenService.removeToken()
//             //     TokenService.saveToken(response?.data.token)
//             //     CustomerService.removeCustomer()
//             //     localStorage.removeItem("PCTeRP.CUSTOMER_IDS")
//             //     localStorage.removeItem("PCTeRP.TEST_CUSTOMER")

//             //     showMessage("You've successfully logged out.", "success")
//             // }
//             try {
//                 await logout()
//                 dispatch({ type: "LOGOUT_SUCCESS" });
//                 customerDispatch({ type: "SELECT_CUSTOMER", payload: null })
//             } catch (error) {
//                 dispatch({ type: "LOGIN_FAILURE" });
//             }
//         })

//     }

//     const getCustomer = async (customers) => {
//         // console.log(customers);

//         ApiService.setHeader()
//         // await ApiService.get(`shop/user/${customers[customers?.length - 1]._id}`).then(response => {
//         await ApiService.get(`shop/customer/${customers[customers?.length - 1]._id}?model=${getModelRoute(user).model}`).then(response => {
//             // console.log(response.data);
//             // Load the selected customer into reducer
//             customerDispatch({ type: "SELECT_CUSTOMER", payload: response?.data.document });
//         }).catch(error => {
//             console.log(error.response.data)
//             // showMessage(error.response.data.message, "error")
//         })

//     }

//     const getCartDetail = () => {
//         ApiService.setHeader()
//         // ApiService.get(`shop/cart/${customers[customers?.length - 1]?._id}`).then(response => {
//         ApiService.get(`shop/cart/${customers?.length == 1 ? customers[0]?._id : customers[customers?.length - 1]?._id}?model=${getModelRoute(user).model}`).then(response => {
//             console.log(response.data);
//             if (response?.data.isSuccess) {
//                 console.log(response?.data.documents);
//                 cartDispatch({ type: "ADD_TO_CART_QUANTITY", payload: response?.data.documents?.length });

//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // console.log("Else Catch")
//             // showMessage(error.response.data.message, "error")
//         })
//     }

//     const getWishListDetail = () => {
//         ApiService.setHeader()
//         ApiService.get(`shop/wishList/${customers[customers?.length - 1]?._id}?model=${getModelRoute(user).model}`).then(response => {
//             // console.log(response.data);
//             if (response?.data.isSuccess) {
//                 wishListDispatch({ type: "ADD_TO_WISHLIST_QUANTITY", payload: response?.data?.documents?.length });
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // console.log("Else Catch")
//             // showMessage(error.response.data.message, "error")
//         })
//     }

//     const setModelAndRoute = (user) => {
//         if (user?.userTypes.includes("CUSTOMER")) {
//             localStorage.setItem("PCTeRP.MODEL", "Customer")
//             localStorage.setItem("PCTeRP.ROUTE", "Customer")
//         } else {
//             localStorage.setItem("PCTeRP.MODEL", "User")
//             localStorage.setItem("PCTeRP.ROUTE", "user")
//         }
//     }

//     useEffect(() => {
//         isLoggedIn()
//         if (customers != null) {
//             getCartDetail()
//             getWishListDetail()
//         }
//         // getShippedProductCountrys()

//         if (customers?.length) getCustomer(customers)

//         window.addEventListener("beforeunload", function (e) {

//             // console.log(window.performance.getEntriesByType("navigation")[0].type);
//             // console.log(user);
//             if (window.performance.getEntriesByType("navigation")[0].type == "navigate") {
//                 ApiService.setHeader()
//                 ApiService.patch(`shop/user/${userId}?model=${getModelRoute(user).model}`, { browserClosingTime: new Date().getTime() }).then(response => {

//                 }).catch(err => {
//                     console.log(err.response.data)
//                     // console.log("Else Catch")
//                     showMessage(err.response.data.message, "error")
//                 })
//             }
//         })

//     }, []);

//     return (
//         <div>
//             <TopHeader />

//             {/* <div className="">
//                 <div className="app-container">
//                     <ul className="header-social-container">
//                         <li>
//                             <a href="#" className="social-link">
//                                 <img src={NorthcottIcon} size={40} height={40} onClick={changeToNortncott} />
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className="social-link">
//                                 <img src={BanyanBatiks} size={40} height={40} onClick={changeToBanyan} />
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className="social-link">
//                                 <img src={PatrikLose} size={40} height={40} onClick={changeToPatrick} />
//                             </a>
//                         </li>
//                         <li>
//                             <a href="http://localhost:3002/" className="social-link" target="_blank">
//                                 <img src={Figo} size={40} height={40} />
//                             </a>
//                         </li>
//                     </ul>
//                     <div className="header-alert-news">
//                         {!user ? "" : <p>
//                             <b>Free Shipping </b>
//                             This Week Order Over - $55
//                         </p>}
//                     </div>
//                     <div className="header-top-actions">

//                         {user && <div style={{ display: 'flex', flexDirection: 'column', fontSize: 'small' }}>
//                             {user.userTypes.includes("CUSTOMER") && <span> <span style={{ fontWeight: '600' }}>{`Logged in as: ${user?.companyName} ${user?.customerId} ${user?.city} ${user?.state} `}</span></span>}
//                             {(customer && !user.userTypes.includes("CUSTOMER")) && <span> <span style={{ fontWeight: '600' }}>{customer?.companyName ? `Logged in as: ${customer?.companyName} ${customer?.customerId} ${customer?.city} ${customer?.state}` : ""}</span></span>}

//                             <span style={{ fontWeight: 'bold', cursor: "pointer", color: "black" }}>
//                                 {user?.userTypes.includes("CUSTOMER") ? "" : <Link to='/region-customer'>To change, click here.</Link>}
//                             </span>
//                         </div>}
//                         <div className="login-button">

//                             {user ? <Button onClick={handleLogout} style={{ backgroundColor: "#e2a855", borderColor: "#e2a855" }} variant="primary" size="sm">LOGOUT</Button> :
//                                 <Button as={Link} to="/login" style={{ backgroundColor: "#e2a855", borderColor: "#e2a855" }} variant="primary" size="sm">LOGIN</Button>}
//                         </div>
//                     </div>
//                 </div>
//             </div> */}

//             {/* <InnerHeader />
//             <DesktopNavigation /> */}
//             {/* <MobileBottomNavigation />
//             <MobileNavigation /> */}
//         </div>
//     )
// }
// import React from "react";

// const AppHeader = () => {
//   return <div>AppHeader</div>;
// };

// export default AppHeader;

import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import shopping from "../../../assets/HeaderLogo/CartLight.svg";
import mobileCartHover from "../../../assets/HeaderLogo/mobileCartHover.svg";
import mobileMenuHover from "../../../assets/HeaderLogo/mobileMenuHover.svg";
import shoppingMoblie from "../../../assets/HeaderLogo/CartMobile.svg";
import BurgerIconMobile from "../../../assets/HeaderLogo/BurgerIconMobile.svg";
import BanyanLogo from "../../../assets/HeaderLogo/BrandLogo/BanyanLogo.svg";
import PatrickLogo from "../../../assets/HeaderLogo/BrandLogo/PatrickLogo.svg";
import Figo from "../../../assets/HeaderLogo/BrandLogo/Figo.svg";
import Northcott from "../../../assets/HeaderLogo/BrandLogo/Northcott.svg";
import NorthcottMainLogo from "../../../assets/HeaderLogo/BrandLogo/NorthcottMainLogo.svg";
import BanyanOnClick from "../../../assets/HeaderLogo/OnclickLogo/BanyanOnClick.svg";
import PatrickOnClick from "../../../assets/HeaderLogo/OnclickLogo/PatrickOnClick.svg";
import NorthcottOnClick from "../../../assets/HeaderLogo/OnclickLogo/NorthcottOnClick.svg";
import FigoOnClick from "../../../assets/HeaderLogo/OnclickLogo/FigoOnClick.svg";
import search from "../../../assets/HeaderLogo/search.svg";
import { links } from "./HomePageContent/Link";
import { Link } from "react-router-dom";

export default function TopHeader() {
  const [open, setOpen] = useState(false);

  // Define a state to hold the open/closed state for each submenu
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [openSubsubmenus, setOpenSubsubmenus] = useState(false);

  // Function to toggle the submenu for a specific link
  const toggleSubmenu = (index) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    setOpenSubsubmenus(!openSubsubmenus);
  };

  const closeMenu = () => {
    setOpen(!open);
  };

  // login logout
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // for top header brand selection
  const [selectedBrand, setSelectedBrand] = useState("northcott");

  const handleImageClick = (imageName) => {
    setSelectedBrand(imageName);
  };

  return (
    <>
      {/* first header starts here */}
      <header className="bg-[#686661] dark:bg-[#3A3933] h-[35px]">
        <nav
          className="flex mx-4 sm:mx-10 items-center justify-center"
          aria-label="Global"
        >
          <Popover.Group className="flex w-[320px] sm:w-[345.07px]">
            <a href="#" onClick={() => handleImageClick("northcott")}>
              {selectedBrand === "northcott" ? (
                <img
                  className="py-2 h-[35px] w-[49.38px] sm:py-0 sm:h-[35px] sm:w-[58.2px] object-cover bg-white"
                  src={NorthcottOnClick}
                  alt="Northcott"
                />
              ) : (
                <img
                  className="py-2 h-[35px] w-[49.38px] sm:py-0 sm:h-[35px] sm:w-[58.2px] hover:bg-[#6B6B66] object-cover"
                  src={Northcott}
                  alt="Northcott"
                />
              )}
            </a>
            <a href="#" onClick={() => handleImageClick("banyan")}>
              {selectedBrand === "banyan" ? (
                <img
                  className="h-[35px] w-[76.3px] sm:w-[88.11px] object-cover bg-white"
                  src={BanyanOnClick}
                  alt="BanyanLogo"
                />
              ) : (
                <img
                  className="h-[35px] w-[76.3px] sm:w-[88.11px] hover:bg-[#6B6B66]"
                  src={BanyanLogo}
                  alt="Banyan"
                />
              )}
            </a>
            <a href="#" onClick={() => handleImageClick("patrick")}>
              {selectedBrand === "patrick" ? (
                <img
                  className="h-[35px] w-[97.6px] sm:w-[122px] object-cover bg-white"
                  src={PatrickOnClick}
                  alt="PatrickLogo"
                />
              ) : (
                <img
                  className="h-[35px] w-[97.6px] sm:w-[122px] hover:bg-[#6B6B66]"
                  src={PatrickLogo}
                  alt="PatrickLogo"
                />
              )}
            </a>
            <a href="#" onClick={() => handleImageClick("figo")}>
              {selectedBrand === "figo" ? (
                <img
                  className="h-[35px] sm:h-[35px] w-[64.5px] sm:w-[76.76px] object-cover bg-white"
                  src={FigoOnClick}
                  alt="Figo"
                />
              ) : (
                <img
                  className="h-[35px] w-[64.5px] sm:w-[76.76px] hover:bg-[#6B6B66]"
                  src={Figo}
                  alt="Figo"
                />
              )}
            </a>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
            {!isLoggedIn ? (
              <div>
                <a
                  href="#"
                  className="text-sm text-white font-semibold hover:text-[#A4A3A0]"
                >
                  Log In
                </a>{" "}
              </div>
            ) : (
              <div className="text-sm text-white font-semibold hover:text-[#A4A3A0]">
                <div className="flex items-center justify-end text-end sm:mx-2">
                  <div className="w-[329px] h-[20px]">
                    <p className="text-white text-[8px] leading-3">
                      You're logged in as CHRISTINA'S NORTHCOTT SHOP, Vaughan{" "}
                      <Link to={"/"} className="underline font-semibold">
                        To change, click here.
                      </Link>
                    </p>
                  </div>
                  <div className=" mx-6 h-[23px] text-white">{` | `}</div>
                  <a
                    href="#"
                    className="text-sm text-white font-semibold text-center text-nowrap"
                  >
                    Log Out
                  </a>{" "}
                </div>
              </div>
            )}
            <div className="mx-6 h-[30px] text-white">{` | `}</div>

            <div className="relative">
              <img className=" h-8 w-auto" src={shopping} alt="shopping" />
              {/* <img className=" h-8 w-auto" src={shoppingHover} alt="shopping" /> */}
            </div>
            {/* <ThemeButton /> */}
          </div>
        </nav>
      </header>
      {/* first header ends here */}
      {/* Second Header start here */}
      <div className="bg-white p-2 sm:pt-3">
        {/* <div className="flex flex-row"> */}
        <div className="flex flex-row">
          {/* mobile view hamburger menu */}
          <div className="basis-1/3 h-[50px] w-[664px] ms-[10px] sm:ms-[45px]">
            <div
              className="flex mt-4 lg:hidden hover:text-[#E2A856]"
              onClick={() => setOpen(!open)}
            >
              <div className="relative">
                <img
                  className="absolute top-0 left-0 hover:hidden h-[24px] w-[18px]"
                  src={BurgerIconMobile}
                  alt="Menu"
                />
                <img
                  className="block h-[24px] w-[18px]"
                  src={mobileMenuHover}
                  alt="Menu"
                />
              </div>
            </div>
          </div>
          <div className="basis-2/3 sm:basis-1/3 flex items-center justify-center -ms-10 -me-4">
            {" "}
            <img
              className="h-[37.25px] w-[170px] sm:h-[50px] sm:w-[228px] mt-2"
              src={NorthcottMainLogo}
              alt="Northcott"
            />
          </div>
          <div className="basis-1/3">
            {" "}
            {/* desktop view input search */}
            <form className="sm:mx-5 mt-2 hidden lg:flex justify-end">
              <div className="flex mt-2">
                <div className="relative w-[250px] bg-white">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text- font-medium text-gray-900 sr-only"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none">
                      <img src={search} alt="search" />
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-2 text-gray-900 border border-gray-300 bg-white focus:ring-gray-500 focus:border-gray-500"
                      placeholder="Search"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
            {/* mobile view shopping icon menu */}
            <div className="flex lg:hidden justify-end mt-4 me-[13px] sm:me-[35px]">
              <div className="relative">
                <img
                  className="absolute top-0 left-0 hover:hidden h-[24px] w-[16px] hover:text-[#E2A856]"
                  src={shoppingMoblie}
                  alt="Cart"
                />
                <img
                  className="block h-[24px] w-[16px] hover:text-[#E2A856]"
                  src={mobileCartHover}
                  alt="Cart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile view search input box */}
      <form className=" mt-5 mb-7 flex lg:hidden justify-center bg-white">
        <div className="flex">
          <div className="relative">
            <div className="w-[280px] h-[40px] sm:w-[664px] sm:h-[40px] mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none">
                  <img src={search} alt="search" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 text-gray-900 border border-gray-300 bg-white focus:ring-gray-500 focus:border-gray-500"
                  placeholder="Search"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* header second ends here */}
      {/* Third Header start here */}

      {/* desktop view links and dropdown links */}
      <div className="hidden bg-white pt-3 lg:mx-auto lg:flex lg:justify-center">
        <div
          className="h-[44px] sm:min-w-[915px] xl:w-[1092px] grid grid-flow-col items-center justify-evenly"
          style={{ fontFamily: "Open Sans", fontWeight: "400" }}
        >
          {links.map((item, index) => (
            <div key={index}>
              {!item.submenu ? (
                <div>
                  <Link
                    to="/testui"
                    className="block uppercase rounded-lg py-2 font-normal text-xs text-gray-900 hover:text-[#E2A856]"
                  >
                    {item?.name}
                  </Link>
                </div>
              ) : (
                <div>
                  <Popover.Group>
                    <Popover className="relative">
                      <Popover.Button className="flex uppercase font-normal mt-[0.3rem] text-xs text-gray-90 hover:text-[#E2A856]">
                        {item?.name}

                        <ChevronDownIcon
                          className="h-5 w-5 text-gray-400 hover:text-[#E2A856]"
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute grid -left-8 w-max z-10 mt-3 bg-white shadow-lg">
                          <div
                            className={`${
                              item.sublinks.length > 1
                                ? " grid grid-cols-3 gap-10 shadow-md border-t"
                                : " grid grid-cols-1 w-64 shadow-md border-t"
                            }`}
                          >
                            {item?.sublinks &&
                              item?.sublinks?.map((mysublink, index) => (
                                <div key={index}>
                                  {mysublink?.Head !== "a" ? (
                                    <div className=" font-bold text-xs">
                                      {mysublink?.Head !== "" ? (
                                        <div className="p-3">
                                          {mysublink?.Head}
                                        </div>
                                      ) : (
                                        <div className="hidden"></div>
                                      )}
                                    </div>
                                  ) : (
                                    <div className="text-white p-2">a</div>
                                  )}

                                  {mysublink?.sublink?.map(
                                    (finallink, index) => (
                                      <div
                                        key={index}
                                        className="p-3 text-sm leading-6 hover:bg-[#F5F4F1]"
                                      >
                                        <div>
                                          <div className="col-span-2">
                                            <Link
                                              to={`/testui/collections/${finallink?._id?.$oid}`}
                                              className="block text-xs text-gray-900"
                                            >
                                              {finallink?.name}
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              ))}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </Popover.Group>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="-mt-2">
        <hr />
      </div>
      {/* Third header ends here */}

      {/* mobile view nav link and nav menu */}
      <ul
        className={`
        lg:hidden bg-[#686661] fixed w-full top-0 overflow-y-auto bottom-0
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        style={{ zIndex: 9999, fontFamily: "Open Sans", fontWeight: "400" }}
      >
        <li className="flex m-2 items-center justify-between text-2xl h-16">
          {!isLoggedIn ? (
            <div>
              <a
                href="#"
                className="text-sm text-white font-semibold mx-2 text-center hover:text-[#A4A3A0]"
              >
                Log In
              </a>{" "}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 sm:mx-2">
              <a
                href="#"
                className="text-sm text-white font-semibold text-center text-nowrap"
              >
                Log Out
              </a>{" "}
              <div className=" h-[35px] text-white">{` | `}</div>
              <div className="">
                <p className="text-white text-[10px] sm:text-sm leading-4 ms-2 sm:ms-2   text-start">
                  You're logged in as CHRISTINA'S NORTHCOTT SHOP, Vaughan{" "}
                  <Link to={"/"} className="underline font-semibold">
                    To change, click here.
                  </Link>
                </p>
              </div>
            </div>
          )}
          <div className="text-white" onClick={closeMenu}>
            {" "}
            <ion-icon name="close"></ion-icon>
          </div>
        </li>
        <div>
          {links.map((link, index) => (
            <div className="bg-white" key={index}>
              <div className="px-3 text-left md:cursor-pointer group">
                {!link.submenu ? (
                  <Link
                    to={"/"}
                    className="py-3 flex justify-between items-center pr-5 group"
                  >
                    {" "}
                    <div className="uppercase text-black hover:text-[#E2A856] font-normal text-xs">
                      {link.name}
                    </div>
                  </Link>
                ) : (
                  <div
                    className="py-3 flex justify-between items-center pr-5 group"
                    onClick={() => {
                      toggleSubmenu(index);
                    }}
                  >
                    <div className="uppercase text-black hover:text-[#E2A856] font-normal text-xs">
                      {link.name}
                    </div>
                    <span className="lg:hidden inline">
                      {link.submenu && (
                        <div>
                          {!openSubsubmenus && (
                            <div className="text-black hover:text-[#E2A856]">
                              <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                          )}{" "}
                          {
                            <ul
                              className={`
                              lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 
                              duration-500 ${
                                openSubmenus[index] ? "left-0" : "left-[-100%]"
                              }
                              `}
                            >
                              {/* Render submenu content */}
                              {openSubsubmenus && (
                                <ul>
                                  <li className="bg-[#686661] flex justify-between text-2xl p-2">
                                    {!isLoggedIn ? (
                                      <div>
                                        <a
                                          href="#"
                                          className="text-sm text-white font-semibold mx-2 text-center hover:text-[#A4A3A0]"
                                        >
                                          Log In
                                        </a>{" "}
                                      </div>
                                    ) : (
                                      <div className="flex items-center justify-center gap-2 sm:mx-2">
                                        <a
                                          href="#"
                                          className="text-sm text-white font-semibold text-center text-nowrap"
                                        >
                                          Log Out
                                        </a>{" "}
                                        <div className=" h-[35px] text-white">{` | `}</div>
                                        <div className="">
                                          <p className="text-white text-[10px] sm:text-sm leading-4 ms-2 sm:ms-2 me-6 sm:me-56 text-start">
                                            You're logged in as CHRISTINA'S
                                            NORTHCOTT SHOP, Vaughan{" "}
                                            <Link
                                              to={"/"}
                                              className="underline font-semibold"
                                            >
                                              To change, click here.
                                            </Link>
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                    <div
                                      className="text-white"
                                      onClick={closeMenu}
                                    >
                                      {" "}
                                      <ion-icon name="close"></ion-icon>
                                    </div>
                                  </li>
                                  <li className="flex bg-white items-end mt-3 py-3 ">
                                    <div className="text-center ps-3 mb-[11px]">
                                      <ion-icon name="chevron-back-outline"></ion-icon>
                                    </div>
                                    <h1 className=" bg-white font-bold uppercase text-xs ms-2 mb-3 hover:text-[#E2A856]">
                                      {link.name}
                                    </h1>
                                  </li>
                                  {link.sublinks.map((mysublinks, index) => (
                                    <div
                                      key={index + 100}
                                      className="bg-white ps-4"
                                    >
                                      {mysublinks?.Head === "a" ? (
                                        <div className="text-white hidden"></div>
                                      ) : (
                                        <div className="font-bold text-xs">
                                          {mysublinks.Head}
                                          {mysublinks.Head === "" ? null : (
                                            <div className="mt-3 w-[90vw] sm:w-[95vw]">
                                              <hr />
                                            </div>
                                          )}
                                        </div>
                                      )}
                                      {mysublinks.sublink.map(
                                        (finallink, index) => (
                                          <div
                                            key={index}
                                            className="bg-white py-3 text-xs text-black hover:bg-[#F5F4F1]"
                                          >
                                            <Link
                                              to={`/testui/collections/${finallink?._id?.$oid}`}
                                            >
                                              {finallink.name}
                                            </Link>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  ))}
                                </ul>
                              )}
                            </ul>
                          }
                        </div>
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white h-[10vh]"></div>
      </ul>
    </>
  );
}
