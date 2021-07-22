import React from 'react';
import useStyles from './MovieStyle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { useSelector } from 'react-redux';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuPropsPhim = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 600,
            top: " 50 !important"
        },
    },
};
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            top: " 50 !important"
        },
    },
};
const names = [
    `Trạng Tí Phiêu Lưu Ký`,
    `Lật Mặt: 48h`,
    `Thiên Thần Hộ Mệnh - The Guardian (C18)`,
    `Detective Conan: Scarlet Bullet - Thám Tử Lừng Danh Conan: Viên Đạn Đỏ - C13`,
    `Người Nhân Bản - Seobok (C16)`,
    `Bàn Tay Diệt Quỷ - Evil Expeller (C16)`,
    `Kẻ Vô Danh - Nobody - C18`,
    `Hùng Thần Trắng - Great White - C18`,
    `Chiến Binh Cuối Cùng: Cuội Nguồn Của Quỷ - The Last Warrior: Root Of Evil - C13`,
    `Ong Nhí Phiêu Lưu Ký: Giải Cứu Công Chúa Kiến - Maya The Bee 3: The Golden Orb - P`,
    `Nhân Đôi Tình Yêu - Double Party - C13`,
    `Trùm Cuối Siêu Đẳng - Boss Level - C18`
];
export default function MultipleSelect() {
    const {mangPhim} = useSelector((state) => state.PhimReducer);
    console.log("mangPhim", mangPhim);
    
    
    const classes = useStyles();
    const [phim, setPhim] = React.useState([]);
    const [rap, setRap] = React.useState([]);
    const [ngayXem, setNgayXem] = React.useState([]);

    const [open, setOpen] = React.useState(
        [{ phim: false, rap: false, ngayXem: false }],
    );

    const handleChangePhim = (event) => {
        setPhim(event.target.value);
    };
    const handleChangeRap = (event) => {
        setRap(event.target.value);
    };
    const handleChangeNgayXem = (event) => {
        setNgayXem(event.target.value);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Hidden smDown>
            <Container maxWidth="md" >
                <Grid container spacing={2} className={classes.root}>
                    <Grid item xs={4}  >
                        <FormControl className={classes.formControl}>
                            <InputLabel id="phim">Phim</InputLabel>
                            <Select className={classes.select}
                                open={open.phim}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                onChange={handleChangePhim}
                                labelId="phim"
                                id="phim"
                                value={phim}
                                input={<Input />}
                                MenuProps={MenuPropsPhim}
                            >
                                {mangPhim.map((phim,index) => (
                                    <MenuItem key={index} value={phim.tenPhim} >
                                        {phim.tenPhim}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="rap">Rạp</InputLabel>
                            <Select className={classes.select}
                                open={open.rap}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                onChange={handleChangeRap}
                                labelId="rap"
                                id="rap"
                                value={rap}
                                input={<Input />}
                                MenuProps={MenuProps}
                            >
                                {names.map((phim, index) => (
                                    <MenuItem key={index} value={phim.tenPhim} >
                                        {phim.tenPhim}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="ngayxem">Ngày giờ suất chiếu</InputLabel>
                            <Select className={classes.select}
                                open={open.ngayXem}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                onChange={handleChangeNgayXem}
                                labelId="ngayxem"
                                id="ngayxem"
                                value={ngayXem}
                                input={<Input />}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name} >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2} className={classes.boxBtn}>
                        <Button variant="contained" className={classes.btnMuaVe}>MUA VÉ NGAY</Button>
                    </Grid>

                </Grid>
            </Container>
        </Hidden>
    );
}
