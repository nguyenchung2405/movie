import axios from "axios";
import { history } from "../../App";
import Swal from 'sweetalert2';
import {
  USER_LOGIN,
  ACCESSTOKEN,
  XU_LY_DANG_NHAP_THANH_CONG,
  THONG_TIN_NGUOI_DUNG,
  CAP_NHAT_THONG_TIN_NGUOI_DUNG,
  DANH_SACH_LOAI_NGUOI_DUNG,
  DANH_SACH_NGUOI_DUNG,
  SHOW_LOADING,
  HIDE_LOADING,
} from "../../redux/constants/NguoiDungConst";

export const dangKy = (data) => {
  return axios({
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
    method: "POST",
    data,
  })
    .then((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "Đăng ký thành công",
        showConfirmButton: false,
        timer: 2000
      })
      history.goBack();
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.response?.data}`,
      });
    });
};

export const dangNhap = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: userLogin,
      });

      dispatch({
        type: XU_LY_DANG_NHAP_THANH_CONG,
        tenDangNhap: result.data,
      });
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(
        ACCESSTOKEN,
        JSON.stringify(result.data.accessToken)
      );
      history.push("/");
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.response?.data}`,
      });
      
    }
  };
};

export const layThongTinNguoiDung = (taiKhoan) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        method: "POST",
        data: taiKhoan,
      });
      dispatch({
        type: THONG_TIN_NGUOI_DUNG,
        thongTinNguoiDung: result.data,
      });
      dispatch(hideLoading());
    } catch (err) {
      console.log(err);
    }
  };
};

export const capNhatThongTinNguoiDung = (taiKhoan) => {
  return async (dispatch) => {
    dispatch(showLoading());
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
      alert("Cập Nhật Thành Công");
      history.goBack();
      dispatch({
        type: CAP_NHAT_THONG_TIN_NGUOI_DUNG,
        capNhatThongTinNguoiDung: result.data,
      });
      dispatch(hideLoading());
    } catch (err) {
      alert(err.response?.data);
      console.log(err);
    }
  };
};

export const layDanhSachLoaiNguoiDung = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung",
        method: "GET",
      });
      dispatch({
        type: DANH_SACH_LOAI_NGUOI_DUNG,
        danhSachLoaiNguoiDung: result.data,
      });
      dispatch(hideLoading());
    } catch (err) {
      console.log(err);
    }
  };
};

export const layDanhSachNguoiDung = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
        method: "GET",
      });
      dispatch({
        type: DANH_SACH_NGUOI_DUNG,
        danhSachNguoiDung: result.data,
      });
    } catch (err) {
      console.log(err);
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