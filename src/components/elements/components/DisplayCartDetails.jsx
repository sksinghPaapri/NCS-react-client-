// import React, { useContext, useEffect, useState } from 'react'
// import { Container, Row, Col, Buttom, Card, Button, Figure, Form, Table } from 'react-bootstrap';
// import { Typeahead } from 'react-bootstrap-typeahead'
// import { Controller, useFieldArray, useForm } from 'react-hook-form'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import AppContentForm from '../builders/AppContentForm';
// import { BrandIconContext } from '../../../states/contexts/BrandIconContext';
// import DateField from '../fields/DateField';
// import ApiService from '../../../helpers/ApiServices';
// import { getCountry, getModelRoute, showMessage } from '../../../helpers/Utils';
// import SelectField from '../fields/SelectField';
// import SingleTypeaheadField from '../fields/SingleTypeaheadField';
// import { UserContext } from '../../../states/contexts/UserContext';
// import { CustomerContext } from '../../../states/contexts/CustomerContext';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// const moment = require("moment")

// const DisplayCartDetails = ({ key, isEditCart, cart, updateCartData, updateCartItem, deleteCartItem, total, deleteAllSelectedCartItem, getCartDetail }) => {
//     const [groupTotal, setGroupTotal] = useState(null)
//     const [groupActualTotal, setGroupActualTotal] = useState(null)
//     const [qtyObj, setQtyObj] = useState(null)
//     const [carts, setCarts] = useState([])
//     const [collection, setCollection] = useState(null)
//     const [updateData, setUpdateData] = useState({ shipDate: new Date(cart[1][0].shipDate).toISOString().split("T")[0], specialInstruction: cart[1][0]?.specialInstruction })
//     const [shipDate, setShipDate] = useState(new Date(cart[1][0].shipDate).toISOString().split("T")[0])
//     const [startDate, setStartDate] = useState(new Date());
//     const [appliedPromotions, setAppliedPromotions] = useState(null);

//     const { backgroundColor } = useContext(BrandIconContext)
//     const { user } = useContext(UserContext)
//     const { customer } = useContext(CustomerContext)

//     let customers = JSON.parse(localStorage.getItem("PCTeRP.CUSTOMER_IDS"))

//     const { register, control, reset, handleSubmit, getValues, setValue, watch, formState: { errors } } = useForm({
//         defaultValues: {
//         }
//     });
//     const { append: cartAppend, remove: cartRemove, fields: cartItemFields } = useFieldArray({ control, name: "cartItems" });

//     const onSubmit = (data) => {
//         // console.log(data);
//     }

//     const updateDataToAllGroupItems = async () => {
//         // console.log(updateData);

//         ApiService.setHeader()
//         ApiService.patch(`shop/cart/bulkUpdate/${JSON.stringify(cart[1].map(e => e._id))}?protectModel=${getModelRoute(user).model}`, updateData).then(response => {
//             if (response?.data.isSuccess) {
//                 getCartDetail()
//             }
//         }).catch(error => {
//             console.log(error)
//             // showMessage(error.response.data.message, "error")
//         })
//     }

//     const applyPromo = () => {
//         // console.log("cart: ", cart);
//         let array = []
//         let country
//         const collection = cart[0]
//         const promocode = getValues("promoCode")

//         customers != null && customers[customers?.length - 1]?.addresses.map(address => {
//             if (address?.isDefaultBilling) {
//                 // console.log(address?.country?.text);
//                 country = address?.country?.text
//             }
//         })

//         if (!promocode) {
//             return showMessage("Plase enter promocode!", 'info')
//         }

//         // console.log(getCountry()?.toUpperCase());
//         ApiService.setHeader()
//         ApiService.patch(`shop/cart/applyPromo/${promocode}?protectModel=${getModelRoute(user).model}&country=${country}&collection=${collection}&customerId=${customer?._id}`, cart[1]).then(response => {
//             // console.log(response?.data);
//             if (response?.data.isSuccess) {
//                 array.push(collection)
//                 array.push(response?.data.documents)
//                 cart = array
//                 // console.log(cart);
//                 const total = cart[1]?.reduce(function getSum(total, cart) {
//                     // return total + cart?.price;
//                     return (parseFloat(total) + parseFloat(cart?.subTotal)).toFixed(2);
//                 }, 0)
//                 // console.log(total);
//                 setGroupTotal(total)

