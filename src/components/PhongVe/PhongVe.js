import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './phongve.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import WeekendIcon from '@material-ui/icons/Weekend';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import Avatar from '@material-ui/core/Avatar';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Hidden from '@material-ui/core/Hidden';
import { datVeAction, layDanhSachPhongVeACtion } from '../../redux/action/PhongVeAction';
import { DAT_GHE, LAY_THONG_TIN_EMAIL, LAY_THONG_TIN_SDT } from '../../redux/constants/PhongVeConst';
import { USER_LOGIN, XU_LY_DANG_NHAP_THANH_CONG } from '../../redux/constants/NguoiDungConst';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { MenuItem, Menu } from "@material-ui/core";
import zalopay from '../../assets/img/zalo.jpg';
import atm from '../../assets/img/atm.png';
import visa from '../../assets/img/visa.png';
import manhinh from '../../assets/img/manhinh.png';
import DatVeThanhCong from '../DatVeThanhCong/DatVeThanhCong';
import Countdown from '../Countdown/Countdown';
import { layThongTinNguoiDung } from '../../redux/action/NguoiDungAction';



function getSteps() {
    return ['CHỌN GHẾ VÀ THANH TOÁN', 'KẾT QUẢ ĐẶT VÉ'];
}

export default function PhongVe(props) {
    const { danhSachPhongVe, danhSachGheDangDat } = useSelector(state => state.PhongVeReducer);
    const { danhSachGhe, thongTinPhim } = danhSachPhongVe;
    const { thongTinNguoiDung } = useSelector(state => state.NguoiDungReducer);
    let { tenDangNhap } = useSelector((state) => state.NguoiDungReducer);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [value, setValue] = useState('zalo');

    useEffect(() => {
        const id = props.match.params.id;
        dispatch(layDanhSachPhongVeACtion(id));
    }, []);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleDangXuat = () => {
        localStorage.clear();
        dispatch({
            type: XU_LY_DANG_NHAP_THANH_CONG,
            tenDangNhap: null,
        });
    };

    const renderDanhSachGhe = () => {
        return danhSachGhe?.map((seat, index) => {
            let classGheVip = seat.loaiGhe === "Vip" ? "seat-vip" : "";
            let classGheDaDat = seat.daDat ? "seat-dadat" : "";
            let disabled = seat.daDat ? "disabled" : "";
            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => seat.maGhe === gheDangDat.maGhe);
            let classGheDangDat = indexGheDangDat !== -1 ? "seat-dangchon" : "";
            return (
                <Fragment key={index}>
                    <IconButton
                        disabled={disabled}
                        onClick={() => {
                            dispatch({
                                type: DAT_GHE,
                                gheDangDat: {
                                    maGhe: seat.maGhe,
                                    giaVe: seat.giaVe,
                                    stt: seat.stt,
                                    daDat: seat.daDat,
                                }
                            })
                        }}
                    >
                        <WeekendIcon fontSize="small"
                            className={`${classGheVip} ${classGheDaDat} ${classGheDangDat}`} />
                    </IconButton>
                    {(index + 1) % 16 == 0 ? <br /> : ""}
                </Fragment>
            )
        })
    }
    const renderDatVe = () => {
        if (danhSachGheDangDat.length < 1) {
            return (<Button variant="contained" fullWidth disabled="true">Đặt Vé</Button>)
        } else {
            return (
                <Button variant="contained" fullWidth className="btn__datve"
                    onClick={() => {
                        if (localStorage.getItem(USER_LOGIN)) {
                            Swal.fire({
                                title: 'Xác nhận?',
                                text: "Bạn xác nhận muốn đặt vé, bạn có muốn đặt thêm gì hay không?",
                                icon: 'question',
                                showCancelButton: true,
                                confirmButtonColor: 'rgb(68, 192, 32)',
                                cancelButtonColor: 'rgb(251, 66, 38)',
                                confirmButtonText: 'Xác nhận',
                                cancelButtonText: 'Ở lại'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    //lấy ra userLogin từ locaStorage
                                    let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
                                    //let object backend cần
                                    let objectDatVe = {
                                        "maLichChieu": props.match.params.id,
                                        "danhSachVe": danhSachGheDangDat,
                                        "taiKhoanNguoiDung": userLogin.taiKhoan,
                                    }
                                    //dispatch gọi Api
                                    dispatch(datVeAction(objectDatVe));

                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Đặt vé thành công',
                                        showConfirmButton: false,
                                        timer: 1500,
                                    })
                                    dispatch(layThongTinNguoiDung(userLogin))
                                    setActiveStep(1);
                                }

                            })
                        } else {
                            Swal.fire({
                                title: 'Opps...',
                                text: 'Vui lòng đăng nhập',
                                icon: 'error',
                                confirmButtonText: 'Ok'
                            })

                        }
                    }}
                >Đặt Vé</Button>
            )
        }
    }
    const renderThanhToan = () => {
        if (danhSachGheDangDat.length < 1) {
            return (
                <Typography variant="caption" gutterBottom color="error">
                    Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
                </Typography>
            )
        } else {
            return (
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <div className="d-flex">
                            <FormControlLabel value="zalo" control={<Radio />} />
                            <div className="d-flex">
                                <img src={zalopay} alt={zalopay} style={{ width: 40, height: 40 }} />
                                <Typography variant="subtitle2" gutterBottom >Thanh toán qua ZaloPay</Typography>
                            </div>
                        </div>
                        <div className="d-flex">
                            <FormControlLabel value="visa" control={<Radio />} />
                            <div className="d-flex">
                                <img src={visa} alt={visa} className="img" />
                                <Typography variant="subtitle2" gutterBottom >Visa, Master, JCB</Typography>
                            </div>
                        </div>
                        <div className="d-flex">
                            <FormControlLabel value="atm" control={<Radio />} />
                            <div className="d-flex">
                                <img src={atm} alt={atm} className="img" />
                                <Typography variant="subtitle2" gutterBottom >Thẻ ATM nội địa</Typography>
                            </div>
                        </div>
                    </RadioGroup>
                </FormControl>
            )
        }
    }
    
    return (
        <div>
            <Grid container className="appBar">
                <Grid item md={9} xs={12} className="wrap__appBar">
                    <Grid>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Grid>
                    <Grid className="avatar" className="d-flex">
                        {tenDangNhap ? (
                            <div>
                                <Button
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <img
                                        style={{
                                            height: "30px",
                                            borderRadius: "50%",
                                            paddingRight: "5px",
                                        }}
                                        src={`https://i.pravatar.cc/150?u=${tenDangNhap.taiKhoan}`}
                                        alt="tenDangNhap"
                                    />
                                    {tenDangNhap.taiKhoan}
                                </Button>
                                <Menu
                                    style={{ top: 50 }}
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <NavLink to="/nguoiDung">Thông tin tài khoản</NavLink>
                                    </MenuItem>
                                    {tenDangNhap.maLoaiNguoiDung === "QuanTri" && (
                                        <MenuItem onClick={handleClose}>
                                            <NavLink to="/admin">Admin</NavLink>
                                        </MenuItem>
                                    )}
                                    <MenuItem onClick={handleClose}>
                                        <button className="btn__dangXuat" onClick={handleDangXuat}>
                                            Đăng Xuất
                                        </button>
                                    </MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <NavLink to="/dangNhap" className="d-flex">
                                <Avatar src="./img/header/avatar.png" alt="avartar tix" style={{ marginRight: 10 }} />
                                <span style={{ fontSize: 13, color: "#9b9b9b" }}>Đăng nhập</span>
                            </NavLink>
                        )}
                    </Grid>
                </Grid>
            </Grid>

            <Container maxWidth="xl" >
                {
                    activeStep === 0 ? (
                        <Grid container className="wrap__content">
                            <Grid item md={8} xs={12} className="d-flex cumRap">
                                <div className="d-flex">
                                    <ListItemText primary={thongTinPhim?.tenCumRap} secondary={thongTinPhim?.diaChi} />
                                </div>
                                <div className="d-flex-column">
                                    <Typography variant="caption" display="block" gutterBottom className="m-0">
                                        thời gian giữ ghế
                                    </Typography>

                                    <Countdown />
                                </div>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <img src={manhinh} alt={manhinh} className="w-100" />
                                <div className="danh__sach__ghe">
                                    <div>
                                        {
                                            renderDanhSachGhe()
                                        }
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={8} xs={12} >
                                <div className="d-flex ghe__Mo_Ta">
                                    <div className="d-flex-column">
                                        <WeekendIcon className="seat-thuong" />
                                        <Typography variant="p" display="block" gutterBottom className="m-0">
                                            Thường
                                        </Typography>
                                    </div>
                                    <div className="d-flex-column">
                                        <WeekendIcon className="seat-vip" />
                                        <Typography variant="p" display="block" gutterBottom className="m-0">
                                            VIP
                                        </Typography>
                                    </div>
                                    <div className="d-flex-column">
                                        <WeekendIcon className="seat-dangchon" />
                                        <Typography variant="p" display="block" gutterBottom className="m-0">
                                            Ghế đang chọn
                                        </Typography>
                                    </div>
                                    <div className="d-flex-column">
                                        <WeekendIcon className="seat-dadat" />
                                        <Typography variant="p" display="block" gutterBottom className="m-0">
                                            Ghế đã có người chọn
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid item md={8} xs={12} style={{ marginTop: 80 }}>
                            <DatVeThanhCong thongTinNguoiDung={thongTinNguoiDung}
                                thongTinPhim={thongTinPhim}
                            />
                        </Grid>
                    )
                }

                <Hidden smDown>
                    <Grid item md={3} className="thong__tin__ve">
                        <div component="nav" className="nav">
                            <div className="giaTien">
                                {
                                    danhSachGheDangDat.reduce((tt, gheDD, index) => {
                                        return tt += gheDD.giaVe;
                                    }, 0).toLocaleString()
                                }
                                đ
                            </div>
                            <Divider />
                            <div className="thong__tin__phim">
                                <div className="tenPhim">
                                    <img src={thongTinPhim?.hinhAnh} alt={thongTinPhim?.hinhAnh} className="img" />
                                    <div style={{ paddingLeft: 5, paddingTop: 5 }}>
                                        <Typography variant="subtitle2" gutterBottom>
                                            <span className="nameTag">C180</span>
                                            {thongTinPhim?.tenPhim}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu} - {thongTinPhim?.tenRap}
                                        </Typography>
                                    </div>
                                </div>

                            </div>
                            <Divider />
                            <div className="gia__ghe d-flex ">
                                <Typography variant="subtitle2" gutterBottom color="error">
                                    Ghế:
                                    {
                                        danhSachGheDangDat.map((gheDD, index) => {
                                            return (
                                                <span key={index} style={{ marginLeft: 5, marginRight: 5 }}>{gheDD.stt}</span>
                                            )
                                        })
                                    }
                                </Typography>
                            </div>
                            <Divider />
                            <div className="tex-field  ">
                                <TextField fullWidth label="Email" name="email" onChange={(e) => {
                                    let { value } = e.target;
                                    dispatch({
                                        type: LAY_THONG_TIN_EMAIL,
                                        email: value
                                    })
                                }}
                                />
                            </div>
                            <div className="tex-field  ">
                                <TextField fullWidth label="Phone" name="sdt" onChange={(e) => {
                                    let { value } = e.target;
                                    dispatch({
                                        type: LAY_THONG_TIN_SDT,
                                        sdt: value
                                    })
                                }}
                                />
                            </div>

                            <div className="tex-field  ">
                                <TextField
                                    fullWidth label="Mã giảm giá"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="center">
                                                <Button color="secondary">Áp dụng</Button>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div >
                                <Typography variant="subtitle2" gutterBottom >
                                    Hình thức thanh toán
                                </Typography>
                                {renderThanhToan()}
                            </div>
                            <div className="warning">
                                <Typography color="error">
                                    <ErrorIcon />
                                </Typography>
                                <Typography variant="caption" gutterBottom align="center">
                                    Vé đã mua không thể đổi hoặc hoàn tiền
                                    Mã vé sẽ được gửi qua tin nhắn <span className="seat-vip">ZMS</span> (tin nhắn Zalo) và <span className="seat-vip">Email</span>  đã nhập.
                                </Typography>
                            </div>
                        </div>
                        <div className="dat__ve">
                            {renderDatVe()}
                        </div>
                    </Grid>
                </Hidden>
            </Container>

        </div >
    )
}
