import { useState, useContext } from "react"
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { FiHeart, FiMenu } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

import { themContext } from "~/Default"
import { Wrapper as PopperWrapper } from "../Poper";
import NavBar from "../NavBar";

import classNames from "classnames/bind"
import styles from "./Header.module.scss";
import ShowHeart from "../SideHeart";
const cx = classNames.bind(styles);


function Header() {
    const cartItems = useSelector((state) => state.cart);
    const productIteam = useContext(themContext)

    function handleFilter(props, props1, props2) {
        const updateCart = productIteam.cards.filter((x) => x.title.includes(props))
        const updateCart1 = productIteam.cards.filter((x) => x.title.includes(props1))
        const updateCart2 = productIteam.cards.filter((x) => x.title.includes(props2))

        return productIteam.setFilter(updateCart.concat(updateCart1, updateCart2))
    }

    // const [heart , setHeart ] = useState(false)
    const [nav, setNav] = useState(false);

    function handleNavBar() {
        setNav(!nav)
    }

    // function handleShowHeart(){
    //     setHeart(!heart)
    // }

    return <div>

        <NavBar nav={nav} setNav={setNav} />

        <ShowHeart heart={productIteam.heart}  setHeart={productIteam.setHeart} />
        <header className={cx("wrapper")}>

            <div className={cx("container")} >
                <div className={cx("layout-header", "row")}>
                    <div className={cx("header-logo", "col-xl-2 col-md-6 col-sm-6 col-6")}>
                        <div className={cx("header-logo")}>
                            <Link to="/" >
                                <img src="/eternity/logo.webp" alt="logo" />
                            </Link>
                        </div>
                    </div>

                    <div className={cx("header-page", "col-xl-8 col-md-8 col-sm-12 col-12 ")}>
                        <div className={cx("header-pageshow")}>
                            <ul>
                                <li>
                                    <NavLink to="/" className={(nav) =>cx("next-page" , {active: nav.isActive})}>Eternity </NavLink>
                                </li>
                                <div>
                                    <Tippy
                                        // visible = {true}
                                        interactive
                                        delay={500}
                                        placement="bottom"
                                        render={attrs => (
                                            <div className={cx("contact")}
                                                tabIndex="-1"
                                                {...attrs}
                                            >
                                                <PopperWrapper>
                                                    <div className={cx("page-nav-contact")}>
                                                        <ul>
                                                            <li onClick={(e) => {
                                                                productIteam.setFilter(productIteam.cards)
                                                            }

                                                            }>
                                                                <Link to="/shops">All</Link>
                                                            </li>
                                                            <li onClick={(e) => {
                                                                e.preventDefault()
                                                                return handleFilter("TEE")
                                                            }}>
                                                                <Link to="/shops"> TSHIRT</Link>
                                                            </li>

                                                            <li onClick={(e) => {
                                                                e.preventDefault()
                                                                return handleFilter("HOODIE", "VARSI", "JACKET")
                                                            }}>
                                                                <Link to="/shops"
                                                                >HOODIE - VARSITY - JACKET
                                                                </Link>
                                                            </li>

                                                            <li onClick={(e) => {
                                                                e.preventDefault()
                                                                return handleFilter("TEE", "SHIRT")
                                                            }}>
                                                                <Link to="/shops"
                                                                // onClick={handleFilter("TEE SHIRT")}
                                                                >Shirt</Link>
                                                            </li>

                                                            <li onClick={(e) => {
                                                                e.preventDefault()
                                                                return handleFilter("Short")
                                                            }}>
                                                                <Link to="/shops"> Short Eternity</Link>
                                                            </li>

                                                            <li
                                                                onClick={(e) => {
                                                                    e.preventDefault()
                                                                    return handleFilter("CAP", "Balo")
                                                                }}
                                                            ><Link to="/shops" >ACCESSORIES</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >

                                        <li>
                                            <NavLink to="/shops" className={(nav) =>cx("next-page" , {active: nav.isActive})}>Shop</NavLink>
                                        </li>
                                    </Tippy>
                                </div>

                                <li>
                                    <NavLink to="/sizeChat" className={(nav) =>cx("next-page" , {active: nav.isActive})}>Size Chart</NavLink>
                                </li>
                                <div>
                                    <Tippy
                                        interactive
                                        placement="bottom"
                                        delay={500}
                                        render={attrs => (
                                            <div className={cx("contact")}
                                                tabIndex="-1"
                                                {...attrs}
                                            >
                                                <PopperWrapper>
                                                    <div className={cx("page-nav-contact")}>
                                                        <ul>
                                                            <li><Link to="/payment" >Phương Thức Thanh Toán</Link></li>
                                                            <li><Link to="/shops" > Sản phẩm</Link></li>
                                                            <li><Link to="/sizeChat">Bảng size chi tiết</Link></li>
                                                        </ul>
                                                    </div>
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >
                                        <li>
                                            <NavLink to="/abouts" className={(nav) =>cx("next-page" , {active: nav.isActive})}>About Us</NavLink>
                                        </li>
                                    </Tippy>
                                </div>
                                <li>
                                    <NavLink to="/service" className={(nav) =>cx("next-page" , {active: nav.isActive})}>Điều Khoản Và Dịch Vụ</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div >


                    <div className={cx("header-logo-tool", "col-xl-2 col-md-6 col-sm-6 col-6 ")}>

                        <div className={cx("tool-bar")}>

                            <div className={cx("tool-icon")}>
                                <BsSearch className={cx("header-icon")} />
                            </div>

                            <div className={cx("tool-icon" , "icon-shoping")}>
                                <Link to="/cart" >
                                    <span className={cx("total-iteam")}>{cartItems.length}</span>
                                    <AiOutlineShopping className={cx("header-icon" )} />
                                </Link>
                            </div>
                            <div className={cx("tool-icon")}
                                onClick={productIteam.handleShowHeart}
                            >
                                <FiHeart className={cx("header-icon")} />
                            </div>
                            <div className={cx("tool-icon")}>
                                <BiUser className={cx("header-icon")} />
                            </div>
                        </div>

                        <div className={cx("clear-icon")}>
                            <div className={cx("tool-icon")}
                                onClick={handleNavBar}
                            >
                                <FiMenu className={cx("header-icon")} />
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </header >
    </div >
}

export default Header