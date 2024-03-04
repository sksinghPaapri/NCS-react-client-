// import { React, useContext, useEffect, Fragment, useState } from 'react'
// import { Button, Container } from 'react-bootstrap'
// import { Popover, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { Link, useNavigate, useSearchParams } from 'react-router-dom'
// import { CustomerContext } from '../../../states/contexts/CustomerContext';
// import { UserContext } from '../../../states/contexts/UserContext'

// import shopping from "../../../assets/HeaderLogo/CartLight.svg";
// import mobileCartHover from "../../../assets/HeaderLogo/mobileCartHover.svg";
// import mobileMenuHover from "../../../assets/HeaderLogo/mobileMenuHover.svg";
// import shoppingMoblie from "../../../assets/HeaderLogo/CartMobile.svg";
// import BurgerIconMobile from "../../../assets/HeaderLogo/BurgerIconMobile.svg";
// import BanyanLogo from "../../../assets/HeaderLogo/BrandLogo/BanyanLogo.svg";
// import PatrickLogo from "../../../assets/HeaderLogo/BrandLogo/PatrickLogo.svg";
// import Figo from "../../../assets/HeaderLogo/BrandLogo/FigoMain.svg";
// import Northcott from "../../../assets/HeaderLogo/BrandLogo/Northcott.svg";
// import NorthcottMainLogo from "../../../assets/HeaderLogo/BrandLogo/NorthcottMainLogo.svg";
// import BanyanMainLogo from "../../../assets/HeaderLogo/BrandLogo/BANYAN.svg";
// import PatrickMainLogo from "../../../assets/HeaderLogo/BrandLogo/PATRICK.svg";
// import BanyanOnClick from "../../../assets/HeaderLogo/OnclickLogo/BanyanOnClick.svg";
// import PatrickOnClick from "../../../assets/HeaderLogo/OnclickLogo/PatrickOnClick.svg";
// import NorthcottOnClick from "../../../assets/HeaderLogo/OnclickLogo/NorthcottOnClick.svg";
// import FigoOnClick from "../../../assets/HeaderLogo/OnclickLogo/FigoOnClick.svg";
// import search from "../../../assets/HeaderLogo/search.svg";
// import { links } from "./HomePageContent/Link";

// import NorthcottIcon from '../../../assets/images/northcott.png'
// import BanyanBatiks from '../../../assets/images/banyan-batiks.png'
// import PatrikLose from '../../../assets/images/patrik-lose.png'
// // import Figo from '../../../assets/images/figo.jpg'
// // import BanyanBatiks from '../../../assets/images/logo/LogoBanyan.png'
// // import PatrikLose from '../../../assets/images/logo/Logo-Patrick Lose.png'
// // import NorthcottIcon from '../../../assets/images/logo/NorthcottHorizontal.png'
// // import Figo from '../../../assets/images/logo/Logo-FIGO.png'
// import { BrandIconContext } from '../../../states/contexts/BrandIconContext';
// import { ToastContainer, toast, cssTransition } from "react-toastify";
// import ApiService from '../../../helpers/ApiServices';
// import { CustomerService, TokenService } from '../../../helpers/StorageServices';
// import { getCountry, getModelRoute, logout, showMessage } from '../../../helpers/Utils';
// import { BsBagFill } from "react-icons/bs";
// import { CartContext } from '../../../states/contexts/CartContext';

// export default function TopHeader() {
//     const { dispatch, user } = useContext(UserContext);
//     const { dispatch: customerDispatch, customer } = useContext(CustomerContext);
//     const { dispatch: cartDispatch, quantity } = useContext(CartContext)
//     const { dispatch: iconDispatch, isNorthchott, isBanyan, isPatrick, backgroundColor, ...rest } = useContext(BrandIconContext)

//     const [openSubmenus, setOpenSubmenus] = useState({});
//     const [openSubsubmenus, setOpenSubsubmenus] = useState(false);
//     const [open, setOpen] = useState(false);
//     const [selectedBrand, setSelectedBrand] = useState(null);
//     const [categoryTypes, setCategoryTypes] = useState([]);
//     const [categories, setCategories] = useState([]);

//     const navigate = useNavigate();
//     const [searchParams, setSearchParams] = useSearchParams()

//     let division = searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : "NORTHCOTT"

//     let customers = JSON.parse(localStorage.getItem("PCTeRP.CUSTOMER_IDS"))
//     let loggedInUser
//     let cust = {
//         name: "Customer",
//         submenu: true,
//         sublinks: [
//             {
//                 Head: "",
//                 sublink: [
//                     {
//                         name: "Personal Info",
//                         href: `/customer-profile?division=${searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : 'NORTHCOTT'}`,
//                     },
//                     {
//                         name: "Order History",
//                         href: `/my-orders?division=${searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : 'NORTHCOTT'}`,
//                     },
//                     {
//                         name: "Invoice History",
//                         href: "#",
//                     },
//                     {
//                         name: "Statement",
//                         href: "#",
//                     },
//                     {
//                         name: "Dashboard",
//                         href: "#",
//                     },
//                 ],
//             },
//         ],
//     }
//     let ro = {
//         name: "Rapid Order",
//         submenu: false,
//     }

//     // Function to toggle the submenu for a specific link
//     const toggleSubmenu = (index) => {
//         setOpenSubmenus((prevState) => ({
//             ...prevState,
//             [index]: !prevState[index],
//         }));
//         setOpenSubsubmenus(!openSubsubmenus);
//     };

//     const closeMenu = () => {
//         setOpen(!open);
//     };

//     const handleImageClick = (imageName) => {
//         setSelectedBrand(imageName);
//     };

//     const changeToNortncott = () => {
//         iconDispatch({ type: "IS_NORTHCOTT" })
//         navigate(`?division=NORTHCOTT`)
//         //  navigate(`https://test.northcott.com/website/product-category?division=NORTHCOTT`)
//     }
//     const changeToBanyan = () => {
//         iconDispatch({ type: "IS_BANYAN" })
//         navigate(`?division=BANYAN BATIKS`)
//         //  navigate(`https://test.northcott.com/website/product-category?division=NORTHCOTT`)
//     }
//     const changeToPatrick = () => {
//         iconDispatch({ type: "IS_PATRICK" })
//         navigate(`?division=PATRICK LOSE`)
//         //  navigate(`https://test.northcott.com/website/product-category?division=NORTHCOTT`)
//     }
//     const changeToFigo = () => {
//         iconDispatch({ type: "IS_FIGO" })
//     }

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

//     const setModelAndRoute = (user) => {
//         if (user?.userTypes.includes("CUSTOMER")) {
//             localStorage.setItem("PCTeRP.MODEL", "Customer")
//             localStorage.setItem("PCTeRP.ROUTE", "Customer")
//         } else {
//             localStorage.setItem("PCTeRP.MODEL", "User")
//             localStorage.setItem("PCTeRP.ROUTE", "user")
//         }
//     }

