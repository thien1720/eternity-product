import { useFormik } from "formik"
import * as Yup from "yup"
import classNames from "classnames/bind"
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);


function LoginForm({handleLogin}) {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Vui lòng nhập tên của bạn.")
                .email("Nhập đúng email của của bạn."),
            password: Yup.string()
                .required("Vui lòng nhập mật khẩu của bạn.")
                .min(8, "Độ dài tối thiểu là 8 kí tự.")
        }),
        onSubmit: (values, { resetForm } )=> {
            resetForm({ value: "" })
            handleLogin()
        }
    })
    return <div className={cx("style-login")}>
        <h5>Đăng nhập</h5>
        <div className={cx("form-login")}>
            <form onSubmit={formik.handleSubmit}>
                <div className={cx("iteamInput")}>
                    <label htmlFor={"email"}>Email</label>
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="email"
                        type="text"
                        placeholder=""
                        className="fullname-sub"
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p className={cx("warning")}>{formik.errors.email}</p>)}
                </div>

                <div className={cx("iteamInput")}>
                    <label htmlFor={'password'}>Mật Khẩu</label>
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="password"
                        type="text"
                        placeholder=""
                        className="fullname-sub"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <p className={cx("warning")}>{formik.errors.password}</p>)}

                </div>

                

                <div className={cx("sub-form")}>
                    <button className={cx("sub-btn")}
                        // onClick={handleLogin}
                    >
                        Đăng nhập
                    </button>
                </div>

            </form>
        </div>
    </div>
}

export default LoginForm;