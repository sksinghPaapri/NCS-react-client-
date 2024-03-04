// import React from 'react'
// import { Col, Row } from 'react-bootstrap'
// import DefaultImg from './../../../image/default_product_img.jpg'
// import { LazyLoadImage } from 'react-lazy-load-image-component'

// const DisplayOderItems = ({ ele, status }) => {
//     // console.log(ele);

//     return (
//         <Row key={ele?._id} className='' >
//             <Col className='border p-0' style={{ width: "20%", textAlign: "center" }}>
//                 <LazyLoadImage
//                     alt={""}
//                     width={"100"}
//                     height={"100"}
//                     effect="blur"
//                     // {...register(`showCartItems.${index}.image`)}
//                     src={ele?.image ? ele?.image : DefaultImg}
//                 />
//             </Col>
//             <Col className='border p-0' style={{ width: "20%", textAlign: "center" }}>{ele.productId?.name}</Col>
//             <Col className='border p-0' style={{ width: "20%", textAlign: "center" }}>{ele?.collectionName}</Col>
//             <Col className='border p-0' style={{ width: "20%", textAlign: "center" }}>{ele?.price}</Col>
//             <Col className='border p-0' style={{ width: "20%", textAlign: "center" }}>{ele?.productQuantity}</Col>
//             <Col className='border p-0' style={{ width: "20%", textAlign: "center" }}>{ele?.discount}</Col>
//             <Col className='border p-0' style={{ width: "20%", textAlign: "center" }}>{ele?.subTotal}</Col>
//             {/* {status ? <Col className='border p-0' style={{ width: "20%", textAlign: "center" }}>{status}</Col> : <Col className='border p-0' style={{ width: "20%", textAlign: "center" }}></Col>} */}
//             {/* {status ? <Col className='border p-0' style={{ width: "20%", textAlign: "center" }}>{status}</Col> : ''} */}
//         </Row>
//     )
// }

// export default DisplayOderItems

import React from "react";

const DisplayOderItems = () => {
  return <div>DisplayOderItems</div>;
};

export default DisplayOderItems;
