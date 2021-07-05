import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import PhimDangChieu from "../Phim/PhimDangChieu";
import PhimSapChieu from "../Phim/PhimSapChieu";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

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
      {value === index && <Box p={3}>{children}</Box>}
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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function MovieType() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} id="lichChieu">
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

      <TabPanel value={value} index={0} dir={theme.direction}>
        <PhimDangChieu />
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
        <PhimSapChieu />
      </TabPanel>
    </div>
  );
}
