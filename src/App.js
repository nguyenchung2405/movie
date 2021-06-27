import { Switch, Router, Route } from "react-router-dom";
import "./App.css";
// import MovieList from "./components/MovieList/MovieList";
import Home from "./pages/Home/Home";

// import ThongTinRap from "./components/ThongTinRap/ThongTinRap";
import DangKy from "./pages/SignUp";
import DangNhap from "./pages/SignIn";
import User from "../src/pages/User/User";
import Detail from "../src/pages/Detail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { XU_LY_DANG_NHAP_THANH_CONG } from "../src/redux/constants/NguoiDungConst";
//Cấu hình chuyển hướng trang trên route
import { createBrowserHistory } from "history";
export const history = createBrowserHistory(); //Cho phép điều hướng trang

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
        <Route exact path="/dangNhap" component={DangNhap} />
        <Route exact path="/dangKy" component={DangKy} />
        <Route exact path="/nguoiDung" component={User} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