//     const isLoggedIn = async () => {
//         ApiService.setHeader()
//         ApiService.get(`shop/user/loggedIn?model=${getModelRoute(user).model}`).then(async response => {
//             console.log(response?.data);
//             dispatch({ type: "LOGIN_SUCCESS", payload: response.data.document });
//             // setUserId(response.data.document._id)
//             loggedInUser = response.data.document | user

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

//     const getAllProductCategoriesBYType = (type = "NORTHCOTT") => {
//         // setIsCategoryLoading(true)
//         let isLoggedInUser
//         if (customers != null || customer) {
//             isLoggedInUser = true
//         } else {
//             isLoggedInUser = false
//         }

//         // ApiService.setHeader()
//         // ApiService.get(`shop/product/getImgs`).then(response => {
//         //     console.log(response.data.document);
//         // })

//         console.log(getCountry());
//         console.log(isLoggedInUser);
//         // ApiService.get(`shop/category/type?model=${getModelRoute(user).model}&type=${type}`).then(response => {
//         ApiService.get(`shop/category/type?protectModel=${getModelRoute(user).model}&type=${type}&isLoggedInUser=${isLoggedInUser}&country=${getCountry()}`).then(response => {
//             if (response?.data.isSuccess) {
//                 // setIsCategoryLoading(false)
//                 // setIsLoading(false)
//                 response?.data.documents?.map(category => {
//                     category.href = `/product-collection/${category?._id}?division=${searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : 'NORTHCOTT'}`
//                 })
//                 setCategories(response.data.documents)
//                 console.log(response.data.documents);
//             }
//         }).catch(error => {
//             // setIsCategoryLoading(false)
//             // setIsLoading(false)
//             console.log(error.response.data)
//             // console.log("Else Catch")
//             showMessage(error.response.data.message, "error")
//         })
//     }

//     const getCategoryType = () => {
//         // return ApiService.get(`shop/customList/title?model=${getModelRoute(user).model}&title=Category Type`).then(response => {
//         return ApiService.get(`shop/customList/title?protectModel=${getModelRoute(user).model}&title=Category Type`).then(response => {
//             if (response?.data.isSuccess) {
//                 console.log(response?.data.document.options);
//                 setCategoryTypes(response?.data.document.options)
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // console.log("Else Catch")
//             showMessage(error.response.data.message, "error")
//         })
//     }

//     const getCartDetail = () => {
//         ApiService.setHeader()
//         // ApiService.get(`shop/cart/${customers[customers?.length - 1]?._id}?model=${getModelRoute(user).model}`).then(response => {
//         ApiService.get(`shop/cart/${customers[customers?.length - 1]?._id}?protectModel=${getModelRoute(user).model}`).then(response => {
//             // console.log(response.data);
//             if (response?.data.isSuccess) {
//                 // console.log(response?.data.documents);

//                 cartDispatch({ type: "ADD_TO_CART_QUANTITY", payload: response?.data.documents?.length });
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // console.log("Else Catch")
//             showMessage(error.response.data.message, "error")
//         })
//     }

//     // const getWishListDetail = () => {
//     //     ApiService.setHeader()
//     //     // ApiService.get(`shop/wishList/${customers[customers?.length - 1]?._id}?model=${getModelRoute(user).model}`).then(response => {
//     //     ApiService.get(`shop/wishList/${customers[customers?.length - 1]?._id}?protectModel=${getModelRoute(user).model}`).then(response => {
//     //         console.log(response.data);
//     //         if (response?.data.isSuccess) {
//     //             // console.log(response?.data.documents);
//     //             setWishLists(response?.data?.documents)
//     //             wishListDispatch({ type: "ADD_TO_WISHLIST_QUANTITY", payload: response?.data?.documents?.length });
//     //         }
//     //     }).catch(error => {
//     //         console.log(error.response.data)
//     //         // console.log("Else Catch")
//     //         showMessage(error.response.data.message, "error")
//     //     })
//     // }

//     if (user && (user?.userTypes?.includes("CUSTOMER") || customer)) {
//         const find = links.filter(ele => ele?.name === 'Customer')
//         if (!find?.length) {
//             links?.push(cust)

//             if (user && (!user?.userTypes?.includes("CUSTOMER") || !user?.userTypes?.includes("SALES_REP"))) {
//                 const find = links.filter(ele => ele?.name === 'Rapid Order')
//                 if (!find?.length) {
//                     links?.push(ro)
//                 }
//             }
//         }
//     }

//     for (let link of links) {
//         if (link?.name === "Shop") {
//             link.sublinks[0].sublink = categories
//             link.sublinks[1].sublink = []
//         }
//     }

//     console.log(links);

//     useEffect(() => {
//         // console.log(window.performance.getEntriesByType("navigation")[0].type);
//         // if (window.performance.getEntriesByType("navigation")[0].type == "navigate") {
//         //     console.log(user?.savePassword);
//         //     handleLogout()
//         // }
//         isLoggedIn()

//         // setAllLinks(links)

//     }, []);

//     useEffect(() => {
//         if (customers != null) {
//             getCartDetail()
//             // getWishListDetail()
//         }
//         getCategoryType()

//         if (division == "NORTHCOTT") {
//             changeToNortncott()
//             getAllProductCategoriesBYType("NORTHCOTT")
//         }

//         if (division == "BANYAN BATIKS") {
//             changeToBanyan()
//             getAllProductCategoriesBYType("BANYAN BATIKS")
//         }

//         if (division == "PATRICK LOSE") {
//             changeToPatrick()
//             getAllProductCategoriesBYType("PATRICK LOSE")
//         }

//     }, [division]);

//     console.log(user);
//     console.log(customer);
//     console.log(division);
//     console.log(loggedInUser);
//     // console.log(links);

