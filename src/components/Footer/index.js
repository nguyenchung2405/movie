import React, {memo} from "react";
import { Row, Col } from "antd";
import cgv from "../../assets/img/logo/CGV-logo.png";
import bhd from "../../assets/img/logo/BHD-logo.png";
import galaxy from "../../assets/img/logo/galaxy-cinema-logo.png";
import cinesta from "../../assets/img/logo/cinestar-logo.png";
import lotte from "../../assets/img/logo/logo6.png";
import mega from "../../assets/img/logo/megaGS-logo.png";
import beta from "../../assets/img/logo/beta.jpg";
import ddc from "../../assets/img/logo/DDC-logo.png";
import touch from "../../assets/img/logo/touch-logo.png";
import cinemax from "../../assets/img/logo/cnx.jpg";
import startlight from "../../assets/img/logo/starlight-logo.png";
import dcin from "../../assets/img/logo/logo4.jpg";
import zalo from "../../assets/img/logo/zalo-logo.png";
import payoo from "../../assets/img/logo/payoo.jpg";
import vietcom from "../../assets/img/logo/vietcombank-logo.png";
import ari from "../../assets/img/logo/agribank-logo.png";
import vietin from "../../assets/img/logo/vietin-logo.png";
import ivb from "../../assets/img/logo/ivb-logo.png";
import go from "../../assets/img/logo/123go-logo.png";
import laban from "../../assets/img/logo/laban-logo.png";
import androi from "../../assets/img/logo/android-logo.png";
import apple from "../../assets/img/logo/apple-logo.png";
import face from "../../assets/img/logo/facebook-logo.png";
import zion from "../../assets/img/logo/zion-logo.jpg";
import boCT from "../../assets/img/logo/bocongthuong.png";
function Footer() {
  return (
    <div id="footer">
      <div className="maxWidth940">
        <Row>
          <Col xs={24} sm={8} id="footer__Document">
            <p className="title footer__Med">TIX</p>
            <Row>
              <Col className="footer__Med" xs={24} sm={12}>
                <a href="#10">FAQ</a>
                <br />
                <a href="#9">Brand Guidelines</a>
              </Col>
              <Col xs={24} sm={12}>
                <a href="#8">Thỏa thuận sử dụng</a>
                <br />
                <a href="#7">Chính sách bảo mật</a>
              </Col>
            </Row>
          </Col>
          <Col className="footer__Med" xs={24} sm={8} id="footer__Connect">
            <p className="title ">Đối tác</p>
            <Row>
              <Col xs={24} sm={24} className="partnerLine">
                <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/">
                  <img className="iconConnect" src={cgv} alt="4" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.bhdstar.vn/"
                >
                  <img className="iconConnect" src={bhd} alt="3" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.galaxycine.vn/"
                >
                  <img className="iconConnect" src={galaxy} alt="2" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://cinestar.com.vn/"
                >
                  <img className="iconConnect" src={cinesta} alt="1" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://lottecinemavn.com/LCHS/index.aspx"
                >
                  <img className="iconConnect" src={lotte} alt="123" />
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} className="partnerLine">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.megagscinemas.vn/"
                >
                  <img className="iconConnect" src={mega} alt="36" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.betacinemas.vn/home.htm"
                >
                  <img className="iconConnect" src={beta} alt="34" />
                </a>
                <a target="_blank" rel="noreferrer" href="http://ddcinema.vn/">
                  <img className="iconConnect" src={ddc} alt="32" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://touchcinema.com/"
                >
                  <img className="iconConnect" src={touch} alt="30" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://cinemaxvn.com/"
                >
                  <img className="iconConnect" src={cinemax} alt="28" />
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} className="partnerLine">
                <a target="_blank" rel="noreferrer" href="#27">
                  <img className="iconConnect" src={startlight} alt="26" />
                </a>
                <a target="_blank" rel="noreferrer" href="#25">
                  <img className="iconConnect" src={dcin} alt="24" />
                </a>
                <a target="_blank" rel="noreferrer" href="#23">
                  <img className="iconConnect" src={zalo} alt="22" />
                </a>
                <a target="_blank" rel="noreferrer" href="#21">
                  <img className="iconConnect" src={payoo} alt="20" />
                </a>
                <a target="_blank" rel="noreferrer" href="#19">
                  <img className="iconConnect" src={vietcom} alt="18" />
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} className="partnerLine">
                <a target="_blank" rel="noreferrer" href="#17">
                  <img className="iconConnect" src={ari} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" href="#16">
                  <img className="iconConnect" src={vietin} alt="15" />
                </a>
                <a target="_blank" rel="noreferrer" href="#14">
                  <img className="iconConnect" src={ivb} alt="13" />
                </a>
                <a target="_blank" rel="noreferrer" href="#0">
                  <img className="iconConnect" src={go} alt="12" />
                </a>
                <a target="_blank" rel="noreferrer" href="#1">
                  <img className="iconConnect" src={laban} alt="11" />
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={8} id="footer__Social">
            <Row>
              <Col xs={12} className="text__Center  footer__Med ">
                <p className="title">MOBILE APP</p>
                <a target="_blank" rel="noreferrer" href="#d" title="apple app">
                  <img className="social_image_logo" src={apple} alt="6" />
                </a>
                <a target="_blank" rel="noreferrer" href="#c">
                  <img className="social_image_logo" src={androi} alt="7" />
                </a>
              </Col>
              <Col xs={12} className="text__Cente reponMed">
                <p className="title">SOCIAL</p>
                <a target="_blank" rel="noreferrer" href="#b">
                  <img className="social_image_logo" src={face} alt="8" />
                </a>
                <a target="_blank" rel="noreferrer" href="#a">
                  <img className="social_image_logo" src={zalo} alt="9" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="hrFooter" />
        <Row>
          <Col sm={2} className="imgFooter">
            <img className="zion_icon" src={zion} alt="789" />
          </Col>
          <Col xs={24} sm={18} className="infoFooter">
            <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
            <span>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </span>
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              <br />
              đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
              ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
              Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí
              Minh cấp.
            </span>
            <span>
              Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
              <br />
              Email:
              <a href="mailto:support@tix.vn" style={{ color: "#fb4226" }}>
                support@tix.vn
              </a>
            </span>
          </Col>
          <Col xs={24} sm={4} className="imgFooter">
            <a
              target="_blank"
              rel="noreferrer"
              href="http://online.gov.vn/Home/WebDetails/62782"
            >
              <img className="imgBoCo" alt="Bộ Công Thương" src={boCT} />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default memo(Footer);