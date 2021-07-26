import React from "react";
import logo from "../../assets/img/web-logo.png";
import { Select } from "antd";

export default function Header() {
  const { Option } = Select;

  return (
    <div>
      <div className="header">
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
        <div className="header__Center">
          <a href="#lichChieu">Lịch Chiếu</a>
          <a href="#cumRap">Cụm Rạp</a>
          <a href="#tinTuc">Tin Tức</a>
          <a href="#ungDung">Ứng dụng</a>
        </div>
        <div className="header__Right">
          <div className="account">
            <div>
              <i className="fas fa-user-circle"></i>
            </div>

            <a href="#login">Đăng nhập</a>
          </div>
          <div className="location">
            <i className="fas fa-map-marker-alt"></i>
            <Select defaultValue="hCM" style={{ width: 120 }} bordered={false}>
              <Option value="haNoi">Hà Nội</Option>
              <Option value="canTho">Cần Thơ</Option>
              <Option value="hCM">Hồ Chí Minh</Option>
              <Option value="binhThuan">Bình Thuận</Option>
              <Option value="daNang">Đà Nẵng</Option>
              <Option value="quangNinh">Quảng Ninh</Option>
              <Option value="haiPhong">Hải Phòng</Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
