import axios from "axios";
import { HIDE_LOADING, SHOW_LOADING } from "../constants/NguoiDungConst";
import {
  CHI_TIET_PHIM,
  GET_PHIM_API,
  GET_PHIM_SAP_CHIEU_API,
} from "../constants/PhimConst";

export const layDanhSachPhim = (maNhom = "GP03") => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      let result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: GET_PHIM_API,
        mangPhim: [...result.data],
      });
      dispatch(hideLoading());
    } catch (err) {
      console.log(err.response.data);
      dispatch(hideLoading());
    }
  };
};


export const layDanhSachPhimSapChieu = (maNhom = "GP07") => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      let result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: GET_PHIM_SAP_CHIEU_API,
        mangPhimSapChieu: [...result.data],
      });
      dispatch(hideLoading());
    } catch (err) {
      console.log(err.response.data);
      dispatch(hideLoading());
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      dispatch({
        type: CHI_TIET_PHIM,
        chiTietPhim: result.data,
      });
      dispatch(hideLoading());
    } catch (err) {
      console.log(err.response.data);
      dispatch(showLoading());
    }
  };
};

export const showLoading =()=>dispatch=>{
  dispatch({
      type:SHOW_LOADING
  });
}
export const hideLoading =()=>dispatch=>{
  dispatch({
      type:HIDE_LOADING
  });
}