import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { BsArrowLeftShort } from "react-icons/bs";
import classNames from "classnames/bind";
import styles from "./FormAddress.module.scss";
const cx = classNames.bind(styles);

function FormAddress({setOpen , open , setFullName}) {


    const [location, setLocation] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then(response => response.json())
            .then(data => setLocation(data))
    }
        , [])


    const [city, setCity] = useState(null)
    const [district, setDistrict] = useState(null)
    const [commune, setCommune] = useState(null)
    const [message, setMeesage] = useState(false)
    const [message1, setMeesage1] = useState(false)
    const [message2, setMeesage2] = useState(false)
    const handleCity = (e) => {
        setCity(e.target.value)
        setMeesage(false)
    }
    const handleDisrtict = (e) => {
        setDistrict(e.target.value)
        setMeesage1(false)
    }
    const handleCommune = (e) => {
        setCommune(e.target.value)
        setMeesage2(false)
    }
    const result = location.find(item => item.Name == city)

    const result1 = result?.Districts.find(item => item.Name == district)

    const handleMessage = () => {
        if (!city) {
            setMeesage(true)
        } else {
            setMeesage(false)
        }
        if (!district) {
            setMeesage1(true)
        } else {
            setMeesage1(false)
        }
        if (!commune) {
            setMeesage2(true)
        } else {
            setMeesage2(false)
        }
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            number: "",
            address: "",
            domain: "",
            checkHome: "",
            payIng: "",
            city: "",
            district: "",
            commune: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Vui l??ng nh???p tr?????ng n??y.")
                .min(5, 'Nh???p t???i thi???u 5 k?? t???.'),
            number: Yup.string()
                .required("Vui l??ng nh???p tr?????ng n??y.")
                .min(10, "S??? ??i???n tho???i kh??ng h???p l???."),
            email: Yup.string()
                .email('Email nh???p v??o kh??ng ch??nh x??c.').required('Vui l??ng nh???p email c???a b???n'),
            address: Yup.string()
                .required("Vui l??ng nh???p tr?????ng n??y.")
                .min(10, "Vui l??ng nh???p r?? ?????a ch??? h??n"),
            checkHome: Yup.string()
                .required("Vui l??ng ch???n n??i nh???n h??ng."),
            payIng: Yup.string()
                .required("Vui l??ng ch???n ph????n th???c thanh to??n."),

        }),
        onSubmit: (values, { resetForm } ) => {
            resetForm({ value: "" })
            
            setTimeout(()=>{
                setOpen(!open)
                setFullName(values.name)
              }, 3000);
        }
    })

    
    return <div className={cx("form-info-use")}>

        

        <div className={cx("form-use-select")}>
            <div className={cx("form-info")}>
                <h5 className={cx("head-form")}>Th??ng tin b???n c???n ??i???n</h5>
                <form action="" className="form" onSubmit={formik.handleSubmit}>

                    <div className={cx("info-use", "mar-input")}>
                        <div className={cx("full-name")}>
                            <input type="text" className={cx("slec-input-name")} name="name" placeholder="H??? V?? T??n"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />

                            {formik.errors.name && formik.touched.name && (
                                <p className={cx("warning")}>{formik.errors.name}</p>)}
                        </div>

                        <div className={cx("info-email-number", "mar-input")}>
                            <div className={cx("email", "mar-input")}>
                                <input type="text" className={cx("slec-input-email")} name="email" placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />

                                {formik.errors.email && formik.touched.email && (
                                    <p className={cx("warning")}>{formik.errors.email}</p>)}
                            </div>

                            <div className={cx("number", "mar-input")}>
                                <input type="text" className={cx("slec-input-number")} name="number" placeholder="S??? ??i???n tho???i"
                                    value={formik.values.number}
                                    onChange={formik.handleChange}
                                />

                                {formik.errors.number && formik.touched.number && (
                                    <p className={cx("warning")}>{formik.errors.number}</p>)}
                            </div>

                        </div>

                    </div>

                    <div className={cx("form-addresses")}>
                        <div className={cx("address")}>
                            <input type="text" className={cx("slec-input-address")} name="address" placeholder="?????a ch???"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                            />

                            {formik.errors.address && formik.touched.address && (
                                <p className={cx("warning")}>{formik.errors.address}</p>)}
                        </div>

                        <div className={cx("select-address")}>
                            <div className={cx("city")}>
                                <select className={cx("select-city")}
                                    onChange={(e) => handleCity(e)}
                                    name="city"
                                    value={city}
                                >
                                    <option value={null}>Ch???n T???nh/th??nh ph???</option>
                                    {
                                        location.map(item => {
                                            return <option value={item.Name}
                                                key={item.Name} >{item.Name}</option>
                                        })

                                    }
                                </select>


                                {message ? (
                                    <div className={cx("warning")}>Ch???n T???nh/Th??nh ph???</div>
                                ) : null}
                            </div>

                            <div className={cx("districts")}>
                                <select className={cx("select-districts")}
                                    name="districts"
                                    onChange={(e) => {
                                        handleDisrtict(e)
                                    }
                                    }
                                    value={district}


                                >
                                    <option >Ch???n Qu???n/Huy???n</option>
                                    {
                                        result?.Districts.map(item => {
                                            return <option value={item.Name}
                                                key={item.id}
                                            >{item.Name}</option>
                                        })

                                    }
                                </select>

                                {message1 ? (
                                    <div className={cx("warning")}>Ch???n Qu???n/ Huy???n</div>
                                ) : null}
                            </div>

                            <div className={cx("wards")}>
                                <select className={cx("select-wards")}
                                    onChange={(e) => handleCommune(e)}
                                    value={commune}
                                >
                                    <option >Ch???n X??/Ph?????ng</option>
                                    {
                                        result1?.Wards.map(item => {
                                            return <option value={item.Name} key={item.id}
                                            >{item.Name}</option>
                                        })

                                    }
                                </select>

                                {message2 ? (
                                    <div className={cx("warning")}>Ch???n X??/Ph?????ng</div>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className={cx("pay-shiping")}>
                        <div className={cx("shiping-item")}>
                            <h5 className={cx("head-form")}>Ph????ng Th???c v???n chuy???n</h5>

                            <div className={cx("form-ship")}>
                                <label>
                                    <input type="radio" name="checkHome"
                                        value="t???n n??i"
                                        checked={formik.values.checkHome === 't???n n??i'}
                                        onChange={formik.handleChange}
                                    />
                                    <span>Giao h??ng t???n n??i</span>
                                </label>


                                <label>
                                    <input type="radio" name="checkHome"
                                        value="shop"
                                        checked={formik.values.checkHome === 'shop'}
                                        onChange={formik.handleChange}
                                    />
                                    <span>L???y t???i shop .</span>
                                </label>


                            </div>

                            {formik.errors.checkHome && formik.touched.checkHome && (
                                <p className={cx("warning")}>{formik.errors.checkHome}</p>)}
                        </div>

                        <div className={cx("option-pay")}>
                            <h5 className={cx("head-form")}>Ph????ng Th???c Thanh To??n</h5>

                            <div className={cx("form-ship")}>
                                <label>
                                    <input type="radio" name="payIng"
                                        value="monney"
                                        checked={formik.values.payIng === "monney"}
                                        onChange={formik.handleChange}
                                    />
                                    <span>Thanh to??n khi nh???n h??ng.</span>
                                </label>
                                <label>
                                    <input type="radio" name="payIng"
                                        value="bank"
                                        checked={formik.values.payIng === "bank"}
                                        onChange={formik.handleChange}
                                    />
                                    <span>Thanh to??n qua ng??n h??ng.</span>
                                </label>
                            </div>

                            {formik.errors.payIng && formik.touched.payIng && (
                                <p className={cx("warning")}>{formik.errors.payIng}</p>)}

                        </div>
                    </div>

                    <div className={cx("sub-form")}>
                        <div className={cx("back-to-cart")}>
                            <BsArrowLeftShort className={cx("icon-cart")} />
                            <Link to="/cart" >Gi??? h??ng</Link>
                        </div>
                        < button className={cx("hand-sub")}
                            onClick={handleMessage}
                        > Ho??n t???t thanh to??n</button >
                    </div >
                </form >
            </div >
        </div >
    </div>
}

export default FormAddress