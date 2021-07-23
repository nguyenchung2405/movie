import React, { Fragment, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Hidden } from '@material-ui/core';
import ModalVideo from 'react-modal-video';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import './demoCarousel.scss'


export default function DemoCarousel(props) {
    const [isOpen, setOpen] = useState(false);
    const imgList = [
        {
            modalVideo: < Fragment>
                <ModalVideo
                    channel='youtube'
                    autoplay isOpen={isOpen}
                    videoId="s05oOsz_SvA"
                    onClose={() => setOpen(false)} />
                <div className="btnPlay" style={{ width: "100%", textAlign: "center", position: "absolute", top: "40%" }}>
                    <IconButton onClick={() => setOpen(true)}>
                        <PlayArrowIcon className="iconPlay" />
                    </IconButton>
                </div>
            </Fragment >,
            imgPath: './img/carousel/ban-tay-diet-quy.png',
        },
        {
            modalVideo: < Fragment>
                <ModalVideo
                    channel='youtube'
                    autoplay isOpen={isOpen}
                    videoId="kBY2k3G6LsM"
                    onClose={() => setOpen(false)} />
                <div className="btnPlay" style={{ width: "100%", textAlign: "center", position: "absolute", top: "40%" }}>
                    <IconButton onClick={() => setOpen(true)}>
                        <PlayArrowIcon className="iconPlay" />
                    </IconButton>
                </div>
            </Fragment >,
            imgPath: './img/carousel/lat-mat-48h.png',
        },
        {
            modalVideo: < Fragment>
                <ModalVideo
                    channel='youtube'
                    autoplay isOpen={isOpen}
                    videoId="sx1ROHCmY-4"
                    onClose={() => setOpen(false)} />
                <div className="btnPlay" style={{ width: "100%", textAlign: "center", position: "absolute", top: "40%" }}>
                    <IconButton onClick={() => setOpen(true)}>
                        <PlayArrowIcon className="iconPlay" />
                    </IconButton>
                </div>
            </Fragment >,
            imgPath: './img/carousel/trang-ti.jpg',
        },
    ];
    const settings = {
        animation: "slide",
        swipe: true,
        interval: 3000,
        autoPlay: true,
        navButtonsAlwaysVisible: true,
        indicatorContainerProps:{
            style: {
                position: "absolute",
                bottom: "120px",
            }
        }
    }
    return (
        <Hidden xsDown>
            <Carousel {...settings} >
                {
                    imgList.map((item, i) => (
                        <Paper key={i} className="paper">
                            {item.modalVideo}
                            <a href="#aa">
                                <img src={item.imgPath}
                                    style={{ width: "100%", height: 580, verticalAlign: "middle" }}
                                    className="reponsiveImg"  alt={item.imgPath}/>
                            </a>
                        </Paper>
                    ))
                }
            </Carousel>
        </Hidden>
    )

}