import { DAT_GHE, DAT_VE_THANH_CONG, LAY_DANH_SACH_PHONG_VE } from "../constants/PhongVeConst";
import Swal from 'sweetalert2';


const initialState = {
    danhSachPhongVe: [],
    danhSachGheDangDat: [],
}

const PhongVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHONG_VE: {
            state.danhSachPhongVe = action.danhSachPhongVe;
            return { ...state }
        }
        case DAT_GHE: {
            let mangGheDangDat = [...state.danhSachGheDangDat];
            let index = mangGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDangDat.maGhe);
            if (index !== -1) {
                mangGheDangDat.splice(index, 1);
            } else {
                if (mangGheDangDat.length > 5) {
                    Swal.fire({
                        title: 'Opps...',
                        text: 'Bạn không thể chọn quá 6 ghế',
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: 'rgb(251, 66, 38)',
                    })
                } else {
                    mangGheDangDat.push(action.gheDangDat);
                }
            }
            return { ...state, danhSachGheDangDat: mangGheDangDat };
        }
        case DAT_VE_THANH_CONG: {
            return { ...state, danhSachGheDangDat: [] }
        }
        default:
            return state
    }
}
export default PhongVeReducer;