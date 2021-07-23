import React from 'react';
import { useSelector } from 'react-redux';
import anhloading from '../../assets/img/loading.gif';

export default function Loading() {
    const {loadingNguoiDung}=useSelector(state=>state.NguoiDungReducer);
 
    if (!loadingNguoiDung) return null;
    return (
        <div className="container">
            <img className="imgLoading" src={anhloading} alt="loading"/>
        </div>
    )
}

