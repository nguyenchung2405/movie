import axios from "axios";
import {
  CHI_TIET_PHIM,
  DANH_SACH_PHIM_PHAN_TRANG,
  GET_PHIM_API,
} from "../constants/PhimConst";

export const getPhimAPI = (maNhom = "GP04") => {
  return async (dispatch) => {
    try {
      let promise = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        method: "GET",
      });
      if (promise.status === 200) {
        dispatch({
          type: GET_PHIM_API,
          mangPhim: [...promise.data],
        });
      }
      console.log("getPhimAPI", promise);
    } catch (err) {
      console.log(err);
    }
  };
};
export const layDanhSachPhim = (maNhom = "GP04") => {
  return async (dispatch) => {
    try {
      let promise = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: GET_PHIM_API,
        mangPhim: [...promise.data],
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

// return dispatch => {
//     let promise = axios({
//         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
//         method: 'GET',
//     });
//     promise.then((rs) => {
//         console.log("phim action", rs.data);
//         dispatch({
//             type: GET_PHIM_API,
//             mangPhim: rs.data,
//         })
//     });
//     promise.catch((err) => {
//         console.log(err.response.data);
//     });
// }

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
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
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
};
