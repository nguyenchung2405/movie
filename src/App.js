import { Switch, Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ChiTietPhim from "./pages/ChiTietPhim/ChiTietPhim";
import DangKy from "./pages/SignUp";
import DangNhap from "./pages/SignIn";
import User from "../src/pages/User/User";
import PhongVe from "./components/PhongVe/PhongVe";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { XU_LY_DANG_NHAP_THANH_CONG } from "../src/redux/constants/NguoiDungConst";
//cấu hình chuyển hướng trang trên route
import { createBrowserHistory } from "history";
import Admin from "./pages/Admin/Admin";
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
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/phim/:id" component={ChiTietPhim} />
        <Route exact path="/phongve/:id" component={PhongVe} />
        <Route exact path="/dangNhap" component={DangNhap} />
        <Route exact path="/dangKy" component={DangKy} />
        <Route exact path="/nguoiDung" component={User} />
        <Route exact path="/admin" component={Admin} />        
        <Route path="*" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
