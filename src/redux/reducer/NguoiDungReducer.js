import { XU_LY_DANG_NHAP_THANH_CONG } from "../../redux/constants/NguoiDungConst";
let initialState = {
  tenDangNhap: null,
};
export const NguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case XU_LY_DANG_NHAP_THANH_CONG: {
      state.tenDangNhap = action.tenDangNhap;

      return { ...state };
    }
    default:
      return { ...state };
  }
};
