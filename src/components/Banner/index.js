import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

import "./banner.css"
import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
const cx = classNames.bind(styles);


function Banner() {

    return <div>
        <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
                delay: 5000,
            }}
            className="mySwiper"
        >

            <SwiperSlide>
                <div className={cx("iteam-img")}>
                    <Link to="/shop" >
                        <img src="/eternity/banner.webp" atl="Baner" />

                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={cx("iteam-img")}>
                    <Link to="/shop" >

                        <img src="/eternity/banner-1.webp" atl="Baner" />
                    </Link>
                </div>
            </SwiperSlide>



            <SwiperSlide>
                <div className={cx("iteam-img")}>
                    <Link to="/shop" >

                        <img src="/eternity/banner-4.webp" atl="Baner" />
                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={cx("iteam-img")}>
                    <Link to="/shop" >

                        <img src="/eternity/banner-2.webp" atl="Baner" />
                    </Link>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
}
export default Banner