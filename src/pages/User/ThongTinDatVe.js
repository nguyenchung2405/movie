import React from "react";
import { useSelector } from "react-redux";
export default function ThongTinDatVe(props) {
  const thongTinDatVe = useSelector(
    (state) => state.NguoiDungReducer.thongTinNguoiDung.thongTinDatVe
  );
  console.log("thongtindatve", thongTinDatVe);
  const renderVe = () => {
    return thongTinDatVe.map((Ve, index) => {
      return (
        <tr key={index}>
          <td>
            {Ve.tenPhim.length > 50
              ? Ve.tenPhim.substr(0, 40) + "..."
              : Ve.tenPhim}
          </td>
          <td>{Ve.ngayDat}</td>
          <td>{Ve.thoiLuongPhim} phút</td>
          <td>{Ve.danhSachGhe[0].tenHeThongRap}</td>
          <td>{Ve.danhSachGhe[0].tenGhe}</td>

          <td>{Ve.maVe}</td>
          <td>{Ve.giaVe}</td>
        </tr>
      );
    });
  };
  return (
    <>
      <table className="datVe">
        <thead>
          <tr>
            <th>Tên phim</th>
            <th>Ngày đặt</th>
            <th>Thời lượng phim</th>
            <th>Rạp</th>
            <th>Ghế số</th>
            <th>Mã Vé</th>
            <th>Giá vé</th>
          </tr>
        </thead>
        <tbody>{renderVe()}</tbody>
      </table>
    </>
  );
}