//     return (
//         <>
//             {/* first header starts here */}
//             <header className="bg-[#686661] dark:bg-[#3A3933] h-[35px]">
//                 <nav
//                     className="flex mx-4 sm:mx-10 items-center justify-center"
//                     aria-label="Global"
//                 >
//                     <Popover.Group className="flex w-[320px] sm:w-[345.07px]">
//                         <a href="#" onClick={() => {
//                             handleImageClick("northcott")
//                             changeToNortncott()
//                         }}>
//                             {selectedBrand === "northcott" ? (
//                                 <img
//                                     className="py-2 sm:py-0 sm:h-[36px] w-[49.38px] sm:w-[58.2px]"
//                                     src={NorthcottOnClick}
//                                     alt="Northcott"
//                                 />
//                             ) : (
//                                 <img
//                                     className="py-2 sm:py-0 sm:h-[36px] w-[49.38px] sm:w-[58.2px] hover:bg-[#6B6B66]"
//                                     src={Northcott}
//                                     alt="Northcott"
//                                 />
//                             )}
//                         </a>
//                         <a href="#" onClick={() => {
//                             handleImageClick("banyan")
//                             changeToBanyan()
//                         }}>
//                             {selectedBrand === "banyan" ? (
//                                 <img
//                                     className="h-[36px] w-[76.3px] sm:w-[88.11px]"
//                                     src={BanyanOnClick}
//                                     alt="BanyanLogo"
//                                 />
//                             ) : (
//                                 <img
//                                     className="h-[35px] w-[76.3px] sm:w-[88.11px] hover:bg-[#6B6B66]"
//                                     src={BanyanLogo}
//                                     alt="Banyan"
//                                 />
//                             )}
//                         </a>
//                         <a href="#" onClick={() => {
//                             handleImageClick("patrick")
//                             changeToPatrick()
//                         }}>
//                             {selectedBrand === "patrick" ? (
//                                 <img
//                                     className="h-[35px] w-[97.6px] sm:w-[122px]"
//                                     src={PatrickOnClick}
//                                     alt="PatrickLogo"
//                                 />
//                             ) : (
//                                 <img
//                                     className="h-[35px] w-[97.6px] sm:w-[122px] hover:bg-[#6B6B66]"
//                                     src={PatrickLogo}
//                                     alt="PatrickLogo"
//                                 />
//                             )}
//                         </a>
//                         <a href="#" onClick={() => handleImageClick("figo")}>
//                             {selectedBrand === "figo" ? (
//                                 <img
//                                     className="h-[36px] w-[64.5px] sm:w-[76.76px]"
//                                     src={FigoOnClick}
//                                     alt="Figo"
//                                 />
//                             ) : (
//                                 <img
//                                     className="h-[35px] w-[64.5px] sm:w-[76.76px] hover:bg-[#6B6B66]"
//                                     src={Figo}
//                                     alt="Figo"
//                                 />
//                             )}
//                         </a>
//                     </Popover.Group>
//                     {/* //{user?.userTypes?.includes("CUSTOMER") && <span> <span style={{ fontWeight: '600' }}>{`Logged in as: ${user?.companyName} ${user?.customerId} ${user?.city} ${user?.state} `}</span></span>}
//         //                 {(customer && !user?.userTypes?.includes("CUSTOMER")) && <span> <span style={{ fontWeight: '600' }}>{customer?.companyName ? `Logged in as: ${customer?.companyName} ${customer?.customerId} ${customer?.city} ${(customer.isExport && customer.exportUSA?.length) ? customer?.exportUSA.map(ele => ele.text) : (customer.isExport && customer.exportCAD?.length) ? customer?.exportCAD.map(ele => ele.text) : customer?.state}` : ""}</span></span>} */}

//                     {(user) ?
//                         <>
//                             <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
//                                 {
//                                     (customer && !user?.userTypes?.includes("CUSTOMER")) &&
//                                     <div className="text-sm text-white hover:text-[#A4A3A0]">
//                                         <div>{`You're logged in as ${customer?.companyName}, ${customer?.state}`}</div>
//                                         <div>{user?.userTypes?.includes("CUSTOMER") ? "" : <Link to={`/region-customer?division=${searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : 'NORTHCOTT'}`}>To change, click here.</Link>}</div>
//                                     </div>
//                                 }
//                                 <div className="mx-6 h-[30px] text-white">{` | `}</div>
//                                 <Link
//                                     // href="#"
//                                     onClick={handleLogout}
//                                     className="text-sm text-white font-semibold hover:text-[#A4A3A0]"
//                                 >
//                                     Log Out
//                                 </Link>
//                                 <div className="mx-6 h-[30px] text-white">{` | `}</div>
//                                 <div className="relative" style={{ cursor: "pointer" }}>
//                                     <img className=" h-8 w-auto" src={shopping} alt="shopping" onClick={() => { navigate(`/cart-detail?division=${searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : 'NORTHCOTT'}`) }} />
//                                     {/* <img className=" h-8 w-auto" src={shoppingHover} alt="shopping" /> */}
//                                 </div>
//                             </div>
//                         </>
//                         :
//                         <>
//                             <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
//                                 <Link
//                                     // href="#"
//                                     to={`/login?division=${searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : 'NORTHCOTT'}`}
//                                     className="text-sm text-white font-semibold hover:text-[#A4A3A0]"
//                                 >
//                                     Log In
//                                 </Link>
//                                 <div className="mx-6 h-[30px] text-white">{` | `}</div>
//                                 <div className="relative">
//                                     <img className=" h-8 w-auto" src={shopping} alt="shopping" onClick={() => { navigate(`/cart-detail?division=${searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : 'NORTHCOTT'}`) }} />
//                                     {/* <img className=" h-8 w-auto" src={shoppingHover} alt="shopping" /> */}
//                                 </div>
//                                 {/* <ThemeButton /> */}
//                             </div>
//                         </>
//                     }
//                 </nav>
//             </header>
//             {/* first header ends here */}

//             {/* Second Header start here */}
//             <div className="bg-white p-2 sm:pt-3">
//                 {/* <div className="flex flex-row"> */}
//                 <div className="flex flex-row">
//                     {/* mobile view hamburger menu */}
//                     <div className="basis-1/3 h-[50px] w-[664px] ms-[10px] sm:ms-[45px]">
//                         <div
//                             className="flex mt-4 lg:hidden hover:text-[#E2A856]"
//                             onClick={() => setOpen(!open)}
//                         >
//                             <div className="relative">
//                                 <img
//                                     className="absolute top-0 left-0 hover:hidden h-[24px] w-[18px]"
//                                     src={BurgerIconMobile}
//                                     alt="Menu"
//                                 />
//                                 <img
//                                     className="block h-[24px] w-[18px]"
//                                     src={mobileMenuHover}
//                                     alt="Menu"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {(isNorthchott || division === "NORTHCOTT") && <div className="basis-2/3 sm:basis-1/3 flex items-center justify-center -ms-10 -me-4">
//                         {" "}
//                         <img
//                             className="h-[37.25px] w-[170px] sm:h-[50px] sm:w-[228px] mt-2"
//                             src={NorthcottMainLogo}
//                             alt="Northcott"
//                         />
//                     </div>}

//                     {(isBanyan || division === "BANYAN BATIKS") && <div className="basis-2/3 sm:basis-1/3 flex items-center justify-center -ms-10 -me-4">
//                         {" "}
//                         <img
//                             className="h-[37.25px] w-[170px] sm:h-[50px] sm:w-[228px] mt-2"
//                             src={BanyanMainLogo}
//                             alt="Banyan"
//                         />
//                     </div>}

