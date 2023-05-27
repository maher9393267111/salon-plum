import React, { useState } from "react";
import Link from "next/link";
import HeaderTopbar from "../HeaderTopbar/HeaderTopbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useRouter } from "next/router";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const router = useRouter();
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove specific item
    localStorage.clear(); // Clear all items

    // Perform any additional logout actions
    // e.g., redirect to the login page
    router.push("/login");
  };

  return (
    <header id="header" className={props.topbarNone}>
      <HeaderTopbar />
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    href="/home"
                    className="navbar-brand "
                  >
                    <img
                      className=" !h-[80px] !w-[80px] relative top-[5px] !rounded-[50%] "
                      src="/images/my/log-dark.jpg"
                      // '/images/logo.png'
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collaps navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/home2">
                        Home
                      </Link>
                      {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/home">Home style 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home2">Home style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home3">Home style 3</Link></li>
                                            </ul> */}
                    </li>
                    {/* <li><Link onClick={ClickHandler} href="/about">About</Link></li> */}
                    {/* <li className="menu-item-has-children">
                                            <Link href="/service">Services</Link> */}
                    {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/service">Service</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-s2">Service style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service/Water-Line-Repair">Service Single</Link></li>
                                            </ul> */}
                    {/* </li> */}

                    {/* <li className="menu-item-has-children">
                                            <Link href="/shop">Shop</Link> */}
                    {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/shop">Shop Page</Link></li>
                                                <li><Link onClick={ClickHandler} href="/product-single/Mixing-Valves">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                            </ul> */}
                    {/* </li> */}
                    {/* <li className="menu-item-has-children">
                                            <Link href="/project">Pages</Link> */}

                    {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/project">Project</Link></li>
                                                <li><Link onClick={ClickHandler} href="/project/Basement-Plumbing">Project Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team">Team</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team-single/Mattie-Washington">Team Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/appointment">Appointment</Link></li>
                                                <li><Link onClick={ClickHandler} href="/terms">Terms & Conditions</Link></li>
                                                <li><Link onClick={ClickHandler} href="/testimonial">Testimonial</Link></li>
                                                <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} href="/404">Error 404</Link></li>
                                                <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                                                <li><Link onClick={ClickHandler} href="/register">Register</Link></li>
                                            </ul> */}
                    {/* </li> */}

                    <li>
                      <Link onClick={ClickHandler} href="/contact">
                        Contact
                      </Link>
                    </li>


                    <li className="menu-item-has-children ml-4 hidden  sm:flex  md:hidden xl:flex items-center">
                      <div>
                        <Link
                          onClick={ClickHandler}
                          href={user ? `/profile` : `/login`}
                        >
                          <img
                            className="w-[34px] h-[34px]"
                            src={
                              user
                                ? "https://cdn-icons-png.flaticon.com/128/747/747376.png"
                                : "https://cdn-icons-png.flaticon.com/128/1000/1000997.png"
                            }
                            alt=""
                          />
                        </Link>
                      </div>

                      {user ? (
                        <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} href="/profile">
                              Profile
                            </Link>
                          </li>

                          <li className="  font-semibold ml-4 cursor-pointer" onClick={handleLogout}>
                            Logout
                            {/* <Link onClick={ClickHandler} href="/">Logout</Link
                                                > */}
                          </li>
                        </ul>
                      ) : (
                        <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} href="/login">
                              login
                            </Link>
                          </li>

                          <li>
                            <Link onClick={ClickHandler} href="/register">
                              register
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>




                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-bt w-12 h-12"
                      >
                        {/* <i
                                                className={`ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i>
                                                 */}

                        <img
                          className=""
                          src={
                            user
                              ? "https://cdn-icons-png.flaticon.com/128/747/747376.png"
                              : "https://cdn-icons-png.flaticon.com/128/1000/1000997.png"
                          }
                          alt=""
                        />
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? "header-search-content-toggle" : ""
                        }`}
                      >
                        {user ? (
                          <div>
                            <ul className=" cursor-pointer">
                              <li className="font-semibold my-2  text-xl   hover:text-blue-700">
                                {user?.email}
                              </li>
                              <li>
                                <Link
                                  className="font-semibold my-2   text-xl  hover:text-blue-700"
                                  href={`/profile/${user?.email}`}
                                >
                                  Profile
                                </Link>
                              </li>

                              <li
                                className="font-semibold my-2  text-xl   hover:text-blue-700"
                                onClick={handleLogout}
                              >
                                Logout
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <div>
                            <ul className=" cursor-pointer">
                              <li className="font-semibold my-2 text-xl  hover:text-blue-700">
                                <Link href={`/login`}>Login</Link>
                              </li>

                              <li className="font-semibold my-2 text-xl  hover:text-blue-700">
                                <Link href={`/register`}>Register</Link>
                              </li>
                            </ul>
                          </div>
                        )}

                        {/* <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form> */}
                      </div>
                    </div>
                  </div>

                  <div className="close-form">
                    {/* <Link onClick={ClickHandler} href="/contact" className="theme-btn">GET FREE QUOTE</Link> */}

                    
                  


                    
                  
               
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
