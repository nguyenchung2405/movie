import React from 'react';
import Carousel from 'react-material-ui-carousel';
import MovieItem from '../MovieItem/MovieItem';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import useStyles from './PhimSapChieuStyle';


export default function PhimSapChieu() {
    const classes = useStyles();

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

    return (

        <Container maxWidth="lg">
            <Hidden xsDown>
                <Carousel {...settings}>
                    <Container maxWidth="md">
                        <div style={{ display: "flex" }}>
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                        </div>
                        <div style={{ display: "flex" }}>
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                        </div>
                    </Container>
                    <Container maxWidth="md">
                        <div style={{ display: "flex" }}>
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                        </div>
                        <div style={{ display: "flex" }}>
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                        </div>
                    </Container>
                </Carousel >
            </Hidden>

            
        </Container>
    )
}
