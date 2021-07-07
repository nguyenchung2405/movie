import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminTemplate = ({ path, Component }) => {
  let { tenDangNhap } = useSelector((state) => state.NguoiDungReducer);

  return (
    <Route
      path={path}
      render={(routeProps) => {
        if (localStorage.getItem("userLogin") && tenDangNhap === "QuanTri") {
          return <Component {...routeProps} />;
        }
        alert("Vui lòng đăng nhập bằng tài khoản Admin");
        return <Redirect to="/dangNhap" />;
      }}
    />
  );
};

export default AdminTemplate;
