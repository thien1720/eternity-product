import { Link } from "react-router-dom";
import Banner from "~/components/Banner";
import Poinlice from "~/components/Poinlice";
import GroupIteam from "~/components/GroupIteam";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination ,Autoplay } from "swiper";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);


function Home() {
    return <div className={cx("home")}>
        <Banner />

        <Poinlice />

        <div className={cx("banner-main")}>
            <div className={cx("banner-main-iteam")}>
                <Link to="/shops" >
                    <img src="/eternity/banner-main.webp" />
                </Link>
            </div>

            <div className={cx("banner-main-iteam")}>
                <Link to="/shops" >
                    <img src="/eternity/banner-main2.webp" />
                </Link>
            </div>

            <div className={cx("banner-main-iteam")}>
                <Link to="/shops" >
                    <img src="/eternity/banner-main-3.webp" />
                </Link>
            </div>
        </div>

        <GroupIteam />

        <section className={cx("group-colection")}>
            <div className={cx("background-colection")}></div>
            <div className={cx("iteam-colections")}>
                <div className="container">
                    <div className={cx("colection-header")}>
                        <p>Các danh sách phố biến hàng đầu</p>
                        <h2>Sản Phẩm Bán Chạy</h2>
                    </div>

                    <div className={cx("colection-show")}>
                        <div className={cx("colection-iteam")}>
                            <Link to="/shops">
                                <img src="/eternity/colection.webp" alt="colection" />
                                <span>Eternity</span>
                            </Link>
                        </div>

                        <div className={cx("colection-iteam")}>
                            <Link to="/shops">
                                <img src="/eternity/colection-1.webp" alt="colection" />
                                <span>Or</span>

                            </Link>
                        </div>

                        <div className={cx("colection-iteam")}>
                            <Link to="/shops">
                                <img src="/eternity/colection-2.webp" alt="colection" />
                                <span>NoThing</span>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={5}
                    modules={[Navigation, Pagination ,Autoplay]}
                    autoplay={{
                        delay: 3000,
                    }}

                    breakpoints={
                        {
                            300: {
                                slidesPerView: 3,
                                spaceBetween:30,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween:30,
                            },
                            
                        }
                    }
                    className={cx("my-swiper")}
                >
                    <div className={cx("vendor-slide")}>
                        <SwiperSlide className={cx("iteam-img")} >
                            <Link to="/" >
                                <img src="/eternity/vendor-iteam.webp" atl="paner" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={cx("iteam-img")} >
                            <Link to="/" >
                                <img src="/eternity/vendor-iteam.webp" atl="paner" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={cx("iteam-img")} >
                            <Link to="/" >
                                <img src="/eternity/vendor-iteam.webp" atl="paner" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={cx("iteam-img")} >
                            <Link to="/" >
                                <img src="/eternity/vendor-iteam.webp" atl="paner" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={cx("iteam-img")} >
                            <Link to="/" >
                                <img src="/eternity/vendor-iteam.webp" atl="paner" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={cx("iteam-img")} >
                            <Link to="/" >
                                <img src="/eternity/vendor-iteam.webp" atl="paner" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={cx("iteam-img")} >
                            <Link to="/" >
                                <img src="/eternity/vendor-iteam.webp" atl="paner" />
                            </Link>
                        </SwiperSlide>

                    </div>
                </Swiper>
            </div>
        </section>

        <section className={cx("reciver-new")}>
            <div className="container">
                <div className={cx("new-reciver")}>
                    <div className={cx("form-reciver")}>
                        <h3>Đăng ký nhận tin</h3>
                        <form className={cx("type-form-reciver")}>
                            <input 
                                name="email"
                                type="email"
                                className={cx("reciver-email")}
                                placeholder="Nhập địa chỉ email của bạn..."

                            />

                            <button className={cx("sub-reciver")}>
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>

}

export default Home;