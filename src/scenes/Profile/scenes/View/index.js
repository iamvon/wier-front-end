import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Persona } from './scences';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileView() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <div position="static" style={{ background: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          centered
          component={'div'}>
          <Tab
            label="Persona"
            icon={<PersonOutlineOutlinedIcon />}
            {...a11yProps(0)}
          />
          <Tab
            label="Cài đặt"
            icon={<SettingsOutlinedIcon />}
            {...a11yProps(1)}
          />
        </Tabs>
      </div>
      <TabPanel
        value={value}
        index={0}
        className="tabPanel__item"
        component={'div'}>
        <Persona />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.secondary,
  },
  tabsContainer: {
    paddingTop: '20px',
    background: 'none',
  },
  flexColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
