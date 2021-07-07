import axios from "axios";
import { ACCESSTOKEN } from "../constants/NguoiDungConst";

export const themNguoiDungAction = (nguoiDung) => {
  return async (dispatch) => {
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
      alert("Thêm người dùng thành công");
    } catch (error) {
      console.log(error.response?.data);
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

      alert("Cập Nhật Thành Công");
    } catch (err) {
      alert(err.response?.data);
      console.log(err);
    }
  };
};

export const themPhimAction = (form_data) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
        method: "POST",
        data: form_data,
      });

      alert("Thêm phim thành công");
    } catch (err) {
      alert(err.response?.data);
      console.log(err);
    }
  };
};
