// import { React, useEffect, useState, useContext } from 'react'
// import { Container, Carousel } from 'react-bootstrap'

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import ApiService from '../../helpers/ApiServices'
// import { getModelRoute, showMessage } from '../../helpers/Utils'
// import { UserContext } from '../../states/contexts/UserContext';

// // import { Carousel } from 'react-responsive-carousel';

// export default function HomeSliders() {
//     const [state, setState] = useState([]);

//     const { dispatch, user } = useContext(UserContext)

//     const onChange = (e) => {
//         console.log(e)
//     }

//     const onClickItem = (e) => {
//         console.log(e)
//     }

//     const onClickThumb = (e) => {
//         console.log(e)
//     }

//     const getBanner = async () => {
//         try {
//             const response = await ApiService.get(`/shop/banner?client=website&model=${getModelRoute(user).model}`);
//             if (response.data.isSuccess) {
//                 setState(response?.data.documents)

//             } else {
//             }
//         } catch (error) {
//             console.log(error.response.data)
//             // showMessage(error.response.data.message, "error")
//         }
//     }

//     useEffect(() => {
//         getBanner()

//     }, []);

//     return (
//         <Container fluid className='m-0 p-0 border ' style={{
//             height: 927.45,
//         }}>
//             <Carousel className='m-0 p-0' autoPlay={true} infiniteLoop={true} >

//                 {
//                     state && state.map(e => {
//                         if (e?.image?.url) {
//                             return (
//                                 <Carousel.Item key={e._id} className=''>
//                                     <LazyLoadImage
//                                         key={e._id}
//                                         alt={""}
//                                         // width={"2900"}
//                                         height={927.45}
//                                         effect="blur"
//                                         src={e?.image?.url} />
//                                 </Carousel.Item>
//                             )
//                         } else if (e?.video?.url) {
//                             return (<video autoPlay loop muted loading="lazy" id="doc-player" controls className="cld-video-player cld-fluid"
//                                 // style={{ border: "1px solid black", width: "1600", height: "540" }}
//                                 key={e._id}
//                                 src={e.video.url && e.video.url}></video>)
//                         }
//                     })
//                 }
//             </Carousel>
//         </Container>

//     )
// }

import React from "react";

const HomeSliders = () => {
  return <div>HomeSliders</div>;
};

export default HomeSliders;
