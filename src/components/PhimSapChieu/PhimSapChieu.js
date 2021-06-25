import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import { useSelector, useDispatch } from 'react-redux';
import { getPhimAPI } from '../../redux/action/PhimAction';
import Carousel from 'react-material-ui-carousel';
import useStyles from './PhimSapChieuStyle'
import ItemPhimSapChieu from '../MovieItem/ItemPhimSapChieu';


export default function PhimSapChieu() {
    const classes = useStyles();
    const { mangPhim } = useSelector(state => state.PhimReducer);
    console.log("phim sap chieu", mangPhim);
    
    const filmChunks = [];
    const chunk_size = 8;
    while (mangPhim.length > 0) {
        filmChunks.push(mangPhim.splice(0, chunk_size))
    }

    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(getPhimAPI());
    }, [])

    const settings = {
        animation: "slide",
        swipe: true,
        autoPlay: false,
        indicators: false,
        navButtonsAlwaysVisible: true,
        navButtonsWrapperProps: {
            style: {

            }
        }
    };
    const renderPhim = () => {
        return filmChunks.map((item, index) => {
            return (
                <Container maxWidth="md" className={classes.root}>
                    {item.map(phim => {
                        return (
                            <div>
                                <Grid container  >
                                    <Grid item >
                                        <ItemPhimSapChieu phim={phim} />
                                    </Grid>
                                </Grid>
                            </div>
                        )
                    })
                    })
                </Container>
            )
        })
    }
    return (
        <Container maxWidth="lg">
            <Hidden xsDown>
                <Carousel {...settings}>
                    {renderPhim()}
                </Carousel>
            </Hidden>

            <Grid container className={classes.sectionMobile}>
                <Grid container>
                    <Grid item xs={6} className={classes.reponsive}>
                        <a>
                            <span className={classes.ageType}>P</span>
                            <span className={classes.date}>05/03</span>
                            <img src="./img/phim/biet-doi-san-ma-rp.jpg" alt="./img/phim/biet-doi-san-ma-rp.jpg" className={classes.img} />
                        </a>
                    </Grid>
                    <Grid item xs={6} className={classes.reponsive}>
                        <a>
                            <span className={classes.ageType}>P</span>
                            <span className={classes.date}>05/03</span>
                            <img src="./img/phim/biet-doi-san-ma-rp.jpg" alt="./img/phim/biet-doi-san-ma-rp.jpg" className={classes.img} />
                        </a>
                    </Grid>

                    <Grid item xs={6} className={classes.reponsive}>
                        <a>
                            <span className={classes.ageType}>P</span>
                            <span className={classes.date}>05/03</span>
                            <img src="./img/phim/biet-doi-san-ma-rp.jpg" alt="./img/phim/biet-doi-san-ma-rp.jpg" className={classes.img} />
                        </a>
                    </Grid>
                    <Grid item xs={6} className={classes.reponsive}>
                        <a>
                            <span className={classes.ageType}>P</span>
                            <span className={classes.date}>05/03</span>
                            <img src="./img/phim/biet-doi-san-ma-rp.jpg" alt="./img/phim/biet-doi-san-ma-rp.jpg" className={classes.img} />
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}

