import React from "react";
import { useDispatch } from "react-redux";
import logoDangNhap from "../../assets/img/logoDangNhap.png";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { dangNhap } from "../../redux/action/NguoiDungAction";
export default function DangNhap(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("*Tài khoản không được bỏ trống!"),
      matKhau: Yup.string()
        .required("*Mật khẩu không được bỏ trống!")
        .min(1, "*Mật khẩu tối thiểu 6 ký tự!")
        .max(32, "*Mật khẩu tối đa 32 ký tự!"),
    }),
    onSubmit: (value) => {
      const action = dangNhap(value);
      dispatch(action);
    },
  });

  const handleClose = () => {
    props.history.push("/");
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="dangNhap__Img">
        <div className="dangNhap__Khung">
          <img
            className="dangNhap__Logo"
            src={logoDangNhap}
            alt="logoDangNhap"
          />
          <div className="dangNhap__noiDung">
            Đăng nhập để được nhiều ưu đãi, mua vé
            <br />
            và bảo mật thông tin!
          </div>
          <div className="dangNhap__Input">
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
          <div className="dangNhap__Input">
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
          <button className="btn__DangNhap">Đăng Nhập</button>
          <div>
            <span style={{ paddingRight: "5px" }}>Bạn chưa có tài khoản ?</span>
            <NavLink to="dangKy">Đăng Ký</NavLink>
          </div>
          <div className="dangNhap__Dong">
            <button type="button" className="btn__Dong" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
