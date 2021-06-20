import React from 'react';
import useStyles from './LocationStyle'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const options = [
    'Hồ Chí Minh',
    'Hà Nội',
    'Đà Nẵng',
    'Hải Phòng',
    'Biên Hoà',
    'Nha Trang',
    'Bình Dương',
    'Phan Thiết',
    'Hạ Long',
    'Cần Thơ',
    'Vũng Tàu',
    'Quy Nhơn',
    'Huế',
    'Long Xuyên',
    'Thái Nguyên',
    'Buôn Ma Thuột',
    'Bắc Giang',
    'Bến Tre',
    'Việt Trì',
    'Ninh Bình',
    'Thái Bình',
    'Vinh',
    'Bảo Lộc',
    'Đà Lạt',
    'Trà Vinh',
    'Yên Bái',
    'Kiên Giang',
    'Vĩnh Long',
    'Cà Mau',
    'Hậu Giang',
    'Tây Ninh',
    'Tuyên Quang',
    'Thanh Hóa',
    'Nam Định',
    'Hải Dương',
    'Gia Lai',
    'Hà Tĩnh',
    'Phú Yên',
    'Bạc Liêu',
    'Long An',
    'Đồng Hới',
    'Hà Nam',
    'Bắc Ninh',
    'Quảng Trị',
    'Kon Tum',
    'Sóc Trăng',
    'Sơn La',
    'Lạng Sơn',
    'Quảng Ngãi',
    'Mỹ Tho',
    'Đồng Tháp',
    'Hưng Yên',
];
const ITEM_HEIGHT = 300;

export default function Location() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <List style={{display:"flex", justifyContent:"between"}} >
                <ListItem
                    button
                    onClick={handleClickListItem}
                >
                    <LocationOnOutlinedIcon />
                    <ListItemText secondary={options[selectedIndex]} />
                    <ExpandMoreIcon />

                </ListItem>
            </List>
            <Menu 
                style={{top:50,}}
                className={classes.menu}
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
