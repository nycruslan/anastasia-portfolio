import { Button, Tabs, Tab, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/logo.svg';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '40rem',
    [theme.breakpoints.down(600)]: {
      height: '30rem',
    },
  },
  logo: {
    width: '10rem',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down(600)]: {
      width: '8rem',
    },
    [theme.breakpoints.down(400)]: {
      width: '7rem',
    },
  },
  tabs: {
    width: '100%',

    '&  *': {
      fontSize: '2.3rem',
      textTransform: 'none',
      [theme.breakpoints.down(600)]: {
        fontSize: '1.8rem',
      },
    },
  },
}));

const Header = () => {
  const [tabValue, setTabValue] = useState(1);
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    let path = window.location.pathname;
    if (path === '/request' && tabValue !== 0) setTabValue(0);
    else if (path === '/' && tabValue !== 1) setTabValue(1);
    else if (path === '/information' && tabValue !== 2) setTabValue(2);
  }, [tabValue]);

  return (
    <header className={classes.header}>
      <Button component={Link} to='/'>
        <img src={logo} alt='logo' className={classes.logo} />
      </Button>
      <Tabs
        className={classes.tabs}
        TabIndicatorProps={{ style: { display: 'none' } }}
        variant='fullWidth'
        orientation={matches ? 'vertical' : 'horizontal'}
        centered
        value={tabValue}
        onChange={(_, newValue) => setTabValue(newValue)}
      >
        <Tab
          style={{ color: tabValue === 0 ? '#707071' : '#a6a9ab' }}
          component={Link}
          to='/request'
          label='Request'
        />
        <Tab
          style={{ color: tabValue === 1 ? '#707071' : '#a6a9ab' }}
          component={Link}
          to='/'
          label='Graphic Design'
        />
        <Tab
          style={{ color: tabValue === 2 ? '#707071' : '#a6a9ab' }}
          component={Link}
          to='/information'
          label='Information'
        />
      </Tabs>
    </header>
  );
};

export default Header;
