// import { useEffect, React, useState, useContext } from 'react'
// import { Container, Row, Col, Buttom, Card, Button, Figure, Form, Table } from 'react-bootstrap';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { useForm, Controller, useFieldArray } from 'react-hook-form'
// import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
// import Swal from 'sweetalert2'

// import ApiService from '../../helpers/ApiServices';
// import { getCountry, getModelRoute, showMessage } from '../../helpers/Utils';

// import { CiEdit } from 'react-icons/ci'
// import { FaRegEye } from 'react-icons/fa'
// import { BiCart } from 'react-icons/bi'
// import { CustomerContext } from '../../states/contexts/CustomerContext';
// import { UserContext } from '../../states/contexts/UserContext';
// import { CartContext } from '../../states/contexts/CartContext';
// import NumberField from '../../components/elements/fields/NumberField';
// import { Typeahead } from 'react-bootstrap-typeahead';
// import DisplayCartDetails from '../../components/elements/components/DisplayCartDetails';
// import { BrandIconContext } from '../../states/contexts/BrandIconContext';
// import moment from "moment";
// import Loader from '../../components/elements/components/loaders/Loader';

// const CartDetail = () => {
//     const [state, setState] = useState([]);
//     const [carts, setCarts] = useState([]);
//     const [shipDates, setShipDates] = useState([]);
//     const [total, setTotal] = useState(null);
//     const [totalDiscount, setTotalDiscount] = useState(null);
//     const [usdMultiplier, setUSDMultiplier] = useState(null);
//     const [cadMultiplier, setCADMultiplier] = useState(null);
//     const [shippingType, setShippingType] = useState(null);
//     const [shippingDate, setShippingDate] = useState(null);
//     const [shippingInstruction, setShippingInstruction] = useState(null);
//     // const [updateCartData, setUpdateCartData] = useState();
//     const [isEditCart, setIsEditCart] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     const { dispatch: customerDispatch, customer } = useContext(CustomerContext)
//     const { user } = useContext(UserContext)
//     const { backgroundColor } = useContext(BrandIconContext)
//     const { dispatch: cartDispatch, shipType } = useContext(CartContext)

//     const navigate = useNavigate()

//     let customers = JSON.parse(localStorage.getItem("PCTeRP.CUSTOMER_IDS"))
//     // console.log("cart: ", quantity);

//     const { register, control, reset, handleSubmit, getValues, setValue, watch, formState: { errors } } = useForm({
//         defaultValues: {
//         }
//     });
//     const { append: cartAppend, remove: cartRemove, fields: cartItemFields } = useFieldArray({ control, name: "cartItems" });

//     let updateCartData = { quantity: "", cartId: "", price: "", subTotal: "" }

//     const onSubmit = (formData) => {
//         console.log(formData);
//     }

//     const formatData = (cart) => {
//         let array = []
//         cart.multipliers?.map(e => {
//             let obj = {}
//             obj = {
//                 id: e,
//                 name: String(e)
//             }
//             array.push(obj)
//         })

//         return {
//             productQuantity: [{
//                 id: cart.productQuantity,
//                 name: String(cart.productQuantity)
//             }],
//             multipliers: array
//         }
//     }

//     // Check wheather prices are changed or not. If changed update price in every cart item else don't update.

//     const checkPricesOfCart = (prices) => {
//         let obj = {}
//         let updatedCartItems = []
//         let country = null

//         customers != null && customers[customers?.length - 1]?.addresses.map(address => {
//             if (address?.isDefaultBilling) {
//                 console.log(address?.country?.text);
//                 country = address?.country?.text
//             }
//         })

//         ApiService.setHeader()
//         ApiService.get(`shop/cart/${customers[customers?.length - 1]?._id}?protectModel=${getModelRoute(user).model}`).then(async response => {
//             console.log(response.data.documents);
//             if (response?.data.isSuccess) {
//                 const isAddedBySpecialButton = response?.data.documents?.every(cartItem => cartItem?.isAddedBySpecialButton)
//                 console.log(isAddedBySpecialButton);

//                 if (!isAddedBySpecialButton) {
//                     response?.data.documents?.map(cartItem => {

//                         console.log("cart item: ", cartItem);

//                         // Get pricing matrix based on products's priceCode
//                         // console.log(getCountry());
//                         const key = `${country?.toUpperCase() === "CANADA" ? "CANADA" : "USA"} ${customers[customers?.length - 1].priceLevel}`?.toUpperCase()
//                         console.log(key);

//                         const pm = prices.filter(price => price.Code === cartItem.productId.priceCode)
//                         console.log("pm: ", pm);

//                         // Set price from pricing matrix in each product
//                         if (pm.length) {
//                             for (let ele of Object.entries(pm[0])) {
//                                 if (ele[0]?.toUpperCase() === key) {
//                                     // Set new price from pricing matrix into product if changed
//                                     console.log("ele[1]", ele[1])
//                                     if (ele[1] !== cartItem?.price) {
//                                         cartItem.price = ele[1]
//                                         cartItem.subTotal = parseFloat(parseFloat(ele[1]) * cartItem.productQuantity).toFixed(2)
//                                         updatedCartItems.push(cartItem)
//                                     }
//                                 }
//                             }