//                 getCartDetail()

//                 setValue("promoCode", "")
//             }
//         }).catch(error => {
//             console.log(error)
//             showMessage(error.response?.data?.message, "error")
//             setValue("promoCode", "")
//         })
//     }

//     // const autoApplyPromocode = () => {
//     //     let array = []
//     //     const collection = cart[0]

//     //     ApiService.setHeader()
//     //     ApiService.patch(`shop/cart/autoApplyPromo?protectModel=${getModelRoute(user).model}&country=${getCountry()?.toUpperCase()}&collection=${collection}&customerId=${customer?._id}`, cart[1]).then(response => {
//     //         // console.log(response?.data);
//     //         if (response?.data.isSuccess) {
//     //             array.push(collection)
//     //             array.push(response?.data.documents)
//     //             cart = array
//     //             // console.log(cart);
//     //             const total = cart[1]?.reduce(function getSum(total, cart) {
//     //                 // return total + cart?.price;
//     //                 return (parseFloat(total) + parseFloat(cart?.subTotal)).toFixed(2);
//     //             }, 0)
//     //             // console.log(total);
//     //             setGroupTotal(total)

//     //             getCartDetail()

//     //             setValue("promoCode", "")
//     //         }
//     //     }).catch(error => {
//     //         console.log(error)
//     //         showMessage(error.response.data.message, "error")
//     //     })
//     // }

//     const getCollection = (collectionName) => {
//         ApiService.setHeader()
//         ApiService.get(`shop/collection/name/${collectionName}?protectModel=${getModelRoute(user).model}`).then(response => {
//             if (response?.data.isSuccess) {
//                 console.log(response.data.document);
//                 setCollection(response.data.document)
//             }
//         }).catch(error => {
//             console.log(error)
//             // showMessage(error.response.data.message, "error")
//         })
//     }

//     useEffect(() => {
//         cart[1]?.map(ele => {
//             ele.collectionName = String(`${ele?.collectionName && ele?.collectionName}\n${ele.productId.colorDescription}`)
//         })
//         console.log(cart[1]);
//         // console.log(cart[0]);
//         // console.log(customer);
//         getCollection(cart[0])

//         let obj = {}
//         obj.cartItems = cart[1]
//         // console.log(obj);

//         reset(obj)
//         setValue(`specialInstruction`, cart[1][0].specialInstruction)
//         setStartDate(new Date(cart[1][0]?.shipDate))

//         // // calaulate total discount amount
//         // let array = []
//         // let appliedPromoArray = []

//         // for (let ele of cart[1]) {
//         //     array.push(...ele?.appliedPromos)
//         // }

//         // console.log("discountTotal: ", array);
//         // // Group all applied promos by promo name
//         // const groupByPromoName = array?.reduce((group, promo) => {
//         //     const { text } = promo;

//         //     group[text] = group[text] ?? [];
//         //     group[text].push(promo);

//         //     return group;
//         // }, {});
//         // console.log("groupByPromoName: ", groupByPromoName);

//         // console.log(Object.entries(groupByPromoName));
//         // setAppliedPromotions(Object.entries(groupByPromoName))

//         // for (let ele of Object.entries(groupByPromoName)) {
//         //     let tot = 0
//         //     for (let e of ele[1]) {
//         //         tot += e?.discountAmount
//         //     }

//         //     appliedPromoArray.push([ele[0], tot])
//         // }
//         // console.log("appliedPromoArray: ", appliedPromoArray);
//         // setAppliedPromotions(appliedPromoArray)

//         const actualTotal = cart[1]?.reduce(function getSum(total, cart) {
//             // return total + cart?.price;
//             return (parseFloat(total) + (parseFloat(cart?.productQuantity[0]?.id) * parseFloat(cart?.price))).toFixed(2);
//         }, 0)
//         // console.log("actualTotal: ", actualTotal);
//         setGroupActualTotal(actualTotal)

