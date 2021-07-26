import React, {  useEffect,useState } from 'react'
import Swal from "sweetalert2";
import { Row, Col } from 'antd';
import { quanLyAdminServices } from '../../../redux/service/QuanLyAdminServices';
import { layDanhSachNguoiDungPhanTrang } from '../../../redux/action/UserAdminAction';
import { useDispatch } from 'react-redux';

export default function UppdateUserAdmin (props) {
    const dispatch = useDispatch();
    let{ndEdit,closeModal}=props;
    const[state, setState] =useState( {
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
      });
      useEffect(() => {
        let{ndEdit}=props;
        setState({   
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
      }, [ndEdit])
     
     const handleChangeInput = (event) => {
        var { value, name } = event.target;
        let newValues = {
          ...state.values,
          [name]: value,
        };
        let newErrors = {
          ...state.errors,
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
        setState({ values: newValues, errors: newErrors });
      };

    const  handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        let { values, errors } = state;
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
    
        quanLyAdminServices
        .capNhatThongTinNguoiDung(values)
        .then((res) => {
       
          console.log(res.data)
          Swal.fire({
            icon: 'success',
            text: 'Cập nhật người dùng thành công',
            });
          closeModal(false);
          dispatch(layDanhSachNguoiDungPhanTrang())
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Nhập lại thông tin",
            });
        });
    };
        return (
            <form className="themNguoiDung" onSubmit={handleSubmit} >
            <Row className="rowInput">
              <Col span={12}>
                <h2>Tài Khoản</h2>
                <div>
                <input
                    className="inputPhim"
                    type="text"
                    name="taiKhoan"
                    placeholder="Tài Khoản"
                    onChange={handleChangeInput}
                    value={state.values.taiKhoan}
                    disabled
                    required
                  />
                </div>
                <p className="canhBaoCap">  {state.errors.taiKhoan}</p>
              </Col>
              <Col span={12}>
                <h2>Email </h2>
                <div>
                <input
                    className="inputPhim"
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={handleChangeInput}
                    value={state.values.email}
                    required
                  />
                </div>
                <p className="canhBaoCap">  {state.errors.email}</p>
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
                    onChange={handleChangeInput}
                    value={state.values.matKhau}
                    required
                  />
                </div>
                <p className="canhBaoCap">  {state.errors.matKhau}</p>
              </Col>
              <Col span={12}>
                <h2>Số Điện Thoại</h2>
                <div>
                <input
                    className="inputPhim"
                    type="text"
                    name="soDt"
                    placeholder="Số Điện Thoại"
                    onChange={handleChangeInput}
                    value={state.values.soDt}
                    required
                  />
                </div>
                <p className="canhBaoCap">  {state.errors.soDt}</p>
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
                    onChange={handleChangeInput}
                    value={state.values.hoTen}
                    required
                  />
                </div>
                <p className="canhBaoCap">  {state.errors.hoTen}</p>
              </Col>
              <Col span={12}>
                <h2>Loại Người Dùng</h2>
                <div>
                  <select
                    className="selectNguoiDung"
                    name="maLoaiNguoiDung"
                    onChange={handleChangeInput}
                    value={state.values.maLoaiNguoiDung}
                  >
                    <option>KhachHang</option>
                    <option>QuanTri</option>
                  </select>
                </div>
              </Col>
            </Row>
            <div className="div_btnThemNguoiDung">
              <button type="submit" className="btnThemNguoiDung">Cập Nhật</button>
            </div>
          </form>
        )  
}
 