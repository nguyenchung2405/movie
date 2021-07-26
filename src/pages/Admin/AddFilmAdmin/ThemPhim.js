import React, { Component } from "react";
import { Row, Col } from "antd";
import { quanLyAdminServices } from "../../../redux/service/QuanLyAdminServices";
import Swal from "sweetalert2";
export default class ThemPhim extends Component {
 
  state = {
    values: {
      maPhim: "",
      tenPhim: "",
      hinhAnh: {},
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      danhGia: "",
      maNhom: "",
    },
    errors: {
      maPhim: "",
      tenPhim: "",
      hinhAnh: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      danhGia: "",
      maNhom: "",
    },
  };
  handleChangeInput = (event) => {
    var { value, name } = event.target;
    let newValues = {
      ...this.state.values,
      [name]: value,
    };
    let newErrors = {
      ...this.state.errors,
      [name]: value === "" ? "*Không được bỏ trống !" : "",
    };

    if (name === "hinhAnh") {
      newValues[name] = event.target.files[0];
    }
    if (name === "ngayKhoiChieu") {
      var moment = require("moment");
      newValues[name] = moment(value, "yyyy-MM-DD").format("DD/MM/yyyy");
    }
    if (name === "danhGia") {
      let regexNumberic = /^[0-9]*$/;
      if (value <= 10 && value >= 0 && value.match(regexNumberic)) {
        newErrors.danhGia = "";
      } else {
        newErrors.danhGia = "*Chỉ được nhập số từ 1 tới 10 !";
      }
    }
    this.setState({ values: newValues, errors: newErrors });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let { values, errors } = this.state;

    for (let key in values) {
      if (values[key] === "") {
        // kiểm tra lỗi
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }
    if (!valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Thông tin không hợp lệ",
        });
      return;
    } else {
      // gọi api hoạc dispatch redux
      var form_data = new FormData();
      for (let key in this.state.values) {
        form_data.append(key, this.state.values[key]);
      }
      quanLyAdminServices
        .themPhim(form_data)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            text: 'Thêm phim thành công',
            });
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Nhập lại thông tin",
            });
        });
    }
  };
  render() {
   
    return (
      <form className="themPhim" onSubmit={this.handleSubmit}>
        <Row className="rowInput">
          <Col span={12}>
            <h2>Mã Phim</h2>
            <div>
            <input type="text" className="inputPhim" 
            placeholder=" Mã Phim"
             name="maPhim" onChange={this.handleChangeInput} required/>
            <p className="text-danger"> {this.state.errors.maPhim}</p>
            </div>
          </Col>
          <Col span={12}>
            <h2>Ngày khởi chiếu</h2>
            <div>
            <input type="date" className="inputPhim"  name="ngayKhoiChieu" min="today" onChange={this.handleChangeInput} required/>
            <p className="text-danger"> {this.state.errors.ngayKhoiChieu}</p>
            </div>
          </Col>
        </Row>
        <Row className="rowInput">
          <Col span={12}>
            <h2>Tên Phim</h2>
            <div>
            <input type="text" className="inputPhim"
            placeholder="Tên phim"
             name="tenPhim" onChange={this.handleChangeInput}  required  />
             <p className="text-danger"> {this.state.errors.tenPhim}</p>
            </div>
          </Col>
          <Col span={12}>
            <h2>Đánh Giá</h2>
            <div>
            <input type="text" className="inputPhim"  name="danhGia" 
            placeholder=" 1 - 10"
            onChange={this.handleChangeInput} required/>
            <p className="text-danger"> {this.state.errors.danhGia}</p>
            </div>
          </Col>
        </Row>
        <Row className="rowInput">
          <Col span={12}>
            <h2>Mã Nhóm</h2>
            <div>
            <input  type="text"  className="inputPhim" name="maNhom"
            placeholder="GP01 - GP09"
             onChange={this.handleChangeInput} required />
            <p className="text-danger"> {this.state.errors.maNhom} </p>
            </div>
          </Col>
          <Col span={12}>
            <h2>Hình Ảnh</h2>
            <div>
              <input type="file" className="inputPhim" name="hinhAnh" onChange={this.handleChangeInput}/>
            </div>
            <p className="text-danger"> {this.state.errors.hinhAnh}</p>
          </Col>
        </Row>
        <Row className="rowInput">
          <Col span={12}>
            <h2>Mô Tả</h2>
            <input type="text" className="inputPhim" name="moTa" 
            placeholder="Nhập mô tả"
             onChange={this.handleChangeInput}   required />
            <p className="text-danger"> {this.state.errors.moTa}  </p>
          </Col>
          <Col span={12}>
            <h2>Trailer</h2>
            <input  type="text" className="inputPhim"
            placeholder="link trailer"
             name="trailer" onChange={this.handleChangeInput} required/>
            <p className="text-danger"> {this.state.errors.trailer}  </p>
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
