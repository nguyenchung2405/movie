import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import PhimDangChieu from '../PhimDangChieu/PhimDangChieu';
import PhimSapChieu from '../PhimDangChieu/PhimDangChieu';
import useStyles from './MovieTypeStyle';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



export default function MovieType() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
        centered
      >
        <Tab label="Đang Chiếu" {...a11yProps(0)} />
        <Tab label="Sắp Chiếu" {...a11yProps(1)} />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <PhimDangChieu />

          <Grid container className={classes.sectionMobile}>
            <Grid item xs={12} className={classes.root}>
              <a>
                <Box className={classes.rating}>
                  <Typography>6.3</Typography>
                  <Rating name="read-only" defaultValue={4} readOnly style={{ fontSize: 10, color: "#fb4226" }} />
                </Box>
                <span className={classes.ageType}>P</span>
                <img src="./img/phim/trang-ti-rp.jpg" alt="./img/phim/trang-ti-rp.jpg" className={classes.img} />
              </a>
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <a>
                <Box className={classes.rating}>
                  <Typography>6.3</Typography>
                  <Rating name="read-only" defaultValue={4} readOnly style={{ fontSize: 10, color: "#fb4226" }} />
                </Box>
                <span className={classes.ageType}>P</span>
                <img src="./img/phim/trang-ti-rp.jpg" alt="./img/phim/trang-ti-rp.jpg" className={classes.img} />
              </a>
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <a>
                <Box className={classes.rating}>
                  <Typography>6.3</Typography>
                  <Rating name="read-only" defaultValue={4} readOnly style={{ fontSize: 10, color: "#fb4226" }} />
                </Box>
                <span className={classes.ageType}>P</span>
                <img src="./img/phim/trang-ti-rp.jpg" alt="./img/phim/trang-ti-rp.jpg" className={classes.img} />
              </a>
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <a>
                <Box className={classes.rating}>
                  <Typography>6.3</Typography>
                  <Rating name="read-only" defaultValue={4} readOnly style={{ fontSize: 10, color: "#fb4226" }} />
                </Box>
                <span className={classes.ageType}>P</span>
                <img src="./img/phim/trang-ti-rp.jpg" alt="./img/phim/trang-ti-rp.jpg" className={classes.img} />
              </a>
            </Grid>
          </Grid>

        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <PhimSapChieu />


          <Grid container className={classes.sectionMobile}>
            <Grid container>
              <Grid item xs={6} className={classes.root}>
                <a>
                  <span className={classes.ageType}>P</span>
                  <span className={classes.date}>05/03</span>
                  <img src="./img/phim/biet-doi-san-ma-rp.jpg" alt="./img/phim/biet-doi-san-ma-rp.jpg" className={classes.img} />
                </a>
              </Grid>
              <Grid item xs={6} className={classes.root}>
                <a>
                  <span className={classes.ageType}>P</span>
                  <span className={classes.date}>05/03</span>
                  <img src="./img/phim/biet-doi-san-ma-rp.jpg" alt="./img/phim/biet-doi-san-ma-rp.jpg" className={classes.img} />
                </a>
              </Grid>

              <Grid item xs={6} className={classes.root}>
                <a>
                  <span className={classes.ageType}>P</span>
                  <span className={classes.date}>05/03</span>
                  <img src="./img/phim/biet-doi-san-ma-rp.jpg" alt="./img/phim/biet-doi-san-ma-rp.jpg" className={classes.img} />
                </a>
              </Grid>
              <Grid item xs={6} className={classes.root}>
                <a>
                  <span className={classes.ageType}>P</span>
                  <span className={classes.date}>05/03</span>
                  <img src="./img/phim/biet-doi-san-ma-rp.jpg" alt="./img/phim/biet-doi-san-ma-rp.jpg" className={classes.img} />
                </a>
              </Grid>
            </Grid>
          </Grid>

        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
