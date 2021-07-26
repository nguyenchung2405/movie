import axios from "axios";
import { ACCESSTOKEN} from "../constants/NguoiDungConst";
import { DANH_SACH_PHIM_PHAN_TRANG } from "../constants/PhimConst";
import Swal from "sweetalert2";
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
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `${result.data}`,
          showConfirmButton: false,
          timer: 2000
        })
        dispatch(danhSachPhimPhanTrang());
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response?.data}`,
        });
      }
    };
  };
