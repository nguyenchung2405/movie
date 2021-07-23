import React, { useState, useEffect } from 'react';
import useStyles from './MovieStyle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from 'axios';
import { USER_LOGIN } from '../../redux/constants/NguoiDungConst';
import Swal from 'sweetalert2';
import CustomPopper from './CustomPopper';


export default function MovieSelect(props) {
    const { mangPhim } = useSelector((state) => state.PhimReducer);

    const [data, setData] = useState({
        // handleSelectPhim
        setPhim: "",
        rapRender: [],
        cumRapChieuData: [],
        startRequest: false, // lựa chọn giữa hiện thị "đang tìm" hay "không tìm thấy"
        errorCallApi: "",
        // handleSelectRap
        setRap: "",
        ngayChieuRender: [],
        lichChieuPhimData: [],
        // handleSelectNgayXem
        setNgayXem: "",
        suatChieuRender: [],
        lichChieuPhimDataSelected: [],
        // handleSelectSuatChieu
        setSuatChieu: "",
        maLichChieu: "",
        // handleOpen
        openCtr: { phim: false, rap: false, ngayXem: false, suatChieu: false },
        // element:
        rootElementPopup: null,
    });
    const classes = useStyles({
        openPhim: data.openCtr.phim || data.setPhim?.maPhim,
    });
    const [topPopup, setTopPopup] = useState(false);
    const [currentPhimPopup, setcurrentPhimPopup] = useState(null);
    // popup item phim lật như thế nào(lên hay xuống) thì set các popup khác lật như thế ấy, item phim dùng popper, item còn lại dùng popover
    useEffect(() => {
        let mounted = true;
        if (!data.openCtr.phim) {
            return undefined;
        }
        setTimeout(() => {
            const placementPopup = document.querySelector(
                'div[role="presentation"].MuiAutocomplete-popper'
            );
            if (placementPopup?.getAttribute("x-placement") === "bottom" && mounted) {
                setTopPopup(false);
            } else if (
                placementPopup?.getAttribute("x-placement") === "top" &&
                mounted
            ) {
                setTopPopup(true);
            }
            // đưa elememt xuống popup thứ hai để định vị Popper
            setData((data) => ({
                ...data,
                rootElementPopup: placementPopup,
            }));
        }, 50);
        return () => {
            mounted = false;
        };
    }, [data.openCtr.phim]);
    //các hàm cho chọn phim
    const handleOpenPhim = () => {
        setData((data) => ({
            ...data,
            openCtr: { ...data.openCtr, phim: true },
        }));
    };
    const handleClosePhim = () => {
        setData((data) => ({ ...data, openCtr: { ...data.openCtr, phim: false } }));
    };
    // sau khi click chọn phim, cần duyệt lấy tất cả cumRapChieu lưu vào cumRapChieuData để xử lý
    // input: maPhim
    // output: setPhim(maPhim), rapRender(maPhim)[tenCumRap], cumRapChieuData(maPhim)[{lichChieuPhim}],
    const handleSelectPhim = (phim) => {
        if (!phim) {
            return undefined;
        }
        setData((data) => ({
            ...data,
            setPhim: phim,
            startRequest: true,
            openCtr: { ...data.openCtr, rap: true },
            rapRender: [],
            cumRapChieuData: [],
            setRap: "",
            ngayChieuRender: [],
            lichChieuPhimData: [],
            setNgayXem: "",
            suatChieuRender: [],
            lichChieuPhimDataSelected: [],
            setSuatChieu: "",
            maLichChieu: "",
        }));
        let promise = axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${phim.maPhim}`,
            method: 'GET',
        })
        promise.then((result) => {
            setData((data) => ({ ...data, startRequest: false }));
            const cumRapChieuData = result.data.heThongRapChieu.reduce(
                (colect, item) => {
                    return [...colect, ...item.cumRapChieu];
                }, []);
            const rapRender = cumRapChieuData.map((item) => item.tenCumRap);
            setData((data) => ({
                ...data,
                rapRender,
                cumRapChieuData,
            }));
        })
        promise.catch(function (error) {
            if (error.response) {
                setData((data) => ({ ...data, errorCallApi: error.response.data }));
            } else if (error.request) {
                setData((data) => ({ ...data, errorCallApi: error.message }));
            }
        });
    };
    const setNewPhim = (maPhim) => {
        setcurrentPhimPopup(maPhim);
    };
    // quy định nó sẽ lật như thế nào
    const menuProps = {
        // props và class của menu(Popover)
        classes: { paper: classes.menu },
        getContentAnchorEl: null, // không có dòng này popup "đang tìm rạp" bị set ở vị trí chính giữa
        anchorOrigin: {
            vertical: topPopup ? "top" : "bottom",
            horizontal: "left",
        },
        transformOrigin: {
            vertical: topPopup ? "bottom" : "top",
            horizontal: "left",
        },
    };
    //các hàm cho chọn rap
    const handleOpenRap = () => {
        setData((data) => ({ ...data, openCtr: { ...data.openCtr, rap: true } }));
    };
    const handleCloseRap = () => {
        setData((data) => ({ ...data, openCtr: { ...data.openCtr, rap: false } }));
    };
    // sau khi click chọn Rạp, cần lấy ra prop lichChieuPhim của Rạp đã chọn > lọc ra ngày chiếu để hiển thị
    // input: tenCumRap, cumRapChieuData
    // output: setRap(tenCumRap), ngayChieuRender(tenCumRap,cumRapChieuData)[ngayChieu], lichChieuPhimData(tenCumRap,cumRapChieuData)[{ngayChieuGioChieu: "2019-01-01T10:10:00"}]
    const handleSelectRap = (e) => {
        setData((data) => ({
            ...data,
            setRap: e.target.value,
            openCtr: { ...data.openCtr, ngayXem: true },
            // reset
            ngayChieuRender: [],
            lichChieuPhimData: [],
            setNgayXem: "",
            suatChieuRender: [],
            lichChieuPhimDataSelected: [],
            setSuatChieu: "",
            maLichChieu: "",
        }));
        const indexSelect = data.cumRapChieuData.findIndex(
            (item) => item.tenCumRap === e.target.value
        ); // lấy ra lichChieuPhimData của một cụm rạp đã chọn, item lichChieuPhimData có thể giống ngày nhưng khác giờ chiếu
        const lichChieuPhimData = data.cumRapChieuData[indexSelect].lichChieuPhim;
        const ngayChieuRender = lichChieuPhimData.map((item) => {
            return item.ngayChieuGioChieu.slice(0, 10); // tạo mảng mới với item là "2020-12-17" cắt ra từ 2020-12-17T10:10:00
        });
        const ngayChieuRenderRemoveDuplicates = [...new Set(ngayChieuRender)]; // xóa đi phần tử trùng lặp để hiển thị
        setData((data) => ({
            ...data,
            ngayChieuRender: ngayChieuRenderRemoveDuplicates,
            lichChieuPhimData,
        }));
    };
    //các hàm ngày xem
    const handleOpenNgayXem = () => {
        setData((data) => ({
            ...data,
            openCtr: { ...data.openCtr, ngayXem: true },
        }));
    };
    const handleCloseNgayXem = () => {
        setData((data) => ({
            ...data,
            openCtr: { ...data.openCtr, ngayXem: false },
        }));
    };
    // sau khi click chọn ngày, cần lọc ra lịch chiếu tương ứng, thêm giờ để render
    // input: ngayChieu, lichChieuPhimData
    // output: setNgayXem(ngayChieu), suatChieuRender(lichChieuPhimDataSelected)[suatChieu], lichChieuPhimDataSelected(ngayChieu,lichChieuPhimData)[{ngayChieuGioChieu: "2019-01-01T10:10:00", maLichChieu: "16099"}],
    const handleSelectNgayXem = (e) => {
        setData((data) => ({
            ...data,
            setNgayXem: e.target.value,
            openCtr: { ...data.openCtr, suatChieu: true },
            // reset
            suatChieuRender: [],
            lichChieuPhimDataSelected: [],
            setSuatChieu: "",
            maLichChieu: "",
        }));

        const lichChieuPhimDataSelected = data.lichChieuPhimData.filter((item) => {
            // lấy tất cả item có ngày chiếu giống với ngày chiếu đã chọn
            if (item.ngayChieuGioChieu.slice(0, 10) === e.target.value) {
                return true;
            }
            return false;
        });
        const suatChieuRender = lichChieuPhimDataSelected.map((item) => {
            // cắt lấy giờ chiếu trong ngayChieuGioChieu: "2019-01-01T20:00:00" > "20:00"
            return item.ngayChieuGioChieu.slice(11, 16);
        });
        setData((data) => ({
            ...data,
            suatChieuRender,
            lichChieuPhimDataSelected,
        }));
    };
    //các hàm suất chiếu
    const handleOpenSuatChieu = () => {
        setData((data) => ({
            ...data,
            openCtr: { ...data.openCtr, suatChieu: true },
        }));
    };
    const handleCloseSuatChieu = () => {
        setData((data) => ({
            ...data,
            openCtr: { ...data.openCtr, suatChieu: false },
        }));
    };
    // input: suatChieu
    // output: setSuatChieu(suatChieu), maLichChieu(suatChieu)[maLichChieu]
    const handleSelectSuatChieu = (e) => {
        setData((data) => ({
            ...data,
            setSuatChieu: e.target.value,
            // reset
            maLichChieu: "",
        }));
        const indexMaLichChieuSelect = data.lichChieuPhimDataSelected.findIndex(
            (item) => item.ngayChieuGioChieu.slice(11, 16) === e.target.value
        );
        const maLichChieu =
            data.lichChieuPhimDataSelected[indexMaLichChieuSelect].maLichChieu;
        setData((data) => ({ ...data, maLichChieu }));
    };

    const handleRoute = (url) => {
        if (localStorage.getItem(USER_LOGIN)) {
            const win = window.open(url, '_black');
            win.focus();
        } else {
            Swal.fire({
                title: 'Opps...',
                text: "Bạn chưa đăng nhập để thực hiện tác vụ này",
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: 'rgb(251, 66, 38)',
                cancelButtonColor: '#757575',
                confirmButtonText: 'Đăng nhập',
                cancelButtonText: 'Để sau',
            }).then((result) => {
                if (result.isConfirmed) {
                    return props.history.push("/dangNhap");
                }
            })
        }
    }

    return (
        <Hidden smDown>
            <Container maxWidth="md" >
                <Grid container spacing={2} className={classes.root}>
                    <Grid item xs={4}  >
                        <FormControl focused={false} className={classes.itemFirst}>
                            <Autocomplete
                                options={mangPhim}
                                getOptionLabel={(option) => option.tenPhim}
                                style={{ width: 300 }}
                                renderInput={(params) => {
                                    // <SearchIcon />
                                    return (
                                        <TextField
                                            {...params}
                                            label="Tìm phim..."
                                            variant="standard"
                                            className={classes.textField}
                                        />
                                    );
                                }}
                                renderOption={(phim) => (
                                    <CustomPopper
                                        key={phim.tenPhim}
                                        phim={phim}
                                        setNewPhim={setNewPhim}
                                        currentPhimPopup={currentPhimPopup}
                                        rootElementPopup={data.rootElementPopup}
                                    />
                                )}
                                popupIcon={<ExpandMoreIcon />}
                                value={data.setPhim ? data.setPhim : null}
                                onChange={(event, phim) => {
                                    handleSelectPhim(phim);
                                }}
                                classes={{
                                    popupIndicator: classes.popupIndicator,
                                    option: classes.menu__item,
                                    listbox: classes.listbox,
                                    paper: classes.paper,
                                    noOptions: classes.noOptions,
                                }}
                                open={data.openCtr.phim} // control open
                                onClose={handleClosePhim}
                                onOpen={handleOpenPhim}
                                blurOnSelect
                                noOptionsText="Không tìm thấy"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl
                            className={`${classes["search__item--next"]} ${classes.search__item}  ${classes.formControl}`}
                            focused={false}
                        >
                            <Select
                                open={data.openCtr.rap}
                                onClose={handleCloseRap}
                                onOpen={handleOpenRap}
                                onChange={handleSelectRap}
                                value={data.setRap} // tenCumRap
                                renderValue={(value) => `${value ? value : "Rạp"}`} // hiển thị giá trị đã chọn
                                displayEmpty
                                IconComponent={ExpandMoreIcon}
                                MenuProps={menuProps}
                            >
                                <MenuItem
                                    value=""
                                    style={{ display: data.rapRender.length > 0 ? "none" : "block" }}
                                    classes={{ root: classes.menu__item }}
                                >
                                    {data.setPhim
                                        ? `${data.startRequest
                                            ? data.errorCallApi
                                                ? data.errorCallApi
                                                : "Đang tìm rạp"
                                            : "Chưa có lịch chiếu, vui lòng chọn phim khác"
                                        }`
                                        : "Vui lòng chọn phim"}
                                </MenuItem>
                                {data.rapRender.map((item) => (
                                    <MenuItem
                                        value={item}
                                        key={item}
                                        classes={{
                                            root: classes.menu__item,
                                            selected: classes["menu__item--selected"],
                                        }}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl
                            className={`${classes["search__item--next"]} ${classes.search__item}`}
                            focused={false}
                        >
                            <Select
                                open={data.openCtr.ngayXem}
                                onClose={handleCloseNgayXem}
                                onOpen={handleOpenNgayXem}
                                onChange={handleSelectNgayXem}
                                value={data.setNgayXem} // ngayChieu
                                renderValue={(value) => `${value ? value : "Ngày xem"}`}
                                displayEmpty
                                IconComponent={ExpandMoreIcon}
                                MenuProps={menuProps}
                            >
                                <MenuItem
                                    value=""
                                    style={{
                                        display: data.ngayChieuRender.length > 0 ? "none" : "block",
                                    }}
                                    classes={{ root: classes.menu__item }}
                                >
                                    Vui lòng chọn phim và rạp
                                </MenuItem>
                                {data.ngayChieuRender.map((ngayChieu) => (
                                    <MenuItem
                                        value={ngayChieu}
                                        key={ngayChieu}
                                        classes={{
                                            root: classes.menu__item,
                                            selected: classes["menu__item--selected"],
                                        }}
                                    >
                                        <span>{ngayChieu}</span>
                                        {/* <div>{formatDate(ngayChieu).dayToday}</div>
                                        <div>{formatDate(ngayChieu).dateShort}</div> */}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl
                            className={`${classes["search__item--next"]} ${classes.search__item}`}
                            focused={false}
                        >
                            <Select
                                open={data.openCtr.suatChieu}
                                onClose={handleCloseSuatChieu}
                                onOpen={handleOpenSuatChieu}
                                onChange={handleSelectSuatChieu}
                                value={data.setSuatChieu} // suatChieu
                                renderValue={(value) => `${value ? value : "Suất chiếu"}`}
                                displayEmpty
                                IconComponent={ExpandMoreIcon}
                                MenuProps={menuProps}
                            >
                                <MenuItem
                                    value=""
                                    style={{
                                        display: data.suatChieuRender.length > 0 ? "none" : "block",
                                    }}
                                    classes={{ root: classes.menu__item }}
                                >
                                    Vui lòng chọn phim, rạp và ngày xem
                                </MenuItem>
                                {data.suatChieuRender.map((suatChieu) => (
                                    <MenuItem
                                        value={suatChieu}
                                        key={suatChieu}
                                        classes={{
                                            root: classes.menu__item,
                                            selected: classes["menu__item--selected"],
                                        }}
                                    >
                                        {suatChieu}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2} >
                        <FormControl className={classes["search__item--next"]}>
                            <Button
                                disabled={!data.maLichChieu} // khi không có dữ liệu > disabled cần set true
                                classes={{
                                    root: classes.btn,
                                    disabled: classes.btnDisabled,
                                }}
                                onClick={() => {
                                    handleRoute(`phongve/${data.maLichChieu}`)
                                }}
                            >
                                mua vé ngay
                            </Button>
                        </FormControl>
                    </Grid>

                </Grid>
            </Container>
        </Hidden>
    );
}
