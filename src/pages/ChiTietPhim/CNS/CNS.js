import React from 'react';
import './cns.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { useHistory } from 'react-router-dom';
import { USER_LOGIN } from '../../../redux/constants/NguoiDungConst';
import Swal from 'sweetalert2';

const Accordion = withStyles({
    root: {
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
    expanded: {},
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
    expanded: {},
})(MuiAccordionSummary);
const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function CNS(props) {
    const { heThongRapChieu } = props;
    const history = useHistory();
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
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
    const renderRap = () => {
        if (!!heThongRapChieu) {
            return heThongRapChieu.map((item, index) => {
                return (
                    <Tab key={index} className="rapInfo">
                        <div className="info__Item">
                            <img src={item.logo} alt={item.logo} className="imgDetail" />
                            <h4 className="infoH" >{item.tenHeThongRap}</h4>
                        </div>
                    </Tab>
                )
            })
        }
    }
    const rendercumRapChieu = () => {
        if (!!heThongRapChieu) {
            return heThongRapChieu.map((item) => {
                const { cumRapChieu } = item;
                return (
                    <TabPanel key={item.maHeThongRap} className="w-100">
                        {
                            cumRapChieu.map((rapItem, index) => {
                                return (
                                    <div className="wrapListMovieCNS" key={index}>
                                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                <div className="titleMovie ">
                                                    <img src={item.logo} alt={item.logo} className="img" />
                                                    <div style={{ paddingLeft: 15 }}>
                                                        <h4>{rapItem.tenCumRap}</h4>
                                                        <p className="">100 phút - TIX 7.7 - IMDb 0</p>
                                                    </div>
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div className="flex-start">
                                                    <h4 className="viewD_detail">2D Digital</h4>
                                                    <div className="lichCHieuDetail">
                                                        {
                                                            rapItem.lichChieuPhim.map((lichChieu, index) => {
                                                                return (
                                                                    <button className="btnMovieDetail" type="button" key={index}
                                                                        onClick={() => {
                                                                            handleRoute(`/phongve/${lichChieu.maLichChieu}`)
                                                                        }}
                                                                    >
                                                                        <p className="btnColorBHD_detail ">{(lichChieu.ngayChieuGioChieu).substr(0, 10)}</p>
                                                                        <p className="btnColorBHD_detail ">{(lichChieu.ngayChieuGioChieu).substr(11, 5)}</p>
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
    }



    return (
        <Tabs className="tabDetail" style={{ width: "100%" }}>
            <TabList style={{ width: "37%" }} className="diadiem__RapCNS">
                {renderRap()}
            </TabList>
            <div style={{ width: "63%" }} className="listMovieCNS">
                {rendercumRapChieu()}
            </div>
        </Tabs >

    )
}
