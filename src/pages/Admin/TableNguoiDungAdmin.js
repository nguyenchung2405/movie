import React, { useState } from "react";
import queryString from "query-string";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { Modal, Button, Row, Col } from "antd";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";
import {
  layDanhSachNguoiDungPhanTrang,
  xoaNguoiDungAdminAction,
} from "../../redux/action/NguoiDungAction";
import SearchAdmin from "./SearchAdmin";
import { suaNguoiDungAction } from "../../redux/action/AdminAction";
export default function TableNguoiDungAdmin(props) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const danhSachNguoiDungPhanTrang = useSelector(
    (state) => state.AdminReducer.danhSachNguoiDungPhanTrang.items
  );

  const [filters, setFilters] = useState({
    maNhom: "GP01",
    soTrang: 1,
    soPhanTuTrenTrang: 20,
    taiKhoan: "",
  });

  const paramString = queryString.stringify(filters);
  useEffect(() => {
    const action = layDanhSachNguoiDungPhanTrang(paramString);
    dispatch(action);
  }, [filters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      soTrang: newPage,
    });
  }
  function handleFiltersChange(newFilters) {
    let queries = {
      ...filters,
      tuKhoa: newFilters.searchTerm,
    };
    !queries.tuKhoa && delete queries.tuKhoa;
    setFilters(queries);
  }

  const handleXoaNguoiDung = (taiKhoan) => {
    const action = xoaNguoiDungAdminAction(taiKhoan);
    dispatch(action);
    setFilters({
      ...filters,
      taiKhoan: taiKhoan,
    });
  };
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
      const action = suaNguoiDungAction(values);
      dispatch(action);
      setFilters(...filters, values);
    },
  });

  const renderDanhSachNguoiDung = () => {
    return danhSachNguoiDungPhanTrang.map((nguoiDung, index) => {
      const handleEditNguoiDung = (nd) => {
        setVisible(true);
        let nd = { ...nguoiDung };
      };
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{nguoiDung.taiKhoan}</td>
          <td>{nguoiDung.matKhau}</td>
          <td>{nguoiDung.hoTen}</td>
          <td>{nguoiDung.email}</td>
          <td>{nguoiDung.maLoaiNguoiDung}</td>
          <td>{nguoiDung.soDt}</td>

          <td>
            <Button
              className="btnCapNhatSua"
              type="primary"
              onClick={() => {
                handleEditNguoiDung(nd);
              }}
            >
              Sửa
            </Button>
            <Modal
              title="Cập Nhật Tài Khoản"
              centered
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              width={1000}
            >
              <form className="themNguoiDung" onSubmit={formik.handleSubmit}>
                <Row className="rowInput">
                  <Col span={12}>
                    <h2>Tài Khoản</h2>
                    <div>
                      <input
                        value={nd.taiKhoan}
                        className="inputPhim"
                        type="text"
                        placeholder="Nhập tài khoản cần thay đổi thông tin"
                        name="taiKhoan"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched && formik.errors ? (
                      <p style={{ color: "red" }}>{formik.errors.taiKhoan}</p>
                    ) : (
                      ""
                    )}
                  </Col>
                  <Col span={12}>
                    <h2>Email </h2>
                    <div>
                      <input
                        className="inputPhim"
                        type="text"
                        placeholder="Email"
                        name="email"
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
                  <button className="btnThemNguoiDung">Cập Nhật</button>
                </div>
              </form>
            </Modal>
            <button
              className="btnCapNhat"
              onClick={() => handleXoaNguoiDung(nguoiDung.taiKhoan)}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <SearchAdmin onSubmit={handleFiltersChange} />
      <table className="table">
        <thead className="thead">
          <tr>
            <th>STT</th>
            <th>Tài Khoản</th>
            <th>Mật Khẩu</th>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Mã Loại Người Dùng</th>
            <th>Số Điện Thọai</th>
            <th>Các Chức Năng</th>
          </tr>
        </thead>
        <tbody className="tbody">{renderDanhSachNguoiDung()}</tbody>
      </table>
      <Pagination onePageChange={handlePageChange} />
    </>
  );
}
