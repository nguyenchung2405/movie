import React, { Component } from "react";
import { Row, Col } from "antd";
import axios from "axios";

export default class ThemPhim extends Component {
  state = {
    maPhim: "",
    ngayKhoiChieu: "",
    tenPhim: "",
    danhGia: "",
    maNhom: "GP01",
    hinhAnh: {},
    moTa: "",
  };

  handleChange = (e) => {
    let target = e.target;
    if (target.name === "hinhAnh") {
      this.setState({ hinhAnh: e.target.files[0] }, () => {
        console.log(this.state);
      });
    } else {
      this.setState({ [e.target.name]: e.target.value }, () => {
        console.log(this.state);
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var form_data = new FormData();
    for (var key in this.state) {
      form_data.append(key, this.state[key]);
    }
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      method: "POST",
      data: form_data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response?.data);
      });

    // const action = themPhimAction(form_data);
    // this.props.dispatch(action);
  };
  render() {
    return (
      <form className="themPhim" onSubmit={this.handleSubmit}>
        <Row className="rowInput">
          <Col span={12}>
            <h2>Mã Phim</h2>
            <div>
              <input
                name="maPhim"
                className="inputPhim"
                type="text"
                onChange={this.handleChange}
              />
            </div>
          </Col>
          <Col span={12}>
            <h2>Ngày Khởi Chiếu</h2>
            <div>
              <input
                name="ngayKhoiChieu"
                className="inputDate"
                type="date"
                onChange={this.handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="rowInput">
          <Col span={12}>
            <h2>Tên Phim</h2>
            <div>
              <input
                name="tenPhim"
                className="inputPhim"
                type="text"
                onChange={this.handleChange}
              />
            </div>
          </Col>
          <Col span={12}>
            <h2>Đánh Giá</h2>
            <div>
              <input
                name="danhGia"
                className="inputPhim"
                type="text"
                onChange={this.handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="rowInput">
          <Col span={12}>
            <h2>Mã Nhóm</h2>
            <div>
              <input
                name="maNhom"
                className="inputPhim"
                onChange={this.handleChange}
                type="text"
              />
            </div>
          </Col>
          <Col span={12}>
            <h2>Hình Ảnh</h2>
            <div>
              <input
                name="hinhAnh"
                className="inputPhim"
                type="file"
                onChange={this.handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="rowTextarea">
          <Col span={24}>
            <textarea
              name="moTa"
              className="textArea"
              onChange={this.handleChange}
            ></textarea>
          </Col>
        </Row>
        <div className="div_btnThemPhim">
          <button
            type="submit"
            className="btnThemPhim"
            onClick={this.handleSubmit}
          >
            Thêm
          </button>
        </div>
      </form>
    );
  }
}
