import axios from "axios";
import { ACCESSTOKEN, HIDE_LOADING, SHOW_LOADING } from "../constants/NguoiDungConst";
import { DANH_SACH_PHIM_PHAN_TRANG } from "../constants/PhimConst";
import Swal from "sweetalert2";
export const danhSachPhimPhanTrang = (paramString) => {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        const result = await axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?${paramString}`,
          method: "GET",
        });
        dispatch({
          type: DANH_SACH_PHIM_PHAN_TRANG,
          danhSachPhimPhanTrang: result.data,
        });
        dispatch(hideLoading());
      } catch (error) {
        console.log(error.response?.data);
      };
      dispatch(hideLoading());
    };
  };

  
export const themPhimAction = (form_data) => {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        const result = await axios({
          url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
          method: "POST",
          data: form_data,
        });
  
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: "Thêm Phim Thành công",
          showConfirmButton: false,
          timer: 2000
        });
        dispatch(hideLoading());
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response?.data}`,
        });
        dispatch(hideLoading());
      }
    };
  };
  
  
  export const xoaPhimAdminAction = (maPhim) => {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        const result = await axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN)),
          },
        });
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `${result.data}`,
          showConfirmButton: false,
          timer: 2000
        })
        dispatch(danhSachPhimPhanTrang());
        dispatch(hideLoading());
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response?.data}`,
        });
        dispatch(hideLoading());
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