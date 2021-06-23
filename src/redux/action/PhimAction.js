import axios from "axios";
import { GET_PHIM_API } from "../constants/PhimConst";

export const getPhimAPI = () => {
    return dispatch => {
        let promise = axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04',
            method: 'GET',
        });
        promise.then((rs) => {
            dispatch({
                type: GET_PHIM_API,
                mangPhim: rs.data,
                
            })
        });
        promise.catch((err) => {
            console.log(err);
        });
    }
}