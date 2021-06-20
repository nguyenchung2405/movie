import React from "react";
import HeaderCoponent from "../../components/Header/HeaderCoponent";
import DemoCarousel from "../../components/DemoCarousel/DemoCarousel";
import MovieSelect from "../../components/MovieSelect/MovieSelect";
import MovieType from "../../components/MovieType/MovieType";
import New from "../../components/New";
import Apply from "../../components/Apply";
import Footer from "../../components/Footer";
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
            position: "absolute",
            margin: "auto",
            width: "100%",
            bottom: "-20px",
          }}
        >
          <MovieSelect />
        </div>
      </div>
      <div style={{ marginTop: 60 }}>
        <MovieType />
        <New />
        <Apply />
        <Footer />
      </div>
    </div>
  );
}
