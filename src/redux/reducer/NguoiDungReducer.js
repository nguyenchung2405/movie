import {
  DANH_SACH_LOAI_NGUOI_DUNG,
  DANH_SACH_NGUOI_DUNG,
  HIDE_LOADING,
  SHOW_LOADING,
  THONG_TIN_NGUOI_DUNG,
  XU_LY_DANG_NHAP_THANH_CONG,
} from "../../redux/constants/NguoiDungConst";

let initialState = {
  tenDangNhap: null,
  thongTinNguoiDung: {
    thongTinDatVe: [],
  },
  danhSachLoaiNguoiDung: [],
  danhSachNguoiDung: [],
  loadingNguoiDung:false,
};
export const NguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case XU_LY_DANG_NHAP_THANH_CONG: {
      state.tenDangNhap = action.tenDangNhap;

      return { ...state };
    }
    case THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;

      return { ...state };
    }
    case DANH_SACH_LOAI_NGUOI_DUNG: {
      state.danhSachLoaiNguoiDung = action.danhSachLoaiNguoiDung;

      return { ...state };
    }
    case DANH_SACH_NGUOI_DUNG: {
      state.danhSachNguoiDung = action.danhSachNguoiDung;

      return { ...state };
    }
    case SHOW_LOADING:
      return { ...state, loadingNguoiDung:true};
    case HIDE_LOADING:
          return { ...state, loadingNguoiDung:false};
    default:
      return { ...state };
  }
};