//         const total = cart[1]?.reduce(function getSum(total, cart) {
//             // return total + cart?.price;
//             return (parseFloat(total) + parseFloat(cart?.subTotal)).toFixed(2);
//         }, 0)
//         // console.log(total);
//         setGroupTotal(total)

//     }, [total]);

//     // console.log(customer?._id, customers[customers?.length - 1]?._id);

//     return (
//         <AppContentForm onSubmit={handleSubmit(onSubmit)} key={key}>
//             <Container className='p-0 mb-3'>
//                 <div className='' style={{ fontSize: "14px", }}>
//                     <span>SHIPPING DATE:</span>&nbsp;&nbsp;<span style={{ fontWeight: 700 }}> {moment(shipDate).format('DD-MMM-YYYY').replaceAll("-", " ")}</span>
//                     {/* <span>SHIPPING DATE:</span>&nbsp;&nbsp;<span style={{ fontWeight: 700 }}> {moment(new Date(cart[1][0]?.newShipDate ? cart[1][0]?.newShipDate : cart[1][0]?.shipDate)).format('DD-MMM-YYYY').replaceAll("-", " ")}</span> */}

//                 </div>
//                 <div className="mb-2" style={{ fontSize: "14px", display: "flex", flexDirection: "row", justifyContent: "center", gap: "80px" }}>

//                     <Form.Group className=''>
//                         <DatePicker
//                             wrapperClassName="datePicker"
//                             showIcon
//                             // showYearDropdown
//                             {...register('shippingDate')}
//                             selected={startDate}
//                             minDate={collection && new Date(collection?.date)}
//                             onChange={(date) => {
//                                 if (date) {
//                                     setStartDate(date)
//                                     console.log(date);
//                                     // setUpdateData((prev) => ({ ...prev, shipDate: new Date(date).toISOString().split("T")[0] }))
//                                     setUpdateData((prev) => ({ ...prev, shipDate: new Date(date) }))
//                                     setShipDate(new Date(date))
//                                 }
//                             }}
//                             onBlur={(e) => {
//                                 updateDataToAllGroupItems()

//                             }}
//                         />
//                         {/* <Form.Control size='sm'
//                             defaultValue={new Date(cart[1][0].shipDate).toISOString().split("T")[0]}
//                             min={collection?.date.split("T")[0]}
//                             type="date"
//                             id="shippingDate"
//                             name="shippingDate"
//                             {...register('shippingDate')}
//                             onChange={(e) => {
//                                 // console.log(cart[1]);
//                                 if (e.target.value) {
//                                     console.log(e.target.value);
//                                     setUpdateData((prev) => ({ ...prev, shipDate: new Date(e.target.value).toISOString().split("T")[0] }))
//                                     setShipDate(new Date(e.target.value).toISOString().split("T")[0])
//                                 }
//                                 // updateDataToAllGroupItems()
//                             }}
//                             onBlur={(e) => {
//                                 updateDataToAllGroupItems()

//                             }}

//                         /> */}
//                     </Form.Group>

//                     <Form.Group >
//                         <Form.Control size='sm'
//                             placeholder='SPECIAL INSTRUCTION'
//                             type="text"
//                             id="specialInstruction"
//                             name="specialInstruction"
//                             {...register(`specialInstruction`)}
//                             onBlur={(e) => {
//                                 // console.log(e.target.value);
//                                 // console.log(updateData);
//                                 if (e.target.value) {
//                                     setUpdateData((prev) => ({ ...prev, specialInstruction: e.target.value }))
//                                     updateDataToAllGroupItems()
//                                 }
//                             }}
//                             onChange={(e) => {
//                                 // console.log(cart[1]);
//                                 if (e.target.value) {
//                                     // console.log(e.target.value);
//                                     setUpdateData((prev) => ({ ...prev, specialInstruction: e.target.value }))
//                                 }
//                             }}
//                         />
//                     </Form.Group>

