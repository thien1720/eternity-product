import { Link } from "react-router-dom";
import CardIteam from '~/components/CardIteam'
import classNames from "classnames/bind";
import styles from "./GroupIteam.module.scss";
const cx = classNames.bind(styles);

function GroupIteam() {

    return <section className={cx("group-one")}>
        <div className="container">
            <div className={cx("group-header")}>
                <p>Eternity Or Nothing</p>
                <h2>Mua Sắm</h2>
            </div>

            <div className={cx("group-main")}>

                <div className="col-md-6 col-12">
                    <div className={cx("group-iteam")}>
                        <div className={cx("group-iteam-double")}>
                            <div className={cx("group-iteam-db-nav")}>
                                <CardIteam
                                    image="eternity/group-double.webp"
                                    title={`SHADOW TEE`}
                                    coin="2500000đ"
                                    // y="5800000đ"

                                />
                            </div>

                            <div className={cx("group-iteam-db-nav")}>
                                <CardIteam
                                    image="eternity/group-double-3.webp"
                                    title={`Hoodie Basic Eternity`}
                                    coin="3800000đ"
                                    y="4800000đ"

                                />
                            </div>
                        </div>

                        <div className={cx("group-iteam-standing")}>
                            <CardIteam
                                image="eternity/group-standing-2.webp"
                                title={`"DUST" VARSITY`}
                                coin="3800000đ"
                                y="5800000đ"

                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className={cx("group-iteam")}>
                        <div className={cx("group-iteam-standing")}>
                            <CardIteam
                                image="eternity/group-standing.webp"
                                title={`| BILLIARD VARSITY |`}
                                coin="3800000đ"
                                y="5800000đ"

                            />
                        </div>

                        <div className={cx("group-iteam-double")}>
                            <div className={cx("group-iteam-db-nav")}>
                                <CardIteam
                                    image="eternity/group-double-1.webp"
                                    title={`I TIMBER VARSITY I SS2022`}
                                    coin="1200000đ"
                                    // y="5800000đ"

                                />
                            </div>

                            <div className={cx("group-iteam-db-nav")}>
                                <CardIteam
                                    image="eternity/group-double-2.webp"
                                    title={`"DUST" VARSITY`}
                                    coin="6000000đ"
                                    // y="5800000đ"

                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
}

export default GroupIteam