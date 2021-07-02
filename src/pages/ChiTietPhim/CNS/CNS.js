import React from 'react';
import './cns.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { NavLink } from 'react-router-dom';

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
    console.log("heThongRapChieu", heThongRapChieu);

    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const renderRap = () => {
        if (!!heThongRapChieu) {
            return heThongRapChieu.map((item, index) => {
                return (
                    <Tab key={index} className="rapInfo">
                        <Button variant="contained" fullWidth={true} style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <img src={item.logo} alt={item.logo} className="img" />
                            <p>{item.tenHeThongRap}</p>
                        </Button>
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
                                    <div className="wrapListMovieCNS">
                                        <Accordion key={index} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
                                                    <h4 className="">2D Digital</h4>
                                                    <div className="lichCHieu">
                                                        {
                                                            rapItem.lichChieuPhim.map((lichChieu, index) => {
                                                                return (
                                                                    <div style={{padding:5}}>
                                                                        <NavLink key={index} to={`/phongve/${lichChieu.maLichChieu}`} className="btnMovie" variant="contained">
                                                                            <span className="btnColorBHD ">{lichChieu.ngayChieuGioChieu}</span>
                                                                        </NavLink>
                                                                    </div>
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
        <Tabs className="tab" style={{ width: "100%" }}>
            <TabList style={{ width: "40%" }} className="diadiem__RapCNS">
                {renderRap()}
            </TabList>
            <div style={{ width: "60%" }} className="listMovieCNS">
                {rendercumRapChieu()}
            </div>
        </Tabs >

    )
}