//                     <Form.Group >
//                         <Form.Control size='sm'
//                             placeholder='PROMO CODE'
//                             type="text"
//                             id="promoCode"
//                             name="promoCode"
//                             {...register(`promoCode`)} />
//                     </Form.Group>

//                     <Button className='animet_btton' size="sm" variant='' style={{ backgroundColor: backgroundColor, color: "white", border: "none", margin: "0px 40px 0px 40px" }}
//                         onClick={applyPromo}
//                     >SUBMIT PROMO CODE</Button>
//                     <Button className='animet_btton' size="sm" variant='' style={{ backgroundColor: backgroundColor, color: "white", border: "none" }}
//                         onClick={() => {
//                             // console.log(cart[1].map(e => e._id));
//                             if (cart[1]?.length) {
//                                 deleteAllSelectedCartItem(cart[1].map(e => e._id))
//                             } else {
//                                 showMessage("There is no item for delete!!")
//                             }
//                         }}
//                     >REMOVE ALL</Button>
//                 </div>

//                 <Table striped bordered hover size="sm" style={{ fontSize: "16px" }}>
//                     {/* <thead style={{ position: "sticky", top: 0, backgroundColor: "#c5c5c5", zIndex: 999 }}> */}
//                     <thead style={{ position: "sticky", top: 0, backgroundColor: "#c5c5c5", }}>
//                         <tr style={{}}>
//                             <th style={{ minWidth: "0rem" }}>IMAGE</th>
//                             <th style={{ minWidth: "12rem" }}>COLLECTION NAME</th>
//                             <th style={{ minWidth: "10rem" }}>PRODUCT NAME</th>
//                             <th style={{ minWidth: "6rem" }}>QTY</th>
//                             <th style={{ minWidth: "6rem" }}>PRICE</th>
//                             <th style={{ minWidth: "0rem" }}>DISCOUNT</th>
//                             <th style={{ minWidth: "8rem" }}>NET TOTAL</th>
//                             <th style={{ minWidth: "12.4rem", display: "flex", justifyContent: "center", alignItems: "center" }} >ACTIONS</th>
//                         </tr>
//                     </thead>
//                     <tbody >
//                         {cartItemFields?.map((field, index) => {
//                             // console.log(index);
//                             return (
//                                 <tr key={field.id}>
//                                     <td style={{ textAlign: 'center', paddingTop: '8px' }}>
//                                         <LazyLoadImage
//                                             alt={""}
//                                             width={"145"}
//                                             height={"145"}
//                                             effect="blur"
//                                             {...register(`cartItems.${index}.image`)}
//                                             src={getValues(`cartItems.${index}.image`)}
//                                         />
//                                     </td>

//                                     <td>
//                                         <Form.Group style={{ wordWrap: "break-word" }}>
//                                             <Form.Control
//                                                 plaintext readOnly disabled
//                                                 as="textarea"
//                                                 id="name"
//                                                 name="name"
//                                                 {...register(`cartItems.${index}.collectionName`)} />
//                                         </Form.Group>
//                                     </td>

//                                     <td>
//                                         <Form.Group>
//                                             <Form.Control
//                                                 plaintext readOnly disabled
//                                                 type="text"
//                                                 id="name"
//                                                 name="name"
//                                                 {...register(`cartItems.${index}.productId.name`)} />
//                                         </Form.Group>
//                                     </td>

//                                     <td>
//                                         {/* <Controller key={field.id}
//                                             name={''}
//                                             control={control}
//                                             render={({ field: { onChange, value }, fieldState: { error } }) => {
//                                                 // value = getValues(`cartItems.${index}.productQuantity`)
//                                                 return (
//                                                     <Typeahead key={field.id} size='sm'
//                                                         // clearButton
//                                                         id={"qtySelect"}
//                                                         // disabled={isEditCart ? false : true}
//                                                         labelKey="name"
//                                                         multiple={false}
//                                                         options={getValues(`cartItems.${index}.multipliers`)}
//                                                         // onFocus={(e) => {
//                                                         //     console.log(e.target.value);
//                                                         //     // console.log(value);
//                                                         //     e.target.value = undefined
//                                                         // }}
//                                                         onBlur={(e) => {
//                                                             // console.log(e.target.value);
//                                                             // console.log(getValues(`cartItems.${index}._id`));
//                                                             // console.log(value);
//                                                             if (e.target.value) {
//                                                                 setValue(`cartItems.${index}.subTotal`, getValues(`cartItems.${index}.price`) * parseInt(e.target.value))

