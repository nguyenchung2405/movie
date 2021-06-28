import React, { useEffect } from 'react';
import './cumrapstyle.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import BHD from './BHD/BHD';
import { useSelector, useDispatch } from 'react-redux';
import { layThongTinLichChieu } from '../../redux/action/CumRapAction';

export default function CumRap() {
    const { thongTinLichCHieu } = useSelector(state => state.CumRapReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layThongTinLichChieu())
    }, [])

    const renderCumRap = () => {
        return (
            <Tabs className="tab">
                <TabList style={{ width: "10%" }} className="logoRap">
                    {
                        thongTinLichCHieu.map((cumRap, index) => {
                            return (
                                <Tab key={index}>
                                    <button className="btnLogo opacity03  active" >
                                        <img src={cumRap.logo} alt={cumRap.logo} className="img" />
                                    </button>
                                </Tab>
                            )
                        })
                    }
                </TabList>
                <div style={{ width: "90%" }}>
                    {
                        thongTinLichCHieu.map((cumRap) => {
                            return (
                                <TabPanel key={cumRap.maHeThongRap}>
                                    <BHD cumRap={cumRap}/>
                                </TabPanel>
                            )
                        })
                    }

                </div>
            </Tabs>
        )

    }

    return (
        <div>
            <Hidden xsDown>
                <Container maxWidth="md">
                    {renderCumRap()}
                    
                </Container>
            </Hidden>

        </div>
    )
}
