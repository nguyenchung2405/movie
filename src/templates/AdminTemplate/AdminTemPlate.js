import React from "react";
import { Redirect, Route } from "react-router-dom";
import Swal from 'sweetalert2';

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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Vui lòng đăng nhập bằng tài khoản admin",
        })
        return <Redirect to="/dangNhap" />;
      }}
    />
  );
};

export default AdminTemplate;
