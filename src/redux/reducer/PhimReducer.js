import { CHI_TIET_PHIM, GET_PHIM_API } from "../constants/PhimConst";

const initialState = {
    mangPhim: [],
    chiTietPhim: {},
}

const PhimReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PHIM_API: {
            state.mangPhim = action.mangPhim;
            return { ...state }
        };
        case CHI_TIET_PHIM: {
            return { ...state, chiTietPhim: action.chiTietPhim }
        }


        default:
            return { ...state };
    }
}

export default PhimReducer;