import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import React from 'react';
import useStyles from './ThongTinRapStyle';
import './thongtinrap.scss'
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function DemoCumRap() {
    const classes = useStyles();
    return (
        <div>

           





            <Tabs >
                <TabList>
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

                <TabPanel>
                    <Tabs >
                        <TabList>
                            <Tab>
                                <div className="rapInfo opacity03 active">
                                    <img src="./img/cumrap/bhd/bhd-star-vincom-thao-dien.png" className="img" />
                                    <div className="d-flex">
                                        <p><span className="colorBHD">BHD Star</span>
                                            - Vincom Thảo Điền</p>
                                        <span className="infoMovieCinema">
                                            L5-Megamall, 159 XL Hà Nội, Q.2 L5-Megamall
                                        </span>
                                        <a href="#">[chi tiết]</a>
                                    </div>
                                </div>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <div className=" wrapListMovie">
                                <div className="titleMovie ">
                                    <img src="./img/cumrap/movie/tom-jerry-16127706651597_60x60.png" alt className="img" />
                                    <div style={{ paddingLeft: 15 }}>
                                        <h4> <span className="ageType">P</span>  Tom &amp; Jerry</h4>
                                        <p className="">100 phút - TIX 7.7 - IMDb 0</p>
                                    </div>
                                </div>
                                <div className="flex-start">
                                    <h4 className="">2D Digital</h4>
                                    <div>
                                        <Button className="btnMovie" variant="contained"><span className="btnColorBHD ">17:15</span>
                                            ~ 18:55</Button>
                                        <Button className="btnMovie" variant="contained"><span className="btnColorBHD ">17:15</span>
                                            ~ 18:55</Button>
                                        <Button className="btnMovie" variant="contained"><span className="btnColorBHD ">17:15</span>
                                            ~ 18:55</Button>
                                        <Button className="btnMovie" variant="contained"><span className="btnColorBHD ">17:15</span>
                                            ~ 18:55</Button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                    </Tabs>
                </TabPanel>




                <TabPanel>
                    <Tabs >
                        <TabList>
                            <Tab>
                                <div className="rapInfo opacity03 active">
                                    <img src="./img/cumrap/bhd/bhd-star-vincom-thao-dien.png" className="img" />
                                    <div className="d-flex">
                                        <p><span className="colorBHD">BHD Star</span>
                                            - Vincom Thảo Điền</p>
                                        <span className="infoMovieCinema">
                                            L5-Megamall, 159 XL Hà Nội, Q.2 L5-Megamall
                                        </span>
                                        <a href="#">[chi tiết]</a>
                                    </div>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="rapInfo opacity03 ">
                                    <img src="./img/cumrap/bhd/bhd-star-vincom-thao-dien.png" className="img" />
                                    <div className="d-flex">
                                        <p><span className="colorBHD">BHD Star</span>
                                            - Vincom Thảo Điền</p>
                                        <span className="infoMovieCinema">
                                            L5-Megamall, 159 XL Hà Nội, Q.2 L5-Megamall
                                        </span>
                                        <a href="#">[chi tiết]</a>
                                    </div>
                                </div>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <div className=" wrapListMovie">
                                <div className="titleMovie ">
                                    <img src="./img/cumrap/movie/tom-jerry-16127706651597_60x60.png" alt className="img" />
                                    <div style={{ paddingLeft: 15 }}>
                                        <h4> <span className="ageType">P</span>  Tom &amp; Jerry</h4>
                                        <p className="">100 phút - TIX 7.7 - IMDb 0</p>
                                    </div>
                                </div>
                                <div className="flex-start">
                                    <h4 className="">2D Digital</h4>
                                    <div>
                                        <Button className="btnMovie" variant="contained"><span className="btnColorBHD ">17:15</span>
                                            ~ 18:55</Button>
                                        <Button className="btnMovie" variant="contained"><span className="btnColorBHD ">17:15</span>
                                            ~ 18:55</Button>
                                        <Button className="btnMovie" variant="contained"><span className="btnColorBHD ">17:15</span>
                                            ~ 18:55</Button>
                                        <Button className="btnMovie" variant="contained"><span className="btnColorBHD ">17:15</span>
                                            ~ 18:55</Button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    )
}