//                                                                 updateCartData.cartId = getValues(`cartItems.${index}._id`)
//                                                                 updateCartData.quantity = parseInt(e.target.value)
//                                                                 updateCartData.price = getValues(`cartItems.${index}.price`)
//                                                                 updateCartData.subTotal = (getValues(`cartItems.${index}.price`) * parseInt(e.target.value)).toFixed(2)
//                                                             }
//                                                         }}
//                                                         selected={value}
//                                                         defaultSelected={getValues(`cartItems.${index}.productQuantity`)}
//                                                         positionFixed={true}
//                                                         flip={true}
//                                                     // clearButton
//                                                     />)
//                                             }}
//                                         /> */}

//                                         <SingleTypeaheadField
//                                             control={control}
//                                             errors={errors}
//                                             field={{
//                                                 description: "",
//                                                 // label: "APPLICATION NAME",
//                                                 fieldId: `cartItems.${index}.productQuantity`,
//                                                 placeholder: "",
//                                                 // required: true,
//                                                 // validationMessage: "Please enter Application name!",
//                                                 list: getValues(`cartItems.${index}.multipliers`),
//                                                 multiple: false

//                                             }}
//                                             changeHandler={null}
//                                             blurHandler={(e) => {
//                                                 if (e.target.value) {
//                                                     let isQtyNotPresentInList = getValues(`cartItems.${index}.multipliers`)?.map(ele => ele.id == Number(e.target.value)).every(curr => curr == false)
//                                                     console.log(isQtyNotPresentInList);
//                                                     if ((!user.userTypes[0] !== "CUSTOMER" || !user.userTypes[0] !== "SALES_REP") && isQtyNotPresentInList) {
//                                                         showMessage("Only Admin user, sales manager, power user and customer service has the permission to modify quantity beyond list!!", "info")
//                                                     }

//                                                     // console.log(getValues(`cartItems.${index}.productQuantity`));
//                                                     console.log(getValues(`cartItems.${index}.collectionName`).split("\n")[0]);
//                                                     // setValue(`cartItems.${index}.subTotal`, getValues(`cartItems.${index}.price`) * parseInt(e.target.value))

//                                                     updateCartData.cartId = getValues(`cartItems.${index}._id`)
//                                                     updateCartData.quantity = (user.userTypes[0] === "ADMIN_USER" && isQtyNotPresentInList) ? parseInt(e.target.value) : parseInt(getValues(`cartItems.${index}.productQuantity`)?.length ? getValues(`cartItems.${index}.productQuantity`)[0]?.id : getValues(`cartItems.${index}.multipliers`)[0].id)
//                                                     updateCartData.price = getValues(`cartItems.${index}.price`)
//                                                     updateCartData.collectionName = getValues(`cartItems.${index}.collectionName`).split("\n")[0]

//                                                     const discount = getValues(`cartItems.${index}.discount`)
//                                                     console.log('discount: ', parseInt(discount?.replace("%", "")));

//                                                     if (discount === 'N/A') {
//                                                         console.log('N/A: ');
//                                                         updateCartData.subTotal = (getValues(`cartItems.${index}.price`) * parseInt(e.target.value)).toFixed(2)
//                                                         setValue(`cartItems.${index}.subTotal`, (getValues(`cartItems.${index}.price`) * parseInt(e.target.value)))
//                                                     } else {
//                                                         console.log('discount: ');
//                                                         let calsubTot = parseFloat(getValues(`cartItems.${index}.price`) * parseInt(e.target.value))
//                                                         updateCartData.subTotal = parseFloat(calsubTot - ((calsubTot * parseInt(discount?.replace("%", ""))) / 100)).toFixed(2)
//                                                         setValue(`cartItems.${index}.subTotal`, parseFloat(calsubTot - ((calsubTot * parseInt(discount?.replace("%", ""))) / 100)))
//                                                     }
//                                                 } else {
//                                                     setValue(`cartItems.${index}.productQuantity`, qtyObj)
//                                                 }
//                                             }}
//                                             focusHandler={(e) => {
//                                                 setQtyObj(getValues(`cartItems.${index}.productQuantity`))
//                                                 setValue(`cartItems.${index}.productQuantity`, [])
//                                             }}

