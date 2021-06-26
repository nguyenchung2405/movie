import { Switch, Router, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import ChiTietPhim from "./pages/ChiTietPhim/ChiTietPhim";
import HeaderComponent from "./components/Header/HeaderComponent";
import Footer from "./components/Footer";
//cấu hình chuyển hướng trang trên route
import { createBrowserHistory } from "history";
export const history = createBrowserHistory(); //cho phép điều hướng trang
=======
// import MovieList from "./components/MovieList/MovieList";
import Home from "./pages/Home/Home";

// import ThongTinRap from "./components/ThongTinRap/ThongTinRap";
import DangKy from "./pages/SignUp";
import DangNhap from "./pages/SignIn";
import User from "../src/pages/User/User";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { XU_LY_DANG_NHAP_THANH_CONG } from "../src/redux/constants/NguoiDungConst";
//Cấu hình chuyển hướng trang trên route
import { createBrowserHistory } from "history";
export const history = createBrowserHistory(); //Cho phép điều hướng trang
>>>>>>> f823d471ca03be82bdbc9f4999fa2fea444f6311

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
<<<<<<< HEAD
      <HeaderComponent />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/phim/:id' component={ChiTietPhim} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
=======
      <Switch>
        <Route exact path="/dangNhap" component={DangNhap} />
        <Route exact path="/dangKy" component={DangKy} />
        <Route exact path="/nguoiDung" component={User} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
>>>>>>> f823d471ca03be82bdbc9f4999fa2fea444f6311
    </Router>
  );
}

export default App;
