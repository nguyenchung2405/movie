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
import { DAT_GHE } from '../../redux/constants/PhongVeConst';
import { USER_LOGIN } from '../../redux/constants/NguoiDungConst';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';


function getSteps() {
    return ['CHỌN GHẾ VÀ THANH TOÁN', 'KẾT QUẢ ĐẶT VÉ'];
}

export default function PhongVe(props) {
    const { danhSachPhongVe, danhSachGheDangDat } = useSelector(state => state.PhongVeReducer);
    const { danhSachGhe, thongTinPhim } = danhSachPhongVe;
    const dispatch = useDispatch();

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [value, setValue] = React.useState('zalo');

    useEffect(() => {
        const id = props.match.params.id;
        dispatch(layDanhSachPhongVeACtion(id));
    }, []);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
            if (minutes === 0 && seconds === 0) {
                Swal.fire({
                    title: 'Opps...',
                    text: 'Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút.',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: 'rgb(251, 66, 38)',
                }).then(() => {
                    window.location.reload(true);
                })
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };

    });


    const handleChange = (event) => {
        setValue(event.target.value);
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
                                        timer: 1500
                                    })

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
                                <img src="./img/datve/zalo.jpg" alt="zalo" className="img" />
                                <Typography variant="subtitle2" gutterBottom >Thanh toán qua ZaloPay</Typography>
                            </div>
                        </div>
                        <div className="d-flex">
                            <FormControlLabel value="visa" control={<Radio />} />
                            <div className="d-flex">
                                <img src="../../assets/img/zalo.jpg" alt="zalo" className="img" />
                                <Typography variant="subtitle2" gutterBottom >Visa, Master, JCB</Typography>
                            </div>
                        </div>
                        <div className="d-flex">
                            <FormControlLabel value="atm" control={<Radio />} />
                            <div className="d-flex">
                                <img src="../../assets/img/zalo.jpg" alt="zalo" className="img" />
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
                        <NavLink to="/dangNhap" className="d-flex">
                            <Avatar src="./img/header/avatar.png" alt="avartar tix" style={{ marginRight: 10 }} />
                            <span style={{ fontSize: 13, color: "#9b9b9b" }}>Đăng nhập</span>
                        </NavLink>
                    </Grid>
                </Grid>
            </Grid>
            <Container maxWidth="xl" >
                <Grid container className="wrap__content">
                    <Grid item md={8} xs={12} className="d-flex cumRap">
                        <div className="d-flex">
                            <ListItemText primary={thongTinPhim?.tenCumRap} secondary={thongTinPhim?.diaChi} />
                        </div>
                        <div className="d-flex-column">
                            <Typography variant="caption" display="block" gutterBottom className="m-0">
                                thời gian giữ ghế
                            </Typography>
                            {minutes === 0 && seconds === 0 ? null
                                : <Typography variant="h5" display="block" gutterBottom color="error">
                                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                                </Typography>
                            }
                        </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <img src="data:image/png;base64,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" alt="../../assets/img/manhinh.png" className="w-100" />
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
                                <TextField id="standard-basic" fullWidth label="Email" />
                            </div>
                            <div className="tex-field  ">
                                <TextField id="standard-basic" fullWidth label="Phone" />
                            </div>
                            <div className="tex-field  ">
                                <TextField id="standard-basic"
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
