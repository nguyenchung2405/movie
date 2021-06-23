import React from 'react';
import '../cumrapstyle.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from '@material-ui/core/Button';

export default function DDC() {
    return (
        <Tabs className="tab" style={{ width: "100%" }}>
            <TabList style={{ width: "40%" }} className="diadiem__Rap">
                <Tab >
                    <div className="rapInfo opacity03 active">
                        <img src="./img/cumrap/ddc/ddc-dong-da.jpg" alt="dong da" className="img" />
                        <div className="d-flex">
                            <p><span className="colorDDC">DDC</span>
                                - Đống Đa</p>
                            <span className="infoMovieCinema">
                                890 Trần Hưng Đạo, Quận 5
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
                            <img src="./img/cumrap/movie/palm.jpg" alt="palm" className="img" />
                            <div style={{ paddingLeft: 15 }}>
                                <h4> <span className="ageType">P</span>Palm</h4>
                                <p className="">100 phút - TIX 7.7 - IMDb 0</p>
                            </div>
                        </div>
                        <div className="flex-start">
                            <h4 className="">2D Digital</h4>
                            <div>
                                
                                <Button className="btnMovie" variant="contained"><span className="colorDDC ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorDDC ">17:15</span>
                                    ~ 18:55</Button>
                                <Button className="btnMovie" variant="contained"><span className="colorDDC ">17:15</span>
                                    ~ 18:55</Button>
                            </div>
                        </div>
                    </div>
                    <div className=" wrapListMovie">
                        <div className="titleMovie ">
                            <img src="./img/cumrap/movie/lua-deu-gap-lua-dao.png" alt="lua dao" className="img" />
                            <div style={{ paddingLeft: 15 }}>
                                <h4> <span className="ageType">P</span> Lừa đểu gặp lừa đảo</h4>
                                <p className="">100 phút - TIX 7.7 - IMDb 0</p>
                            </div>
                        </div>
                        <div className="flex-start">
                            <h4 className="">2D Digital</h4>
                            <div>
                                <Button className="btnMovie" variant="contained"><span className="colorDDC ">17:15</span>
                                    ~ 18:55</Button>
                                
                                <Button className="btnMovie" variant="contained"><span className="colorDDC ">17:15</span>
                                    ~ 18:55</Button>
                            </div>
                        </div>
                    </div>

                </TabPanel>
                
            </div>
        </Tabs>
    )
}
