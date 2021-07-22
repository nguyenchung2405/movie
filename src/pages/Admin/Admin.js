import { LogoutOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Modal, Tabs } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/web-logo.png";
import TablePhanTrangPhim from "./TableFilmAdmin/TablePhanTrangPhim";
import TableNguoiDungAdmin from "./TableUserAdmin/TableNguoiDungAdmin";
import ThemPhim from "./AddFilmAdmin/ThemPhim";
import AddUser from "./AddUserAdmin/AddUser";
export default function Admin(props) {
  const { TabPane } = Tabs;
  const [visible, setVisible] = useState(false);
  const [visibleUser, setVisibleUser] = useState(false);
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
              onClick={() => setVisibleUser(true)}
            >
              Thêm Người Dùng
            </Button>
            <Modal
              title="Thêm Người Dùng"
              centered
              visible={visibleUser}
              onOk={() => setVisibleUser(false)}
              onCancel={() => setVisibleUser(false)}
              width={1000}
            >
              <AddUser closerModal={setVisibleUser}/>  
                {/* <ThemNguoiDung closeModal={setVisibleUser}/>  */}
            </Modal>
            <TableNguoiDungAdmin />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
