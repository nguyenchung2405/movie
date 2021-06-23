import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import MovieItem from '../MovieItem/MovieItem';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { getPhimAPI } from '../../redux/action/PhimAction';


export default function PhimDangChieu() {
    //lấy mangPhim từ redux về
    const { mangPhim } = useSelector(state => state.PhimReducer);
    console.log("abc", mangPhim);
    const dispatch = useDispatch();

    const getPhim = () => {
        dispatch(getPhimAPI());
    }

    useEffect(() => {
        getPhim();
    }, [])

    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return (
                <Container maxWidth="md" style={{display:"flex"}}>
                <Grid item xs={3}>
                    <MovieItem phim={phim} />
                </Grid>
                </Container>
            );
        });
    }


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

                {renderPhim()}
                    
                    {/* <Container maxWidth="md">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                            <MovieItem />
                        </div>
                    </Container> */}
                </Carousel >
            </Hidden>
        </Container >
    )
}
