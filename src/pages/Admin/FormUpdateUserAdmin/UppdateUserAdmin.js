import React, { Component } from 'react'
import Swal from "sweetalert2";
import { Row, Col } from 'antd';
import { suaNguoiDungAction } from '../../../redux/action/UserAdminAction';
export default class UppdateUserAdmin extends Component {
    
    state = {
        values: {
          hoTen: "",
          taiKhoan: "",
          matKhau: "",
          email: "",
          soDt: "",
          maLoaiNguoiDung: "",
          maNhom: "GP01",
        },
        errors: {
          hoTen: "",
          taiKhoan: "",
          matKhau: "",
          email: "",
          soDt: "",
          maLoaiNguoiDung: "",
        },
      };
     
      componentDidMount() {
          let{ndEdit}=this.props;
        this.setState({
          values: {
            hoTen: ndEdit.hoTen,
            taiKhoan: ndEdit.taiKhoan,
            matKhau: ndEdit.matKhau,
            email: ndEdit.email,
            soDt: ndEdit.soDt,
            maLoaiNguoiDung: ndEdit.maLoaiNguoiDung,
            maNhom: "GP01",
          },
          errors: {
            hoTen: "",
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maLoaiNguoiDung: "",
            maNhom: "",
          },
        });
      }
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
    
        if (name === "email") {
          let regexEmail = "^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$";
          if (value.match(regexEmail)) {
            newErrors.email = "";
          } else {
            newErrors.email = "Email không hợp lệ";
          }
        }
        this.setState({ values: newValues, errors: newErrors });
      };

      handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        let { values, errors } = this.state;
        for (let key in values) {
          if (values[key] === "") {
            valid = false;
          }
        }
        for (let key in errors) {
          if (errors[key] !== "") {
            valid = false;
          }
        }
        if (!valid) {
          alert("thông tin không hợp lệ");
          return;
        }
      // gọi api hoạc dispatch redux
      
         suaNguoiDungAction(this.state.values)
    };
    render() {
        const {ndEdit}=this.props;
        console.log(ndEdit)
        return (
            <form className="themNguoiDung" onSubmit={this.handleSubmit} >
            <Row className="rowInput">
              <Col span={12}>
                <h2>Tài Khoản</h2>
                <div>
                <input
                    className="inputPhim"
                    type="text"
                    name="taiKhoan"
                    placeholder="Tài Khoản"
                    onChange={this.handleChangeInput}
                    value={this.state.values.taiKhoan}
                    disabled
                    required
                  />
                </div>
                <p className="canhBaoCap">  {this.state.errors.taiKhoan}</p>
              </Col>
              <Col span={12}>
                <h2>Email </h2>
                <div>
                <input
                    className="inputPhim"
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={this.handleChangeInput}
                    value={this.state.values.email}
                    required
                  />
                </div>
                <p className="canhBaoCap">  {this.state.errors.email}</p>
              </Col>
            </Row>
            <Row className="rowInput">
              <Col span={12}>
                <h2>Mật Khẩu</h2>
                <div>
                <input
                    className="inputPhim"
                    type="password"
                    name="matKhau"
                    placeholder="Mật Khẩu"
                    onChange={this.handleChangeInput}
                    value={this.state.values.matKhau}
                    required
                  />
                </div>
                <p className="canhBaoCap">  {this.state.errors.matKhau}</p>
              </Col>
              <Col span={12}>
                <h2>Số Điện Thoại</h2>
                <div>
                <input
                    className="inputPhim"
                    type="text"
                    name="soDT"
                    placeholder="Số Điện Thoại"
                    onChange={this.handleChangeInput}
                    value={this.state.values.soDt}
                    required
                  />
                </div>
                <p className="canhBaoCap">  {this.state.errors.soDt}</p>
              </Col>
            </Row>
            <Row className="rowInput">
              <Col span={12}>
                <h2>Họ Tên Người Dùng</h2>
                <div>
                <input
                    className="inputPhim"
                    type="text"
                    placeholder="Họ Tên"
                    name="hoTen"
                    onChange={this.handleChangeInput}
                    value={this.state.values.hoTen}
                    required
                  />
                </div>
                <p className="canhBaoCap">  {this.state.errors.hoTen}</p>
              </Col>
              <Col span={12}>
                <h2>Loại Người Dùng</h2>
                <div>
                  <select
                    className="selectNguoiDung"
                    onChange={this.handleChangeInput}
                    value={this.state.values.maLoaiNguoiDung}
                  >
                    <option>KhachHang</option>
                    <option>QuanTri</option>
                  </select>
                </div>
              </Col>
            </Row>
            <div className="div_btnThemNguoiDung">
              <button className="btnThemNguoiDung">Cập Nhật</button>
            </div>
          </form>
        )
    }
}
 