//                     {(isPatrick || division === "PATRICK LOSE") && <div className="basis-2/3 sm:basis-1/3 flex items-center justify-center -ms-10 -me-4">
//                         {" "}
//                         <img
//                             className="h-[37.25px] w-[170px] sm:h-[50px] sm:w-[228px] mt-2"
//                             src={PatrickMainLogo}
//                             alt="Patrick"
//                         />
//                     </div>}

//                     <div className="basis-1/3">
//                         {" "}
//                         {/* desktop view input search */}
//                         <form className="sm:mx-5 mt-2 hidden lg:flex justify-end">
//                             <div className="flex mt-2">
//                                 <div className="relative w-[250px] bg-white">
//                                     <label
//                                         htmlFor="default-search"
//                                         className="mb-2 text- font-medium text-gray-900 sr-only"
//                                     >
//                                         Search
//                                     </label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none">
//                                             <img src={search} alt="search" />
//                                         </div>
//                                         <input
//                                             type="search"
//                                             id="default-search"
//                                             className="block w-full p-2 text-gray-900 border border-gray-300 bg-white focus:ring-gray-500 focus:border-gray-500"
//                                             placeholder="Search"
//                                             required
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                         {/* mobile view shopping icon menu */}
//                         <div className="flex lg:hidden justify-end mt-4 me-[13px] sm:me-[35px]">
//                             <div className="relative" style={{ cursor: "pointer" }}>
//                                 <img
//                                     className="absolute top-0 left-0 hover:hidden h-[24px] w-[16px] hover:text-[#E2A856]"
//                                     src={shoppingMoblie}
//                                     alt="Cart"
//                                     onClick={() => { navigate(`/cart-detail?division=${searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : 'NORTHCOTT'}`) }}
//                                 />
//                                 <img
//                                     className="block h-[24px] w-[16px] hover:text-[#E2A856]"
//                                     src={mobileCartHover}
//                                     alt="Cart"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* mobile view search input box */}
//             <form className=" mt-5 mb-7 flex lg:hidden justify-center bg-white">
//                 <div className="flex">
//                     <div className="relative">
//                         <div className="w-[280px] h-[40px] sm:w-[664px] sm:h-[40px] mx-auto">
//                             <label
//                                 htmlFor="default-search"
//                                 className="mb-2 font-medium text-gray-900 sr-only"
//                             >
//                                 Search
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none">
//                                     <img src={search} alt="search" />
//                                 </div>
//                                 <input
//                                     type="search"
//                                     id="default-search"
//                                     className="block w-full p-2 text-gray-900 border border-gray-300 bg-white focus:ring-gray-500 focus:border-gray-500"
//                                     placeholder="Search"
//                                     required
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//             {/* header second ends here */}
//             {/* Third Header start here */}

//             {/* desktop view links and dropdown links */}
//             <div className="hidden bg-white pt-3 lg:mx-auto lg:flex lg:justify-center">
//                 <div
//                     className="h-[44px] sm:min-w-[915px] xl:w-[1092px] grid grid-flow-col items-center justify-evenly"
//                     style={{ fontFamily: "Open Sans", fontWeight: "400" }}
//                 >
//                     {links.map((item, index) => (
//                         <div key={index}>
//                             {!item.submenu ? (
//                                 <div>
//                                     <Link
//                                         to={`/?division=${searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : 'NORTHCOTT'}`}
//                                         className="block uppercase rounded-lg py-2 font-normal text-xs text-gray-900 hover:text-[#E2A856]"
//                                     >
//                                         {item?.name}
//                                     </Link>
//                                 </div>
//                             ) : (
//                                 <div>
//                                     <Popover.Group>
//                                         <Popover className="relative">
//                                             <Popover.Button className="flex uppercase font-normal mt-[0.3rem] text-xs text-gray-90 hover:text-[#E2A856]">
//                                                 {item?.name}

//                                                 <ChevronDownIcon
//                                                     className="h-5 w-5 text-gray-400 hover:text-[#E2A856]"
//                                                     aria-hidden="true"
//                                                 />
//                                             </Popover.Button>

//                                             <Transition
//                                                 as={Fragment}
//                                                 enter="transition ease-out duration-200"
//                                                 enterFrom="opacity-0 translate-y-1"
//                                                 enterTo="opacity-100 translate-y-0"
//                                                 leave="transition ease-in duration-150"
//                                                 leaveFrom="opacity-100 translate-y-0"
//                                                 leaveTo="opacity-0 translate-y-1"
//                                             >
//                                                 <Popover.Panel className="absolute grid -left-8 w-max z-10 mt-3 bg-white shadow-lg">
//                                                     <div
//                                                         className={`${item.sublinks.length > 1
//                                                             ? " grid grid-cols-3 gap-10 shadow-md border-t"
//                                                             : " grid grid-cols-1 w-64 shadow-md border-t"
//                                                             }`}
//                                                     >
//                                                         {item?.sublinks &&
//                                                             item?.sublinks?.map((mysublink, index) => (
//                                                                 <div key={index}>
//                                                                     {mysublink?.Head !== "a" ? (
//                                                                         <div className=" font-bold text-xs">
//                                                                             {mysublink?.Head !== "" ? (
//                                                                                 <div className="p-3">
//                                                                                     {mysublink?.Head}
//                                                                                 </div>
//                                                                             ) : (
//                                                                                 <div className="hidden"></div>
//                                                                             )}
//                                                                         </div>
//                                                                     ) : (
//                                                                         <div className="text-white p-2">a</div>
//                                                                     )}

//                                                                     {mysublink?.sublink?.map(
//                                                                         (finallink, index) => (
//                                                                             <div
//                                                                                 key={index}
//                                                                                 className="p-3 text-sm leading-6 hover:bg-[#F5F4F1]"
//                                                                             >
//                                                                                 <div>
//                                                                                     <div className="col-span-2">
//                                                                                         <Link
//                                                                                             // to={`/collections/${finallink?.href}`}
//                                                                                             to={`${finallink?.href}`}
//                                                                                             className="block text-xs text-gray-900"
//                                                                                         >
//                                                                                             {finallink?.name}
//                                                                                         </Link>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         )
//                                                                     )}
//                                                                 </div>
//                                                             ))}
//                                                     </div>
//                                                 </Popover.Panel>
//                                             </Transition>
//                                         </Popover>
//                                     </Popover.Group>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="-mt-2">
//                 <hr />
//             </div>
//             {/* Third header ends here */}

//             {/* mobile view nav link and nav menu */}
//             <ul
//                 className={`
//           lg:hidden bg-[#686661] fixed w-full top-0 overflow-y-auto bottom-0
//           duration-500 ${open ? "left-0" : "left-[-100%]"}
//           `}
//                 style={{ zIndex: 9999, fontFamily: "Open Sans", fontWeight: "400" }}
//             >
//                 <li className="flex m-2 items-center justify-between text-2xl h-16">
//                     {(user) ?
//                         <div>
//                             <Link
//                                 // href="#"
//                                 onClick={handleLogout}
//                                 className="text-sm text-white font-semibold mx-2 text-center hover:text-[#A4A3A0]"
//                             >
//                                 Log Out
//                             </Link>{" "}
//                         </div>
//                         :
//                         <div>
//                             <Link
//                                 // href="#"
//                                 to={`/login?division=${searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : 'NORTHCOTT'}`}
//                                 className="text-sm text-white font-semibold mx-2 text-center hover:text-[#A4A3A0]"
//                             >
//                                 Log In
//                             </Link>{" "}
//                         </div>
//                     }