//                         }
//                     })

//                     console.log('updatedCartItems: ', updatedCartItems);
//                     updatePriceInCartItems(updatedCartItems)
//                 } else {
//                     // let updatedCartItemsForButtons = []
//                     // await Promise.all(
//                     //     response?.data.documents?.map(cartItem => {

//                     //         console.log("cart item: ", cartItem);
//                     //         ApiService.get(`shop/collection/name/${cartItem?.collectionName}?protectModel=${getModelRoute(user).model}`).then(res => {
//                     //             if (res?.data.isSuccess) {

//                     //                 // Get pricing matrix based on products's priceCode
//                     //                 console.log(getCountry());
//                     //                 const key = `${getCountry()?.toUpperCase()} ${customers[customers?.length - 1].priceLevel}`?.toUpperCase()
//                     //                 console.log(key);

//                     //                 const pm = prices.filter(price => price.Code === cartItem.productId.priceCode)
//                     //                 console.log("pm: ", pm);

//                     //                 // Set price from pricing matrix in each product
//                     //                 if (pm.length) {
//                     //                     for (let ele of Object.entries(pm[0])) {
//                     //                         if (ele[0]?.toUpperCase() === key) {
//                     //                             console.log(ele);
//                     //                             // Set new price from pricing matrix into product if changed
//                     //                             // if (ele[1] !== cartItem?.price) {
//                     //                             cartItem.price = ele[1]
//                     //                             if (res.data.document.isShowFullCollectionButton) {
//                     //                                 cartItem.subTotal = parseFloat(parseFloat(parseFloat(ele[1]) * cartItem.productQuantity) - parseFloat(parseFloat(ele[1]) * cartItem.productQuantity) * 0.01).toFixed(2)
//                     //                             }
//                     //                             if (res.data.document.isShowFullCollectionFreeFreightButton) {
//                     //                                 cartItem.subTotal = parseFloat(parseFloat(ele[1]) * cartItem.productQuantity).toFixed(2)
//                     //                             }
//                     //                             if (res.data.document.isShowFullCollectionHalfPieceButton) {
//                     //                                 if (getCountry()?.toUpperCase() === "CANADA" && cartItem.productId.cadMultiplier) {
//                     //                                     cartItem.subTotal = parseFloat(parseFloat(ele[1]) * cartItem.productId.cadMultiplier).toFixed(2)
//                     //                                 } else if (getCountry()?.toUpperCase() === "USA" && cartItem.productId.usdMultiplier) {
//                     //                                     cartItem.subTotal = parseFloat(parseFloat(ele[1]) * cartItem.productId.usdMultiplier).toFixed(2)
//                     //                                 } else {
//                     //                                     cartItem.subTotal = parseFloat(parseFloat(ele[1]) * cartItem.productQuantity).toFixed(2)
//                     //                                 }

//                     //                             }
//                     //                             console.log(cartItem);
//                     //                             updatedCartItemsForButtons.push(cartItem)
//                     //                             // }
//                     //                         }
//                     //                     }

//                     //                 }
//                     //             }
//                     //         })

//                     //     })
//                     // )

//                     // console.log('updatedCartItemsForButtons: ', updatedCartItemsForButtons);
//                     // updatePriceInCartItems(updatedCartItemsForButtons)

//                     getCartDetail()
//                 }
//             }
//         }).catch(error => {
//             console.log(error)
//             // console.log("Else Catch")
//             // showMessage(error.response.data.message, "error")
//         })
//     }

//     const updateCartItem = (cartId) => {

//         console.log("cartId: ", cartId);
//         console.log("updateCartData: ", updateCartData);
//         let country = null
//         customers != null && customers[customers?.length - 1]?.addresses.map(address => {
//             if (address?.isDefaultBilling) {
//                 // console.log(address?.country?.text);
//                 country = address?.country?.text
//             }
//         })

//         if (updateCartData.cartId && cartId == updateCartData.cartId) {
//             setIsLoading(true)
//             ApiService.setHeader()
//             ApiService.patch(`shop/cart/increaseCartItemQuantity/${updateCartData.cartId}?protectModel=${getModelRoute(user).model}&country=${country}&collection=${updateCartData?.collectionName}&customerId=${customer?._id}`, updateCartData).then(response => {
//                 if (response?.data.isSuccess) {
//                     getCartDetail()
//                 }
//             }).catch(error => {
//                 console.log(error.response.data)
//                 // showMessage(error.response.data.message, "error")
//                 getCartDetail()
//             })

//             setIsEditCart(!isEditCart)
//             // getCartDetail()
//         } else {
//             showMessage("Please select correct line for update!", "warning")
//         }
//     }

//     const getCartDetail = () => {
//         setIsLoading(true)
//         let obj = {}
//         let array = []

//         ApiService.setHeader()
//         ApiService.get(`shop/cart/${customers[customers?.length - 1]?._id}?protectModel=${getModelRoute(user).model}`).then(response => {
//             // console.log(response.data);
//             if (response?.data.isSuccess) {
//                 // getMultipliers()

