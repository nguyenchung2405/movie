import React from "react";
import Swal from 'sweetalert2';
import { Redirect, Route } from "react-router-dom";
const LoginTemplate = ({ path, Component }) => {
  return (
    <Route
      path={path}
      render={(routeProps) => {
        if (localStorage.getItem("userLogin")) {
          return <Component {...routeProps} />;
        }
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Vui lòng đăng nhập",
        })
        return <Redirect to="/dangNhap" />;
      }}
    />
  );
};

export default LoginTemplate;
