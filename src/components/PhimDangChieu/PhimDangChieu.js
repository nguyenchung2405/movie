import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import { useSelector, useDispatch } from 'react-redux';
import { getPhimAPI } from '../../redux/action/PhimAction';
import Carousel from 'react-material-ui-carousel';
import ItemPhimDangChieu from '../MovieItem/ItemPhimDangChieu';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import useStyles from './PhimDangChieuStyle';
import { useTheme } from '@material-ui/core/styles';

export default function PhimDangChieu(props) {
    const classes = useStyles();
    const theme = useTheme();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhimAPI());

    }, []);
    
    const { mangPhim } = useSelector(state => state.PhimReducer);
    console.log("phimd dang chieu",mangPhim)
    const filmChunks = [];
    const chunk_size = 8;
    while (mangPhim.length > 0) {
        filmChunks.push(mangPhim.splice(0, chunk_size))
    }


    const renderPhim = () => {
        return filmChunks.map((item, index) => {
            return (
                <Container maxWidth="md" className={classes.root} key={index}>
                    {item.map(phim => {
                        return (
                            <div>
                                <Grid container  >
                                    <Grid item >
                                        <ItemPhimDangChieu phim={phim} />
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
    const renderPhimReponsive = () => {
        console.log("renderPhimReponsive", mangPhim);
        return mangPhim.map((phim, index) => {
            return (
                <Grid item xs={12} className={classes.reponsive} key={index}>
                    <a>
                        <Box className={classes.rating}>
                            <Typography>{phim.danhGia}</Typography>
                            <Rating name="read-only" defaultValue={4} readOnly style={{ fontSize: 10, color: "#fb4226" }} />
                        </Box>
                        <span className={classes.ageType}>P</span>
                        <img src={phim.hinhAnh} alt={phim.hinhAnh} className={classes.img} />
                    </a>
                </Grid>
            )
        });
    }

    const settings = {
        animation: "slide",
        swipe: true,
        autoPlay: false,
        indicators: false,
        navButtonsAlwaysVisible: true,
        style: {
            [theme.breakpoints.down('sm')]: {
                navButtonsAlwaysInvisible: false,
                navButtonsAlwaysVisible: false,
            },
        }
        
    };
    return (
        <Container maxWidth="lg">
            <Hidden xsDown>
                <Carousel {...settings}>
                    {renderPhim()}
                </Carousel>
            </Hidden>


            <Grid container className={classes.sectionMobile}>
                {/* <Grid item xs={12} className={classes.reponsive}>
                    <a>
                        <Box className={classes.rating}>
                            <Typography>6.3</Typography>
                            <Rating name="read-only" defaultValue={4} readOnly style={{ fontSize: 10, color: "#fb4226" }} />
                        </Box>
                        <span className={classes.ageType}>P</span>
                        <img src="./img/phim/trang-ti-rp.jpg" alt="./img/phim/trang-ti-rp.jpg" className={classes.img} />
                    </a>
                </Grid> */}
                {renderPhimReponsive()}
            </Grid>
        </Container >
    )
}

