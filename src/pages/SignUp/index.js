import React from "react";
import { useDispatch } from "react-redux";
import logoDangKy from "../../assets/img/logoDangNhap.png";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { dangKy } from "../../redux/action/NguoiDungAction";

export default function DangKy(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string()
        .required("*Tài khoản không được bỏ trống!")
        .min(6, "*Tài Khoản tối thiểu 6 kí tự"),
      matKhau: Yup.string()
        .required("*Mật khẩu không được bỏ trống!")
        .max(32, "*Mật khẩu tối đa 32 ký tự!")
        .min(5, "*Mật khẩu tối thiểu 5 ký tự!"),

      email: Yup.string()
        .required("*Email không được bỏ trống!")
        .email("*Email không đúng định dạng!"),
      soDt: Yup.string()
        .matches(/^[0-9]+$/, "*Số điện thoại không đúng định dạng")
        .required("*Số điện thoại không được bỏ trống!")
        .min(10, "*Số điện thoại không đúng định dạng"),
      hoTen: Yup.string()
        .required("*Họ Tên không được bỏ trống!")
        .min(6, "*Họ Tên tối thiểu 6 kí tự"),
    }),
    onSubmit: (values) => {
      const action = dangKy(values);
      dispatch(action);
    },
  });

  const handleClose = () => {
    props.history.push("/");
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="dangKy__Img">
        <div className="dangKy__Khung">
          <img className="dangKy__Logo" src={logoDangKy} alt="logodangKy" />

          <div className="dangKy__Input">
            <p className="ten__Input">Tài Khoản</p>
            <input
              className="input"
              type="text"
              placeholder="Tài Khoản"
              name="taiKhoan"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched && formik.errors ? (
              <p className="canhBao">{formik.errors.taiKhoan}</p>
            ) : (
              ""
            )}
          </div>
          <div className="dangKy__Input">
            <p className="ten__Input">Mật Khẩu</p>
            <input
              className="input"
              type="password"
              placeholder="Mật Khẩu"
              name="matKhau"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched && formik.errors ? (
              <p className="canhBao">{formik.errors.matKhau}</p>
            ) : (
              ""
            )}
          </div>

          <div className="dangKy__Input">
            <p className="ten__Input">Họ Tên</p>
            <input
              className="input"
              type="text"
              placeholder="Họ Tên"
              name="hoTen"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched && formik.errors ? (
              <p className="canhBao">{formik.errors.hoTen}</p>
            ) : (
              ""
            )}
          </div>
          <div className="dangKy__Input">
            <p className="ten__Input">Email</p>
            <input
              className="input"
              type="text"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched && formik.errors ? (
              <p className="canhBao">{formik.errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="dangKy__Input">
            <p className="ten__Input">Số Điện Thoại</p>
            <input
              className="input"
              type="text"
              placeholder="Số điện thoại"
              name="soDt"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched && formik.errors ? (
              <p className="canhBao">{formik.errors.soDt}</p>
            ) : (
              ""
            )}
          </div>
          <button className="btn__dangKy">Đăng Ký</button>
          <div className="taiKhoan_Link">
            <span style={{ paddingRight: "5px" }}>Bạn đã có tài khoản!</span>
            <NavLink to="/dangNhap">Đăng Nhập</NavLink>
          </div>
          <div className="dangKy__Dong">
            <button type="button" className="btn__Dong" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
