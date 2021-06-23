import React from 'react';
import './cumrapstyle.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import BHD from './BHD/BHD';
import CNS from './CNS/CNS';
import DDC from './DDC/DDC';
import Lotte from './Lotte/Lotte';
import Mega from './Mega/Mega';

export default function CumRap() {

    return (
        <div>
            <Hidden xsDown>
                <Container maxWidth="md">
                    <Tabs className="tab">
                        <TabList style={{ width: "10%" }} className="logoRap">
                            <Tab>
                                <button className="btnLogo opacity03  active" >
                                    <img src="./img/cumrap/bhd.png" alt="./img/cumrap/bhd.png" className="img" />
                                </button>
                            </Tab>
                            <Tab>
                                <button className="btnLogo opacity03 " >
                                    <img src="./img/cumrap/cns.png" alt="./img/cumrap/cns.png" className="img" />
                                </button>
                            </Tab>
                            <Tab>
                                <button className="btnLogo opacity03 " >
                                    <img src="./img/cumrap/ddc.png" alt="./img/cumrap/ddc.png" className="img" />
                                </button>
                            </Tab>
                            <Tab>
                                <button className="btnLogo opacity03 " >
                                    <img src="./img/cumrap/lotte.png" alt="./img/cumrap/lotte.png" className="img" />
                                </button>
                            </Tab>
                            <Tab>
                                <button className="btnLogo opacity03 " >
                                    <img src="./img/cumrap/megags.png" alt="./img/cumrap/megags.png" className="img" />
                                </button>
                            </Tab>
                        </TabList>
                        <div style={{ width: "90%" }}>
                            <TabPanel>
                                <BHD />
                            </TabPanel>
                            <TabPanel>
                                <CNS />
                            </TabPanel>
                            <TabPanel>
                                <DDC />
                            </TabPanel>
                            <TabPanel>
                                <Lotte />
                            </TabPanel>
                            <TabPanel>
                                <Mega />
                            </TabPanel>
                        </div>
                    </Tabs>

                </Container>
            </Hidden>

        </div>
    )
}
