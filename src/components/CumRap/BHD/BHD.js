import React from 'react';
import '../cumrapstyle.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from '@material-ui/core/Button';

export default function BHD() {
    return (
        <Tabs className="tab" style={{ width: "100%" }}>
            <TabList style={{ width: "40%" }} className="diadiem__Rap">
                <Tab >
                    <div className="rapInfo opacity03 active">
                        <img src="./img/cumrap/bhd/bhd-star-vincom-thao-dien.png" alt="thao dien" className="img" />
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
                <Tab >
                    <div className="rapInfo opacity03">
                        <img src="./img/cumrap/bhd/bhd-star-bitexco.png" alt="bitexco" className="img" />
                        <div className="d-flex">
                            <p><span className="colorBHD">BHD Star</span>
                                - Bitexco</p>
                            <span className="infoMovieCinema">
                                L5-Megamall, 159 XL Hà Nội, Q.2 L5-Megamall
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
                <Tab >
                    <div className="rapInfo opacity03">
                        <img src="./img/cumrap/bhd/bhd-star-pham-hung.png" alt="pham hung" className="img" />
                        <div className="d-flex">
                            <p><span className="colorBHD">BHD Star</span>
                                - Phạm Hùng </p>
                            <span className="infoMovieCinema">
                                L5-Megamall, 159 XL Hà Nội, Q.2 L5-Megamall
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
                <Tab >
                    <div className="rapInfo opacity03">
                        <img src="./img/cumrap/bhd/bhd-star-vincom-3-2.png" alt="3-2" className="img" />
                        <div className="d-flex">
                            <p><span className="colorBHD">BHD Star</span>
                                - 3 tháng 2</p>
                            <span className="infoMovieCinema">
                                L5-Megamall, 159 XL Hà Nội, Q.2 L5-Megamall
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
                <Tab >
                    <div className="rapInfo opacity03">
                        <img src="./img/cumrap/bhd/bhd-star-vincom-le-van-viet.png" alt="le van viet" className="img" />
                        <div className="d-flex">
                            <p><span className="colorBHD">BHD Star</span>
                                - Vincom Lê Văn Việt</p>
                            <span className="infoMovieCinema">
                                L5-Megamall, 159 XL Hà Nội, Q.2 L5-Megamall
                            </span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                </Tab>
                <Tab >
                    <div className="rapInfo opacity03">
                        <img src="./img/cumrap/bhd/bhd-star-vincom-quang-trung.png" alt="quang trung" className="img" />
                        <div className="d-flex">
                            <p><span className="colorBHD">BHD Star</span>
                                - Vincom Lê Văn Việt</p>
                            <span className="infoMovieCinema">
                                L5-Megamall, 159 XL Hà Nội, Q.2 L5-Megamall
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
                <TabPanel>
                    <div className=" wrapListMovie">
                        <div className="titleMovie ">
                            <img src="./img/cumrap/movie/sieu-trom-duong-pho.png" alt="sieu trom" className="img" />
                            <div style={{ paddingLeft: 15 }}>
                                <h4> <span className="ageType">P</span> Siêu Trộm Đường Phố</h4>
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
                <TabPanel>không có suất chiếu</TabPanel>
                <TabPanel>không có suất chiếu</TabPanel>
                <TabPanel>không có suất chiếu</TabPanel>
                <TabPanel>không có suất chiếu</TabPanel>
            </div>
        </Tabs>
    )
}
