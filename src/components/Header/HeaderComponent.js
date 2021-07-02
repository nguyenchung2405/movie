import React, {memo} from "react";
import { useSelector } from "react-redux";
import useStyles from "./HeaderStyle";
import MenuIcon from "@material-ui/icons/Menu";
import Location from "../Location/Location";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  List,
  ListItem,
  Button,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Drawer,
  Hidden,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { XU_LY_DANG_NHAP_THANH_CONG } from "../../redux/constants/NguoiDungConst";
import { NavLink } from "react-router-dom";
import "./header.scss";

 function HeaderComponent() {
  let { tenDangNhap } = useSelector((state) => state.NguoiDungReducer);

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const handleDrawerClose = () => {
    setState({
      right: false,
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const handleDangXuat = () => {
    localStorage.clear();
    dispatch({
      type: XU_LY_DANG_NHAP_THANH_CONG,
      tenDangNhap: null,
    });
  };

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <NavLink to="/">
            <img
              src="./img/header/web-logo.png"
              alt="./img/header/web-logo.png"
              className={classes.logo}
            />
          </NavLink>
          <div className={classes.grow} />
          <Hidden smDown>
            <div className={classes.title}>
              <a href="#lichChieu">Lịch chiếu</a>
              <a href="#cummap">Cụm rạp</a>
              <a href="#tintuc">Tin tức</a>
              <a href="#ungDung">Ứng dụng</a>
            </div>
          </Hidden>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {tenDangNhap ? (
              <div>
                <Button
                  className={classes.button}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <img
                    style={{
                      height: "30px",
                      borderRadius: "50%",
                      paddingRight: "5px",
                    }}
                    src={`https://i.pravatar.cc/150?u=${tenDangNhap.taiKhoan}`}
                    alt="tenDangNhap"
                  />
                  {tenDangNhap.taiKhoan}
                </Button>
                <Menu
                  style={{ top: 50 }}
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/nguoiDung">Thông tin tài khoản</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/admin">Admin</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <button className="btn__dangXuat" onClick={handleDangXuat}>
                      Đăng Xuất
                    </button>
                  </MenuItem>
                </Menu>
                )
              </div>
            ) : (
              <NavLink to="/dangNhap" className={classes.avatar}>
                <Avatar
                  src="./img/header/avatar.png"
                  alt="avartar tix"
                  style={{ marginRight: 10 }}
                />
                <span style={{ fontSize: 13 }}>Đăng nhập</span>
              </NavLink>
            )}
            <Location />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton onClick={toggleDrawer("right", true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={state.right}
              onClose={toggleDrawer("right", false)}
            >
              <List>
                <ListItem button>
                  {tenDangNhap ? (
                    <div>
                      <Button
                        className={classes.button}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <img
                          style={{
                            height: "30px",
                            borderRadius: "50%",
                            paddingRight: "5px",
                          }}
                          src={`https://i.pravatar.cc/150?u=${tenDangNhap.taiKhoan}`}
                          alt="dangNhap"
                        />
                        {tenDangNhap.taiKhoan}
                      </Button>
                      <Menu
                        style={{ top: 22, left: 12 }}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>
                          <NavLink to="/nguoiDung">Thông tin tài khoản</NavLink>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <button
                            className="btn__dangXuat"
                            onClick={handleDangXuat}
                          >
                            Đăng Xuất
                          </button>
                        </MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <NavLink to="/dangNhap" className={classes.avatar}>
                      <Avatar
                        src="./img/header/avatar.png"
                        alt="avartar tix"
                        style={{ marginRight: 10 }}
                      />
                      <span style={{ fontSize: 13 }}>Đăng nhập</span>
                    </NavLink>
                  )}

                  <IconButton onClick={handleDrawerClose}>
                    <ChevronRightIcon />
                  </IconButton>
                </ListItem>

                <ListItem button>
                  <a className="aMobile" href="#">
                    Lịch chiếu
                  </a>
                </ListItem>
                <ListItem button>
                  <a className="aMobile" href="#">
                    Cụm rạp
                  </a>
                </ListItem>
                <ListItem button>
                  <a className="aMobile" href="#">
                    Tin tức
                  </a>
                </ListItem>
                <ListItem button>
                  <a className="aMobile" href="#">
                    Ứng dụng
                  </a>
                </ListItem>

                <ListItem button>
                  <Location />
                </ListItem>
              </List>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default memo(HeaderComponent);