import React from 'react';
import '../cumrapstyle.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from '@material-ui/core/Button';

export default function CNS() {
    return (
        <Tabs className="tab" style={{ width: "100%" }}>
            <TabList style={{ width: "40%" }} className="diadiem__Rap">
                <Tab >
                    <div className="rapInfo opacity03 active">
                        <img src="./img/cumrap/cns/cinestar-hai-ba-trung.jpg" alt="hai ba trung" className="img" />
                        <div className="d-flex">
                            <p><span className="colorCinema">CNS</span>
                                - Hai Bà Trưng</p>
                            <span className="infoMovieCinema">
                                135 Hai Bà Trưng, Bến Nghé, Quận 1
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
                <Tab >
                    <div className="rapInfo opacity03">
                        <img src="./img/cumrap/cns/cinestar-quoc-thanh.jpg" alt="quoc thanh" className="img" />
                        <div className="d-flex">
                            <p><span className="colorCinema">CNS</span>
                                - Quốc Thanh</p>
                            <span className="infoMovieCinema">
                                271 Nguyễn Trãi, Quận 1
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
            </TabList>
            <div style={{ width: "60%" }} className="listMovie">
                <TabPanel>
                    <div className=" wrapListMovie">
                        <div className="titleMovie ">
                            <img src="./img/cumrap/movie/tom-jerry-16127706651597_60x60.png" alt="tom and jerry" className="img" />
                            <div style={{ paddingLeft: 15 }}>
                                <h4> <span className="ageType">P</span>  Tom &amp; Jerry</h4>
                                <p className="">100 phút - TIX 7.7 - IMDb 0</p>
                            </div>
                        </div>
                        <div className="flex-start">
                            <h4 className="">2D Digital</h4>
                            <div>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                            </div>
                        </div>
                    </div>
                    <div className=" wrapListMovie">
                        <div className="titleMovie ">
                            <img src="./img/cumrap/movie/kieu.png" alt="kieu" className="img" />
                            <div style={{ paddingLeft: 15 }}>
                                <h4> <span className="ageType">P</span> Kiều </h4>
                                <p className="">100 phút - TIX 7.7 - IMDb 0</p>
                            </div>
                        </div>
                        <div className="flex-start">
                            <h4 className="">2D Digital</h4>
                            <div>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                            </div>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className=" wrapListMovie">
                        <div className="titleMovie ">
                            <img src="./img/cumrap/movie/tom-jerry-16127706651597_60x60.png" alt="tom and jerry" className="img" />
                            <div style={{ paddingLeft: 15 }}>
                                <h4> <span className="ageType">P</span>  Tom &amp; Jerry</h4>
                                <p className="">100 phút - TIX 7.7 - IMDb 0</p>
                            </div>
                        </div>
                        <div className="flex-start">
                            <h4 className="">2D Digital</h4>
                            <div>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorCinema ">17:15</span>
                                    ~ 18:55</Button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    )
}
