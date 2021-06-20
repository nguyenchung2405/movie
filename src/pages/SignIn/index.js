import React from "react";
import logoDangNhap from "../../assets/img/logoDangNhap.png";

export default function DangNhap() {
  return (
    <div>
      <div className="dangNhap__Img">
        <div className="dangNhap__Khung">
          <img
            className="dangNhap__Logo"
            src={logoDangNhap}
            alt="logoDangNhap"
          />
          <div className="dangNhap__noiDung">
            Đăng nhập để được nhiều ưu đãi, mua vé
            <br />
            và bảo mật thông tin!
          </div>
          <div className="dangNhap__Input">
            <input className="input" type="text" placeholder="UserName" />
            <span></span>
          </div>
          <div className="dangNhap__Input">
            <input className="input" type="password" placeholder="PassWord" />
            <span></span>
          </div>
          <button className="btn__DangNhap">Login</button>
          <div>
            <span style={{ paddingRight: "5px" }}>Don't have an account ?</span>
            <a href="#signup">Sign Up</a>
          </div>
          <div className="dangNhap__Dong">
            <button className="btn__Dong">X</button>
          </div>
        </div>
      </div>
    </div>
  );
}