//                 console.log(response?.data.documents);
//                 cartDispatch({ type: "ADD_TO_CART_QUANTITY", payload: response?.data.documents?.length });
//                 setState(response?.data.documents)

//                 const tot = response?.data.documents?.reduce(function getSum(total, cart) {
//                     // return total + cart?.price;
//                     return (parseFloat(total) + parseFloat(cart?.subTotal)).toFixed(2);
//                 }, 0)

//                 const actualTot = response?.data.documents?.reduce(function getSum(total, cart) {
//                     // return total + cart?.price;
//                     return (parseFloat(total) + (parseFloat(cart?.productQuantity) * parseFloat(cart?.price))).toFixed(2);
//                 }, 0)

//                 setTotalDiscount(parseFloat(actualTot) - parseFloat(tot))

//                 // Set all cart Id's into an array
//                 response?.data.documents.map(cart => array.push(moment(cart?.shipDate)))
//                 setShipDates(array)

//                 setTotal(tot)

//                 // Format cart items
//                 response?.data.documents?.map(ele => {
//                     ele.productQuantity = formatData(ele).productQuantity
//                     ele.multipliers = formatData(ele).multipliers
//                     ele.productId.name = ele.productId.name.split(":")[1].trim()
//                 })

//                 obj.cartItems = response?.data.documents
//                 // console.log(obj);
//                 reset(obj)

//                 // Group all cart items by collection name
//                 const groupBycollectionName = response?.data.documents?.reduce((group, cartItem) => {
//                     const { collectionName } = cartItem;

//                     group[collectionName] = group[collectionName] ?? [];
//                     group[collectionName].push(cartItem);

//                     return group;
//                 }, {});

//                 // Apply promo code which have auto apply checkbox checked on cart items

//                 // Set formated cart items
//                 console.log(Object.entries(groupBycollectionName));
//                 setCarts(Object.entries(groupBycollectionName))
//                 setIsLoading(false)
//             }
//         }).catch(error => {
//             console.log(error)
//             // console.log("Else Catch")
//             // showMessage(error.response.data.message, "error")
//         })
//     }

//     const removeDiscountFromAllItemsAddedBySelectFullCollection = (cartItems, buttonType) => {
//         // console.log("cartItems to remove discount: ", cartItems);

//         ApiService.setHeader()
//         ApiService.post(`shop/cart/removeDiscount?protectModel=${getModelRoute(user).model}&buttonType=${buttonType}`, cartItems).then(response => {
//             if (response?.data.isSuccess) {
//                 getCartDetail()
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // showMessage(error.response.data.message, "error")
//         })
//     }

//     const removeDiscountFromAllItemsAddedBySelectFullCollectionFreeFreight = (cartItems, buttonType) => {
//         // console.log("cartItems to remove discount: ", cartItems);

//         ApiService.setHeader()
//         ApiService.post(`shop/cart/removeDiscount?protectModel=${getModelRoute(user).model}&buttonType=${buttonType}`, cartItems).then(response => {
//             if (response?.data.isSuccess) {
//                 getCartDetail()
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // showMessage(error.response.data.message, "error")
//         })
//     }

//     const removeDiscountFromAllItemsAddedBySelectFullCollectionHalfPiece = (cartItems, buttonType) => {
//         // console.log("cartItems to remove discount: ", cartItems);

//         ApiService.setHeader()
//         ApiService.post(`shop/cart/removeDiscount?protectModel=${getModelRoute(user).model}&buttonType=${buttonType}`, cartItems).then(response => {
//             if (response?.data.isSuccess) {
//                 getCartDetail()
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // showMessage(error.response.data.message, "error")
//         })
//     }

//     const removePromoFromItemsForPieceRestriction = (cartItems) => {
//         console.log("removePromoFromItemsForPieceRestriction ", cartItems[0]?.collectionName.split("\n")[0]);
//         let country = null
//         customers != null && customers[customers?.length - 1]?.addresses.map(address => {
//             if (address?.isDefaultBilling) {
//                 // console.log(address?.country?.text);
//                 country = address?.country?.text
//             }
//         })

//         ApiService.setHeader()
//         ApiService.post(`shop/cart/removePromo?protectModel=${getModelRoute(user).model}&customerId=${customer?._id}&collection=${cartItems[0]?.collectionName.split("\n")[0]}&country=${country}`, cartItems).then(response => {
//             if (response?.data.isSuccess) {
//                 getCartDetail()
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // showMessage(error.response.data.message, "error")
//             getCartDetail()
//         })
//     }

//     const removePromoFromItemsForPieceRestrictionManually = (cartItems) => {
//         console.log("removePromoFromItemsForPieceRestriction ", cartItems[0]?.collectionName.split("\n")[0]);
//         let country = null
//         customers != null && customers[customers?.length - 1]?.addresses.map(address => {
//             if (address?.isDefaultBilling) {
//                 // console.log(address?.country?.text);
//                 country = address?.country?.text
//             }
//         })

