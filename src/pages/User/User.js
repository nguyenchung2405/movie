import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import logo from "../../assets/img/web-logo.png";
import { USER_LOGIN } from "../../redux/constants/NguoiDungConst";
import { layThongTinNguoiDung } from "../../redux/action/NguoiDungAction";
import UpdateUser from "./UserUpdate/UpdateUser";
import ThongTinDatVe from "./ThongTinDatVe/ThongTinDatVe";
const { TabPane } = Tabs;

export default function User(props) {
  const { thongTinNguoiDung } = useSelector((state) => state.NguoiDungReducer);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (localStorage.getItem(USER_LOGIN)) {
      let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
      let taiKhoan = {
        taiKhoan: userLogin.taiKhoan,
      };

      dispatch(layThongTinNguoiDung(taiKhoan));
    }
  }, []);

  const handleCloseUser = () => {
    props.history.push("/");
  };
  return (
    <div>
      <div className="user_lap">
        <div className="header">
          <img src={logo} alt="logo" />
          <h3>Thông tin cá nhân</h3>
          <button type="button" onClick={handleCloseUser}>
            <LogoutOutlined />
          </button>
        </div>
        <div className="thongTin">
          <Tabs defaultActiveKey="1" animated tabPosition="left">
            <TabPane tab="Thông Tin Cá Nhân" key="1">
              <Row  className="infoTable">
                <Col xs={24} sm={4}>
                  <div className="sider">
                    <img
                      className="avatar"
                      src={`https://i.pravatar.cc/150?u=${thongTinNguoiDung.taiKhoan}`}
                      alt="avatar"
                    />
                    <p className="ten">{thongTinNguoiDung.taiKhoan}</p>
                  </div>
                </Col>
                <Col className="user_tab" xs={24} sm={10}>
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i className="fas fa-envelope"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Email:
                        <span style={{ color: "#f55960" }}>
                          {thongTinNguoiDung.email}
                        </span>
                      </p>
                      <p>
                        Email đăng ký nhận các tin tức hoạt động của tài khoản
                      </p>
                    </Col>
                  </Row>
                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i className="fas fa-portrait"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Họ Tên:
                        <span style={{ color: "#f55960" }}>
                          {thongTinNguoiDung.hoTen}
                        </span>
                      </p>
                      <p> Tên tài khoản hoạt động trên website</p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i className="fas fa-mobile-alt"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Số Điện Thoại:
                        <span style={{ color: "#f55960" }}>
                          {thongTinNguoiDung.soDT}
                        </span>
                      </p>
                      <p> Số điện thoại khi đăng ký</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={10}>
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i className="fas fa-user"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Tài Khoản:{" "}
                        <span style={{ color: "#f55960" }}>
                          {thongTinNguoiDung.taiKhoan}
                        </span>
                      </p>
                      <p>Là tên tài khoản (username) để đăng nhập tài khoản.</p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i className="fas fa-lock"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Mật Khẩu:
                        <span style={{ color: "#f55960" }}>
                          {thongTinNguoiDung.matKhau}
                        </span>
                      </p>
                      <p>
                        Vui lòng không tiết lộ mật khẩu để bảo mật tài khoản.
                      </p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                </Col>
              </Row>
            </TabPane>
          
              <TabPane tab="Lịch Sử Đặt Vé" key="2">
              <div  className="thongTinDatVe">
                <ThongTinDatVe />
                </div>
              </TabPane>
           
           

            {/**Cập Nhật thông tin người dùng lap */}
            <TabPane tab="Chỉnh Sửa Thông Tin" key="3">
              <UpdateUser />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div className="user_Mobile">
        <div className="header">
          <img src={logo} alt="logo" />
          <h3>Thông tin cá nhân</h3>
          <button type="button" onClick={handleCloseUser}>
            <LogoutOutlined />
          </button>
        </div>
        <div className="thongTin">
          <Tabs defaultActiveKey="1" animated centered>
            <TabPane tab="Thông Tin Cá Nhân" key="1">
              <Row className="infoTable">
                <Col xs={24} sm={4}>
                  <div className="sider">
                    <img
                      className="avatar"
                      src={`https://i.pravatar.cc/150?u=${thongTinNguoiDung.taiKhoan}`}
                      alt="avatar"
                    />
                    <p className="ten">{thongTinNguoiDung.taiKhoan}</p>
                    <p className="maLoai">
                      {thongTinNguoiDung.maLoaiNguoiDung}
                    </p>
                  </div>
                </Col>
                <Col className="user_tab" xs={24} sm={10}>
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i className="fas fa-envelope"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Email:
                        <span style={{ color: "#f55960" }}>
                          {thongTinNguoiDung.email}
                        </span>
                      </p>
                      <p>
                        Email đăng ký nhận các tin tức hoạt động của tài khoản
                      </p>
                    </Col>
                  </Row>
                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i className="fas fa-portrait"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Họ Tên:
                        <span style={{ color: "#f55960" }}>
                          {thongTinNguoiDung.hoTen}
                        </span>
                      </p>
                      <p> Tên tài khoản hoạt động trên website</p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i className="fas fa-mobile-alt"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Số Điện Thoại:
                        <span style={{ color: "#f55960" }}>
                          {thongTinNguoiDung.soDT}
                        </span>
                      </p>
                      <p> Số điện thoại khi đăng ký</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={10}>
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i className="fas fa-user"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Tài Khoản:
                        <span style={{ color: "#f55960" }}>
                          {thongTinNguoiDung.taiKhoan}
                        </span>
                      </p>
                      <p>Là tên tài khoản (username) để đăng nhập .</p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i className="fas fa-lock"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        <span style={{ color: "#f55960" }}>
                          {thongTinNguoiDung.matKhau}
                        </span>
                      </p>
                      <p>
                        Vui lòng không tiết lộ mật khẩu để bảo mật tài khoản.
                      </p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Lịch Sử Đặt Vé" key="2">
              <div  className="thongTinDatVe">
                <ThongTinDatVe />
              </div>
            </TabPane>
            <TabPane tab="Chỉnh Sửa Thông Tin" key="3">
              <UpdateUser />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
