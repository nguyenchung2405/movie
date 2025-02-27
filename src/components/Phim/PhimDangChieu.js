import React, { useEffect, Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import { useSelector, useDispatch } from 'react-redux';
import { layDanhSachPhim } from '../../redux/action/PhimAction';
import Carousel from 'react-material-ui-carousel';
import ItemPhimDangChieu from '../MovieItem/ItemPhimDangChieu';
import Typography from '@material-ui/core/Typography';
import useStyles from './PhimStyle';
import { useTheme } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ModalVideo from 'react-modal-video';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import '../MovieItem/movieItem.scss';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function PhimDangChieu(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [isOpen, setOpen] = useState(false);


    const getVideoId = (url) => {
        var arrItem = url.split('/')
        return arrItem[arrItem.length - 1]
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhim());
    }, []);

    const { mangPhim } = useSelector(state => state.PhimReducer);
    const phimDangChieu = [...mangPhim];
    const filmChunks = [];
    const chunk_size = 8;

    while (phimDangChieu.length > 0) {
        filmChunks.push(phimDangChieu.splice(0, chunk_size))
    }


    const renderPhim = () => {
        return filmChunks.map((item, index) => {
            return (
                <Container maxWidth="md" className={classes.root} key={index}>
                    {item.map(phim => {
                        return (
                            <div key={phim.maPhim}>
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

        return mangPhim.map((phim, index) => {
            return (
                <Grid key={index} item xs={6} className={classes.reponsive}>
                    <div className="card">
                        <CardActionArea style={{ marginBottom: 10 }} >
                            <NavLink to={`/phim/${phim.maPhim}`}>
                                <div className="hoverInfor"></div>
                                <Box className={classes.rating}>
                                    <Typography>{phim.danhGia}</Typography>
                                    <Rating name="read-only" defaultValue={4} readOnly style={{ fontSize: 10, color: "#fb4226" }} />
                                </Box>
                            </NavLink>
                            < Fragment>
                                <ModalVideo
                                    channel='youtube'
                                    autoplay isOpen={isOpen}
                                    videoId={getVideoId(phim.trailer)}
                                    // videoId="DUzEYcR2VtM"
                                    onClose={() => setOpen(false)} />
                                <div className="btnPlay" style={{ width: "100%", textAlign: "center", position: "absolute", top: "40%" }}>
                                    <IconButton onClick={() => setOpen(true)}>
                                        <PlayArrowIcon className="iconPlay" />
                                    </IconButton>
                                </div>
                            </Fragment >
                            <img src={phim.hinhAnh} alt={phim.hinhAnh} className={classes.img} />
                        </CardActionArea>
                        <div style={{ position: "relative" }}>
                            <div className="hideHover">
                                <Typography noWrap> <span className={classes.ageType}>P</span>
                                    {phim.tenPhim}</Typography>
                                <Typography variant="body2" color="textSecondary" component="p" >
                                    100 phút
                                </Typography>
                            </div>
                            <div className="showHover">
                                <NavLink className="buyNow" to={`/phim/${phim.maPhim}`}> MUA VÉ </NavLink>
                            </div>
                        </div>
                    </div>
                </Grid>
            )
        });
    }
    // const showMore = () => {
    //     let boxs = document.getElementsByClassName("sectionMobile");
    //     let btn = document.getElementById("showmore-btn");
    //     for (let i = 0; i < boxs.length; i++) {
    //         let box = boxs[i];
    //         box.classList.toggle("d-none");
    //     }
    //     if (!btn.classList.contains("sectionMobile")) {
    //         btn.innerHTML = "Show less";
    //         btn.classList.toggle("sectionMobile");
    //     } else {
    //         btn.innerHTML = "Show more";
    //         btn.classList.toggle("sectionMobile");
    //         document.getElementById("list-movie__wrap").scrollIntoView();
    //         window.scrollBy(0, -60);
    //     }
    // }

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


            <Grid container id="list-movie__wrap" className={classes.sectionMobile}>
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
                <div className={classes.moreMovie}>
                    <Button variant="outlined"
                        id="showmore-btn"
                        className={classes.moreMovieButton}
                         >XEM THÊM</Button>
                </div>
            </Grid>
        </Container >
    )
}