//         ApiService.setHeader()
//         ApiService.post(`shop/cart/removePromoManually?protectModel=${getModelRoute(user).model}&customerId=${customer?._id}&collection=${cartItems[0]?.collectionName.split("\n")[0]}&country=${country}`, cartItems).then(response => {
//             if (response?.data.isSuccess) {
//                 getCartDetail()
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // showMessage(error.response.data.message, "error")
//             getCartDetail()
//         })
//     }

//     const removePromoFromItemsForYardMeterRestriction = (cartItems) => {
//         console.log("removePromoFromItemsForYardMeterRestriction ", cartItems[0]?.collectionName.split("\n")[0]);
//         let country = null
//         customers != null && customers[customers?.length - 1]?.addresses.map(address => {
//             if (address?.isDefaultBilling) {
//                 // console.log(address?.country?.text);
//                 country = address?.country?.text
//             }
//         })

//         ApiService.setHeader()
//         ApiService.post(`shop/cart/removePromoYardMeter?protectModel=${getModelRoute(user).model}&customerId=${customer?._id}&collection=${cartItems[0]?.collectionName.split("\n")[0]}&country=${country}`, cartItems).then(response => {
//             if (response?.data.isSuccess) {
//                 getCartDetail()
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // showMessage(error.response.data.message, "error")
//             getCartDetail()
//         })
//     }

//     const removePromoFromItemsForYardMeterRestrictionManually = (cartItems) => {
//         console.log("removePromoFromItemsForYardMeterRestriction ", cartItems[0]?.collectionName.split("\n")[0]);
//         let country = null
//         customers != null && customers[customers?.length - 1]?.addresses.map(address => {
//             if (address?.isDefaultBilling) {
//                 // console.log(address?.country?.text);
//                 country = address?.country?.text
//             }
//         })

//         ApiService.setHeader()
//         ApiService.post(`shop/cart/removePromoYardMeterManually?protectModel=${getModelRoute(user).model}&customerId=${customer?._id}&collection=${cartItems[0]?.collectionName.split("\n")[0]}&country=${country}`, cartItems).then(response => {
//             if (response?.data.isSuccess) {
//                 getCartDetail()
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // showMessage(error.response.data.message, "error")
//             getCartDetail()
//         })
//     }

//     const removeDiscountOrQtyFromAllItemsAddedBySpecialButton = (cartItems, buttonType) => {
//         // console.log("cartItems to remove discount: ", cartItems);
//         let country = null
//         customers != null && customers[customers?.length - 1]?.addresses.map(address => {
//             if (address?.isDefaultBilling) {
//                 // console.log(address?.country?.text);
//                 country = address?.country?.text
//             }
//         })

//         ApiService.setHeader()
//         ApiService.post(`shop/cart/removeDiscount?protectModel=${getModelRoute(user).model}&buttonType=${buttonType}&customerId=${customer?._id}&collection=${cartItems[0]?.collectionName.split("\n")[0]}&country=${country}`, cartItems).then(response => {
//             if (response?.data.isSuccess) {
//                 getCartDetail()
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             // showMessage(error.response.data.message, "error")
//             getCartDetail()
//         })
//     }

//     const deleteCartItem = (cartId, cartItem, cartItems) => {
//         setIsLoading(true)
//         ApiService.setHeader()
//         ApiService.delete(`shop/cart/${cartId}?protectModel=${getModelRoute(user).model}`).then(response => {
//             if (response.status == 204) {

//                 if (cartItem.isAddedBySelectFullCollection) {
//                     // Remove all discount from items added by "Select Full Collection" button
//                     // removeDiscountFromAllItemsAddedBySelectFullCollection(cartItems.filter(ele => ele?.isAddedBySelectFullCollection), 'FullCollectionButton')
//                     removeDiscountOrQtyFromAllItemsAddedBySpecialButton(cartItems.filter(ele => ele?.isAddedBySelectFullCollection), 'FullCollectionButton')
//                 } else if (cartItem.isAddedBySelectFullCollectionFreeFreight) {
//                     // Remove all discount from items added by "Select Full Collection - Free Freight" button
//                     // removeDiscountFromAllItemsAddedBySelectFullCollectionFreeFreight(cartItems.filter(ele => ele?.isAddedBySelectFullCollectionFreeFreight), 'FullCollectionFreeFreightButton')
//                     removeDiscountOrQtyFromAllItemsAddedBySpecialButton(cartItems.filter(ele => ele?.isAddedBySelectFullCollectionFreeFreight), 'FullCollectionFreeFreightButton')

