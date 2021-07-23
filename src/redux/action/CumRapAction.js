import axios from "axios";
import { LAY_THONG_TIN_HE_THONG_RAP, LAY_THONG_TIN_LICH_CHIEU } from "../constants/CumRapConst";


export const layThongTinCumRap = () => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
                method: 'GET'
            })
            dispatch({
                type: LAY_THONG_TIN_HE_THONG_RAP,
                mangRap: result.data
            })
        }catch(err){
            console.log(err.reponse.data);
        }
    }
}
export const layThongTinLichChieu = (maNhom='GP03')=>{
    return async dispatch=>{
        try{
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${maNhom}`,
                method: 'GET'
            })
            dispatch({
                type: LAY_THONG_TIN_LICH_CHIEU,
                thongTinLichCHieu: result.data
            })
        }catch(err){
            console.log(err);
        }
    }
}