import {
  DANH_SACH_LOAI_NGUOI_DUNG,
  DANH_SACH_NGUOI_DUNG,
  DANH_SACH_NGUOI_DUNG_PHAN_TRANG,
  THONG_TIN_NGUOI_DUNG,
  XOA_NGUOI_DUNG_ADMIN,
  XU_LY_DANG_NHAP_THANH_CONG,
} from "../../redux/constants/NguoiDungConst";

let initialState = {
  tenDangNhap: null,
  thongTinNguoiDung: [],
  danhSachLoaiNguoiDung: [],
  danhSachNguoiDung: [],
  danhSachNguoiDungPhanTrang: {
    currentPage: "",
    count: "",
    totalPages: "",
    totalCount: "",
    items: [],
  },
  xoaNguoiDungAdmin: {
    taiKhoan: "",
  },
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
    case DANH_SACH_NGUOI_DUNG_PHAN_TRANG: {
      state.danhSachNguoiDungPhanTrang = action.danhSachNguoiDungPhanTrang;

      return { ...state };
    }
    case XOA_NGUOI_DUNG_ADMIN: {
      return { ...state };
    }

    default:
      return { ...state };
  }
};
