import { DANH_SACH_NGUOI_DUNG_PHAN_TRANG } from "../../redux/constants/NguoiDungConst";

let initialState = {
  danhSachNguoiDungPhanTrang: {
    currentPage: "",
    count: "",
    totalPages: "",
    totalCount: "",
    items: [],
  },
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANH_SACH_NGUOI_DUNG_PHAN_TRANG: {
      state.danhSachNguoiDungPhanTrang = action.danhSachNguoiDungPhanTrang;

      return { ...state };
    }
    default:
      return { ...state };
  }
};
