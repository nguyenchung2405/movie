import { ACCESSTOKEN, DANH_SACH_NGUOI_DUNG_PHAN_TRANG, HIDE_LOADING, SHOW_LOADING } from "../constants/NguoiDungConst";
import axios from "axios";
import Swal from "sweetalert2";
export const layDanhSachNguoiDungPhanTrang = (paramString) => {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        const result = await axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?${paramString}`,
          method: "GET",
        });
        dispatch({
          type: DANH_SACH_NGUOI_DUNG_PHAN_TRANG,
          danhSachNguoiDungPhanTrang: result.data,
        });
        dispatch(hideLoading());
      } catch (err) {
        console.log(err);
      }
    };
  };
  
  export const xoaNguoiDungAdminAction = (taiKhoan) => {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        const result = await axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN)),
          },
        });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${result.data}`,
          showConfirmButton: false,
          timer: 2000
        });
        dispatch(hideLoading());
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response?.data}`,
        })
      }
    };
  };
  
  export const themNguoiDungAction = (nguoiDung) => {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        const result = await axios({
          url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
          method: "POST",
          data: nguoiDung,
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN)),
          },
        });
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Thêm người dùng thành công',
          showConfirmButton: false,
          timer: 2000
        })
        dispatch(hideLoading());
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response?.data}`,
        })
      }
    };
  };
  
  export const suaNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
      try {
        const result = await axios({
          url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
          method: "PUT",
          data: taiKhoan,
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN)),
          },
        });
  
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: "Xóa Thành công",
          showConfirmButton: false,
          timer: 2000
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response?.data}`,
        })
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