//                                         />
//                                     </td>

//                                     <td>
//                                         <Form.Group >
//                                             <Form.Control
//                                                 plaintext readOnly disabled
//                                                 type="text"
//                                                 id="price"
//                                                 name="price"
//                                                 {...register(`cartItems.${index}.price`)} />
//                                         </Form.Group>
//                                     </td>

//                                     <td>
//                                         <Form.Group >
//                                             <Form.Control
//                                                 plaintext readOnly disabled
//                                                 type="text"
//                                                 id="price"
//                                                 name="price"
//                                                 {...register(`cartItems.${index}.discount`)} />
//                                         </Form.Group>
//                                     </td>

//                                     <td>
//                                         <Form.Group >
//                                             <Form.Control
//                                                 plaintext readOnly disabled
//                                                 type="number"
//                                                 id="price"
//                                                 name="price"
//                                                 {...register(`cartItems.${index}.subTotal`)} />
//                                         </Form.Group>
//                                     </td>

//                                     <td>
//                                         <div className='' style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>

//                                             <Button className='btn btn-outline-success m-1' variant='' size='sm' style={{ width: "80px" }}
//                                                 onClick={() => {

//                                                     const cartId = getValues(`cartItems.${index}._id`)
//                                                     updateCartItem(cartId)

//                                                 }}
//                                             >Update</Button>

//                                             <Button className='btn btn-outline-danger m-1' variant='' size='sm' style={{ width: "80px" }}
//                                                 onClick={(data) => {
//                                                     console.log("cart itm: ", getValues(`cartItems.${index}`));
//                                                     const cartId = getValues(`cartItems.${index}._id`)
//                                                     const cartItem = getValues(`cartItems.${index}`)
//                                                     const cartItems = getValues(`cartItems`)
//                                                     console.log(cartItems.filter(ele => ele?._id != cartId));

//                                                     deleteCartItem(cartId, cartItem, cartItems)
//                                                 }}
//                                             >Remove</Button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             )
//                         })}

//                     </tbody>
//                 </Table>

//                 {/* {appliedPromotions?.length ? appliedPromotions?.map(ele =>
//                     <div style={{ fontSize: "14px", fontWeight: 500, display: "flex", justifyContent: "flex-end", gap: "20px" }}>
//                         <span>{`Discount ${ele[0]} applied: `}</span>
//                         <span className='border-bottom' style={{ width: "100px", display: "flex", justifyContent: "center" }}>${ele[1]}</span>
//                     </div>
//                 ) : ""} */}
//                 <div style={{ fontSize: "14px", fontWeight: 500, display: "flex", justifyContent: "flex-end", gap: "20px" }}>
//                     <span>GROUP DISCOUNT: </span>
//                     <span className='border-bottom' style={{ width: "100px", display: "flex", justifyContent: "center", color: 'red' }}>${(groupActualTotal - groupTotal)?.toFixed(2)}</span>
//                 </div>
//                 <div style={{ fontSize: "14px", fontWeight: 500, display: "flex", justifyContent: "flex-end", gap: "20px" }}>
//                     <span>COLLECTION SUBTOTAL: </span>
//                     <span className='border-bottom' style={{ width: "100px", display: "flex", justifyContent: "center" }}>${groupTotal}</span>
//                 </div>
//             </Container>
//         </AppContentForm>

//     )
// }

// export default DisplayCartDetails

import React from "react";

const DisplayCartDetails = () => {
  return <div>DisplayCartDetails</div>;
};

export default DisplayCartDetails;
