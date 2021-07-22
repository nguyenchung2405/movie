import {
  CHI_TIET_PHIM,
  DANH_SACH_PHIM_PHAN_TRANG,
  GET_PHIM_API,
  GET_PHIM_SAP_CHIEU_API,
} from "../constants/PhimConst";

const initialState = {
  mangPhim: [],
  mangPhimSapChieu:[],
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
    case GET_PHIM_SAP_CHIEU_API: {
      state.mangPhimSapChieu = action.mangPhimSapChieu;
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
