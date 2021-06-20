import React from 'react';
import HeaderCoponent from '../../components/Header/HeaderCoponent';
import DemoCarousel from '../../components/DemoCarousel/DemoCarousel';
import MovieSelect from '../../components/MovieSelect/MovieSelect';
import MovieType from "../../components/MovieType/MovieType";
import ThongTinRap from '../../components/ThongTinRap/ThongTinRap';

export default function Home() {
    return (
        <div>
            <div>
                <HeaderCoponent />
            </div>
            <div style={{ marginTop: 64, position: "relative" }}>
                <div>
                    <DemoCarousel />
                </div>
                <div
                    style={{
                        position: "absolute", margin: "auto", width: "100%", bottom: "-20px"
                    }}>
                    <MovieSelect />
                </div>
            </div>
            <div style={{marginTop:60}}>
            <MovieType />
            </div>
            <div style={{marginTop:60}}>
                <ThongTinRap />
            </div>
        </div>
    )
}
