import axios from "axios";
import { history } from "../../App";
import {
  USER_LOGIN,
  ACCESSTOKEN,
  XU_LY_DANG_NHAP_THANH_CONG,
} from "../../redux/constants/NguoiDungConst";
export const dangKy = (data) => {
  return axios({
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
    method: "POST",
    data,
  })
    .then((res) => {
      alert("Đăng ký thành công");
      history.goBack();
    })
    .catch((err) => {
      alert(err.response.data);
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
      console.log(result.data);
      dispatch({
        type: XU_LY_DANG_NHAP_THANH_CONG,
        tenDangNhap: result.data,
      });
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(ACCESSTOKEN, result.data);

      history.push("/");
    } catch (err) {
      alert(err.response?.data);
      console.log(err.response?.data);
    }
  };
};

export const layThongTinNguoiDung = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        method: "POST",
      });
      console.log(result.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};
