import React, { Fragment } from 'react';
import '../cumrapstyle.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { USER_LOGIN } from '../../../redux/constants/NguoiDungConst';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const Accordion = withStyles({
    root: {
        width: '100%',
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    // expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    // expanded: {},
})(MuiAccordionSummary);
const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function BHD(props) {
    const { logo, lstCumRap } = props.cumRap;
    const history = useHistory();
    const [expanded, setExpanded] = React.useState('panel1');
    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };
    const handleRoute = (url) => {
        if (localStorage.getItem(USER_LOGIN)) {
            // const win = window.open(url, '_black');
            // win.focus();
            return history.push(url);
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
                    return history.push("/dangNhap");
                }
            })
        }
    }
    const renderHeThongCumRap = () => {
        return (
            <Tabs className="tab" style={{ width: "100%" }}>
                <TabList style={{ width: "37%" }} className="diadiem__Rap">
                    {
                        lstCumRap.map((rap, index) => {
                            return (
                                <Tab key={index}>
                                    <div className="rapInfo opacity03 active">
                                        <img src={logo} alt={logo} className="img" />
                                        <div className="d-flex">
                                            <p className="colorBHD">{rap.tenCumRap}</p>
                                            <Typography noWrap style={{ width: "80%" }}>{rap.diaChi}</Typography>
                                            <a href="#">[chi tiết]</a>
                                        </div>
                                    </div>
                                </Tab>
                            )
                        })
                    }
                </TabList>
                <div style={{ width: "63%" }} className="listMovie">
                    {
                        lstCumRap.map((dsPhim) => {
                            const { danhSachPhim } = dsPhim;
                            return (
                                <TabPanel key={dsPhim.tenCumRap}>
                                    {
                                        danhSachPhim.map((phim, index) => {
                                            return (
                                                <div key={index} className=" wrapListMovie">
                                                    <Accordion >
                                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                            <div className="titleMovie ">
                                                                <img src={phim.hinhAnh} alt={phim.hinhAnh} className="imgRap" />
                                                                <div style={{ paddingLeft: 15 }}>
                                                                    <h4> <span className="ageType">P</span>  {phim.tenPhim}</h4>
                                                                    <p className="">100 phút - TIX 7.7 - IMDb 0</p>
                                                                </div>
                                                            </div>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <div className="flex-start">
                                                                <h4 className="viewD">2D  Digital</h4>
                                                                <div className="lichCHieu">
                                                                    {
                                                                        phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                                                            return (
                                                                                <button className="btnMovie" type="button" key={index}
                                                                                    onClick={() => {
                                                                                        handleRoute(`phongve/${lichChieu.maLichChieu}`)
                                                                                    }}
                                                                                >
                                                                                    <p className="btnColorBHD">{(lichChieu.ngayChieuGioChieu).substr(0, 10)}</p>
                                                                                    <p className="btnColorBHD lichDate">{(lichChieu.ngayChieuGioChieu).substr(11, 5)}</p>

                                                                                </button>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </div>
                                            )
                                        })
                                    }
                                </TabPanel>
                            )
                        })
                    }

                </div>
            </Tabs>
        )

    }
    return (
        <Fragment>
            {renderHeThongCumRap()}
        </Fragment>
    )
}
