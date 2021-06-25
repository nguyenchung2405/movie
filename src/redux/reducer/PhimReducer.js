import { GET_PHIM_API } from "../constants/PhimConst";

const initialState = {
    mangPhim: [],
}

const PhimReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_PHIM_API: {
            // state.mangPhim = action.mangPhim;
            return {...state, mangPhim: action.mangPhim}
        }
    

    default:
        return state;
    }
}

export default PhimReducer;