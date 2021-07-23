import { Button, Modal } from "antd";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachNguoiDungPhanTrang,
  xoaNguoiDungAdminAction
} from "../../../redux/action/UserAdminAction";
import FormUpdateUserAdmin from "../FormUpdateUserAdmin/FormUpdateUserAdmin";
import Pagination from "../TablePaginationUserAdmin/Pagination";
import SearchAdmin from "../SeachAdmin/SearchAdmin";
import UppdateUserAdmin from "../FormUpdateUserAdmin/UppdateUserAdmin";

export default function TableNguoiDungAdmin(props) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [ndEdit, setNdEdit] = useState({});
  const danhSachNguoiDungPhanTrang = useSelector(
    (state) => state.AdminReducer.danhSachNguoiDungPhanTrang.items
  );

  const [filters, setFilters] = useState({
    maNhom: "GP01",
    soTrang: 1,
    soPhanTuTrenTrang: 20,
    taiKhoan: "",
    ndEdit: "",
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
  const handleEditNguoiDung = (nd) => {
    console.log({ nd });
    setNdEdit(nd);
    setVisible(true);
  };

  const renderDanhSachNguoiDung = () => {
    return danhSachNguoiDungPhanTrang.map((nguoiDung, index) => {
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
                handleEditNguoiDung(nguoiDung);
              }}
            >
              Sửa
            </Button>
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
      <Modal
        title="Cập Nhật Tài Khoản"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        {/* <UppdateUserAdmin  ndEdit={ndEdit} closeModal={setVisible}/> */}
       <FormUpdateUserAdmin ndEdit={ndEdit} closeModal={setVisible}/> 
      </Modal>
      <Pagination onePageChange={handlePageChange} />
    </>
  );
}
