import React from 'react';
import useStyles from './ThongTinRapStyle';
import './thongtinrap.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function ThongTinRap() {
    const classes = useStyles();
    const logo = [
        { imgPath: './img/cumrap/bhd.png' },
        { imgPath: './img/cumrap/cns.png' },
        { imgPath: './img/cumrap/ddc.png' },
        { imgPath: './img/cumrap/lotte.png' },
        { imgPath: './img/cumrap/megags.png' }
    ]

    return (
        <Hidden xsDown>
            <Container maxWidth="md" className={classes.root}>
                <Grid container className="cumRap">
                    <Grid item xs={1}>
                        <div className="logoRap">
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
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="diadiem__Rap">
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
                        </div>

                    </Grid>
                    <Grid item xs={7}>
                        <div className="listMovie">
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
                        </div>
                    </Grid>
                </Grid>
            </Container>


        </Hidden>
    )
}
