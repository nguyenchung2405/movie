import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import logo from "../../assets/img/web-logo.png";
const { TabPane } = Tabs;

export default function User(props) {
  const userLogin = useSelector((state) => state.NguoiDungReducer.tenDangNhap);

  const handleCloseUser = () => {
    props.history.push("/");
    console.log("123");
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
              <Row gutter={16}>
                <Col xs={24} sm={4}>
                  <div className="sider">
                    <img
                      className="avatar"
                      src="https://i.pravatar.cc/150?u=Levi10"
                      alt="avatar"
                    />
                    <p className="ten">{userLogin.hoTen}</p>
                    <p className="maLoai">{userLogin.maLoaiNguoiDung}</p>
                  </div>
                </Col>
                <Col className="user_tab" xs={24} sm={10}>
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i class="fas fa-envelope"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Email:
                        <span style={{ color: "#f55960" }}>
                          {userLogin.email}
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
                      <i class="fas fa-portrait"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Họ Tên:
                        <span style={{ color: "#f55960" }}>
                          {userLogin.hoTen}
                        </span>
                      </p>
                      <p> Tên tài khoản hoạt động trên website</p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i class="fas fa-mobile-alt"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Số Điện Thoại:
                        <span style={{ color: "#f55960" }}>
                          {userLogin.soDT}
                        </span>
                      </p>
                      <p> Số điện thoại khi đăng ký</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={10}>
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i class="fas fa-user"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Tài Khoản:{" "}
                        <span style={{ color: "#f55960" }}>
                          {userLogin.taiKhoan}
                        </span>
                      </p>
                      <p>Là tên tài khoản (username) để đăng nhập tài khoản.</p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i class="fas fa-lock"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Mật Khẩu: ......
                        <span style={{ color: "#f55960" }}></span>
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
              <table className="datVe">
                <thead>
                  <tr>
                    <th>Tên phim</th>
                    <th>Ngày đặt</th>
                    <th>Thời lượng phim</th>
                    <th>Rạp</th>
                    <th>Ghế số</th>
                    <th>Mã Vé</th>
                    <th>Giá vé</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>agular</td>
                    <td>agular</td>
                    <td>agular</td>
                    <td>agular</td>
                    <td>agular</td>
                    <td>agular</td>
                    <td>agular</td>
                  </tr>
                </tbody>
              </table>
            </TabPane>
            <TabPane tab="Chỉnh Sửa Thông Tin" key="3">
              <Row gutter={16}>
                <Col xs={24} sm={4}>
                  <div className="sider">
                    <img
                      className="avatar"
                      src="https://i.pravatar.cc/150?u=Levi10"
                      alt="avatar"
                    />
                    <p className="ten">{userLogin.hoTen}</p>
                    <p className="maLoai">{userLogin.maLoaiNguoiDung}</p>
                  </div>
                </Col>
                <Col className="user_tab" xs={24} sm={10}>
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i class="fas fa-envelope"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">Email:</p>
                      <input placeholder="Email" />
                      <p>
                        Email đăng ký nhận các tin tức hoạt động của tài khoản
                      </p>
                    </Col>
                  </Row>
                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i class="fas fa-portrait"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">Họ Tên:</p>
                      <input placeholder="Họ Tên" />
                      <p> Tên tài khoản hoạt động trên website</p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i class="fas fa-mobile-alt"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">Số Điện Thoại:</p>
                      <input placeholder="Số Điện Thoại" />
                      <p> Số điện thoại khi đăng ký</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={10}>
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i class="fas fa-user"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Tài Khoản:
                        <span style={{ color: "#f55960" }}>
                          {userLogin.taiKhoan}
                        </span>
                      </p>
                      <p>Là tên tài khoản (username) để đăng nhập tài khoản.</p>
                    </Col>
                  </Row>

                  <hr
                    style={{
                      marginTop: "45px ",
                      marginBottom: "20px",
                      opacity: "0.3",
                    }}
                  />
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i class="fas fa-lock"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">Mật Khẩu:</p>
                      <input placeholder="Mật Khẩu" />
                      <p>
                        Vui lòng không tiết lộ mật khẩu để bảo mật tài khoản.
                      </p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <div className="btn_Cap">
                    <button className="btn_capNhat">Cập Nhật</button>
                  </div>
                </Col>
              </Row>
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
              <Row gutter={16}>
                <Col xs={24} sm={4}>
                  <div className="sider">
                    <img
                      className="avatar"
                      src="https://i.pravatar.cc/150?u=Levi10"
                      alt="avatar"
                    />
                    <p className="ten">{userLogin.hoTen}</p>
                    <p className="maLoai">{userLogin.maLoaiNguoiDung}</p>
                  </div>
                </Col>
                <Col className="user_tab" xs={24} sm={10}>
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i class="fas fa-envelope"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Email:
                        <span style={{ color: "#f55960" }}>
                          {userLogin.email}
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
                      <i class="fas fa-portrait"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Họ Tên:
                        <span style={{ color: "#f55960" }}>
                          {userLogin.hoTen}
                        </span>
                      </p>
                      <p> Tên tài khoản hoạt động trên website</p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i class="fas fa-mobile-alt"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Số Điện Thoại:
                        <span style={{ color: "#f55960" }}>
                          {userLogin.soDT}
                        </span>
                      </p>
                      <p> Số điện thoại khi đăng ký</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={10}>
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i class="fas fa-user"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Tài Khoản:
                        <span style={{ color: "#f55960" }}>
                          {userLogin.taiKhoan}
                        </span>
                      </p>
                      <p>Là tên tài khoản (username) để đăng nhập tài khoản.</p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i class="fas fa-lock"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap"> Mật Khẩu: .......</p>
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
              <div style={{ overflow: "auto" }}>
                <table className="datVe">
                  <thead>
                    <tr>
                      <th>Tên phim</th>
                      <th>Ngày đặt</th>
                      <th>Thời lượng phim</th>
                      <th>Rạp</th>
                      <th>Ghế số</th>
                      <th>Mã Vé</th>
                      <th>Giá vé</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>agular</td>
                      <td>agular</td>
                      <td>agular</td>
                      <td>agular</td>
                      <td>agular</td>
                      <td>agular</td>
                      <td>agular</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPane>
            <TabPane tab="Chỉnh Sửa Thông Tin" key="3">
              <Row gutter={16}>
                <Col xs={24} sm={4}>
                  <div className="sider">
                    <img
                      className="avatar"
                      src="https://i.pravatar.cc/150?u=Levi10"
                      alt="avatar"
                    />
                    <p className="ten">{userLogin.hoTen}</p>
                    <p className="maLoai">{userLogin.maLoaiNguoiDung}</p>
                  </div>
                </Col>
                <Col className="user_tab" xs={24} sm={10}>
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i class="fas fa-envelope"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">Email:</p>
                      <input placeholder="Email" />
                      <p>
                        Email đăng ký nhận các tin tức hoạt động của tài khoản
                      </p>
                    </Col>
                  </Row>
                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i class="fas fa-portrait"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">Họ Tên:</p>
                      <input placeholder="Họ Tên" />
                      <p> Tên tài khoản hoạt động trên website</p>
                    </Col>
                  </Row>

                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i class="fas fa-mobile-alt"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">Số Điện Thoại:</p>
                      <input placeholder="Số Điện Thoại" />
                      <p> Số điện thoại khi đăng ký</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={10}>
                  <Row className="user_content">
                    <Col xs={24} sm={4} className="user_Icon">
                      <i class="fas fa-user"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">
                        Tài Khoản:
                        <span style={{ color: "#f55960" }}>
                          {userLogin.taiKhoan}
                        </span>
                      </p>
                      <p>Là tên tài khoản (username) để đăng nhập tài khoản.</p>
                    </Col>
                  </Row>
                  <hr
                    style={{
                      marginTop: "45px ",
                      marginBottom: "20px",
                      opacity: "0.3",
                    }}
                  />
                  <Row className="user_content">
                    <Col sm={4} className="user_Icon">
                      <i class="fas fa-lock"></i>
                    </Col>
                    <Col sm={20}>
                      <p className="thongTin_dangNhap">Mật Khẩu:</p>
                      <input placeholder="Mật Khẩu" />
                      <p>
                        Vui lòng không tiết lộ mật khẩu để bảo mật tài khoản.
                      </p>
                    </Col>
                  </Row>
                  <hr style={{ margin: "20px 0", opacity: "0.3" }} />
                  <div className="btn_Cap">
                    <button className="btn_capNhat">Cập Nhật</button>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
