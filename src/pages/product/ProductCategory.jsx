// import { React, useContext, useEffect, useState } from 'react'
// import { Container, Alert, Card, Row, Col, Button } from 'react-bootstrap';
// import { CustomerContext } from '../../states/contexts/CustomerContext';
// import { UserContext } from '../../states/contexts/UserContext';
// import { Link, useNavigate, useSearchParams } from 'react-router-dom';

// import AppContentBody from '../../components/elements/builders/AppContentBody';
// import ApiService from '../../helpers/ApiServices';
// import { getCountry, getModelRoute, showMessage } from '../../helpers/Utils';
// import DefaultImg from '../../image/default-product.png'
// import { CartContext } from '../../states/contexts/CartContext';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { BrandIconContext } from '../../states/contexts/BrandIconContext';
// import { WishListContext } from '../../states/contexts/wishListContext';
// import ProductCategorySkeleton from '../../components/elements/components/ProductCategorySkeleton';
// import SkeletonCard from '../../components/elements/components/SkeletonCard';

// export default function ProductCategory() {
//     const [state, setState] = useState(null);
//     const [wishLists, setWishLists] = useState([]);
//     const [activeType, setActiveType] = useState("NORTHCOTT");
//     const [isLoading, setIsLoading] = useState(false);
//     const [isCategoryLoading, setIsCategoryLoading] = useState(false);
//     const [categoryTypes, setCategoryTypes] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [img, setImg] = useState('');

//     const { dispatch, user } = useContext(UserContext)
//     const { dispatch: customerDispatch, customer } = useContext(CustomerContext)
//     const { dispatch: cartDispatch, quantity } = useContext(CartContext)
//     const { dispatch: wishListDispatch, quantity: wishListQuantity } = useContext(WishListContext)
//     // const { dispatch: iconDispatch, isNorthchott, isBanyan, isPatrick, color, textColor, division, backgroundColor } = useContext(BrandIconContext)
//     const { dispatch: iconDispatch, isNorthchott, isBanyan, isPatrick, color, textColor, backgroundColor } = useContext(BrandIconContext)

//     const navigate = useNavigate()
//     const [searchParams, setSearchParams] = useSearchParams()

//     let division = searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : "NORTHCOTT"

//     let customers = JSON.parse(localStorage.getItem("PCTeRP.CUSTOMER_IDS"))
//     // console.log(division, backgroundColor);

//     // const changeToNortncott = () => { iconDispatch({ type: "IS_NORTHCOTT" }) }
//     // const changeToBanyan = () => { iconDispatch({ type: "IS_BANYAN" }) }
//     // const changeToPatrick = () => { iconDispatch({ type: "IS_PATRICK" }) }
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

//     const getAllProductCategoriesBYType = (type = "NORTHCOTT") => {
//         setIsCategoryLoading(true)
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
//             console.log(response);
//             if (response?.data.isSuccess) {
//                 setIsCategoryLoading(false)
//                 setIsLoading(false)
//                 setCategories(response?.data.documents)
//             }
//         }).catch(error => {
//             setIsCategoryLoading(false)
//             setIsLoading(false)
//             console.log(error.response.data)
//             // console.log("Else Catch")
//             showMessage(error.response.data.message, "error")
//         })
//     }

//     const getCategoryType = () => {
//         // return ApiService.get(`shop/customList/title?model=${getModelRoute(user).model}&title=Category Type`).then(response => {
//         return ApiService.get(`shop/customList/title?protectModel=${getModelRoute(user).model}&title=Category Type`).then(response => {
//             if (response?.data.isSuccess) {
//                 // console.log(response?.data.document.options);
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

//     const getWishListDetail = () => {
//         ApiService.setHeader()
//         // ApiService.get(`shop/wishList/${customers[customers?.length - 1]?._id}?model=${getModelRoute(user).model}`).then(response => {
//         ApiService.get(`shop/wishList/${customers[customers?.length - 1]?._id}?protectModel=${getModelRoute(user).model}`).then(response => {
//             console.log(response.data);
//             if (response?.data.isSuccess) {
//                 // console.log(response?.data.documents);
//                 setWishLists(response?.data?.documents)
//                 wishListDispatch({ type: "ADD_TO_WISHLIST_QUANTITY", payload: response?.data?.documents?.length });
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // console.log("Else Catch")
//             showMessage(error.response.data.message, "error")
//         })
//     }

//     useEffect(() => {
//         setIsLoading(true)
//         console.log(customers);
//         // ApiService.setHeader()
//         // ApiService.get(`shop/product/getImgs`).then(response => {
//         //     console.log(response.data.document);
//         //     setImg(response.data.document)
//         // }).catch(error => {
//         //     console.log(error.response.data)
//         //     // console.log("Else Catch")
//         //     showMessage(error.response.data.message, "error")
//         // })

