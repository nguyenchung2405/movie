import React, { useState } from "react";
import queryString from "query-string";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";
import { layDanhSachNguoiDungPhanTrang } from "../../redux/action/NguoiDungAction";
import SearchAdmin from "./SearchAdmin";

export default function TableNguoiDungAdmin(props) {
  const dispatch = useDispatch();
  const danhSachNguoiDungPhanTrang = useSelector(
    (state) => state.NguoiDungReducer.danhSachNguoiDungPhanTrang.items
  );

  const [filters, setFilters] = useState({
    maNhom: "GP01",
    soTrang: 1,
    soPhanTuTrenTrang: 20,
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
    setFilters({
      ...filters,
      tuKhoa: newFilters.searchTerm,
    });
  }
  const renderDanhSachNguoiDung = () => {
    return danhSachNguoiDungPhanTrang.map((nguoiDung, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{nguoiDung.taiKhoan}</td>
          <td>{nguoiDung.matKhau}</td>
          <td>{nguoiDung.hoTen}</td>
          <td>{nguoiDung.email}</td>
          <td>{nguoiDung.soDt}</td>
          <td>
            <button className="btnCapNhat" onClick={() => {}}>
              Sửa
            </button>
            <button className="btnCapNhat" onClick={() => {}}>
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
