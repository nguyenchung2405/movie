import axios from 'axios';
import { ACCESSTOKEN } from '../constants/NguoiDungConst';
import { DAT_VE_THANH_CONG, LAY_DANH_SACH_PHONG_VE } from '../constants/PhongVeConst';


export const layDanhSachPhongVeACtion = (maNhom)=>{
    return async dispatch =>{
        try{
            let {status, data} = await axios({
                url : `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maNhom}`,
                method: 'GET',
            })
            if(status=== 200){
                dispatch({
                    type: LAY_DANH_SACH_PHONG_VE,
                    danhSachPhongVe: data
                })
            }
        }catch(err){
            console.log(err);
        }
    }
}
export const datVeAction = (thongTinVe)=>{
    return async dispatch =>{
        try{
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
                method:'POST',
                data: thongTinVe,
                headers: {Authorization: "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN)) }
            });
            //load lại danhh sach ghe trong phong ve
            dispatch(await layDanhSachPhongVeACtion(thongTinVe.maLichChieu));
            dispatch({type: DAT_VE_THANH_CONG});
        }catch(err){
            console.log(err);
        }
    }
}