//                 } else if (cartItem.isAddedBySelectFullCollectionHalfPiece) {
//                     // Remove all half piece to full piece from items added by "Select Full Collection - Half Piece" button
//                     // removeDiscountFromAllItemsAddedBySelectFullCollectionHalfPiece(cartItems.filter(ele => ele?.isAddedBySelectFullCollectionHalfPiece), 'FullCollectionHalfPieceButton')
//                     removeDiscountOrQtyFromAllItemsAddedBySpecialButton(cartItems.filter(ele => ele?.isAddedBySelectFullCollectionHalfPiece), 'FullCollectionHalfPieceButton')
//                 } else if (cartItem.isAddedByAddThisColorwayOnly) {
//                     // Remove all half piece to full piece from items added by "Add This Colorway Only" button
//                     removeDiscountOrQtyFromAllItemsAddedBySpecialButton(cartItems.filter(ele => ele?.isAddedByAddThisColorwayOnly), 'addThisColorwayOnly')
//                 } else if (cartItem.isAddedByAddThisColorwayHalfPieces) {
//                     // Remove all half piece to full piece from items added by "Add This Colorway Only - Half Piece" button
//                     removeDiscountOrQtyFromAllItemsAddedBySpecialButton(cartItems.filter(ele => ele?.isAddedByAddThisColorwayHalfPieces), 'addThisColorwayHalfPieces')
//                 } else if (cartItem.isAddedForPieceDiscount) {
//                     // Remove promo from items for piece restriction
//                     removePromoFromItemsForPieceRestriction(cartItems.filter(ele => ele?.isAddedForPieceDiscount))
//                 } else if (cartItem.isAddedForYarsMeterDiscount) {
//                     // Remove promo from items for piece restriction
//                     removePromoFromItemsForYardMeterRestriction(cartItems.filter(ele => ele?.isAddedForYarsMeterDiscount))
//                 } else if (cartItem.isAddedForYardsMeterDiscountManually) {
//                     // Remove promo from items for piece restriction
//                     removePromoFromItemsForYardMeterRestrictionManually(cartItems.filter(ele => ele?.isAddedForYardsMeterDiscountManually))
//                 } else if (cartItem.isAddedForPieceDiscountManually) {
//                     // Remove promo from items for piece restriction
//                     removePromoFromItemsForPieceRestrictionManually(cartItems.filter(ele => ele?.isAddedForPieceDiscountManually))
//                 } else {
//                     getCartDetail()
//                 }

//                 // getCartDetail()
//             }
//         }).catch(error => {
//             console.log(error.response)
//             // showMessage(error.response.data.message, "error")
//         })
//     }

//     const deleteAllSelectedCartItem = (cartIds) => {
//         ApiService.setHeader()
//         cartIds?.length && cartIds?.map(cartId => {
//             ApiService.delete(`shop/cart/${cartId}?protectModel=${getModelRoute(user).model}`).then(response => {
//                 if (response.status == 204) {

//                 }
//             }).catch(error => {
//                 console.log(error.response)
//                 // showMessage(error.response.data.message, "error")
//             })
//         })
//         getCartDetail()

//         // ApiService.setHeader()
//         // ApiService.delete(`shop/cart/many/${JSON.stringify(cartIds)}?protectModel=${getModelRoute(user).model}`).then(response => {
//         //     if (response.status == 204) {
//         //     }
//         //     getCartDetail()
//         // }).catch(error => {
//         //     console.log(error)
//         //     // showMessage(error.response.data.message, "error")
//         // })

//         // getCartDetail()
//     }

//     const updatePriceInCartItems = (updatedCartItems) => {
//         // Not completed
//         if (updatedCartItems?.length) {
//             ApiService.setHeader()
//             ApiService.patch(`shop/cart/bulkUpdatePrice?protectModel=${getModelRoute(user).model}`, updatedCartItems).then(response => {
//                 if (response?.data.isSuccess) {
//                     getCartDetail()
//                 }
//             }).catch(error => {
//                 console.log(error.response?.data)
//                 // console.log("Else Catch")
//                 // showMessage(error.response.data.message, "error")
//             })
//         } else {
//             getCartDetail()
//         }
//     }

//     const toggleEdit = () => {
//         setIsEditCart(!isEditCart)
//     }

//     const findProductMultiplierAndFormatArray = (productId) => {
//         let country = null;

//         ApiService.setHeader()
//         ApiService.get(`shop/product/${productId}?protectModel=${getModelRoute(user).model}`).then(response => {
//             if (response?.data.isSuccess) {
//                 customers[customers?.length - 1].addresses.length && customers[customers?.length - 1].addresses.map(address => {
//                     if (address?.isDefaultBilling) {
//                         console.log(address?.country?.text);
//                         country = address?.country?.text
//                     }
//                 })

//                 if (country == "CANADA") {
//                     // setCADMultiplier(formatArray(response.data.document.cadMultiplier))
//                     formatArray(response.data.document.cadMultiplier)
//                 } else {
//                     // setUSDMultiplier(formatArray(response.data.document.usdMultiplier))
//                     formatArray(response.data.document.usdMultiplier)
//                 }
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             showMessage(error.response.data.message, "error")
//         })
//     }

//     const formatArray = (multiplier) => {
//         // console.log(multiplier);
//         let array = []
//         for (let i = 1; i <= 10; i++) {
//             array.push((i * parseFloat(multiplier)).toFixed(2))
//         }
//         // console.log(array);
//         setCADMultiplier(array)
//         return array
//     }

//     const getMultipliers = () => {
//         let country = null;

