import { React, useEffect, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AppFooter from "../components/shared/footers/AppFooter";
import AppHeader from "../components/shared/headers/AppHeader";
import ApiService from "../helpers/ApiServices";
import { CustomerService, TokenService } from "../helpers/StorageServices";
import About from "../pages/about/About";
import ChangePassword from "../pages/auth/ChangePassword";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ProductCategory from "../pages/product/ProductCategory";
import ProductCollection from "../pages/product/ProductCollection";
import ProductDetail from "../pages/product/ProductDetail";
import CustomerProfile from "../pages/profile/CustomerProfile";
import UserProfile from "../pages/profile/UserProfile";
import RegionAndCustomer from "../pages/regionAndCustomer/RegionAndCustomer";
import { UserContext } from "../states/contexts/UserContext";
import { useBeforeunload } from "react-beforeunload";
import { CustomerContext } from "../states/contexts/CustomerContext";
import { getModelRoute, logout, showMessage } from "../helpers/Utils";
import DesignerList from "../pages/designer/DesignerList";
import DesignerProfile from "../pages/designer/DesignerProfile";
import ResourcesList from "../pages/resources/ResourcesList";
import ResourceCategoryList from "../pages/resources/ResourceCategoryList";
import ResourceDetails from "../pages/resources/ResourceDetails";
import CartDetail from "../pages/cart/CartDetail";
import { CartContext } from "../states/contexts/CartContext";
import Order from "../pages/order/Order";
import RecentCustomers from "../pages/recentCustomers/RecentCustomers";
import MyOrders from "../pages/order/MyOrders";
import TopHeader from "../components/shared/headers/TopHeader";
import InnerHeader from "../components/shared/headers/InnerHeader";
import Help from "../pages/help/Help";
import { WishListContext } from "../states/contexts/wishListContext";
import WishList from "../pages/wishList/WishList";
import PatternList from "../pages/pattern/PatternList";
import PatternDetails from "../pages/pattern/PatternDetails";
import OrderDetails from "../pages/order/OrderDetails";
import Productfinder from "../pages/product/Productfinder";
import RapidOrder from "../pages/rapidOrder/RapidOrder";
import InvoiceDetails from "../pages/invoice/InvoiceDetais";
import SearchDetail from "../pages/search/SearchDetail";
import PrintProductFinder from "../pages/print/PrintProductFinder";
import Body from "../components/shared/headers/HomePageContent/Body";

export default function AppRoutes() {
  const [userId, setUserId] = useState();

  let customers = JSON.parse(localStorage.getItem("PCTeRP.CUSTOMER_IDS"));

  // All reducer
  const { dispatch: cartDispatch, quantity } = useContext(CartContext);
  const { dispatch, user } = useContext(UserContext);
  const { dispatch: customerDispatch, customer } = useContext(CustomerContext);
  const { dispatch: wishListDispatch, quantity: wishListQuantity } =
    useContext(WishListContext);

  // const navigate = useNavigate();
  // console.log(customers);
  // console.log(customer);

  //All methods Change in File

  const isLoggedIn = async () => {
    ApiService.setHeader();
    ApiService.get(`shop/user/loggedIn?model=${getModelRoute(user).model}`)
      .then(async (response) => {
        console.log(response?.data);
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data.document });
        setUserId(response.data.document._id);

        setModelAndRoute(response.data.document);

        if (
          !response?.data.document.savePassword &&
          window.performance.getEntriesByType("navigation")[0].type ==
            "navigate"
        ) {
          const response = await ApiService.get(`shop/user/logout`);
          if (response?.data.isSuccess) {
            console.log(response.data);

            dispatch({ type: "LOGOUT_SUCCESS" });
            customerDispatch({ type: "SELECT_CUSTOMER", payload: null });

            // TokenService.removeToken()
            TokenService.saveToken(response?.data.token);
            CustomerService.removeCustomer();
            localStorage.removeItem("PCTeRP.CUSTOMER_IDS");
            localStorage.removeItem("PCTeRP.TEST_CUSTOMER");

            showMessage("You've successfully logged out.", "success");
          }
        }

        if (
          response?.data.document.savePassword &&
          window.performance.getEntriesByType("navigation")[0].type ==
            "navigate"
        ) {
          // ApiService.setHeader()
          // ApiService.get(`shop/user/${customers[0]._id}`).then(response => {
          //     console.log(response.data);
          //     // Load the selected customer into reducer
          //     customerDispatch({ type: "SELECT_CUSTOMER", payload: response?.data.document });
          // }).then(error => {
          //     console.log(error.response.data)
          //     // console.log("Else Catch")
          //     showMessage(error.response.data.message, "error")
          // })

          console.log(
            (new Date().getTime() -
              response?.data.document.browserClosingTime) /
              60000
          );
          if (
            (new Date().getTime() -
              response?.data.document.browserClosingTime) /
              60000 >
            60
          ) {
            customerDispatch({
              type: "SELECT_CUSTOMER",
              payload: customers[0],
            });
          } else {
            customerDispatch({
              type: "SELECT_CUSTOMER",
              payload: customers[customers?.length - 1],
            });
          }
        }
      })
      .catch(async (error) => {
        // showMessage(error.response.data.message, "error")

        // const response = await ApiService.get(`shop/user/logout`)
        // if (response?.data.isSuccess) {
        //     console.log(response.data);

        //     dispatch({ type: "LOGOUT_SUCCESS" });
        //     customerDispatch({ type: "SELECT_CUSTOMER", payload: null })

        //     // TokenService.removeToken()
        //     TokenService.saveToken(response?.data.token)
        //     CustomerService.removeCustomer()
        //     localStorage.removeItem("PCTeRP.CUSTOMER_IDS")
        //     localStorage.removeItem("PCTeRP.TEST_CUSTOMER")

        //     showMessage("You've successfully logged out.", "success")
        // }
        try {
          await logout();
          dispatch({ type: "LOGOUT_SUCCESS" });
          customerDispatch({ type: "SELECT_CUSTOMER", payload: null });
        } catch (error) {
          dispatch({ type: "LOGIN_FAILURE" });
        }
      });
  };

  const getCustomer = async (customers) => {
    // console.log(customers);

    ApiService.setHeader();
    // await ApiService.get(`shop/user/${customers[customers?.length - 1]._id}`).then(response => {
    await ApiService.get(
      `shop/customer/${customers[customers?.length - 1]._id}?model=${
        getModelRoute(user).model
      }`
    )
      .then((response) => {
        // console.log(response.data);
        // Load the selected customer into reducer
        customerDispatch({
          type: "SELECT_CUSTOMER",
          payload: response?.data.document,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        // showMessage(error.response.data.message, "error")
      });
  };

  const getCartDetail = () => {
    ApiService.setHeader();
    // ApiService.get(`shop/cart/${customers[customers?.length - 1]?._id}`).then(response => {
    ApiService.get(
      `shop/cart/${
        customers?.length == 1
          ? customers[0]?._id
          : customers[customers?.length - 1]?._id
      }?model=${getModelRoute(user).model}`
    )
      .then((response) => {
        console.log(response.data);
        if (response?.data.isSuccess) {
          console.log(response?.data.documents);
          cartDispatch({
            type: "ADD_TO_CART_QUANTITY",
            payload: response?.data.documents?.length,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        // console.log("Else Catch")
        // showMessage(error.response.data.message, "error")
      });
  };

  const getWishListDetail = () => {
    ApiService.setHeader();
    ApiService.get(
      `shop/wishList/${customers[customers?.length - 1]?._id}?model=${
        getModelRoute(user).model
      }`
    )
      .then((response) => {
        // console.log(response.data);
        if (response?.data.isSuccess) {
          wishListDispatch({
            type: "ADD_TO_WISHLIST_QUANTITY",
            payload: response?.data?.documents?.length,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        // console.log("Else Catch")
        // showMessage(error.response.data.message, "error")
      });
  };

  // const getShippedProductCountrys = () => {
  //     ApiService.setHeader()
  //     ApiService.get(`shop/product/getCountries?model=${getModelRoute(user).model}`).then(response => {
  //         console.log(response.data.documents);
  //         dispatch({ type: "ADD_COUNTRIES", payload: response.data.documents });
  //     }).catch(error => {
  //         console.log(error.response.data)
  //         // console.log("Else Catch")
  //         showMessage(error.response.data.message, "error")
  //     })
  // }

  const setModelAndRoute = (user) => {
    if (user?.userTypes.includes("CUSTOMER")) {
      localStorage.setItem("PCTeRP.MODEL", "Customer");
      localStorage.setItem("PCTeRP.ROUTE", "Customer");
    } else {
      localStorage.setItem("PCTeRP.MODEL", "User");
      localStorage.setItem("PCTeRP.ROUTE", "user");
    }
  };

  useEffect(() => {
    isLoggedIn();
    if (customers != null) {
      getCartDetail();
      getWishListDetail();
    }
    // getShippedProductCountrys()

    if (customers?.length) getCustomer(customers);

    window.addEventListener("beforeunload", function (e) {
      // console.log(window.performance.getEntriesByType("navigation")[0].type);
      // console.log(user);
      if (
        window.performance.getEntriesByType("navigation")[0].type == "navigate"
      ) {
        ApiService.setHeader();
        ApiService.patch(
          `shop/user/${userId}?model=${getModelRoute(user).model}`,
          { browserClosingTime: new Date().getTime() }
        )
          .then((response) => {})
          .catch((err) => {
            console.log(err.response.data);
            // console.log("Else Catch")
            showMessage(err.response.data.message, "error");
          });
      }
    });
  }, []);

  return (
    <BrowserRouter basename="/website">
      {/* // <BrowserRouter> */}
      {/* <TopHeader />
            <InnerHeader /> */}
      <AppHeader />
      <Routes>
        {/* <Route path="/*" element={<Home />} /> */}
        {/* <Route path="/*" element={<Body />} /> */}
        {/* <Route path="/*" element={<ProductCollection />} /> */}
        <Route path="/*" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route
          path="/region-customer"
          element={user || customer ? <RegionAndCustomer /> : <Body />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {/* <Route path="/profile" element={<UserProfile />} /> */}
        <Route
          path="/recent-customer-page"
          element={user || customer ? <RecentCustomers /> : <Body />}
        />
        <Route
          path="/profile"
          element={user || customer ? <CustomerProfile /> : <Body />}
        />
        <Route
          path="/customer-profile"
          element={user || customer ? <CustomerProfile /> : <Body />}
        />
        <Route path="/designers-list" element={<DesignerList />} />
        <Route path="/designer-profile/:id" element={<DesignerProfile />} />
        <Route
          path="/resource-category-list"
          element={<ResourceCategoryList />}
        />
        <Route path="/resources-list/:id" element={<ResourcesList />} />
        <Route path="/resource-details/:id" element={<ResourceDetails />} />
        <Route path="/product-category" element={<ProductCategory />} />
        <Route path="/product-collection/:id" element={<ProductCollection />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/product-finder/:id" element={<Productfinder />} />
        <Route path="/print/:id" element={<PrintProductFinder />} />
        <Route
          path="/rapid-order"
          element={user || customer ? <RapidOrder /> : <Body />}
        />
        <Route
          path="/cart-detail"
          element={user || customer ? <CartDetail /> : <Body />}
        />
        <Route path="/search-detail/:searchItem" element={<SearchDetail />} />
        <Route
          path="/wishlist-detail"
          element={user || customer ? <WishList /> : <Body />}
        />
        <Route path="/order/create/:shipType" element={<Order />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/invoice/:id" element={<InvoiceDetails />} />
        <Route path="/patern-list" element={<PatternList />} />
        <Route path="/patern-detail/:id" element={<PatternDetails />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/update-password" element={<ChangePassword />} />
        <Route path="/update-password/:id" element={<ChangePassword />} />
      </Routes>
      <AppFooter />
    </BrowserRouter>
  );
}
