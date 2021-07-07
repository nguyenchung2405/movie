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
          title: 'Oops...',
          text: "Bạn chưa đăng nhập để thực hiện tác vụ này",
          icon: 'error',
          showCancelButton: true,
          confirmButtonColor: 'rgb(251, 66, 38)',
          cancelButtonColor: '#757575',
          confirmButtonText: 'Đăng nhập'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
        return <Redirect to="/dangNhap" />;
      }}
    />
  );
};

export default LoginTemplate;
