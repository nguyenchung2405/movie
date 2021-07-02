import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tabs, Modal, Button, Row, Col } from "antd";
import { LogoutOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import logo from "../../assets/img/web-logo.png";
import TableNguoiDungAdmin from "./TableNguoiDungAdmin";
import TablePhanTrangPhim from "./TablePhanTrangPhim";
export default function Admin(props) {
  const { TabPane } = Tabs;
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const _handleCloseAdmin = () => {
    props.history.push("/");
  };
  return (
    <div className="adMin">
      <div className="headerAdmin">
        <div className="logoAdmin">
          <NavLink to="/">
            <img src={logo} alt="logoAdmin" />
          </NavLink>

          <h3 className="dashBoard">Dashboard</h3>
          <MenuUnfoldOutlined className="logoDash" />
        </div>
        <button className="buttonCloseAmin" onClick={_handleCloseAdmin}>
          <LogoutOutlined className="logoBoard" />
        </button>
      </div>
      <div className="tabAdmin">
        <Tabs defaultActiveKey="1" tabPosition="left">
          <TabPane tab="Quản Lý Phim" key="1">
            <Button
              className="btnThemPhim"
              type="primary"
              onClick={() => setVisible(true)}
            >
              Thêm Phim
            </Button>
            <Modal
              title="Thêm Phim"
              centered
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              width={1000}
            >
              <div className="themPhim">
                <Row className="rowInput">
                  <Col span={12}>
                    <h2>Mã Phim</h2>
                    <div>
                      <input className="inputPhim" type="text" />
                    </div>
                  </Col>
                  <Col span={12}>
                    <h2>Ngày Khởi Chiếu</h2>
                    <div>
                      <input className="inputDate" type="date" />
                    </div>
                  </Col>
                </Row>
                <Row className="rowInput">
                  <Col span={12}>
                    <h2>Tên Phim</h2>
                    <div>
                      <input className="inputPhim" type="text" />
                    </div>
                  </Col>
                  <Col span={12}>
                    <h2>Đánh Giá</h2>
                    <div>
                      <input className="inputPhim" type="text" />
                    </div>
                  </Col>
                </Row>
                <Row className="rowInput">
                  <Col span={12}>
                    <h2>Trailer</h2>
                    <div>
                      <input className="inputPhim" type="text" />
                    </div>
                  </Col>
                  <Col span={12}>
                    <h2>Hình Ảnh</h2>
                    <div>
                      <input className="inputPhim" type="text" />
                    </div>
                  </Col>
                </Row>
                <Row className="rowTextarea">
                  <Col span={24}>
                    <textarea className="textArea"></textarea>
                  </Col>
                </Row>
              </div>
            </Modal>
            <TablePhanTrangPhim />
          </TabPane>
          <TabPane tab="Quản Lý Người Dùng" key="2">
            <Button
              className="btnThemPhim"
              type="primary"
              onClick={() => setVisible1(true)}
            >
              Thêm Người Dùng
            </Button>
            <Modal
              title="Thêm Người Dùng"
              centered
              visible={visible1}
              onOk={() => setVisible1(false)}
              onCancel={() => setVisible1(false)}
              width={1000}
            >
              <div className="themNguoiDung">
                <Row className="rowInput">
                  <Col span={12}>
                    <h2>Tài Khoản</h2>
                    <div>
                      <input className="inputPhim" type="text" />
                    </div>
                  </Col>
                  <Col span={12}>
                    <h2>Email </h2>
                    <div>
                      <input className="inputPhim" type="text" />
                    </div>
                  </Col>
                </Row>
                <Row className="rowInput">
                  <Col span={12}>
                    <h2>Mật Khẩu</h2>
                    <div>
                      <input className="inputPhim" type="password" />
                    </div>
                  </Col>
                  <Col span={12}>
                    <h2>Số Điện Thoại</h2>
                    <div>
                      <input className="inputPhim" type="text" />
                    </div>
                  </Col>
                </Row>
                <Row className="rowInput">
                  <Col span={12}>
                    <h2>Họ Tên Người Dùng</h2>
                    <div>
                      <input className="inputPhim" type="text" />
                    </div>
                  </Col>
                  <Col span={12}>
                    <h2>Loại Người Dùng</h2>
                    <div>
                      <select className="selectNguoiDung">
                        <option>KhachHang</option>
                        <option>QuanTri</option>
                      </select>
                    </div>
                  </Col>
                </Row>
              </div>
            </Modal>
            <TableNguoiDungAdmin />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
