import React from "react";
import { Row, Col } from "antd";
import { ErrorMessage, Field, Form, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { themNguoiDungAction } from "../../../redux/action/UserAdminAction";
export default function ThemNguoiDung(props) {
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
    onSubmit: (values,{resetForm}) => {
     const action = themNguoiDungAction(values);
     dispatch(action);
     resetForm({values:""});
    },
  });
  return (
    <Form className="themNguoiDung" onSubmit={formik.handleSubmit}>
      <Row className="rowInput">
        <Col span={12}>
          <h2>Tài Khoản</h2>
          <div>
            <Field
              className="inputPhim"
              type="text"
              placeholder="Tài Khoản"
              name="taiKhoan"
              value={formik.values.taiKhoan}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <ErrorMessage name="taiKhoan">{msg => <div style={{color:"red"}}>{msg}</div>}</ErrorMessage>
        </Col>
        <Col span={12}>
          <h2>Email </h2>
          <div>
            <input
              className="inputPhim"
              type="text"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched && formik.errors ? (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          ) : (
            ""
          )}
        </Col>
      </Row>
      <Row className="rowInput">
        <Col span={12}>
          <h2>Mật Khẩu</h2>
          <div>
            <input
              className="inputPhim"
              type="password"
              placeholder="Mật Khẩu"
              name="matKhau"
              value={formik.values.matKhau}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched && formik.errors ? (
            <p style={{ color: "red" }}>{formik.errors.matKhau}</p>
          ) : (
            ""
          )}
        </Col>
        <Col span={12}>
          <h2>Số Điện Thoại</h2>
          <div>
            <input
              className="inputPhim"
              type="text"
              placeholder="Số điện thoại"
              name="soDt"
              onChange={formik.handleChange}
              value={formik.values.soDt}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched && formik.errors ? (
            <p style={{ color: "red" }}>{formik.errors.soDt}</p>
          ) : (
            ""
          )}
        </Col>
      </Row>
      <Row className="rowInput">
        <Col span={12}>
          <h2>Họ Tên Người Dùng</h2>
          <div>
            <input
              className="inputPhim"
              type="text"
              placeholder="Họ Tên"
              name="hoTen"
              value={formik.values.hoTen}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched && formik.errors ? (
            <p style={{ color: "red" }}>{formik.errors.hoTen}</p>
          ) : (
            ""
          )}
        </Col>
        <Col span={12}>
          <h2>Loại Người Dùng</h2>
          <div>
            <select
              className="selectNguoiDung"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="maLoaiNguoiDung"
            >
              <option>KhachHang</option>
              <option>QuanTri</option>
            </select>
          </div>
        </Col>
      </Row>
      <div className="div_btnThemNguoiDung">
        <button className="btnThemNguoiDung">Thêm</button>
      </div>
    </Form>
  );
}