//         ApiService.setHeader()
//         ApiService.get(`shop/multiplier?protectModel=${getModelRoute(user).model}`).then(response => {
//             if (response?.data.isSuccess) {
//                 customers[customers?.length - 1].addresses.length && customers[customers?.length - 1].addresses.map(address => {
//                     if (address?.isDefaultBilling) {
//                         console.log(address?.country?.text);
//                         country = address?.country?.text
//                     }
//                 })

//                 if (country == "CANADA") {
//                     setCADMultiplier(response?.data.document?.cad)
//                 } else {
//                     setCADMultiplier(response?.data.document?.usd)
//                 }
//             }
//         }).catch(error => {
//             console.log(error.response.data)
//             showMessage(error.response.data.message, "error")
//         })
//     }

//     useEffect(() => {

//     }, [state, carts]);

//     useEffect(() => {
//         // if (customers != null) getCartDetail()
//         // if (customers?.length > 1) {
//         if (customers?.length) {
//             ApiService.setHeader()
//             ApiService.get(`shop/pricingMatrix?protectModel=${getModelRoute(user).model}`).then(response => {
//                 console.log(response.data.documents);
//                 if (response?.data.isSuccess) {
//                     // prices = response.data.documents

//                     // Get cart details (passing pricing matrixes)
//                     // getCartDetail(response.data.documents)
//                     checkPricesOfCart(response.data.documents)
//                 }
//             }).catch(error => {
//                 console.log(error.response)
//                 // showMessage(error.response.data.message, "error")
//             })

//         }

//         // getMultipliers()
//     }, []);

//     console.log(carts);

//     return (
//         // <AppContentForm onSubmit={handleSubmit(onSubmit)}>
//         <Container>
//             <Row className=' m-0 p-0 col-xl-12 col-lg-12 col-md-12 col-sm-12' xs={1} sm={2} md={2} lg={4} style={{ display: "flex", flexDirection: "column" }}>
//                 <h3 style={{ paddingLeft: "0px" }}>Cart Details</h3>
//                 <hr style={{ width: "100%" }} />
//             </Row>
//             {state?.length ?
//                 !isLoading ?
//                     <Container className='m-0 p-0 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
//                         <Row className='m-0 p-0 col-xl-12 col-lg-12 col-md-12 col-sm-12' style={{ display: "flex", flexDirection: "column" }}>
//                             <Col className='m-0 p-0 col-xl-12 col-lg-12 col-md-12 col-sm-12' style={{ width: "100%", display: "flex", justifyContent: "flex-end", padding: "0px", gap: "10px" }}>
//                                 {/* ALL CART ITEMS ARE SHIPPED AS ONE ORDER */}
//                                 {/* {!user?.userTypes.includes("CUSTOMER") ? <Button className='btn btn-outline-success' size="sm" variant='' style={{ marginBottom: "10px", backgroundColor: backgroundColor, color: "white", border: "none" }} */}
//                                 {/* <Button className='btn btn-outline-success' size="sm" variant='' style={{ marginBottom: "10px", backgroundColor: backgroundColor, color: "white", border: "none" }}
//                                 onClick={() => {
//                                     navigate(`/order/create/${'orderComplete'}`)
//                                 }}>COMBINE SHIPMENT</Button>

//                             <Button className='btn btn-outline-info' size="sm" variant='' style={{ marginBottom: "10px", backgroundColor: backgroundColor, color: "white", border: "none" }}
//                                 onClick={() => {
//                                     navigate(`/order/create/${'orderByCollection'}`)
//                                 }}>SHIP COMPLETE</Button> */}

//                                 {/* TEST */}
//                                 {!user?.userTypes.includes("CUSTOMER") ?
//                                     <>
//                                         <Form.Check
//                                             // name="group1"
//                                             type={'checkbox'}
//                                             label={'COMBINE SHIPMENT'}
//                                             {...register("combineShip")}
//                                             // onClick={(e) => {
//                                             onChange={(e) => {
//                                                 console.log('e', e.target.checked);
//                                                 if (e.target.checked) {
//                                                     console.log('orderComplete');
//                                                     setShippingType('orderComplete')

//                                                     // Swal.fire({
//                                                     //     title:
//                                                     //         `
//                                                     //     <Container className="p-0" style="font-size: 27px">
//                                                     //         PLEASE CONFIRM THE CHANGES.
//                                                     //     </Container>
//                                                     //     `
//                                                     //     //             `
//                                                     //     //             <Container className="p-0" style="font-size: 27px">
//                                                     //     //     YOUR COMBINED ORDER WILL SHIP BY ${moment(moment.max(shipDates)._i).format('DD-MMM-YYYY').replaceAll("-", " ")}.
//                                                     //     // </Container>
//                                                     //     // `
//                                                     //     ,
//                                                     //     //             html: `
//                                                     //     // <div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
//                                                     //     //     <p>Want to change ship date and special instruction?</p>
//                                                     //     //     <p>
//                                                     //     //         <input id="swal-input1" type="date" class=""
//                                                     //     //         style="height: 40px; width: 300px; border: none; border-bottom: 1px solid black; " />
//                                                     //     //     </p>