//                     <div className="text-white" onClick={closeMenu}>
//                         {" "}
//                         <ion-icon name="close"></ion-icon>
//                     </div>
//                 </li>
//                 <div>
//                     {links.map((link, index) => (
//                         <div className="bg-white" key={index}>
//                             <div className="px-3 text-left md:cursor-pointer group">
//                                 <div
//                                     className="py-3 flex justify-between items-center pr-5 group"
//                                     onClick={() => {
//                                         toggleSubmenu(index);
//                                     }}
//                                 >
//                                     <div className="uppercase text-black hover:text-[#E2A856] font-normal text-xs">
//                                         {link.name}
//                                     </div>
//                                     <span className="lg:hidden inline">
//                                         {link.submenu && (
//                                             <div>
//                                                 {!openSubsubmenus && (
//                                                     <div className="text-black hover:text-[#E2A856]">
//                                                         <ion-icon name="chevron-forward"></ion-icon>
//                                                     </div>
//                                                 )}{" "}
//                                                 {
//                                                     <ul
//                                                         className={`
//                                 lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0
//                                 duration-500 ${openSubmenus[index] ? "left-0" : "left-[-100%]"
//                                                             }
//                                 `}
//                                                     >
//                                                         {/* Render submenu content */}
//                                                         {openSubsubmenus && (
//                                                             <ul>
//                                                                 <li className="bg-[#686661] flex justify-between text-2xl p-2">
//                                                                     {(user) ?
//                                                                         <div>
//                                                                             <Link
//                                                                                 // href="#"
//                                                                                 onClick={handleLogout}
//                                                                                 className="text-sm text-white font-semibold m-2 text-center"
//                                                                             >
//                                                                                 Log Out
//                                                                             </Link>{" "}
//                                                                         </div>
//                                                                         :
//                                                                         <div>
//                                                                             <Link
//                                                                                 // href="#"
//                                                                                 to="/login"
//                                                                                 className="text-sm text-white font-semibold m-2 text-center"
//                                                                             >
//                                                                                 Log In
//                                                                             </Link>{" "}
//                                                                         </div>
//                                                                     }
//                                                                     <div
//                                                                         className="text-white"
//                                                                         onClick={closeMenu}
//                                                                     >
//                                                                         {" "}
//                                                                         <ion-icon name="close"></ion-icon>
//                                                                     </div>
//                                                                 </li>
//                                                                 <li className="flex bg-white items-end mt-3 py-3 ">
//                                                                     <div className="text-center ps-3 mb-[5px]">
//                                                                         <ion-icon name="chevron-back-outline"></ion-icon>
//                                                                     </div>
//                                                                     <h1 className=" bg-white font-bold uppercase text-xs ms-2 mb-3 hover:text-[#E2A856]">
//                                                                         {link.name}
//                                                                     </h1>
//                                                                 </li>
//                                                                 {link.sublinks.map((mysublinks, index) => (
//                                                                     <div
//                                                                         key={index + 100}
//                                                                         className="bg-white ps-4"
//                                                                     >
//                                                                         {mysublinks?.Head === "a" ? (
//                                                                             <div className="text-white hidden"></div>
//                                                                         ) : (
//                                                                             <div className="font-bold text-xs">
//                                                                                 {mysublinks.Head}
//                                                                                 {mysublinks.Head === "" ? null : (
//                                                                                     <div className="mt-3 w-[90vw] sm:w-[95vw]">
//                                                                                         <hr />
//                                                                                     </div>
//                                                                                 )}
//                                                                             </div>
//                                                                         )}
//                                                                         {mysublinks.sublink.map(
//                                                                             (finallink, index) => (
//                                                                                 <div
//                                                                                     key={index}
//                                                                                     className="bg-white py-3 text-xs text-black hover:bg-[#F5F4F1]"
//                                                                                 >
//                                                                                     <Link
//                                                                                         to={`/collections/${finallink?.href}`}
//                                                                                     >
//                                                                                         {finallink.name}
//                                                                                     </Link>
//                                                                                 </div>
//                                                                             )
//                                                                         )}
//                                                                     </div>
//                                                                 ))}
//                                                             </ul>
//                                                         )}
//                                                     </ul>
//                                                 }
//                                             </div>
//                                         )}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="bg-white h-[10vh]"></div>
//             </ul>
//         </>

//         // <>
//         //     {/* first header starts here */}
//         //     <header className="bg-[#686661] dark:bg-[#3A3933] h-[35px]">
//         //         <nav
//         //             className="flex mx-4 sm:mx-10 items-center justify-center"
//         //             aria-label="Global"
//         //         >
//         //             <Popover.Group className="flex w-[320px] sm:w-[345.07px]">
//         //                 <a href="#" className="">
//         //                     <img
//         //                         className="py-2 sm:py-0 sm:h-[36px] w-[49.38px] sm:w-[58.2px]"
//         //                         src={Northcott}
//         //                         alt="Northcott"
//         //                         onClick={changeToNortncott}
//         //                     />
//         //                 </a>
//         //                 <a href="#">
//         //                     <img
//         //                         className="h-[35px] w-[76.3px] sm:w-[88.11px]"
//         //                         src={BanyanLogo}
//         //                         alt="BanyanLogo"
//         //                         onClick={changeToBanyan}
//         //                     />
//         //                 </a>
//         //                 <a href="#">
//         //                     <img
//         //                         className="h-[35px] w-[97.6px] sm:w-[122px]"
//         //                         src={PatrickLogo}
//         //                         alt="PatrickLogo"
//         //                         onClick={changeToPatrick}
//         //                     />
//         //                 </a>
//         //                 {/* <a href="#">
//         //                     <img
//         //                         className="h-[35px] w-[64.5px] sm:w-[76.76px]"
//         //                         src={Figo}
//         //                         alt="Figo"
//         //                     />
//         //                 </a> */}
//         //             </Popover.Group>
//         //             <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
//         //                 <a
//         //                     href="#"
//         //                     className="text-sm text-white font-semibold hover:text-[#A4A3A0]"
//         //                 >
//         //                     Log In
//         //                 </a>
//         //                 <div className="mx-6 h-[30px] text-white">{` | `}</div>
//         //                 <div className="relative">
//         //                     <img className=" h-8 w-auto" src={shopping} alt="shopping" />
//         //                     {/* <img className=" h-8 w-auto" src={shoppingHover} alt="shopping" /> */}
//         //                 </div>
//         //                 {/* <ThemeButton /> */}
//         //             </div>
//         //         </nav>
//         //     </header>
//         //     {/* first header ends here */}

