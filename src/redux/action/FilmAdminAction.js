import axios from "axios";
import { ACCESSTOKEN } from "../constants/NguoiDungConst";
import { DANH_SACH_PHIM_PHAN_TRANG } from "../constants/PhimConst";

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
        dispatch(danhSachPhimPhanTrang());
      } catch (err) {
        alert(err.response?.data);
      }
    };
  };
  