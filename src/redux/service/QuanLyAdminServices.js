import axios from "axios";
import { domain,  ACCESSTOKEN,maNhom } from "../constants/NguoiDungConst";
export class QuanLyAdmin {
 
  capNhatThongTinNguoiDung = (thongTinNguoiDung) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: thongTinNguoiDung,
      headers: {
        Authorization:
        "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN)),
      },
    });
  };

  themPhim = (form_data) => {
    return axios({
      url: `${domain}/QuanLyPhim/ThemPhimUploadHinh`,
      method: "POST",
      data: form_data,
    });
  };
  uploadHinhAnhPhim = (hinhAnh) => {
    return axios({
      url: `${domain}/QuanLyPhim/UploadHinhAnhPhim`,
      method: "POST",
      data: hinhAnh,
    });
  };

  suaPhim = (phim) => {
    return axios({
      url: `${domain}/QuanLyPhim/CapNhatPhim`,
      method: "POST",
      data: phim,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
  };

  xoaPhim = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
  };

  taoLichChieu = (thongTin) => {
    return axios({
      url: `${domain}/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data: thongTin,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
  };
  themTinTuc = (tinTuc) => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/news",
      method: "POST",
      data: tinTuc,
    });
  };
  suaTinTuc = (id, tinTuc) => {
    return axios({
      url: `https://5e9829e75eabe7001681bbfb.mockapi.io/news/${id}`,
      method: "PUT",
      data: tinTuc,
    });
  };
  xoaTinTuc = (id) => {
    return axios({
      url: `https://5e9829e75eabe7001681bbfb.mockapi.io/news/${id}`,
      method: "DELETE",
    });
  };
}
export const quanLyAdminServices = new QuanLyAdmin();
