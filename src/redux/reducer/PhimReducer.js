import { GET_PHIM_API } from "../constants/PhimConst";

const initialState = {
    mangPhim: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PHIM_API: {
            state.mangPhim = action.mangPhim;
            return {...state}
        }
    

    default:
        return state;
    }
}
