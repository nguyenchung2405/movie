import React from "react";

export default function ThongTinDatVe(props) {
 let {thongTinDatVe}=props;
 console.log(thongTinDatVe)
  const renderVe = () => {
    return thongTinDatVe.thongTinDatVe?.map((Ve, index) => {
      return (
        <tr key={index}>
          <td>
            {Ve.tenPhim.length > 50
              ? Ve.tenPhim.substr(0, 40) + "..."
              : Ve.tenPhim}
          </td>
          <td>{(Ve.ngayDat).substr(0,10)}</td>
          <td>{Ve.thoiLuongPhim} phút</td>
          <td>{Ve.danhSachGhe[0].tenHeThongRap}</td>
          <td>{Ve.danhSachGhe[0].tenGhe}</td>

          <td>{Ve.maVe}</td>
          <td>{(Ve.giaVe.toLocaleString())}</td>
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
