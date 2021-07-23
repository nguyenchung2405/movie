import { ErrorMessage, Field, Formik, Form } from 'formik';
import React from 'react';
import * as Yup from "yup";
import { suaNguoiDungAction } from "../../../redux/action/UserAdminAction";
import { useDispatch } from "react-redux";
import { Row, Col } from "antd";
export default function FormUpdateUserAdmin(props) {
    const dispatch = useDispatch();
    const {closeModal}= props;
    const validate =Yup.object().shape({
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
    });
    const {ndEdit}=props;
    return (
      <div>
      <Formik
          initialValues={{ 
          taiKhoan: "",
          matKhau: "",
          email: "",
          soDt: "",
          maNhom: "GP01",
          maLoaiNguoiDung: "KhachHang",
          hoTen: ""
          }}
          validationSchema={validate}
          onSubmit={(values,{resetForm})=>{
            const action = suaNguoiDungAction(values);
            dispatch(action);
            resetForm({values:""});  
            closeModal(false)
          }}
          render={(formikProps)=>(
          <Form className="themNguoiDung" >
          <Row className="rowInput">
            <Col span={12}>
              <h2>Tài Khoản</h2>
              <div>
              <Field
                  className="inputPhim"
                  type="text"
                  placeholder={ndEdit.taiKhoan}
                  value={formikProps.values.taiKhoan}
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
              </div>
              <ErrorMessage name="taiKhoan">{msg => <div style={{color:"red"}}>{msg}</div>}</ErrorMessage>
            </Col>
            <Col span={12}>
              <h2>Email </h2>
              <div>
              <Field
                  className="inputPhim"
                  type="text"
                  placeholder={ndEdit.email}
                  value={formikProps.values.email}
                  name="email"
                  onChange={formikProps.handleChange}
                />
              </div>
              <ErrorMessage name="email">{msg => <div style={{color:"red"}}>{msg}</div>}</ErrorMessage>
            </Col>
          </Row>
          <Row className="rowInput">
            <Col span={12}>
              <h2>Mật Khẩu</h2>
              <div>
              <Field
                  className="inputPhim"
                  type="password"
                  placeholder={ndEdit.matKhau}
                  value={formikProps.values.matKhau}
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />
              </div>
              <ErrorMessage name="matKhau">{msg => <div style={{color:"red"}}>{msg}</div>}</ErrorMessage>
            </Col>
            <Col span={12}>
              <h2>Số Điện Thoại</h2>
              <div>
              <Field
                  className="inputPhim"
                  type="text"
                  placeholder={ndEdit.soDt}
                  value={formikProps.values.soDt}
                  name="soDt"
                  onChange={formikProps.handleChange}
                />
              </div>
              <ErrorMessage name="soDt">{msg => <div style={{color:"red"}}>{msg}</div>}</ErrorMessage>
            </Col>
          </Row>
          <Row className="rowInput">
            <Col span={12}>
              <h2>Họ Tên Người Dùng</h2>
              <div>
              <Field
                  className="inputPhim"
                  type="text"
                  placeholder={ndEdit.hoTen}
                  value={formikProps.values.hoTen}
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />
              </div>
              <ErrorMessage name="hoTen">{msg => <div style={{color:"red"}}>{msg}</div>}</ErrorMessage>
            </Col>
            <Col span={12}>
              <h2>Loại Người Dùng</h2>
              <div>
                <Field
                  component="select"
                  className="selectNguoiDung"
                  onChange={formikProps.handleChange}
                  name="maLoaiNguoiDung"
                >
                  <option>KhachHang</option>
                  <option>QuanTri</option>
                </Field>
              </div>
            </Col>
          </Row>
          <div className="div_btnThemNguoiDung">
            <button type="submit"   className="btnThemNguoiDung">Cập Nhật</button>
          </div>
        </Form>
      )} />
  </div>
    )
}
