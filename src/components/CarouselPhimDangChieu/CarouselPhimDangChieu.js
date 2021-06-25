import React, { useEffect } from 'react';
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux';
import { getPhimAPI } from '../../redux/action/PhimAction';
import ItemPhimDangChieu from '../MovieItem/ItemPhimDangChieu';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselPhimDangChieu() {
    const { mangPhim } = useSelector(state => state.PhimReducer);
    console.log("carousel phim dang chieu", mangPhim);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhimAPI())
    }, []);

    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return (
                <div key={index}>
                    <ItemPhimDangChieu phim={phim}/>
                </div>
            )
        })
    }

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 4
    };

    return (
        <div>

            <Slider {...settings}>
                {renderPhim()}
            </Slider>
        </div>
    );
}