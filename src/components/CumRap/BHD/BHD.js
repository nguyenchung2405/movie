import React, { Fragment } from 'react';
import '../cumrapstyle.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { NavLink } from 'react-router-dom';

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

export default function BHD(props) {
    const { logo, lstCumRap } = props.cumRap;

    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const renderHeThongCumRap = () => {
        return (
            <Tabs className="tab" style={{ width: "100%" }}>
                <TabList style={{ width: "40%" }} className="diadiem__Rap">
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
                <div style={{ width: "60%" }} className="listMovie">
                    {
                        lstCumRap.map((dsPhim) => {
                            const { danhSachPhim } = dsPhim;
                            return (
                                <TabPanel key={dsPhim.tenCumRap}>
                                    {
                                        danhSachPhim.map((phim, index) => {
                                            return (
                                                <div key={index} className=" wrapListMovie">
                                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                            <div className="titleMovie ">
                                                                <img src={phim.hinhAnh} alt={phim.hinhAnh} className="img" />
                                                                <div style={{ paddingLeft: 15 }}>
                                                                    <h4> <span className="ageType">P</span>  {phim.tenPhim}</h4>
                                                                    <p className="">100 phút - TIX 7.7 - IMDb 0</p>
                                                                </div>
                                                            </div>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <div className="flex-start">
                                                                <h4 className="">2D Digital</h4>
                                                                <div className="lichCHieu">
                                                                    {
                                                                        phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                                                            return (
                                                                                <NavLink key={index} to={`/phongve/${lichChieu.maLichChieu}`} className="btnMovie" variant="contained">
                                                                                    <span className="btnColorBHD ">{lichChieu.ngayChieuGioChieu}</span>
                                                                                </NavLink>
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
