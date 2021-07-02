import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logoDangKy from "../../assets/img/logoDangNhap.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  layThongTinNguoiDung,
  capNhatThongTinNguoiDung,
} from "../../redux/action/NguoiDungAction";
import { USER_LOGIN } from "../../redux/constants/NguoiDungConst";

export default function UpdateUser(props) {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector((state) => state.NguoiDungReducer);
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
      // taiKhoan: Yup.string()
      //   .required("*Tài khoản không thể cập nhật!")
      //   .min(6, "*Tài Khoản tối thiểu 6 kí tự"),
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
      if (localStorage.getItem(USER_LOGIN)) {
        let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
        values.taiKhoan = userLogin.taiKhoan;
      }
      console.log(values);
      const action = capNhatThongTinNguoiDung(values);
      dispatch(action);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="userUpdate">
        <div className="taiKhoan">
          <p className="lable"> Tài Khoản</p>
          <input
            style={{ backgroundColor: "darkgray" }}
            disabled={true}
            className="input"
            type="text"
            placeholder={thongTinNguoiDung.taiKhoan}
            name="taiKhoan"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <p className="canhBaoTai">Tài khoản không thể cập nhật lại!</p>
        </div>
        <div className="hoTen">
          <p className="lable">Họ Tên</p>
          <input
            className="input"
            type="text"
            placeholder="Họ Tên"
            name="hoTen"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched && formik.errors ? (
            <p className="canhBaoCap">{formik.errors.hoTen}</p>
          ) : (
            ""
          )}
        </div>

        <div className="email">
          <p className="lable">Email</p>
          <input
            className="input"
            type="text"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched && formik.errors ? (
            <p className="canhBaoCap">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>

        <div className="soDt">
          <p className="lable">Số Điện Thoại</p>
          <input
            className="input"
            type="text"
            placeholder="Số điện thoại"
            name="soDt"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched && formik.errors ? (
            <p className="canhBaoCap">{formik.errors.soDt}</p>
          ) : (
            ""
          )}
        </div>

        <div className="matKhau">
          <p className="lable">Mật Khẩu</p>
          <input
            className="input"
            type="password"
            placeholder="Mật Khẩu"
            name="matKhau"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched && formik.errors ? (
            <p className="canhBaoCap">{formik.errors.matKhau}</p>
          ) : (
            ""
          )}
        </div>
        <div className="divBtn">
          <button type="submit" className="btnCapNhat">
            Cập Nhật
          </button>
        </div>
      </div>
    </form>
  );
}
