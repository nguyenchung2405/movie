import React, { Fragment } from 'react';
import '../cumrapstyle.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function BHD(props) {
    const { logo, lstCumRap } = props.cumRap;
    console.log("lstCumRap", lstCumRap);
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
                                                <div key={index}>
                                                    <div className=" wrapListMovie">
                                                        <div className="titleMovie ">
                                                            <img src={phim.hinhAnh} alt={phim.hinhAnh} className="img" />
                                                            <div style={{ paddingLeft: 15 }}>
                                                                <h4> <span className="ageType">P</span>  {phim.tenPhim}</h4>
                                                                <p className="">100 phút - TIX 7.7 - IMDb 0</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex-start">
                                                            <h4 className="">2D Digital</h4>
                                                            {
                                                                phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                                                    return (<div key={index}>
                                                                        <Button className="btnMovie" variant="contained">
                                                                            <span className="btnColorBHD ">{lichChieu.ngayChieuGioChieu}</span>
                                                                        </Button>
                                                                    </div>
                                                                    )
                                                                })
                                                            }

                                                        </div>
                                                    </div>
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
