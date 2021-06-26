import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import ChiTietPhim from "./pages/ChiTietPhim/ChiTietPhim";
import HeaderComponent from "./components/Header/HeaderComponent";
import Footer from "./components/Footer";
//cấu hình chuyển hướng trang trên route
import { createBrowserHistory } from "history";
export const history = createBrowserHistory(); //cho phép điều hướng trang

function App() {
  return (
    <Router history={history}>
      <HeaderComponent />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/phim/:id' component={ChiTietPhim} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
