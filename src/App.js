import { Switch, Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ChiTietPhim from "./pages/ChiTietPhim/ChiTietPhim";
import DangKy from "./pages/SignUp";
import DangNhap from "./pages/SignIn";
import User from "../src/pages/User/User";
import PhongVe from "./components/PhongVe/PhongVe";
import LoadingTemplate from "./templates/LoadingTemplate/LoadingTemplate";
import LoginTemplate from "./templates/LoginTemplate/LoginTemplate";
import Admin from "./pages/Admin/Admin";
import AdminTemplate from "./templates/AdminTemplate/AdminTemPlate";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { XU_LY_DANG_NHAP_THANH_CONG } from "../src/redux/constants/NguoiDungConst";
//cấu hình chuyển hướng trang trên route
import { createBrowserHistory } from "history";

export const history = createBrowserHistory(); //cho phép điều hướng trang

function App() {
  const dispatch = useDispatch();
  const getTenDangNhapFromLocal = () => {
    const tenDangNhapStr = localStorage.getItem("userLogin");
    if (tenDangNhapStr) {
      dispatch({
        type: XU_LY_DANG_NHAP_THANH_CONG,
        tenDangNhap: JSON.parse(tenDangNhapStr),
      });
    }
  };
  useEffect(() => {
    getTenDangNhapFromLocal();
  }, []);
  return (
    <Router history={history}>
      {/* <LoadingTemplate /> */}
      <Switch>
        <LoadingTemplate exact path="/home" component={Home} />

        <LoginTemplate exact path="/phim/:id" Component={ChiTietPhim} />

        <LoginTemplate exact path="/phongve/:id" Component={PhongVe} />
        <LoadingTemplate exact path="/dangNhap" component={DangNhap} />
        <LoadingTemplate exact path="/dangKy" component={DangKy} />
        <LoginTemplate exact path="/nguoiDung" Component={User} />
        <AdminTemplate exact path="/admin" Component={Admin} />
        <LoadingTemplate path="*" component={Home} />
        <LoadingTemplate exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