//         //     {/* Second Header start here */}
//         //     <div className="bg-white p-2 sm:pt-3">
//         //         {/* <div className="flex flex-row"> */}
//         //         <div className="flex flex-row">
//         //             {/* mobile view hamburger menu */}
//         //             <div className="basis-1/3 h-[50px] w-[664px] ms-[10px] sm:ms-[45px]">
//         //                 <div
//         //                     className="flex mt-4 lg:hidden hover:text-[#E2A856]"
//         //                     onClick={() => setOpen(!open)}
//         //                 >
//         //                     <div className="relative">
//         //                         <img
//         //                             className="absolute top-0 left-0 hover:hidden h-[24px] w-[18px]"
//         //                             src={BurgerIconMobile}
//         //                             alt="Menu"
//         //                         />
//         //                         <img
//         //                             className="block h-[24px] w-[18px]"
//         //                             src={mobileMenuHover}
//         //                             alt="Menu"
//         //                         />
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //             {(isNorthchott || division === "NORTHCOTT") && <div className="basis-2/3 sm:basis-1/3 flex items-center justify-center -ms-10 -me-4">
//         //                 {" "}
//         //                 <img
//         //                     className="h-[37.25px] w-[170px] sm:h-[50px] sm:w-[228px] mt-2"
//         //                     src={NorthcottMainLogo}
//         //                     alt="Northcott"
//         //                 />
//         //             </div>}

//         //             {(isBanyan || division === "BANYAN BATIKS") && <div className="basis-2/3 sm:basis-1/3 flex items-center justify-center -ms-10 -me-4">
//         //                 {" "}
//         //                 <img
//         //                     className="h-[37.25px] w-[170px] sm:h-[50px] sm:w-[228px] mt-2"
//         //                     src={BanyanMainLogo}
//         //                     alt="Banyan"
//         //                 />
//         //             </div>}

//         //             {(isPatrick || division === "PATRICK LOSE") && <div className="basis-2/3 sm:basis-1/3 flex items-center justify-center -ms-10 -me-4">
//         //                 {" "}
//         //                 <img
//         //                     className="h-[37.25px] w-[170px] sm:h-[50px] sm:w-[228px] mt-2"
//         //                     src={PatrickMainLogo}
//         //                     alt="Patrick"
//         //                 />
//         //             </div>}
//         //             <div className="basis-1/3">
//         //                 {" "}
//         //                 {/* desktop view input search */}
//         //                 <form className="sm:mx-5 mt-2 hidden lg:flex justify-end">
//         //                     <div className="flex mt-2">
//         //                         <div className="relative w-[250px] bg-white">
//         //                             <label
//         //                                 htmlFor="default-search"
//         //                                 className="mb-2 text- font-medium text-gray-900 sr-only"
//         //                             >
//         //                                 Search
//         //                             </label>
//         //                             <div className="relative">
//         //                                 <div className="absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none">
//         //                                     <img src={search} alt="search" />
//         //                                 </div>
//         //                                 <input
//         //                                     type="search"
//         //                                     id="default-search"
//         //                                     className="block w-full p-2 text-gray-900 border border-gray-300 bg-white focus:ring-gray-500 focus:border-gray-500"
//         //                                     placeholder="Search"
//         //                                     required
//         //                                 />
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                 </form>
//         //                 {/* mobile view shopping icon menu */}
//         //                 <div className="flex lg:hidden justify-end mt-4 me-[13px] sm:me-[35px]">
//         //                     <div className="relative">
//         //                         <img
//         //                             className="absolute top-0 left-0 hover:hidden h-[24px] w-[16px] hover:text-[#E2A856]"
//         //                             src={shoppingMoblie}
//         //                             alt="Cart"
//         //                         />
//         //                         <img
//         //                             className="block h-[24px] w-[16px] hover:text-[#E2A856]"
//         //                             src={mobileCartHover}
//         //                             alt="Cart"
//         //                         />
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         //     {/* mobile view search input box */}
//         //     <form className=" mt-5 mb-7 flex lg:hidden justify-center bg-white">
//         //         <div className="flex">
//         //             <div className="relative">
//         //                 <div className="w-[280px] h-[40px] sm:w-[664px] sm:h-[40px] mx-auto">
//         //                     <label
//         //                         htmlFor="default-search"
//         //                         className="mb-2 font-medium text-gray-900 sr-only"
//         //                     >
//         //                         Search
//         //                     </label>
//         //                     <div className="relative">
//         //                         <div className="absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none">
//         //                             <img src={search} alt="search" />
//         //                         </div>
//         //                         <input
//         //                             type="search"
//         //                             id="default-search"
//         //                             className="block w-full p-2 text-gray-900 border border-gray-300 bg-white focus:ring-gray-500 focus:border-gray-500"
//         //                             placeholder="Search"
//         //                             required
//         //                         />
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </form>
//         //     {/* header second ends here */}
//         //     {/* Third Header start here */}

//         //     {/* desktop view links and dropdown links */}
//         //     <div className="hidden bg-white pt-3 lg:mx-auto lg:flex lg:justify-center">
//         //         <div
//         //             className="h-[44px] sm:min-w-[915px] xl:w-[1092px] grid grid-flow-col items-center justify-evenly"
//         //             style={{ fontFamily: "Open Sans", fontWeight: "400" }}
//         //         >
//         //             {links.map((item, index) => (
//         //                 <div key={index}>
//         //                     {!item.submenu ? (
//         //                         <div>
//         //                             <Link
//         //                                 to="/"
//         //                                 className="block uppercase rounded-lg py-2 font-normal text-xs text-gray-900 hover:text-[#E2A856]"
//         //                             >
//         //                                 {item?.name}
//         //                             </Link>
//         //                         </div>
//         //                     ) : (
//         //                         <div>
//         //                             <Popover.Group>
//         //                                 <Popover className="relative">
//         //                                     <Popover.Button className="flex uppercase font-normal mt-[0.3rem] text-xs text-gray-90 hover:text-[#E2A856]">
//         //                                         {item?.name}

//         //                                         <ChevronDownIcon
//         //                                             className="h-5 w-5 text-gray-400 hover:text-[#E2A856]"
//         //                                             aria-hidden="true"
//         //                                         />
//         //                                     </Popover.Button>

