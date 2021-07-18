import React from "react";
import { Redirect, Route } from "react-router-dom";
import Swal from 'sweetalert2';

const LoginTemplate = ({ path, Component }) => {
  return (
    <Route
      path={path}
      render={(routeProps) => {
        if (localStorage.getItem("userLogin")) {
          return <Component {...routeProps} />;
        }
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Vui lòng đăng nhập',
          showConfirmButton: false,
          timer: 1500
        });
        return <Redirect to="/dangNhap" />;
      }}
    />
  );
};

export default LoginTemplate;
