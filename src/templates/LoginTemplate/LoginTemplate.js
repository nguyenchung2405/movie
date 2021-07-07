import React from "react";
import { Redirect, Route } from "react-router-dom";
const LoginTemplate = ({ path, Component }) => {
  return (
    <Route
      path={path}
      render={(routeProps) => {
        if (localStorage.getItem("userLogin")) {
          return <Component {...routeProps} />;
        }
        alert("Vui lòng đăng nhập");
        return <Redirect to="/dangNhap" />;
      }}
    />
  );
};

export default LoginTemplate;