//         //                                     <Transition
//         //                                         as={Fragment}
//         //                                         enter="transition ease-out duration-200"
//         //                                         enterFrom="opacity-0 translate-y-1"
//         //                                         enterTo="opacity-100 translate-y-0"
//         //                                         leave="transition ease-in duration-150"
//         //                                         leaveFrom="opacity-100 translate-y-0"
//         //                                         leaveTo="opacity-0 translate-y-1"
//         //                                     >
//         //                                         <Popover.Panel className="absolute grid -left-8 w-max z-10 mt-3 bg-white shadow-lg">
//         //                                             <div
//         //                                                 className={`${item.sublinks.length > 1
//         //                                                     ? " grid grid-cols-3 gap-10 shadow-md border-t"
//         //                                                     : " grid grid-cols-1 w-64 shadow-md border-t"
//         //                                                     }`}
//         //                                             >
//         //                                                 {item?.sublinks &&
//         //                                                     item?.sublinks?.map((mysublink, index) => (
//         //                                                         <div key={index}>
//         //                                                             {mysublink?.Head !== "a" ? (
//         //                                                                 <div className=" font-bold text-xs">
//         //                                                                     {mysublink?.Head !== "" ? (
//         //                                                                         <div className="p-3">
//         //                                                                             {mysublink?.Head}
//         //                                                                         </div>
//         //                                                                     ) : (
//         //                                                                         <div className="hidden"></div>
//         //                                                                     )}
//         //                                                                 </div>
//         //                                                             ) : (
//         //                                                                 <div className="text-white p-2">a</div>
//         //                                                             )}

//         //                                                             {mysublink?.sublink?.map(
//         //                                                                 (finallink, index) => (
//         //                                                                     <div
//         //                                                                         key={index}
//         //                                                                         className="p-3 text-sm leading-6 hover:bg-[#F5F4F1]"
//         //                                                                     >
//         //                                                                         <div>
//         //                                                                             <div className="col-span-2">
//         //                                                                                 <Link
//         //                                                                                     to={`/collections/${finallink?.href}`}
//         //                                                                                     className="block text-xs text-gray-900"
//         //                                                                                 >
//         //                                                                                     {finallink?.name}
//         //                                                                                 </Link>
//         //                                                                             </div>
//         //                                                                         </div>
//         //                                                                     </div>
//         //                                                                 )
//         //                                                             )}
//         //                                                         </div>
//         //                                                     ))}
//         //                                             </div>
//         //                                         </Popover.Panel>
//         //                                     </Transition>
//         //                                 </Popover>
//         //                             </Popover.Group>
//         //                         </div>
//         //                     )}
//         //                 </div>
//         //             ))}
//         //         </div>
//         //     </div>
//         //     <div className="-mt-2">
//         //         <hr />
//         //     </div>
//         //     {/* Third header ends here */}

//         //     {/* mobile view nav link and nav menu */}
//         //     <ul
//         //         className={`
//         //   lg:hidden bg-[#686661] fixed w-full top-0 overflow-y-auto bottom-0
//         //   duration-500 ${open ? "left-0" : "left-[-100%]"}
//         //   `}
//         //         style={{ zIndex: 9999, fontFamily: "Open Sans", fontWeight: "400" }}
//         //     >
//         //         <li className="flex m-2 items-center justify-between text-2xl h-16">
//         //             <div>
//         //                 <a
//         //                     href="#"
//         //                     className="text-sm text-white font-semibold mx-2 text-center hover:text-[#A4A3A0]"
//         //                 >
//         //                     Log In
//         //                 </a>{" "}
//         //             </div>
//         //             <div className="text-white" onClick={closeMenu}>
//         //                 {" "}
//         //                 <ion-icon name="close"></ion-icon>
//         //             </div>
//         //         </li>
//         //         <div>
//         //             {links.map((link, index) => (
//         //                 <div className="bg-white" key={index}>
//         //                     <div className="px-3 text-left md:cursor-pointer group">
//         //                         <div
//         //                             className="py-3 flex justify-between items-center pr-5 group"
//         //                             onClick={() => {
//         //                                 toggleSubmenu(index);
//         //                             }}
//         //                         >
//         //                             <div className="uppercase text-black hover:text-[#E2A856] font-normal text-xs">
//         //                                 {link.name}
//         //                             </div>
//         //                             <span className="lg:hidden inline">
//         //                                 {link.submenu && (
//         //                                     <div>
//         //                                         {!openSubsubmenus && (
//         //                                             <div className="text-black hover:text-[#E2A856]">
//         //                                                 <ion-icon name="chevron-forward"></ion-icon>
//         //                                             </div>
//         //                                         )}{" "}
//         //                                         {
//         //                                             <ul
//         //                                                 className={`
//         //                         lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0
//         //                         duration-500 ${openSubmenus[index] ? "left-0" : "left-[-100%]"
//         //                                                     }
//         //                         `}
//         //                                             >
//         //                                                 {/* Render submenu content */}
//         //                                                 {openSubsubmenus && (
//         //                                                     <ul>
//         //                                                         <li className="bg-[#686661] flex justify-between text-2xl p-2">
//         //                                                             <div>
//         //                                                                 <a
//         //                                                                     href="#"
//         //                                                                     className="text-sm text-white font-semibold m-2 text-center"
//         //                                                                 >
//         //                                                                     Log In
//         //                                                                 </a>{" "}
//         //                                                             </div>
//         //                                                             <div
//         //                                                                 className="text-white"
//         //                                                                 onClick={closeMenu}
//         //                                                             >
//         //                                                                 {" "}
//         //                                                                 <ion-icon name="close"></ion-icon>
//         //                                                             </div>
//         //                                                         </li>
//         //                                                         <li className="flex bg-white items-end mt-3 py-3 ">
//         //                                                             <div className="text-center ps-3 mb-[5px]">
//         //                                                                 <ion-icon name="chevron-back-outline"></ion-icon>
//         //                                                             </div>
//         //                                                             <h1 className=" bg-white font-bold uppercase text-xs ms-2 mb-3 hover:text-[#E2A856]">
//         //                                                                 {link.name}
//         //                                                             </h1>
//         //                                                         </li>
//         //                                                         {link.sublinks.map((mysublinks, index) => (
//         //                                                             <div
//         //                                                                 key={index + 100}
//         //                                                                 className="bg-white ps-4"
//         //                                                             >
//         //                                                                 {mysublinks?.Head === "a" ? (
//         //                                                                     <div className="text-white hidden"></div>
//         //                                                                 ) : (
//         //                                                                     <div className="font-bold text-xs">
//         //                                                                         {mysublinks.Head}
//         //                                                                         {mysublinks.Head === "" ? null : (
//         //                                                                             <div className="mt-3 w-[90vw] sm:w-[95vw]">
//         //                                                                                 <hr />
//         //                                                                             </div>
//         //                                                                         )}
//         //                                                                     </div>
//         //                                                                 )}
//         //                                                                 {mysublinks.sublink.map(
//         //                                                                     (finallink, index) => (
//         //                                                                         <div
//         //                                                                             key={index}
//         //                                                                             className="bg-white py-3 text-xs text-black hover:bg-[#F5F4F1]"
//         //                                                                         >
//         //                                                                             <Link
//         //                                                                                 to={`/collections/${finallink?.href}`}
//         //                                                                             >
//         //                                                                                 {finallink.name}
//         //                                                                             </Link>
//         //                                                                         </div>
//         //                                                                     )
//         //                                                                 )}
//         //                                                             </div>
//         //                                                         ))}
//         //                                                     </ul>
//         //                                                 )}
//         //                                             </ul>
//         //                                         }
//         //                                     </div>
//         //                                 )}
//         //                             </span>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //             ))}
//         //         </div>
//         //         <div className="bg-white h-[10vh]"></div>
//         //     </ul>
//         // </>

