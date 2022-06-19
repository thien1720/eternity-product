import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation , Pagination ,Autoplay} from "swiper";

import classNames from "classnames/bind";
import styles from "./Poinlice.module.scss";
const cx = classNames.bind(styles);

function Poinlice() {

    return <div className="container">

        <Swiper
            slidesPerView={4}
            modules={[Navigation, Pagination,Autoplay]} 
            autoplay={{
                delay: 6000,
            }}
            breakpoints={
                {
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,  
                    },
                    1000: {
                        slidesPerView: 4,

                    },
                }
            }
            className={cx("mySwiper")}
        >
            <div className={cx("poinlice-iteam")}>

                <SwiperSlide className={cx("iteam-img")} >
                    
                        <Link to="/" >
                            <img src="/eternity/panner.webp" atl="paner" />

                        </Link>

                        <div className={cx("name-local")}>
                            <p className={cx("local")}>Enternity</p>
                            <p className={cx("local-nav")}>Or Nothing</p>

                        </div>
                    
                </SwiperSlide>

                <SwiperSlide className={cx("iteam-img")} >
                    
                        <Link to="/" >
                            <img src="/eternity/panner.webp" atl="paner" />

                        </Link>

                        <div className={cx("name-local")}>
                            <p className={cx("local")}>Enternity</p>
                            <p className={cx("local-nav")}>Or Nothing</p>

                        </div>
                    
                </SwiperSlide>

                <SwiperSlide className={cx("iteam-img")} >
                    
                        <Link to="/" >
                            <img src="/eternity/panner.webp" atl="paner" />

                        </Link>

                        <div className={cx("name-local")}>
                            <p className={cx("local")}>Enternity</p>
                            <p className={cx("local-nav")}>Or Nothing</p>

                        </div>
                    
                </SwiperSlide>

                <SwiperSlide className={cx("iteam-img")} >
                    
                        <Link to="/" >
                            <img src="/eternity/panner.webp" atl="paner" />

                        </Link>

                        <div className={cx("name-local")}>
                            <p className={cx("local")}>Enternity</p>
                            <p className={cx("local-nav")}>Or Nothing</p>

                        </div>
                    
                </SwiperSlide>

                <SwiperSlide className={cx("iteam-img")} >
                    
                        <Link to="/" >
                            <img src="/eternity/panner.webp" atl="paner" />

                        </Link>

                        <div className={cx("name-local")}>
                            <p className={cx("local")}>Enternity</p>
                            <p className={cx("local-nav")}>Or Nothing</p>

                        </div>
                    
                </SwiperSlide>

                <SwiperSlide className={cx("iteam-img")} >
                    
                        <Link to="/" >
                            <img src="/eternity/panner.webp" atl="paner" />

                        </Link>

                        <div className={cx("name-local")}>
                            <p className={cx("local")}>Enternity</p>
                            <p className={cx("local-nav")}>Or Nothing</p>

                        </div>
                    
                </SwiperSlide>
            </div>

        </Swiper>
    </div >
}
export default Poinlice