//         if (customers != null) {
//             getCartDetail()
//             getWishListDetail()
//         }
//         getCategoryType()

//         if (isNorthchott || division === "NORTHCOTT") {
//             getAllProductCategoriesBYType("NORTHCOTT")
//             setActiveType("NORTHCOTT")
//         }
//         if (isBanyan || division === "BANYAN BATIKS") {
//             getAllProductCategoriesBYType("BANYAN BATIKS")
//             setActiveType("BANYAN BATIKS")
//         }
//         if (isPatrick || division === "PATRICK LOSE") {
//             getAllProductCategoriesBYType("PATRICK LOSE")
//             setActiveType("PATRICK LOSE")
//         }
//     }, [isNorthchott, isBanyan, isPatrick, division]);

//     // console.log(img);

//     return (
//         // <div>
//         //     Hi
//         //     {/* <img src={img}
//         //         alt="" srcset="" style={{ border: 'black' }} width={"220"}
//         //         height={"220"} /> */}
//         //     <LazyLoadImage
//         //         style={{ objectFit: "fill", border: '1px solid black' }}
//         //         alt={""}
//         //         width={"220"}
//         //         height={"220"}
//         //         effect="blur"
//         //         // src='D:/Projects/NorthChott website/Application/Test/pct-connect-northcott updated/uploads/10010-51.jpg'
//         //         src={'ftp://paapri_cloud@66.207.215.206/northcott/images/SwatchImages/10005-12.jpg'}
//         //     />
//         // </div>

//         <>
//             {isLoading ? <ProductCategorySkeleton /> : <Container className='' style={{ width: "100%" }}>
//                 {/* {user?.userTypes.includes('CUSTOMER') ? "" : <Alert className='p-1 m-0' variant={"primary"}>
//                 Welcome <span style={{ fontWeight: "600" }}>{user?.name}!</span> Use "Customer" tab to access customer settings. You have selected "<span style={{ fontWeight: "600" }}>{customer?.name}</span>".
//                 <Link to='/region-customer'>To change, click here.</Link>
//             </Alert>} */}
//                 {customer && <Row xs={1} sm={1} md={2} lg={2} className='mb-3 mt-3' style={{ backgroundColor: backgroundColor, borderBottom: "1px solid #666666", padding: "10px 30px", }}>
//                     <div className='p-1 m-0' style={{ width: "100%", fontSize: "13px", color: textColor }}>
//                         Welcome <span style={{ fontWeight: "600" }}>{user?.firstName}!</span> Use "Customer" tab to access customer settings. You have selected "<span style={{ fontWeight: "600" }}>{!customer?.firstName.includes("TEST") ? `${customer?.companyName}, ${customer?.city}` : customer?.firstName}</span>". <span><Link to='/region-customer'>To change, click here.</Link></span>

//                     </div>
//                 </Row>}

//                 <h3>Product Categories</h3>
//                 <hr />

//                 {/* <AppContentBody> */}
//                 <Container className=''>
//                     <Row className='rounded border' style={{ boxShadow: "3px 3px lightgray", backgroundImage: " linear-gradient(to bottom, #fff 0%, #f8f8f8 100%)" }}>
//                         {
//                             categoryTypes?.length ? categoryTypes?.map(categoryType =>
//                                 <Button key={categoryType?._id} active={activeType == categoryType?.text.toUpperCase() ? true : false} variant="light" size='sm' style={{ width: "33.33%", fontSize: "18px" }}
//                                     onClick={() => {
//                                         setActiveType(categoryType?.text.toUpperCase())
//                                         // console.log(categoryType.text);
//                                         getAllProductCategoriesBYType(categoryType?.text)
//                                         if (categoryType?.text == "NORTHCOTT") changeToNortncott()
//                                         if (categoryType?.text == "BANYAN BATIKS") changeToBanyan()
//                                         if (categoryType?.text == "PATRICK LOSE") changeToPatrick()
//                                     }}
//                                 >{categoryType?.text}</Button>
//                             ) : ""
//                         }
//                     </Row>

//                     <Row className='mt-5' style={{ fontSize: "25px", fontWeight: "bold" }}>{ }</Row>

//                     <Row xs={1} sm={2} md={3} lg={4}>
//                         {
//                             isCategoryLoading ? <SkeletonCard height='220px' width='220px' /> : categories?.length ? categories.map(category =>
//                                 // width: '20rem', margin: "31px",
//                                 <Col key={category?._id}>
//                                     {/* <Card as={Link} to={`/product-collection/${category?._id}?type=${activeType}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "none" }}> */}
//                                     <Card as={Link} to={`/product-collection/${category?._id}?division=${division}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "none" }}>