//                                                     //     //     <p>
//                                                     //     //         <input id="newSpecialInstruction" type="text"  class="" placeholder="SPECIAL INSTRUCTION"
//                                                     //     //         style="width: 450px; border: none; border-bottom: 1px solid black"" />
//                                                     //     //     </p>

//                                                     //     // </div>
//                                                     //     // `,
//                                                     //     showDenyButton: true,
//                                                     //     // showCancelButton: true,
//                                                     //     confirmButtonText: `OK`,
//                                                     //     denyButtonText: `CANCEL`,
//                                                     //     // customClass: {
//                                                     //     //     confirmButton: 'confirm-button-class',
//                                                     //     // },
//                                                     // }).then((result) => {
//                                                     //     /* Read more about isConfirmed, isDenied below */

//                                                     //     if (result.isConfirmed) {
//                                                     //         // if (document.getElementById('swal-input1')?.value || document.getElementById('specialInstruction').value) {
//                                                     //         // setShippingDate(new Date(document.getElementById('swal-input1')?.value)?.toISOString())
//                                                     //         // setShippingInstruction(document.getElementById('newSpecialInstruction').value)

//                                                     //         // update all cart items with max date
//                                                     //         ApiService.setHeader()
//                                                     //         ApiService.patch(`shop/cart/bulkUpdate/${JSON.stringify(state?.map(e => e._id))}?protectModel=${getModelRoute(user).model}`, { newShipDate: moment.max(shipDates)._i }).then(response => {
//                                                     //             if (response?.data.isSuccess) {
//                                                     //                 getCartDetail()
//                                                     //                 setValue("combineShip", true)

//                                                     //             }
//                                                     //         }).catch(error => {
//                                                     //             console.log(error)
//                                                     //             // showMessage(error.response.data.message, "error")
//                                                     //         })
//                                                     //         // }

//                                                     //     } else if (result.isDenied) {
//                                                     //         // setShippingDate(moment.max(shipDates)._i)
//                                                     //         // setShippingInstruction(document.getElementById('newSpecialInstruction').value)
//                                                     //     }
//                                                     // })
//                                                 } else if (!e.target.checked) {
//                                                     // Swal.fire({
//                                                     //     title:
//                                                     //         `
//                                                     //     <Container className="p-0" style="font-size: 27px">
//                                                     //         THE CURRENT CHANGES WILL BE REVERSED.
//                                                     //     </Container>
//                                                     //     `
//                                                     //     //             `
//                                                     //     //             <Container className="p-0" style="font-size: 27px">
//                                                     //     //     YOUR COMBINED ORDER WILL SHIP BY ${moment(moment.max(shipDates)._i).format('DD-MMM-YYYY').replaceAll("-", " ")}.
//                                                     //     // </Container>
//                                                     //     // `
//                                                     //     ,
//                                                     //     //             html: `
//                                                     //     // <div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
//                                                     //     //     <p>Want to change ship date and special instruction?</p>
//                                                     //     //     <p>
//                                                     //     //         <input id="swal-input1" type="date" class=""
//                                                     //     //         style="height: 40px; width: 300px; border: none; border-bottom: 1px solid black; " />
//                                                     //     //     </p>

//                                                     //     //     <p>
//                                                     //     //         <input id="newSpecialInstruction" type="text"  class="" placeholder="SPECIAL INSTRUCTION"
//                                                     //     //         style="width: 450px; border: none; border-bottom: 1px solid black"" />
//                                                     //     //     </p>

//                                                     //     // </div>
//                                                     //     // `,
//                                                     //     showDenyButton: true,
//                                                     //     // showCancelButton: true,
//                                                     //     confirmButtonText: `OK`,
//                                                     //     denyButtonText: `CANCEL`,
//                                                     //     // customClass: {
//                                                     //     //     confirmButton: 'confirm-button-class',
//                                                     //     // },
//                                                     // }).then((result) => {
//                                                     //     /* Read more about isConfirmed, isDenied below */

//                                                     //     if (result.isConfirmed) {
//                                                     //         // if (document.getElementById('swal-input1')?.value || document.getElementById('specialInstruction').value) {
//                                                     //         // setShippingDate(new Date(document.getElementById('swal-input1')?.value)?.toISOString())
//                                                     //         // setShippingInstruction(document.getElementById('newSpecialInstruction').value)

//                                                     //         // update all cart items with max date
//                                                     //         ApiService.setHeader()
//                                                     //         ApiService.patch(`shop/cart/bulkUpdate/${JSON.stringify(state?.map(e => e._id))}?protectModel=${getModelRoute(user).model}`, { newShipDate: '' }).then(response => {
//                                                     //             if (response?.data.isSuccess) {
//                                                     //                 getCartDetail()
//                                                     //                 setValue("combineShip", true)
//                                                     //             }
//                                                     //         }).catch(error => {
//                                                     //             console.log(error)
//                                                     //             // showMessage(error.response.data.message, "error")
//                                                     //         })
//                                                     //         // }

