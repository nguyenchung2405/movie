import {
  THONG_TIN_NGUOI_DUNG,
  XU_LY_DANG_NHAP_THANH_CONG,
} from "../../redux/constants/NguoiDungConst";

let initialState = {
  tenDangNhap: null,
  thongTinNguoiDung: [],
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
    default:
      return { ...state };
  }
};
