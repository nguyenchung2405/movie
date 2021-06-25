import React, { Fragment, useState } from 'react';
import useStyles from './MovieStyled';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ModalVideo from 'react-modal-video';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import './movieItem.scss'


export default function ItemPhimDangChieu(props) {
    const { phim } = props;
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);

    const getVideoId = (url) => {
        var arrItem = url.split('/')
        return arrItem[arrItem.length-1]
      }

    return (
        <div className={classes.root}>
            <div className="card">
                <CardActionArea style={{ marginBottom: 10 }} >
                    <div className="hoverInfor"></div>
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
                    <a href="#">
                        <img src={phim.hinhAnh} alt={phim.hinhAnh} className={classes.img}/>
                    </a>
                    <Box className={classes.rating}>
                        <Typography>{phim.danhGia}</Typography>
                        <Rating name="read-only" defaultValue={4} readOnly style={{ fontSize: 10, color: "#fb4226" }} />
                    </Box>
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
                        <a className="buyNow" href="#"> MUA VÉ </a>
                    </div>
                </div>
            </div>

        </div >
    );
}
