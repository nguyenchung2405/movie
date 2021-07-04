import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tabs, Modal, Button } from "antd";
import { LogoutOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import logo from "../../assets/img/web-logo.png";
import TableNguoiDungAdmin from "./TableNguoiDungAdmin";
import TablePhanTrangPhim from "./TablePhanTrangPhim";
import ThemNguoiDung from "./ThemNguoiDung";
import ThemPhim from "./ThemPhim";
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
              <ThemPhim />
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
              <ThemNguoiDung />
            </Modal>
            <TableNguoiDungAdmin />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
