import React, { Fragment, useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import IconButton from "@material-ui/core/IconButton";
import { Row, Col, Rate, Tabs} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinPhimAction } from "../../redux/action/PhimAction";
import HeaderComponent from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer";

const { TabPane } = Tabs;
const action = <Rate disabled value={5} />;

export default function ChiTietPhimSapChieu(props) {
  const { chiTietPhim } = useSelector((state) => state.PhimReducer);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(layThongTinPhimAction(id));
  }, []);

  const getVideoId = (url) => {
    if (!!url) {
      var arrItem = url.split('/');
      return arrItem[arrItem.length - 1]
    }
    return url
  }

  return (
    <div>
      <HeaderComponent />
      <Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={getVideoId(chiTietPhim.trailer)}
          onClose={() => setOpen(false)}
        />
      </Fragment>
      <Row style={{ marginTop: "60px" }}>
        <Col sm={24} id="chiTietTong">
          <div className="chiTiet">
            <div className="chiTietMo">
              {/* <ModalVideoC className="chiTiet__Videores" /> */}
              <img
                className="anhBiaPhim"
              src={chiTietPhim.hinhAnh}
              alt={chiTietPhim.hinhAnh}
              />
            </div>
            <div className="styleGradient"></div>
            <div className="chiTiet__ThongTin chiTiet__maxWidth">
              <Row>
                <Col sm={6} xs={8} className="anhPhim">
                  <img
                    className="chiTiet__anhNho"
                  src={chiTietPhim.hinhAnh}
                  alt={chiTietPhim.hinhAnh}
                  />
                  <Fragment>
                    <div
                      className="btnPlay"
                      style={{
                        width: "100%",
                        textAlign: "center",
                        position: "absolute",
                        top: "40%",
                      }}
                    >
                      <IconButton onClick={() => setOpen(true)}>
                        <PlayArrowIcon className="iconPlay" />
                      </IconButton>
                    </div>
                  </Fragment>
                </Col>
                <Col sm={10} className="chiTiet__thongTinPhim">
                  <div>
                    <span className="chiTiet__thongTinPhim1 ">
                      {(chiTietPhim.ngayKhoiChieu)}
                    </span>
                  </div>
                  <div>
                    <span className="thongTinPhim2__c18">C18</span>
                    <span className="thongTinPhim2__tenPhim">
                      {chiTietPhim.tenPhim}
                    </span>
                  </div>
                  <div>
                    <span>100 phút - 0 IMDb - 2D/Digital</span>
                  </div>
                </Col>
                <Col sm={4}></Col>
               
              </Row>
            </div>
          </div>
          <div className="chiTiet__NoiDung chiTiet__maxWidth">
            <div className="noiDung__Mobile">
              <div>
                <span>{chiTietPhim.ngayKhoiChieu}</span>
              </div>
              <div>
                <span>{chiTietPhim.tenPhim}</span>
              </div>
              <div>
                <span>100 phút - 0 IMDb - 2D/Digital</span>
              </div>
            </div>
            <div>
              <Tabs type="card" defaultActiveKey="1" centered animated={true}>
           
                <TabPane tab="Thông Tin" key="2">
                  <Row>
                    <Col xs={24} sm={12} className="noiDung__Phim">
                      <Row>
                        <p style={{ width: "35%" }}>Ngày công chiếu</p>
                        <p style={{ width: "40%" }}>
                          {(chiTietPhim.ngayKhoiChieu)}
                        </p>
                      </Row>
                      <Row>
                        <p style={{ width: "35%" }}>Đạo diễn </p>
                        <p style={{ width: "40%" }}>Lý Hải</p>
                      </Row>
                      <Row>
                        <p style={{ width: "35%" }}>Diễn viên </p>
                        <p style={{ width: "40%" }}>
                          Tiết Cương, Huỳnh Đông, Mạc Văn Khoa, Ốc Thanh Vân
                        </p>
                      </Row>
                      <Row>
                        <p style={{ width: "35%" }}>Thể Loại </p>
                        <p style={{ width: "40%" }}></p>
                      </Row>
                      <Row>
                        <p style={{ width: "35%" }}>Định dạng </p>
                        <p style={{ width: "40%" }}>2D/Digital</p>
                      </Row>
                      <Row>
                        <p style={{ width: "35%" }}>Quốc Gia SX </p>
                        <p style={{ width: "40%" }}>Việt Nam</p>
                      </Row>
                    </Col>
                    <Col xs={24} sm={12} className="noiDung__Phimm">
                      <Row>
                        <p style={{ width: "100%" }}>Nội Dung</p>
                      </Row>
                      <Row>
                        <p
                          style={{
                            width: "100%",
                            textAlign: "justify",
                          }}
                        >
                          {chiTietPhim.moTa}
                        </p>
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
               
              </Tabs>
            </div>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
