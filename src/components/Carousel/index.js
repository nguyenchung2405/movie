import React from "react";
import { Carousel } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { LeftOutlined } from "@ant-design/icons";
import Carousel_1 from "../../assets/img/background_image1.jpg";
import Carousel_2 from "../../assets/img/background_image2.jpg";
import Carousel_3 from "../../assets/img/background_image3.jpg";
export default function Carousell() {
  return (
    <div>
      <Carousel
        className="carousel"
        autoplay
        arrows={true}
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
      >
        <div className="img__Carousel">
          <img src={Carousel_1} alt="img_1" />
        </div>
        <div className="img__Carousel">
          <img src={Carousel_2} alt="img_2" />
        </div>
        <div className="img__Carousel">
          <img src={Carousel_3} alt="img_3" />
        </div>
      </Carousel>
    </div>
  );
}