//                                                     //     } else if (result.isDenied) {
//                                                     //         // setShippingDate(moment.max(shipDates)._i)
//                                                     //         // setShippingInstruction(document.getElementById('newSpecialInstruction').value)
//                                                     //     }
//                                                     // })
//                                                 }
//                                             }}
//                                         />
//                                         <Form.Check
//                                             // name="group1"
//                                             type={'checkbox'}
//                                             label={'SHIP COMPLETE'}
//                                             onClick={() => {
//                                                 console.log('orderByCollection');
//                                                 setShippingType('orderByCollection')
//                                             }}
//                                         />
//                                     </>
//                                     : ""}

//                                 <Button className='btn btn-outline-info' size="sm" variant='' style={{ marginBottom: "10px", backgroundColor: backgroundColor, color: "white", border: "none" }}
//                                     onClick={() => {
//                                         console.log(shippingType);
//                                         console.log(user?.userTypes[0]);
//                                         if (shippingType === "orderByCollection") {
//                                             navigate(`/order/create/${shippingType}`)
//                                         } else if (shippingType === "orderComplete") {
//                                             navigate(`/order/create/${shippingType}?shippingDate=${shippingDate}&shippingInstruction=${shippingInstruction}`)
//                                         } else if (user?.userTypes[0] == "CUSTOMER") {
//                                             navigate(`/order/create/${'orderByCollection'}`)
//                                         }
//                                     }}>CHECKOUT</Button>

//                                 {/* <Button className='btn btn-outline-info' size="sm" variant='' style={{ marginBottom: "10px", backgroundColor: backgroundColor, color: "white", border: "none" }}
//                                 onClick={() => { navigate("/order") }}
//                             >Checkout</Button>

//                             {!isEditCart ? <Button className='btn btn-outline-info' size="sm" variant='' style={{ marginBottom: "10px" }}
//                                 onClick={toggleEdit}
//                             > <CiEdit /></Button> :
//                                 <Button className='btn btn-outline-info' size="sm" variant='' style={{ marginBottom: "10px" }}
//                                     onClick={toggleEdit}
//                                 > <FaRegEye /></Button>
//                             } */}

//                             </Col>

//                             {/* <Col className='m-0 p-0 col-xl-12 col-lg-12 col-md-12 col-sm-12 scroll scroll4' style={{ width: "100%", maxHeight: "400px", overflowY: "auto" }}> */}
//                             <Col className='m-0 p-0 col-xl-12 col-lg-12 col-md-12 col-sm-12' style={{ width: "100%" }}>
//                                 {
//                                     carts?.length && carts?.map(cart => {
//                                         return <DisplayCartDetails key={cart?._id} isEditCart={isEditCart} cart={cart} updateCartData={updateCartData} updateCartItem={updateCartItem} deleteCartItem={deleteCartItem} total={total} deleteAllSelectedCartItem={deleteAllSelectedCartItem} getCartDetail={getCartDetail} />
//                                     })
//                                 }
//                             </Col>
//                         </Row>

//                         <Row className='mt-3'>
//                             <Container className="" style={{ marginRight: "-8px" }}>
//                                 <Row>
//                                     <Col sm="12" md="7">

//                                     </Col>
//                                     <Col sm="12" md="5">
//                                         <Card className='border-top border-start rounded' style={{ border: "none" }}>
//                                             <Card.Body>
//                                                 {/* <Row className='' style={{ textAlign: 'right', fontSize: '16px', fontWeight: 600 }}>
//                                             <Col sm="12" md="3">Sub Total:</Col>
//                                             <Col sm="12" md="9"></Col>
//                                         </Row> */}
//                                                 <Row style={{ textAlign: 'right', fontSize: '16px', fontWeight: 600, color: "red" }}>
//                                                     <Col sm="12" md="5">Total Discount:</Col>
//                                                     <Col sm="12" md="7" style={{ borderBottom: '1px solid black' }}>
//                                                         $ {totalDiscount ? totalDiscount?.toFixed(2) : 0.00}
//                                                     </Col>
//                                                 </Row>
//                                                 <Row style={{ textAlign: 'right', fontSize: '16px', fontWeight: 600 }}>
//                                                     <Col sm="12" md="5">Total:</Col>
//                                                     <Col sm="12" md="7" style={{ borderBottom: '1px solid black' }}>
//                                                         $ {
//                                                             state?.reduce(function getSum(total, cart) {
//                                                                 // return total + cart?.price;
//                                                                 return (parseFloat(total) + parseFloat(cart?.subTotal)).toFixed(2);
//                                                             }, 0)
//                                                         }
//                                                     </Col>
//                                                 </Row>

//                                             </Card.Body>
//                                         </Card>

//                                     </Col>
//                                 </Row>
//                             </Container>
//                         </Row>
//                     </Container >
//                     : <Loader content={`UPDATING...!!`} position={'start'} />
//                 :
//                 <Container>
//                     <div style={{ color: "GrayText", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                         <BiCart style={{ fontSize: 300 }} />
//                     </div>
//                     <div style={{ fontSize: 50, color: "GrayText", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                         YOUR CART IS EMPTY!
//                     </div>

//                 </Container>
//             }
//         </Container >
//     )
// }

// export default CartDetail

import React from "react";

const CartDetail = () => {
  return <div>CartDetail</div>;
};

export default CartDetail;
