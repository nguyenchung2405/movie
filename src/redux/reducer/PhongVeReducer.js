import { DAT_GHE, DAT_VE_THANH_CONG, LAY_DANH_SACH_PHONG_VE, LAY_THONG_TIN_EMAIL, LAY_THONG_TIN_SDT } from "../constants/PhongVeConst";
import Swal from 'sweetalert2';


const initialState = {
    danhSachPhongVe: [],
    danhSachGheDangDat: [],
    danhSachGheDaDat: [],
    
    email: "abc@.gmail.com",
    sdt: "0987654321",
}

const PhongVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHONG_VE: {
            state.danhSachPhongVe = action.danhSachPhongVe;
            let danhSachPhongVeUpdate ={...state.danhSachPhongVe};
            danhSachPhongVeUpdate && (danhSachPhongVeUpdate.thongTinPhim.hinhAnh= danhSachPhongVeUpdate.thongTinPhim.hinhAnh.replace("http:","https:"));
            state.danhSachPhongVe=danhSachPhongVeUpdate;
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
            state.danhSachGheDaDat = state.danhSachGheDangDat;

            return { ...state, danhSachGheDangDat: [] }
        }
        case LAY_THONG_TIN_SDT: {
            const sdt = {...action.sdt};
            return { ...state, sdt:sdt };
        }
        case LAY_THONG_TIN_EMAIL: {
            const email = action.email;
            return { ...state, email:email };
        }
        default:
            return state
    }
}
export default PhongVeReducer;