import React from "react";

import anhPhim from "../../assets/img/anhchitietPhim.jpg";
import anhNho from "../../assets/img/anhNhoChiTietPhim.png";
import { Row, Col, Rate, Progress, Tabs, Card, Avatar } from "antd";
import {
  LikeOutlined,
  EllipsisOutlined,
  EditOutlined,
} from "@ant-design/icons";
import SnackbarContent from "@material-ui/core/SnackbarContent";
const { Meta } = Card;
const { TabPane } = Tabs;
const action = <Rate disabled value={5} />;

export default function ChiTiet() {
  return (
    <div>
      <Row>
        <Col sm={24} id="chiTietTong">
          <div className="chiTiet">
            <div className="chiTietMo">
              {/* <ModalVideoC className="chiTiet__Videores" /> */}
              <img className="anhBiaPhim" src={anhPhim} alt="anhPhim" />
            </div>
            <div className="styleGradient"></div>
            <div className="chiTiet__ThongTin chiTiet__maxWidth">
              <Row>
                <Col sm={6} xs={8} className="anhPhim">
                  <img className="chiTiet__anhNho" src={anhNho} alt="anhNho" />
                  {/* <ModalVideoC /> */}
                </Col>
                <Col sm={10} className="chiTiet__thongTinPhim">
                  <div>
                    <span className="chiTiet__thongTinPhim1 ">16.04.2021</span>
                  </div>
                  <div>
                    <span className="thongTinPhim2__c18">C18</span>
                    <span className="thongTinPhim2__tenPhim">Lật Mặt 48h</span>
                  </div>
                  <div>
                    <span>100 phút - 0 IMDb - 2D/Digital</span>
                  </div>
                </Col>
                <Col sm={4}></Col>
                <Col sm={4} className="chiTiet__vongTron">
                  <Progress
                    type="circle"
                    percent={75}
                    strokeColor="#7ed321"
                    strokeWidth={7}
                    format={(percent) => `7.8 `}
                  />
                  <Rate disabled defaultValue={3} count={3} />
                  <p style={{ color: "white", marginTop: "10px" }}>
                    320 người đánh giá
                  </p>
                </Col>
              </Row>
            </div>
          </div>
          <div className="chiTiet__NoiDung chiTiet__maxWidth">
            <div className="noiDung__Mobile">
              <div>
                <span>16.04.2021</span>
              </div>
              <div>
                <span>Lật mặt: 48h</span>
              </div>
              <div>
                <span>100 phút - 0 IMDb - 2D/Digital</span>
              </div>
            </div>
            <div>
              <Tabs type="card" defaultActiveKey="1" centered animated={true}>
                <TabPane tab="Thông Tin" key="1">
                  <Row>
                    <Col xs={24} sm={12} className="noiDung__Phim">
                      <Row>
                        <p style={{ width: "35%" }}>Ngày công chiếu</p>
                        <p style={{ width: "40%" }}>16.04.2021</p>
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
                          Lật Mặt 5: 48H kể về Hiền - một cựu vận động viên võ
                          thuật sau khi giải nghệ vì chấn thương đã cùng vợ và
                          con gái về quê thăm gia đình Lâm. Họ bị cuốn vào một
                          cuộc rượt đuổi với tay phản diện A Dìn. Để bảo vệ cho
                          gia đình nhỏ, Hiền phải đưa vợ con chạy trốn khắp miền
                          Tây sông nước với sự trợ giúp của người bạn thật thà
                          và hài hước.
                        </p>
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Đánh Giá" key="2">
                  <div className="comment">
                    <SnackbarContent
                      message="Bạn nghĩ gì về phim này ?"
                      action={action}
                    />
                  </div>
                  <div className="comment">
                    <Card
                      actions={[
                        <LikeOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Nam"
                        description="Phải nói là phim quá hay"
                      />
                    </Card>
                  </div>
                  <div className="comment">
                    <Card
                      actions={[
                        <LikeOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-1.jpg" />
                        }
                        title="Phương Anh"
                        description="Không hay bằng các phần trước. Ai thích xem hành động thì coi, vì phim chỉ chạy và chạy liên tục xong hết phim, không được logic lắm! Cảnh cảm động cũng làm không tới :(((!"
                      />
                    </Card>
                  </div>
                  <div className="comment">
                    <Card
                      actions={[
                        <LikeOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-avatar-de-thuong-cute.jpg" />
                        }
                        title="Thư"
                        description="Phim xuất sắc nha <3"
                      />
                    </Card>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
