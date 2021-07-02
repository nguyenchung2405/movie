import React from 'react';
import './phongve.scss'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import WeekendIcon from '@material-ui/icons/Weekend';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Hidden from '@material-ui/core/Hidden';

function getSteps() {
    return ['CHỌN GHẾ VÀ THANH TOÁN', 'KẾT QUẢ ĐẶT VÉ'];
}

export default function PhongVe() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button>
                    addadad
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    addadad
                </ListItem>
            </List>
        </div>
    );

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
                    <Grid className="d-flex avatar">
                        <Avatar alt="Remy Sharp" src="./img/header/avatar.png" className="img" />
                        <Typography variant="subtitle2" gutterBottom>Khanh Vương</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Container maxWidth="xl" >
                <Grid container className="wrap__content">
                    <Grid item md={8} xs={12} className="d-flex cumRap">
                        <div className="d-flex">
                            <img src="./img/cumrap/bhd.png" alt=".img/cumrap/bhd.png" className="img" />
                            <ListItemText primary="CGV-CrescentMall" secondary="-10:01 - Rạp 9" />
                        </div>

                        <div className="d-flex-column">
                            <Typography variant="caption" display="block" gutterBottom className="m-0">
                                thời gian giữ ghế
                            </Typography>
                            <Typography variant="h5" display="block" gutterBottom color="error" className="m-0">
                                5:00
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <img src="./img/datve/manhinh.png" alt="./img/datve/manhinh.png" className="w-100" />
                        <div className="danh__sach__ghe">
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <WeekendIcon fontSize="large" />
                            </IconButton>
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
                                <WeekendIcon className="seat-daconguoichon" />
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
                                <p>0đ</p>
                            </div>
                            <Divider />
                            <div className="thong__tin__phim">
                                <Typography variant="subtitle2" gutterBottom>
                                    <span className="nameTag">C180</span>Lừa Đểu Gặp Lừa Đảo
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    BHD Star Cineplex - Bitexco
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    30/6/2021 - 10:01 - Rạp 9
                                </Typography>
                            </div>
                            <Divider />
                            <div className="gia__ghe d-flex ">
                                <Typography variant="subtitle2" gutterBottom color="error">
                                    Ghế
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom className="seat-dangchon">
                                    0đ
                                </Typography>
                            </div>
                            <Divider />
                            <div className="gia__ghe d-flex ">
                                <React.Fragment>
                                    <Button onClick={toggleDrawer('right', true)}><span>Chọn combo</span></Button>
                                    <Drawer anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}>
                                        {list('right')}
                                    </Drawer>
                                </React.Fragment>
                                <Typography variant="subtitle2" gutterBottom className="seat-dangchon">
                                    0đ
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
                                <Typography variant="caption" gutterBottom color="error">
                                    Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
                                </Typography>

                            </div>
                            <div className="warning">
                                <Typography color="error">
                                    <ErrorIcon />
                                </Typography>
                                <Typography variant="body2" gutterBottom align="center">
                                    Vé đã mua không thể đổi hoặc hoàn tiền
                                    Mã vé sẽ được gửi qua tin nhắn <span className="seat-vip">ZMS</span> (tin nhắn Zalo) và <span className="seat-vip">Email</span>  đã nhập.
                                </Typography>
                            </div>
                        </div>
                        <Button variant="contained" fullWidth>Đặt Vé</Button>
                    </Grid>
                </Hidden>
            </Container>
            
        </div >
    )
}
