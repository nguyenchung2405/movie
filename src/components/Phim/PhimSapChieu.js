import React, { Fragment, useState  } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import { useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import useStyles from './PhimStyle';
import ItemPhimSapChieu from '../MovieItem/ItemPhimSapChieu';
import { useTheme } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ModalVideo from 'react-modal-video';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import '../MovieItem/movieItem.scss';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


export default function PhimSapChieu() {
    const classes = useStyles();
    const { mangPhim } = useSelector(state => state.PhimReducer);
    const phimSapChieu = [...mangPhim];
    const theme = useTheme();
    const [isOpen, setOpen] = useState(false);

    const filmChunks = [];
    const chunk_size = 8;
    while (phimSapChieu.length > 0) {
        filmChunks.push(phimSapChieu.splice(0, chunk_size))
    }
    const getVideoId = (url) => {
        var arrItem = url.split('/')
        return arrItem[arrItem.length - 1]
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
    const renderPhim = () => {
        return filmChunks.map((item, index) => {
            return (
                <Container key={index} maxWidth="md" className={classes.root}>
                    {item.map(phim => {
                        return (
                            <div key={phim.maPhim}>
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
    return (
        <Container maxWidth="lg">
            <Hidden xsDown>
                <Carousel {...settings}>
                    {renderPhim()}
                </Carousel>
            </Hidden>

            <Grid container className={classes.sectionMobile}>
                {renderPhimReponsive()}
            </Grid>
        </Container >
    )
}

