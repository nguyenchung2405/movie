import React from 'react';
import useStyles from './ThongTinRapStyle';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabList from '@material-ui/lab/TabList';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function ThongTinRap() {
    const classes = useStyles();
    const [value1, setValue1] = React.useState(0);
    const [value2, setValue2] = React.useState(0);
    const [value3, setValue3] = React.useState(0);

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };
    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };
    const handleChange3 = (event, newValue) => {
        setValue3(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value1}
                onChange={handleChange1}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value1} index={0}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value2}
                    onChange={handleChange2}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} />
                </Tabs>
            </TabPanel>
            <TabPanel value={value1} index={1}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value2}
                    onChange={handleChange2}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </TabPanel>
            <TabPanel value={value1} index={2}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value3}
                    onChange={handleChange3}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </TabPanel>

            <TabPanel value={value2} index={0} >
                value2
            </TabPanel>
            <TabPanel value={value2} index={1} >
                value2
            </TabPanel>

            <TabPanel value={value3} index={0} >
                value3
            </TabPanel>
            <TabPanel value={value3} index={1} >
                value3
            </TabPanel>
            <TabPanel value={value3} index={2} >
                value3
            </TabPanel>
        </div>
    );
}
