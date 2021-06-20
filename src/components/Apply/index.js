import React from "react";
import { Row, Col } from "antd";
import { Carousel } from "antd";
import slide1 from "../../assets/img/slideapp/slide1app.jpg";
import slide2 from "../../assets/img/slideapp/slideapp2.jpg";
import slide3 from "../../assets/img/slideapp/slideapp3.jpg";
import slide4 from "../../assets/img/slideapp/slideapp4.jpg";
import slide5 from "../../assets/img/slideapp/slideapp5.jpg";
import slide6 from "../../assets/img/slideapp/slideapp6.jpg";
import slide7 from "../../assets/img/slideapp/slideapp7.jpg";
import slide8 from "../../assets/img/slideapp/slideapp8.jpg";
import slide9 from "../../assets/img/slideapp/slideapp9.jpg";
import slide10 from "../../assets/img/slideapp/slideapp10.jpg";
import slide11 from "../../assets/img/slideapp/slideapp11.jpg";
import backApp from "../../assets/img/backApp.jpg";
import mobile from "../../assets/img/mobile.png";
export default function Apply() {
  return (
    <div>
      <Row>
        <Col xs={24}>
          <img className="imgApp" src={backApp} alt="app" />
          <div className="homeApp">
            <div className="maxWidth940">
              <Row gutter={16}>
                <Col className="apply__Left" md={12}>
                  <p className="textTop">Ứng dụng tiện lợi dành cho</p>
                  <p className="textTop">người yêu điện ảnh</p>
                  <p className="textMed">
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </p>
                  <button className="btn__App">
                    App miễn phí - Tải về ngay
                  </button>
                  <p className="textUn">
                    Có 2 phiên bản
                    <a
                      className="tagA"
                      target="_blank"
                      rel="noreferrer"
                      href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                    >
                      iOS
                    </a>
                    <a
                      className="tagA"
                      target="_blank"
                      rel="noreferrer"
                      href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    >
                      Android
                    </a>
                  </p>
                </Col>
                <Col className="apply__right" md={12}>
                  <img className="phone__Img" src={mobile} alt="mobile" />
                  <Carousel className="carousel__App" autoplay dots={false}>
                    <div className="img__App">
                      <img src={slide1} alt="slide_1" />
                    </div>
                    <div className="img__App">
                      <img src={slide2} alt="slide_2" />
                    </div>
                    <div className="img__App">
                      <img src={slide3} alt="slide_3" />
                    </div>
                    <div className="img__App">
                      <img src={slide4} alt="slide_4" />
                    </div>
                    <div className="img__App">
                      <img src={slide5} alt="slide_5" />
                    </div>
                    <div className="img__App">
                      <img src={slide6} alt="slide_6" />
                    </div>
                    <div className="img__App">
                      <img src={slide7} alt="slide_7" />
                    </div>
                    <div className="img__App">
                      <img src={slide8} alt="slide_8" />
                    </div>
                    <div className="img__App">
                      <img src={slide9} alt="slide_9" />
                    </div>
                    <div className="img__App">
                      <img src={slide10} alt="slide_10" />
                    </div>
                    <div className="img__App">
                      <img src={slide11} alt="slide_11" />
                    </div>
                  </Carousel>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
