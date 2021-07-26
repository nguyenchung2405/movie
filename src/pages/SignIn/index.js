import React from "react";
import { useDispatch } from "react-redux";
import logoDangNhap from "../../assets/img/logoDangNhap.png";
import { NavLink } from "react-router-dom";

import { ErrorMessage, Field, Formik, Form } from 'formik';

import * as Yup from "yup";
import { dangNhap } from "../../redux/action/NguoiDungAction";
export default function DangNhap(props) {
  const dispatch = useDispatch();
  const validate=Yup.object().shape({
    taiKhoan: Yup.string().required("*Tài khoản không được bỏ trống!"),
    matKhau: Yup.string().required("*Mật khẩu không được bỏ trống!")
  })
 
  const handleClose = () => {
    props.history.push("/");
  };
  return (
    <Formik
    initialValues={{ 
      taiKhoan: "",
      matKhau: "",
    }}
    validationSchema={validate}
    onSubmit={(values)=>{
      const action = dangNhap(values);
      dispatch(action); 
    }}
    render={(formikProps)=>(
    <Form>
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
           <Field
              className="input"
              type="text"
              placeholder="Tài Khoản"
              name="taiKhoan"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            />
            <ErrorMessage name="taiKhoan">{msg => <div className="canhBao">{msg}</div>}</ErrorMessage>

          </div>
          <div className="dangNhap__Input">
           <Field
              className="input"
              type="password"
              placeholder="Mật Khẩu"
              name="matKhau"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
            />
            <ErrorMessage name="matKhau">{msg => <div className="canhBao">{msg}</div>}</ErrorMessage>

          </div>
          <button className="btn__DangNhap">Đăng Nhập</button>
          <div>
            <span className="spanTaiKhoan">Bạn chưa có tài khoản ?</span>
            <NavLink to="dangKy" className="dangKy">Đăng Ký</NavLink>
          </div>
          <div className="dangNhap__Dong">
            <button type="button" className="btn__Dong" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
      </div>
    </Form>
    )}/>
  );
}
