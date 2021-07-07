import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";

import { USER_LOGIN } from "../../redux/constants/NguoiDungConst";

const AdminTemplate = ({ path, Component }) => {
  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

  return (
    <Route
      path={path}
      render={(routeProps) => {
        if (
          localStorage.getItem("userLogin") &&
          userLogin.maLoaiNguoiDung === "QuanTri"
        ) {
          return <Component {...routeProps} />;
        }
        alert("Vui lòng đăng nhập bằng tài khoản Admin");
        return <Redirect to="/dangNhap" />;
      }}
    />
  );
};

export default AdminTemplate;
