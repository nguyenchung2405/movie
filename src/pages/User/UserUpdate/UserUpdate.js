import React, {useEffect,useState}from 'react';
import { USER_LOGIN } from '../../../redux/constants/NguoiDungConst';
import Swal from "sweetalert2";
import {quanLyAdminServices} from "../../../redux/service/QuanLyAdminServices";
import {quanLyNguoiDungServices } from "../../../redux/service/QuanLyNguoiDungServices";
import { useDispatch } from "react-redux";
import { showLoading } from '../../../redux/action/NguoiDungAction';
import Loading from '../../../ultil/Loading/Loading';

export default function UserUpdate(props) {
   const dispatch = useDispatch();
   const [loading, setLoading]=useState(true)
    const info = JSON.parse(localStorage.getItem(USER_LOGIN));
 
    let [account, setAccount] = useState({
    taiKhoan: info.taiKhoan,
  });
  let [state, setState] = useState({
    values: {
      hoTen: "",
      taiKhoan: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "KhachHang",
      maNhom: "GP01",
      matKhau: "",
    },
    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
    },
  });
  useEffect(() => {
    dispatch(showLoading())
    quanLyNguoiDungServices
      .layThongTinTaiKhoan(account)
      .then((res) => {
        setState({
          values: res.data,
          errors: {
            hoTen: "",
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDT: "",
          },
        });
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [account]);

  const handleChangeInput = (event) => {
    var { value, name } = event.target;
    let newValues = {
      ...state.values,
      [name]: value,
    };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "Không được bỏ trống!" : "",
    };

    if (name === "email") {
      let regexEmail =
        "^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$";
      if (value.match(regexEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Email không hợp lệ";
      }
    }
    setState({ values: newValues, errors: newErrors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    let { values, errors } = state;
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
            text: "Thông tin không hợp l",
            });
      return;
    }
    let infoUserUpdate = {
        taiKhoan: values.taiKhoan,
        matKhau: values.matKhau,
        hoTen: values.hoTen,
        email: values.email,
        soDT:values.soDT,
        maNhom: values.maNhom,
        maLoaiNguoiDung: info.maLoaiNguoiDung,
    };
    console.log(infoUserUpdate)
    quanLyAdminServices
      .capNhatThongTinNguoiDung(infoUserUpdate)
      .then((res) => {
       
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Cập nhật người dùng thành công',
            showConfirmButton: false,
            timer: 2000
          });
        })
        .catch((err) => {
            console.log(err)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Nhập lại thông tin",
            });
        });
    };
    return (
         <form onSubmit={handleSubmit}>
            <div className="userUpdate">
                <div className="taiKhoan">
                <p className="lable"> Tài Khoản</p>
                <input
                    style={{ backgroundColor: "darkgray" }}
                    className="input"
                    name="taiKhoan"
                    type="text"
                    placeholder="Tên tài khoản"
                    value={state.values.taiKhoan}
                    onChange={handleChangeInput}
                    disabled
                 />
               <p className="canhBaoTai">{state.errors.taiKhoan}</p>
                </div>
                <div className="hoTen">
                <p className="lable">Họ Tên</p>
                <input
                    className="input"
                    name="hoTen"
                    type="text"
                    placeholder="Họ Tên"
                    value={state.values.hoTen}
                    onChange={handleChangeInput}
                 />
               <p className="canhBaoCap">{state.errors.hoTen}</p>
                
                </div>
                <div className="email">
                <p className="lable">Email</p>
                <input
                    className="input"
                    name="email"
                    placeholder="Email"
                    value={state.values.email}
                    onChange={handleChangeInput}
                />
                <p className="canhBaoCap">{state.errors.email}</p>
                </div>
                <div className="soDt">
                <p className="lable">Số Điện Thoại</p>
                <input
                    className="input"
                    name="soDT"
                    type="text"
                    placeholder="Số điện thoại"
                    value={state.values.soDT}
                    onChange={handleChangeInput}
                />
                <p className="canhBaoCap">{state.errors.soDT}</p>
                </div>
                <div className="matKhau">
                <p className="lable">Mật Khẩu</p>
                <input
                    className="input"
                    name="matKhau"
                    type="password"
                    placeholder="Mật khẩu"
                    value={state.values.matKhau}
                    onChange={handleChangeInput}
                />
                <p className="canhBaoCap">{state.errors.matKhau}</p>   
                </div>
                <div className="divBtn">
                <button type="submit" className="btnCapNhat">
                    Cập Nhật
                </button>
                </div>
            </div>
             {loading?<Loading/>:""} 
    </form>
    )
}
