import axios from "axios";
import { GET_PHIM_API } from "../constants/PhimConst";

export const getPhimAPI = (maNhom = 'GP04') => {
    return async dispatch => {
        try {
            let { data, status } = await axios({
                url:  `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
                method: 'GET',
            });
            if (status === 200) {
                dispatch({
                    type: GET_PHIM_API,
                    mangPhim: data,
                })
            }
        } catch (err) {
            console.log(err);
        }
    }

    // return dispatch => {
    //     let promise = axios({
    //         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
    //         method: 'GET',
    //     });
    //     promise.then((rs) => {
    //         console.log("phim action", rs.data);
    //         dispatch({
    //             type: GET_PHIM_API,
    //             mangPhim: rs.data,
    //         })
    //     });
    //     promise.catch((err) => {
    //         console.log(err);
    //     });
    // }
}