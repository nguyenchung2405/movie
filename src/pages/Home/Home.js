import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import DemoCarousel from "../../components/DemoCarousel/DemoCarousel";
import MovieSelect from "../../components/MovieSelect/MovieSelect";
import MovieType from "../../components/MovieType/MovieType";
import New from "../../components/New";
import Apply from "../../components/Apply";
import Footer from "../../components/Footer";
import CumRap from "../../components/CumRap/CumRap";
export default function Home() {
  return (
    <div>
      <HeaderComponent />
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
      </div>

      <div style={{ paddingTop: 30, paddingBottom: 30 }}>
        <CumRap />
      </div>
      <New />
      <Apply />
      <Footer />
    </div>
  );
}
