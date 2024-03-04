import { React, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import NorthcottKids from "../../../assets/images/products/northcott-kids.jpg";
import Stonehenge from "../../../assets/images/products/stonehenge.jpg";
import CurrentCollections from "../../../assets/images/products/current-collections.jpg";
import ComingSoon from "../../../assets/images/products/coming-soon.jpg";
import { CustomerContext } from "../../../states/contexts/CustomerContext";
import { UserContext } from "../../../states/contexts/UserContext";
// import { ButtonGroup, Dropdown, DropdownButton, Nav, NavDropdown, Navbar, ListGroup } from 'react-bootstrap'

export default function DesktopNavigation() {
  const { dispatch, user } = useContext(UserContext);
  const { dispatch: customerDispatch, customer } = useContext(CustomerContext);

  const [searchParams, setSearchParams] = useSearchParams();

  let customers = JSON.parse(localStorage.getItem("PCTeRP.CUSTOMER_IDS"));
  let recentCustomers = customers?.length && customers?.slice(-5);
  console.log(user?.userTypes);

  return (
    <nav className="desktop-navigation-menu" style={{ fontSize: "12px" }}>
      <div className="app-container">
        <ul className="desktop-menu-category-list">
          <li className="menu-category">
            <Link
              to={`/?division=${
                searchParams.get("division")?.toUpperCase()
                  ? searchParams.get("division")?.toUpperCase()
                  : "NORTHCOTT"
              }`}
              className="menu-title"
              style={{ fontSize: "13px" }}
            >
              Home
            </Link>
          </li>

          <li className="menu-category">
            <Link
              to={`/product-category?division=${
                searchParams.get("division")?.toUpperCase()
                  ? searchParams.get("division")?.toUpperCase()
                  : "NORTHCOTT"
              }`}
              className="menu-title"
              style={{ fontSize: "13px" }}
            >
              Products
            </Link>

            {/* <div className="dropdown-panel">

                            <ul className="dropdown-panel-list">

                                <li className="menu-title">
                                    <a href="#">Northcott's Products</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Current Collections</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Colorworks</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Wide Backing</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Northcott Kids</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Quilts of Valor</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">
                                        <img src={NorthcottKids} alt="headphone collection" width="250"
                                            height="119" />
                                    </a>
                                </li>

                            </ul>

                            <ul className="dropdown-panel-list">

                                <li className="menu-title">
                                    <a href="#">Banyan Batik's Products</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Current Collections</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Essentials</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Rayons</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Precuts</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Banyan Archives</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">
                                        <img src={Stonehenge} alt="men's fashion" width="250" height="119" />
                                    </a>
                                </li>

                            </ul>

                            <ul className="dropdown-panel-list">

                                <li className="menu-title">
                                    <a href="#">Patrick Lose's Products</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Current Collections</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Blenders</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Celebrations</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Kids Collections</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Holidays</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">
                                        <img src={CurrentCollections} alt="women's fashion" width="250" height="119" />
                                    </a>
                                </li>

                            </ul>

                            <ul className="dropdown-panel-list">

                                <li className="menu-title">
                                    <a href="#">Figo's Products</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Current Collections</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Basic Collections</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Wide Backing</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Figo Achives</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">Daybreak</a>
                                </li>

                                <li className="panel-list-item">
                                    <a href="#">
                                        <img src={ComingSoon} alt="mouse collection" width="250" height="119" />
                                    </a>
                                </li>

                            </ul>

                        </div> */}
          </li>

          <li className="menu-category">
            <Link to="/" className="menu-title" style={{ fontSize: "13px" }}>
              Look Books
            </Link>

            {/* <ul className="dropdown-list">

                            <li className="dropdown-item">
                                <a href="#">Shirt</a>
                            </li>

                            <li className="dropdown-item">
                                <a href="#">Shorts & Jeans</a>
                            </li>

                            <li className="dropdown-item">
                                <a href="#">Safety Shoes</a>
                            </li>

                            <li className="dropdown-item">
                                <a href="#">Wallet</a>
                            </li>

                        </ul> */}
          </li>

          <li className="menu-category">
            <Link
              to="/patern-list"
              className="menu-title"
              style={{ fontSize: "13px" }}
            >
              Patterns
            </Link>

            {/* <ul className="dropdown-list">

                            <li className="dropdown-item">
                                <a href="#">Dress & Frock</a>
                            </li>

                            <li className="dropdown-item">
                                <a href="#">Earrings</a>
                            </li>

                            <li className="dropdown-item">
                                <a href="#">Necklace</a>
                            </li>

                            <li className="dropdown-item">
                                <a href="#">Makeup Kit</a>
                            </li>

                        </ul> */}
          </li>

          <li className="menu-category">
            <Link
              to={`/designers-list?division=${
                searchParams.get("division")?.toUpperCase()
                  ? searchParams.get("division")?.toUpperCase()
                  : "NORTHCOTT"
              }`}
              className="menu-title"
              style={{ fontSize: "13px" }}
            >
              Designers
            </Link>

            {/* <ul className="dropdown-list">

                            <li className="dropdown-item">
                                <a href="#">Earrings</a>
                            </li>

                            <li className="dropdown-item">
                                <a href="#">Couple Rings</a>
                            </li>

                            <li className="dropdown-item">
                                <a href="#">Necklace</a>
                            </li>

                            <li className="dropdown-item">
                                <a href="#">Bracelets</a>
                            </li>

                        </ul> */}
          </li>

          <li className="menu-category">
            <Link
              to="/resource-category-list"
              className="menu-title"
              style={{ fontSize: "13px" }}
            >
              Resources
            </Link>
          </li>

          {(user?.userTypes?.includes("CUSTOMER") || customer) && (
            <li className="menu-category">
              <a href="#" className="menu-title" style={{ fontSize: "13px" }}>
                Customer
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link to="/customer-profile" style={{ fontSize: "13px" }}>
                    Account Informations
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/my-orders" style={{ fontSize: "13px" }}>
                    Order History
                  </Link>
                </li>
              </ul>
            </li>
          )}

          {/* {(user?.userTypes?.includes("CUSTOMER") || (customer && !customer?.isTestAccount)) ? <li className="menu-category">
                        <Link to="/rapid-order" className="menu-title" style={{ fontSize: "13px" }}>RAPID ORDER</Link>
                    </li> : ""} */}
          {user &&
          (!user?.userTypes?.includes("CUSTOMER") ||
            !user?.userTypes?.includes("SALES_REP")) ? (
            <li className="menu-category">
              <Link
                to="/rapid-order"
                className="menu-title"
                style={{ fontSize: "13px" }}
              >
                RAPID ORDER
              </Link>
            </li>
          ) : (
            ""
          )}

          {user?.userTypes?.includes("CUSTOMER") ||
          (customer && !customer?.isTestAccount) ? (
            <li className="menu-category">
              <a href="#" className="menu-title" style={{ fontSize: "13px" }}>
                Recent Customers
              </a>
              <ul className="recent-customer-dropdown-list">
                {recentCustomers?.length
                  ? recentCustomers?.map((recentCustomer) => {
                      if (recentCustomer?.city != undefined) {
                        return (
                          <div key={recentCustomer?._id}>
                            <li className="dropdown-item">
                              <Link
                                to="#"
                                style={{ fontSize: "13px" }}
                              >{`${recentCustomer?.companyName} - ${recentCustomer?.customerId} - ${recentCustomer?.city} - ${recentCustomer?.state}`}</Link>
                            </li>
                          </div>
                        );
                      }
                    })
                  : ""}
                <hr />
                <li className="dropdown-item">
                  <Link to="/recent-customer-page" style={{ fontSize: "13px" }}>
                    All Recent Customers
                  </Link>
                </li>
              </ul>
            </li>
          ) : (
            ""
          )}

          <li className="menu-category">
            <Link
              to="/about"
              className="menu-title"
              style={{ fontSize: "13px" }}
            >
              About Us
            </Link>
          </li>

          <li className="menu-category">
            <Link
              to="/help"
              className="menu-title"
              style={{ fontSize: "13px" }}
            >
              Help
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    // <nav className="navbar" style={{ fontSize: "12px" }}>
    //     {/* desktop-navigation-menu */}
    //     <div className="app-container text-xl-middle" >
    //         <Navbar expand="md xl xxl" >
    //             <div >
    //                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //                 <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'center' }}>
    //                     <Nav className='justify-content-center'>
    //                         <Nav.Link href="#login" className='navItem d-xxl-none d-xl-none d-md-none d-block'>LOGIN</Nav.Link>
    //                         <Nav.Link href="#home" className='navItem'>HOME</Nav.Link>
    //                         <NavDropdown title="ABOUT" id="basic-nav-dropdown" className='navItem'>
    //                             <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.2">
    //                                 Wholesale Contacts
    //                             </NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.3">Charities We Support</NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.3">Calendar</NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
    //                         </NavDropdown>
    //                         <NavDropdown title="SHOP" id="basic-nav-dropdown" className='navItem'>
    //                             <ListGroup className='list-group flex-column flex-sm-row'>
    //                                 <ListGroup.Item className='border-0'><p className='fw-bold'>Categories</p>
    //                                     <NavDropdown.Item href="#action/3.1">Holiday 2023 Release Collections</NavDropdown.Item>
    //                                     <NavDropdown.Item href="#action/3.2">
    //                                         September 2023 Release Collections
    //                                     </NavDropdown.Item>
    //                                     <NavDropdown.Item href="#action/3.3">September 2023 Collection Precuts</NavDropdown.Item>
    //                                 </ListGroup.Item>
    //                                 <ListGroup.Item className='border-0'><p></p>
    //                                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //                                     <NavDropdown.Item href="#action/3.2">
    //                                         Another action
    //                                     </NavDropdown.Item>
    //                                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item></ListGroup.Item>
    //                                 <ListGroup.Item className='border-0'><p className='fw-bold'>Categories</p>
    //                                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //                                     <NavDropdown.Item href="#action/3.2">
    //                                         Another action
    //                                     </NavDropdown.Item>
    //                                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //                                 </ListGroup.Item>
    //                             </ListGroup>

    //                         </NavDropdown>
    //                         <Nav.Link href="#link" className='navItem'>LOOKBOOK</Nav.Link>
    //                         <Nav.Link href="#link" className='navItem'>PATTERNS</Nav.Link>
    //                         <Nav.Link href="#link" className='navItem'>DESIGNERS</Nav.Link>
    //                         <NavDropdown title="RESOURCES" id="basic-nav-dropdown" className='navItem'>
    //                             <NavDropdown.Item href="#action/3.1">Free Patterns</NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.2">
    //                                 Get Inspired!
    //                             </NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.3">Videos</NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.4">
    //                                 Quilting Tips
    //                             </NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.3">Advertisements</NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.3">Editorial Features</NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.3">News</NavDropdown.Item>
    //                         </NavDropdown>
    //                         <NavDropdown title="CUSTOMER" id="basic-nav-dropdown" className='navItem'>
    //                             <NavDropdown.Item href="#action/3.1">Personal Info</NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.2">
    //                                 Order History
    //                             </NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.3">Invoice History</NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.4">
    //                                 Statement
    //                             </NavDropdown.Item>
    //                             <NavDropdown.Item href="#action/3.3">Dashboard</NavDropdown.Item>
    //                         </NavDropdown>
    //                         <Nav.Link href="#link" className='navItem' >RAPID ORDER</Nav.Link>
    //                     </Nav>
    //                 </Navbar.Collapse>
    //             </div>
    //         </Navbar>

    //     </div>

    // </nav>
  );
}
