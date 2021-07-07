import React, { useState } from "react";
import queryString from "query-string";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  danhSachPhimPhanTrang,
  xoaPhimAdminAction,
} from "../../redux/action/PhimAction";
import PaginationPhim from "./PaginationPhim";

export default function TablePhanTrangPhim(props) {
  const dispatch = useDispatch();
  const danhSachPhimPhanTrangAdmin = useSelector(
    (state) => state.PhimReducer.danhSachPhimPhanTrang.items
  );
  const [filters, setFilters] = useState({
    maNhom: "GP01",
    soTrang: 1,
    soPhanTuTrenTrang: 10,
    maPhim: "",
  });

  const paramString = queryString.stringify(filters);
  useEffect(() => {
    const action = danhSachPhimPhanTrang(paramString);
    dispatch(action);
  }, [filters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      soTrang: newPage,
    });
  }
  const handleXoaPhim = (maPhim) => {
    let action = xoaPhimAdminAction(maPhim);
    dispatch(action);
    let queries = {
      ...filters,
      maPhim: maPhim,
    };
    !queries.maPhim && delete queries.maPhim;
    setFilters(maPhim);
  };
  const renderDanhSachPhim = () => {
    return danhSachPhimPhanTrangAdmin.map((Phim, index) => {
      return (
        <tr key={index}>
          <td>{Phim.maPhim}</td>
          <td>{Phim.tenPhim}</td>
          <td>
            <img
              style={{ width: "70px", height: "70px", objectFit: "cover" }}
              src={Phim.hinhAnh}
              alt="hinhAnh"
            />
          </td>
          <td>
            {Phim.moTa.length > 100
              ? Phim.moTa.substr(0, 50) + "..."
              : Phim.moTa}
          </td>
          <td>{Phim.maNhom}</td>
          <td style={{ width: "200px" }}>{Phim.ngayKhoiChieu}</td>
          <td>
            <button
              className="btnCapNhat"
              onClick={() => {
                handleXoaPhim(Phim.maPhim);
              }}
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
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Mã Phim</th>
            <th>Tên Phim</th>
            <th>Hình Ảnh </th>
            <th>Mô Tả</th>
            <th>Mã Nhóm</th>
            <th>Ngày Khởi Chiếu</th>
            <th>Các Chức Năng</th>
          </tr>
        </thead>
        <tbody className="tbody">{renderDanhSachPhim()}</tbody>
      </table>
      <PaginationPhim onePageChangePhim={handlePageChange} />
    </>
  );
}
