import React from "react";
import "./App.css";
import CarouselPhimDangChieu from "./components/CarouselPhimDangChieu/CarouselPhimDangChieu";
import PhimDangChieu from "./components/PhimDangChieu/PhimDangChieu";
import PhimSapChieu from "./components/PhimSapChieu/PhimSapChieu";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Home />
      {/* <div style={{ margin: 100 }}>
        phim đnag chiếu
        <PhimDangChieu />
      </div>
      <div style={{ margin: 100 }}>
        phim sắp chiếu
        <PhimSapChieu />
      </div>
      <div style={{ margin: 100 }}>
        phim đnag chiếu
        <PhimDangChieu />
      </div> */}

      {/* <CarouselPhimDangChieu /> */}
    </div>
  );
}

export default App;
