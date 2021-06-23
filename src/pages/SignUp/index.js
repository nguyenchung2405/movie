import React from "react";
import logoDangKy from "../../assets/img/logoDangNhap.png";

export default function DangKy() {
  return (
    <div>
      <div className="dangKy__Img">
        <div className="dangKy__Khung">
          <img className="dangKy__Logo" src={logoDangKy} alt="logodangKy" />

          <div className="dangKy__Input">
            <input className="input" type="text" placeholder="Tài Khoản" />
            <span></span>
          </div>
          <div className="dangKy__Input">
            <input className="input" type="password" placeholder="Mật Khẩu" />
            <span></span>
          </div>
          <div className="dangKy__Input">
            <input
              className="input"
              type="text"
              placeholder="Nhập lại mật khẩu"
            />
            <span></span>
          </div>
          <div className="dangKy__Input">
            <input className="input" type="text" placeholder="Họ Tên" />
            <span></span>
          </div>
          <div className="dangKy__Input">
            <input className="input" type="text" placeholder="Email" />
            <span></span>
          </div>
          <div className="dangKy__Input">
            <input className="input" type="text" placeholder="Số điện thoại" />
            <span></span>
          </div>
          <button className="btn__dangKy">Login</button>
          <div>
            <span style={{ paddingRight: "5px" }}>Bạn đã có tài khoản!</span>
            <a href="#dangNhap">Đăng Nhập</a>
          </div>
          <div className="dangKy__Dong">
            <button className="btn__Dong">X</button>
          </div>
        </div>
      </div>
    </div>
  );
}