//                                         <LazyLoadImage
//                                             style={{ objectFit: "fill" }}
//                                             alt={""}
//                                             width={"220"}
//                                             height={"220"}
//                                             effect="blur"
//                                             src={category?.image?.url ? category?.image?.url : DefaultImg} />
//                                         <Card.Body>
//                                             <Card.Title style={{ fontSize: "15px", textAlign: "center", verticalAlign: "middle", color: "black" }}>{category?.name}</Card.Title>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             ) : ""
//                         }
//                     </Row>
//                 </Container>
//                 {/* </AppContentBody > */}
//             </Container >}
//         </>

//         // <Container>
//         //     {user?.userTypes.includes('CUSTOMER') ? "" : <Alert className='p-1 m-0' variant={"primary"}>
//         //         Welcome <span style={{ fontWeight: "600" }}>{user?.name}!</span> Use "Customer" tab to access customer settings. You have selected "<span style={{ fontWeight: "600" }}>{customer?.name}</span>".
//         //         <Link to='/region-customer'>To change, click here.</Link>
//         //     </Alert>}

//         //     <div className="row">
//         //         <div className="col-sm-3 mt-4">
//         //             <Card className="text-center">
//         //                 <Card.Img variant="top" src={ProductImg1} />
//         //                 <Card.Body className='p-1 m-0'>
//         //                     <Card.Text >COMING SOON</Card.Text>
//         //                 </Card.Body>
//         //             </Card>
//         //         </div>
//         //         <div className="col-sm-3 mt-4">
//         //             <Card className="text-center">
//         //                 <Card.Img variant="top" src={ProductImg2} />
//         //                 <Card.Body className='p-1 m-0'>
//         //                     <Card.Text >FROND DESIGN STUDIOS</Card.Text>
//         //                 </Card.Body>
//         //             </Card>
//         //         </div>
//         //         <div className="col-sm-3 mt-4">
//         //             <Card className="text-center">
//         //                 <Card.Img variant="top" src={ProductImg3} />
//         //                 <Card.Body className='p-1 m-0'>
//         //                     <Card.Text >CURRENT COLLECTION</Card.Text>
//         //                 </Card.Body>
//         //             </Card>
//         //         </div>
//         //         <div className="col-sm-3 mt-4">
//         //             <Card className="text-center">
//         //                 <Card.Img variant="top" src={ProductImg4} />
//         //                 <Card.Body className='p-1 m-0'>
//         //                     <Card.Text >STONEHENGE</Card.Text>
//         //                 </Card.Body>
//         //             </Card>
//         //         </div>
//         //         <div className="col-sm-3 mt-4">
//         //             <Card className="text-center">
//         //                 <Card.Img variant="top" src={ProductImg5} />
//         //                 <Card.Body className='p-1 m-0'>
//         //                     <Card.Text >BOLD BEAUTIFUL BASICS</Card.Text>
//         //                 </Card.Body>
//         //             </Card>
//         //         </div>
//         //         <div className="col-sm-3 mt-4">
//         //             <Card className="text-center">
//         //                 <Card.Img variant="top" src={ProductImg6} />
//         //                 <Card.Body className='p-1 m-0'>
//         //                     <Card.Text >WIDE BACKING</Card.Text>
//         //                 </Card.Body>
//         //             </Card>
//         //         </div>
//         //         <div className="col-sm-3 mt-4">
//         //             <Card className="text-center">
//         //                 <Card.Img variant="top" src={ProductImg7} />
//         //                 <Card.Body className='p-1 m-0'>
//         //                     <Card.Text >COLORWORKS</Card.Text>
//         //                 </Card.Body>
//         //             </Card>
//         //         </div>
//         //         <div className="col-sm-3 mt-4">
//         //             <Card className="text-center">
//         //                 <Card.Img variant="top" src={ProductImg8} />
//         //                 <Card.Body className='p-1 m-0'>
//         //                     <Card.Text >BOLD BEAUTIFUL BASICS PRECUTS</Card.Text>
//         //                 </Card.Body>
//         //             </Card>
//         //         </div>

//         //         <div className="col-sm-3 mt-4">
//         //             <Card className="text-center">
//         //                 <Card.Img variant="top" src={ProductImg10} />
//         //                 <Card.Body className='p-1 m-0'>
//         //                     <Card.Text >NORTHCOTT KIDS</Card.Text>
//         //                 </Card.Body>
//         //             </Card>
//         //         </div>
//         //     </div>
//         // </Container>
//     )
// }

import React from "react";

const ProductCategory = () => {
  return <div>ProductCategory</div>;
};

export default ProductCategory;
