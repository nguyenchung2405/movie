import { DANH_SACH_NGUOI_DUNG_PHAN_TRANG } from "../../redux/constants/NguoiDungConst";

let initialState = {
  danhSachNguoiDungPhanTrang: {
    currentPage: "",
    count: "",
    totalPages: "",
    totalCount: "",
    items: [],
  },
  nguoiDungSua: {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    maLoaiNguoiDung: "",
    soDt: "",
  },
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANH_SACH_NGUOI_DUNG_PHAN_TRANG: {
      state.danhSachNguoiDungPhanTrang = action.danhSachNguoiDungPhanTrang;

      return { ...state };
    }
    case "SUA_NGUOI_DUNG": {
      state.nguoiDungSua = action.nguoiDungSua;

      return { ...state };
    }
    default:
      return { ...state };
  }
};
