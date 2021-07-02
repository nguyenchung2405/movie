import {
  CHI_TIET_PHIM,
  DANH_SACH_PHIM_PHAN_TRANG,
  GET_PHIM_API,
} from "../constants/PhimConst";

const initialState = {
  mangPhim: [],
  chiTietPhim: {},
  danhSachPhimPhanTrang: {
    currentPage: "",
    count: "",
    totalPages: "",
    totalCount: "",
    items: [],
  },
};

const PhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHIM_API: {
      state.mangPhim = action.mangPhim;
      return { ...state };
    }
    case CHI_TIET_PHIM: {
      return { ...state, chiTietPhim: action.chiTietPhim };
    }
    case DANH_SACH_PHIM_PHAN_TRANG: {
      state.danhSachPhimPhanTrang = action.danhSachPhimPhanTrang;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default PhimReducer;
