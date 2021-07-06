import React from 'react';
import './datvethanhcong.scss';
import Grid from '@material-ui/core/Grid';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WeekendIcon from '@material-ui/icons/Weekend';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function DatVeThanhCong(props) {
    const { thongTinNguoiDung, thongTinPhim } = props;
    const { danhSachGheDaDat, email, sdt } = useSelector(state => state.PhongVeReducer);
    
    return (
        <div>
            <Grid className="wrap__datvethanhcong">
                <div className="title">
                    <p>ĐẶT VÉ THÀNH CÔNG</p>
                </div>
                <div className="thongtin">
                    <div className="thongtin__item">
                        <div className="icon">
                            <PermContactCalendarIcon />
                        </div>
                        <div>
                            <Typography variant="subtitle2" gutterBottom>Tài khoản: {thongTinNguoiDung?.taiKhoan}</Typography>
                            <Typography variant="subtitle2" gutterBottom>Email: {email}</Typography>
                            <Typography variant="subtitle2" gutterBottom>Số điện thoại: {sdt}</Typography>
                        </div>
                    </div>
                    <div className="thongtin__item">
                        <div className="icon">
                            <LocalMoviesIcon />
                        </div>
                        <Typography variant="subtitle2" gutterBottom>Tên Phim: {thongTinPhim.tenPhim}</Typography>
                    </div>
                    <div className="thongtin__item">
                        <div className="icon">
                            <LocationCityIcon />
                        </div>
                        <div>
                            <Typography variant="subtitle2" gutterBottom>
                                Rạp: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                Thời gian chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
                            </Typography>
                        </div>
                    </div>
                    <div className="thongtin__item">
                        <div className="icon">
                            <WeekendIcon />
                        </div>
                        <div>
                            <Typography variant="subtitle2" gutterBottom>Danh sách ghế được đặt</Typography>
                            <div className="wrap__ghe">
                                {danhSachGheDaDat.map((item, index) => {
                                    return (
                                        <p key={index} className="ghe">{item.stt}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="thongtin__item">
                        <div className="icon">
                            <MonetizationOnIcon />
                        </div>
                        <div>
                            <Typography variant="subtitle2" gutterBottom>
                            Tổng tiền:   <span className="tongTien">{danhSachGheDaDat.reduce((tt, item, index) => {
                                    return tt += item.giaVe;
                                }, 0).toLocaleString()}</span></Typography>
                        </div>
                    </div>
                </div>
                <div className="datvemoi">
                    <NavLink to='/'>
                        <Button className="btn">Về trang chủ</Button>
                    </NavLink>
                    <a href={`/phongve/${thongTinPhim?.maLichChieu}`}>
                        <Button className="btn">Đặt vé mới</Button>
                    </a>
                </div>
            </Grid>
        </div>
    )
}
