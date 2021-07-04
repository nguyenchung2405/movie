import axios from "axios";
import { ACCESSTOKEN } from "../constants/NguoiDungConst";
import {
  CHI_TIET_PHIM,
  DANH_SACH_PHIM_PHAN_TRANG,
  GET_PHIM_API,
} from "../constants/PhimConst";

export const layDanhSachPhim = (maNhom = "GP04") => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: GET_PHIM_API,
        mangPhim: [...result.data],
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      dispatch({
        type: CHI_TIET_PHIM,
        chiTietPhim: result.data,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const danhSachPhimPhanTrang = (paramString) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?${paramString}`,
        method: "GET",
      });
      dispatch({
        type: DANH_SACH_PHIM_PHAN_TRANG,
        danhSachPhimPhanTrang: result.data,
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const xoaPhimAdminAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN)),
        },
      });
      alert(result.data);
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
