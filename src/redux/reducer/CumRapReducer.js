import { LAY_THONG_TIN_HE_THONG_RAP, LAY_THONG_TIN_LICH_CHIEU } from "../constants/CumRapConst";


const initialState = {
    mangRap: [],
    thongTinLichCHieu: [],
}

const CumRapReducer = (state = initialState, action)=>{
    switch (action.type){
        case LAY_THONG_TIN_HE_THONG_RAP :{
            return {...state, mangRap:action.mangRap};
        }
        case LAY_THONG_TIN_LICH_CHIEU:{
            state.thongTinLichCHieu = action.thongTinLichCHieu;
            return {...state};
        }



        default: return {...state}
    }
}

export default CumRapReducer;