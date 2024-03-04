// import { useEffect, React, useState } from 'react'
// import { Container, Row, Col, Buttom, Card, Button } from 'react-bootstrap';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
// import AppContentBody from '../../components/elements/builders/AppContentBody';

// import ApiService from '../../helpers/ApiServices';
// import DefaultImg from '../../image/default-collection.png.crdownload'
// import { getCountry, getModelRoute, showMessage } from '../../helpers/Utils';
// import ProductCategorySkeleton from '../../components/elements/components/ProductCategorySkeleton';
// import SkeletonCard from '../../components/elements/components/SkeletonCard';
// import { useContext } from 'react';
// import { UserContext } from '../../states/contexts/UserContext';
// import { CustomerContext } from '../../states/contexts/CustomerContext';

// export default function ProductCollection() {
//     const [collections, setCollections] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isCollectionLoading, setIsCollectionLoading] = useState(false);
//     const [activeResourceCategoryName, setActiveResourceCategoryName] = useState("");

//     const { dispatch, user } = useContext(UserContext)
//     const { dispatch: customerDispatch, customer } = useContext(CustomerContext)

//     const [searchParams, setSearchParams] = useSearchParams()

//     let division = searchParams.get('division')?.toUpperCase() ? searchParams.get('division')?.toUpperCase() : "NORTHCOTT"

//     let customers = JSON.parse(localStorage.getItem("PCTeRP.CUSTOMER_IDS"))

//     const { id } = useParams();
//     const { search } = useLocation();
//     const navigate = useNavigate();
//     let type = search.split("=")[1]

//     const getAllCollectionsByCategoryId = (id) => {
//         setIsCollectionLoading(true)

//         let isLoggedInUser
//         if (customers != null || customer) {
//             isLoggedInUser = true
//         } else {
//             isLoggedInUser = false
//         }

//         // ApiService.get(`shop/collection/collections/${id}?model=${getModelRoute(user).model}&brandType=NORTHCOTT`).then(response => {
//         ApiService.get(`shop/collection/collections/${id}?protectModel=${getModelRoute(user).model}&brandType=NORTHCOTT&isLoggedInUser=${isLoggedInUser}`).then(response => {
//             // console.log(response.data);
//             if (response?.data.isSuccess) {
//                 setIsCollectionLoading(false)
//                 setCollections(response?.data.documents)
//             }
//         }).catch(error => {
//             setIsCollectionLoading(false)
//             console.log(error.response.data)
//             // console.log("Else Catch")
//             showMessage(error.response.data.message, "error")
//         })
//     }

//     const getAllProductCategoriesBYType = () => {
//         let isLoggedInUser
//         if (customers != null || customer) {
//             isLoggedInUser = true
//         } else {
//             isLoggedInUser = false
//         }

//         // ApiService.get(`shop/category/type?model=${getModelRoute(user).model}&type=${search.split("=")[1]}`).then(response => {
//         // ApiService.get(`shop/category/type?protectModel=${getModelRoute(user).model}&type=${search.split("=")[1]}&isLoggedInUser=${isLoggedInUser}&country=${getCountry()}`).then(response => {
//         ApiService.get(`shop/category/type?protectModel=${getModelRoute(user).model}&type=${division}&isLoggedInUser=${isLoggedInUser}&country=${getCountry()}`).then(response => {
//             // console.log(response);
//             if (response?.data.isSuccess) {
//                 setIsLoading(false)
//                 setCategories(response?.data.documents)

//                 response?.data.documents?.map(category => {
//                     if (id == category?.id) setActiveResourceCategoryName(category?.name)
//                 })

//             }
//         }).catch(error => {
//             setIsLoading(false)
//             console.log(error.response.data)
//             // console.log("Else Catch")
//             showMessage(error.response.data.message, "error")
//         })
//     }

//     useEffect(() => {
//         setIsLoading(true)
//         getAllCollectionsByCategoryId(id)
//         getAllProductCategoriesBYType()
//     }, [division]);

//     return (
//         <>
//             {isLoading ? <ProductCategorySkeleton /> : <Container className='' style={{ width: "100%" }}>
//                 {!customer ? "" : <Row xs={1} sm={1} md={2} lg={2} className='mb-3 mt-3' style={{ backgroundColor: "#e3a856", borderBottom: "1px solid #666666", padding: "10px 30px", }}>
//                     <div className='p-1 m-0' style={{ width: "100%", fontSize: "13px" }}>
//                         Welcome <span style={{ fontWeight: "600" }}>{user?.firstName}!</span> Use "Customer" tab to access customer settings. You have selected "<span style={{ fontWeight: "600" }}>{customer?.companyName}, {customer?.city}</span>". <span><Link to='/region-customer'>To change, click here.</Link></span>

//                     </div>
//                 </Row>}

//                 <h3>Product Collections</h3>
//                 <hr />

//                 {/* <AppContentBody> */}
//                 <Container className=''>
//                     <Row className='rounded border' style={{ boxShadow: "3px 3px lightgray", backgroundImage: " linear-gradient(to bottom, #fff 0%, #f8f8f8 100%)" }}>
//                         {
//                             categories?.length ? categories?.map(category =>
//                                 <Button key={category?._id} active={id == category?.id ? true : false} variant="light" size='sm' style={{ width: "33.33%", fontSize: "18px" }}
//                                     onClick={() => {
//                                         // navigate(`/product-collection/${category?.id}?type=${type}`)
//                                         navigate(`/product-collection/${category?.id}?division=${division}`)
//                                         getAllCollectionsByCategoryId(category?.id)
//                                         setActiveResourceCategoryName(category?.name)
//                                     }}
//                                 >{category?.name}</Button>
//                             ) : ""
//                         }
//                     </Row>

//                     <Row className='mt-4' style={{ fontSize: "20px", fontWeight: 600 }}>{activeResourceCategoryName}</Row>

//                     <Row>
//                         {
//                             isCollectionLoading ? <SkeletonCard height='255px' width='255px' /> : collections?.length ? collections.map(collection =>
//                                 // <Card key={collection?._id} as={Link} to={`/product-detail/${collection?._id}?type=${search.split("=")[1]}`} style={{ width: '20rem', margin: "31px", display: "flex", justifyContent: "center", alignItems: "center", border: "none" }}>
//                                 <Card key={collection?._id} as={Link} to={`/product-detail/${collection?._id}?division=${division}`} style={{ width: '20rem', margin: "31px", display: "flex", justifyContent: "center", alignItems: "center", border: "none" }}>

//                                     <LazyLoadImage
//                                         style={{ objectFit: "fill" }}
//                                         alt={""}
//                                         width={"255"}
//                                         height={"255"}
//                                         effect="blur"
//                                         src={collection?.image?.url ? collection?.image?.url : DefaultImg} />
//                                     <Card.Body>
//                                         <Card.Title style={{ textAlign: "center", verticalAlign: "middle", color: "black" }}>
//                                             <h6>{collection?.name}</h6>
//                                             <h6 style={{ color: "black", fontWeight: 200, marginTop: "-10px" }}>{type.replace("%20", " ")}</h6>
//                                             <h6 style={{ color: "black", fontWeight: 200, marginTop: "-10px" }}>Available Now</h6>

//                                         </Card.Title>
//                                     </Card.Body>
//                                 </Card>
//                             ) : ""
//                         }
//                     </Row>
//                 </Container>
//                 {/* </AppContentBody > */}
//             </Container >}
//         </>
//     )
// }

import React from "react";

const ProductCollection = () => {
  return <div>ProductCollection</div>;
};

export default ProductCollection;
