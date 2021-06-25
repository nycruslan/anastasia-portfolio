import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography, Link, useMediaQuery } from '@material-ui/core';

import React from 'react';

const useStyles = makeStyles(theme => ({
  footer: {
    height: '20rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  footerCopy: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    [theme.breakpoints.down(600)]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.down(450)]: {
      '&:last-child > *': {
        fontSize: '1rem',
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const matchesSm = useMediaQuery('(max-width:450px)');

  return (
    <React.Fragment>
      <Divider style={{ marginTop: '2rem' }} />
      <footer className={classes.footer}>
        <Link
          style={{ fontFamily: 'Big Caslon, sans-serif' }}
          underline='none'
          align='center'
          variant={matchesSm ? 'subtitle1' : 'h6'}
          href='mailto:design@anastasiiashulga.com'
        >
          design@anastasiiashulga.com
        </Link>

        <div className={classes.footerCopy}>
          <Typography color='primary' variant='caption'>
            Copyright © 2021 Anastasiia Shulga. All Rights Reserved
          </Typography>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
