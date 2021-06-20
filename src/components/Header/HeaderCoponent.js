import React from 'react';
import useStyles from './HeaderStyle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Location from '../Location/Location';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { List, ListItem } from '@material-ui/core';



export default function HeaderCoponent() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const handleDrawerClose = () => {
        setState({
            right: false,
        });
    };
    return (
        <div className={classes.grow}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <a href="#">
                        <img src="./img/header/web-logo.png" alt="./img/header/web-logo.png" className={classes.logo} />
                    </a>
                    <div className={classes.grow} />
                    <Hidden smDown>
                        <div className={classes.title}>
                            <a href="#">Lịch chiếu</a>
                            <a href="#">Cụm rạp</a>
                            <a href="#">Tin tức</a>
                            <a href="#">Ứng dụng</a>
                        </div>
                    </Hidden>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <a href="#" className={classes.avatar}>
                            <Avatar src="./img/header/avatar.png" alt="avartar tix" style={{ marginRight: 10, }} />
                            <span style={{ fontSize: 13 }}>Đăng nhập</span>
                        </a>
                        <Location />

                    </div>
                    <div className={classes.sectionMobile} >
                        <IconButton
                            onClick={toggleDrawer("right", true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={state.right} onClose={toggleDrawer("right", false)}>
                            <List>
                                <ListItem button>
                                    <a href="#" style={{ display: "flex", alignItems: "center" }}>
                                        <Avatar src="./img/header/avatar.png" alt="avartar tix" style={{ marginRight: 10, }} />
                                        <span style={{ fontSize: 13 }}>Đăng nhập</span>
                                    </a>
                                    <IconButton onClick={handleDrawerClose}>
                                        <ChevronRightIcon />
                                    </IconButton>
                                </ListItem>

                                <ListItem button><a href="#">Lịch chiếu</a></ListItem>
                                <ListItem button><a href="#">Cụm rạp</a></ListItem>
                                <ListItem button><a href="#">Tin tức</a></ListItem>
                                <ListItem button><a href="#">Ứng dụng</a></ListItem>

                                <ListItem button> <Location /> </ListItem>
                            </List>
                        </Drawer>
                    </div>

                </Toolbar>
            </AppBar>


        </div>
    );
}