//         // <div className="header-top">

//         //     <ToastContainer
//         //         newestOnTop
//         //     // transition={bounce}
//         //     />
//         //     <Container className="app-container p-0">
//         //         <ul className="header-social-container" style={{ paddingLeft: "16px" }}>
//         //             <li>
//         //                 <a href="#" className="social-link">
//         //                     <img src={NorthcottIcon} size={40} height={40} onClick={changeToNortncott} />
//         //                 </a>
//         //             </li>
//         //             <li>
//         //                 <a href="#" className="social-link">
//         //                     <img src={BanyanBatiks} size={40} height={40} onClick={changeToBanyan} />
//         //                 </a>
//         //             </li>
//         //             <li>
//         //                 <a href="#" className="social-link">
//         //                     <img src={PatrikLose} size={40} height={40} onClick={changeToPatrick} />
//         //                 </a>
//         //             </li>
//         //             {/* <li>
//         //                 <a href="#" className="social-link" target="_blank">
//         //                     <img src={Figo} size={40} height={40} />
//         //                 </a>
//         //             </li> */}
//         //         </ul>
//         //         <div className="header-alert-news" style={{ fontSize: "14px" }}>
//         //             {/* {!user ? "" : <p>
//         //                 <b>Free Shipping </b>
//         //                 This Week Order Over - $55
//         //             </p>} */}
//         //         </div>
//         //         <div className="header-top-actions" style={{ paddingRight: "20px" }}>

//         //             {(user) && <div style={{ display: 'flex', flexDirection: 'column', fontSize: 'small' }}>
//         //                 {user?.userTypes?.includes("CUSTOMER") && <span> <span style={{ fontWeight: '600' }}>{`Logged in as: ${user?.companyName} ${user?.customerId} ${user?.city} ${user?.state} `}</span></span>}
//         //                 {/* {(customer && !user.userTypes.includes("CUSTOMER")) && <span> <span style={{ fontWeight: '600' }}>{customer?.companyName ? `Logged in as: ${customer?.companyName} ${customer?.customerId} ${customer?.city} ${customer?.state}` : ""}</span></span>} */}
//         //                 {(customer && !user?.userTypes?.includes("CUSTOMER")) && <span> <span style={{ fontWeight: '600' }}>{customer?.companyName ? `Logged in as: ${customer?.companyName} ${customer?.customerId} ${customer?.city} ${(customer.isExport && customer.exportUSA?.length) ? customer?.exportUSA.map(ele => ele.text) : (customer.isExport && customer.exportCAD?.length) ? customer?.exportCAD.map(ele => ele.text) : customer?.state}` : ""}</span></span>}

//         //                 <span style={{ fontWeight: 'bold', cursor: "pointer", color: "black" }}>
//         //                     {user?.userTypes?.includes("CUSTOMER") ? "" : <Link to='/region-customer'>To change, click here.</Link>}
//         //                 </span>
//         //             </div>}
//         //             <div className="login-button">

//         //                 {(user) ?
//         //                     <Button className='animet_btton' onClick={handleLogout} style={{ backgroundColor: backgroundColor, borderColor: backgroundColor }} variant="primary" size="sm">LOGOUT</Button>
//         //                     :
//         //                     <Button className='animet_btton' as={Link} to="/login" style={{ backgroundColor: backgroundColor, borderColor: backgroundColor }} variant="primary" size="sm">LOGIN</Button>}
//         //             </div>
//         //         </div>
//         //     </Container>
//         // </div>

//         // <div className="header-top">
//         //     <ToastContainer
//         //         newestOnTop
//         //     // transition={bounce}
//         //     />

//         //     <div className="text-white text-center" >
//         //         <div className="container-fluid" style={{ background: '#686661', maxHeight: '.5in', overflow: 'hidden' }}>
//         //             <header className="text-start text-lg-start">
//         //                 <div className="row mt-0 mb-1">
//         //                     <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-0 col-0 ">
//         //                     </div>
//         //                     <div
//         //                         className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mx-auto text-xl-end text-lg-end text-end border" style={{ display: "flex" }}>
//         //                         <img className="img-fluid  mx-auto border" src={NorthcottIcon}
//         //                             style={{ maxWidth: '100%', maxHeight: '70px', minHeight: '10px' }} />
//         //                         <img className="img-fluid border" src={BanyanBatiks}
//         //                             style={{ maxWidth: '100%', maxHeight: '70px', minHeight: '10px' }} />

//         //                     </div>
//         //                     <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-4 col-4 mx-auto text-start">
//         //                         <img className="img-fluid border" src={PatrikLose}
//         //                             style={{ maxWidth: '100%', maxHeight: '30px', minHeight: '10px', }} />
//         //                     </div>
//         //                     <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-4 col-sm-2 col-2 mx-auto text-left">
//         //                         <img className="img-fluid border" src={Figo}
//         //                             style={{ maxWidth: '100%', maxHeight: '70px', minHeight: '10px' }} />
//         //                     </div>
//         //                     <div
//         //                         className="col-xxl-6 col-xl-5 col-lg-6 col-md-3 col-sm-0 col-0 mx-auto d-xxl-block d-xl-block d-lg-block d-none">
//         //                     </div>
//         //                     <div
//         //                         className="col-xxl-1 col-xl-1 col-lg-1 col-md-0 col-sm-0 col-0 mx-auto d-xxl-block d-xl-block d-lg-block d-none">
//         //                         <div style={{ display: 'flex', justifyContent: 'space-between' }}> <a href='#login' style={{ textDecoration: 'none', color: 'white' }}>Login</a> | <a href="" className="text-white me-4 anchorTagTextDecorationNone">
//         //                             <BsBagFill />
//         //                         </a></div>
//         //                     </div>
//         //                     <div
//         //                         className="col-xxl-1 col-xl-1 col-lg-1 col-md-0 col-sm-0 col-0 mx-auto d-xxl-block d-xl-block d-lg-block d-none">
//         //                     </div>
//         //                 </div>
//         //             </header>
//         //         </div>
//         //     </div >

//         // </div >
//     )
// }

import React from "react";

const TopHeader = () => {
  return <div>TopHeader</div>;
};

export default TopHeader;
