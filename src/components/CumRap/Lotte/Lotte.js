import React from 'react';
import '../cumrapstyle.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from '@material-ui/core/Button';

export default function Lotte() {
    return (
        <Tabs className="tab" style={{ width: "100%" }}>
            <TabList style={{ width: "40%" }} className="diadiem__Rap">
                <Tab >
                    <div className="rapInfo opacity03 active">
                        <img src="./img/cumrap/lotte/lotte-cinema-cantavil.jpg" alt="cantavil" className="img" />
                        <div className="d-flex">
                            <p><span className="colorLotte">Lotte</span>
                                - Gò vấp</p>
                            <span className="infoMovieCinema">
                                Lầu 3 LotteMart, 242 Nguyễn Văn Lương, Gò Vấp
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
                <Tab >
                    <div className="rapInfo opacity03 ">
                        <img src="./img/cumrap/lotte/lotte-cinema-cong-hoa.jpg" alt="cong hoa" className="img" />
                        <div className="d-flex">
                            <p><span className="colorLotte">Lotte</span>
                                - Thủ Đức</p>
                            <span className="infoMovieCinema">
                                L5-Megamall, 159 XL Hà Nội, Q.2 L5-Megamall
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
                <Tab >
                    <div className="rapInfo opacity03 ">
                        <img src="./img/cumrap/lotte/lotte-cinema-go-vap.jpg" alt="go vap" className="img" />
                        <div className="d-flex">
                            <p><span className="colorLotte">Lotte</span>
                                - Cộng Hòa</p>
                            <span className="infoMovieCinema">
                                Lầu 4 - Pico Plaza, 20 Cộng Hòa, Quận Tân Bình
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
                <Tab >
                    <div className="rapInfo opacity03 ">
                        <img src="./img/cumrap/lotte/lotte-cinema-nam-sai-gon.jpg" alt="sai gon" className="img" />
                        <div className="d-flex">
                            <p><span className="colorLotte">Lotte</span>
                                - Cantavil</p>
                            <span className="infoMovieCinema">
                                Lầu 2, Cantavil PremLer, Xa Lộ Hà Nội 
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
                <Tab >
                    <div className="rapInfo opacity03 ">
                        <img src="./img/cumrap/lotte/lotte-cinema-phu-tho.jpg" alt="phu tho" className="img" />
                        <div className="d-flex">
                            <p><span className="colorLotte">Lotte</span>
                                - Phú Thọ</p>
                            <span className="infoMovieCinema">
                                Lầu 4, Lotte Mart, Phú Thọ, Quận 11
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
                <Tab >
                    <div className="rapInfo opacity03 ">
                        <img src="./img/cumrap/lotte/lotte-cinema-thu-duc.jpg" alt="thu duc" className="img" />
                        <div className="d-flex">
                            <p><span className="colorLotte">Lotte</span>
                                - Nam Sài Gòn</p>
                            <span className="infoMovieCinema">
                                Lầu 3, Lotte Mart NSC, 469 Nguyễn Huệ
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
            </TabList>
            <div style={{ width: "60%" }} className="listMovie">
                <TabPanel  >
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
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
                                    ~ 18:55</Button>
                            </div>
                        </div>
                    </div>
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
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
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
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorLotte ">17:15</span>
                                    ~ 18:55</Button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>không có suất chiếu</TabPanel>
                <TabPanel>không có suất chiếu</TabPanel>
                <TabPanel>không có suất chiếu</TabPanel>
                <TabPanel>không có suất chiếu</TabPanel>
            </div>
        </Tabs>
    )
}
