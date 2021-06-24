import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography, Link, useMediaQuery } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
    justifyContent: 'space-between',
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
          <div className={classes.footerSocial}>
            <Link href='https://instagram.com/anastasyashulga?utm_medium=copy_link'>
              <InstagramIcon style={{ fill: '#e4405f' }} fontSize='large' />
            </Link>
            <Link href='https://www.facebook.com/profile.php?id=100011331185530'>
              <FacebookIcon style={{ fill: '#3b5999' }} fontSize='large' />
            </Link>
            <Link href='https://www.linkedin.com/in/anastasiia-shulga-9ab66b10b'>
              <LinkedInIcon style={{ fill: '#0077B5' }} fontSize='large' />
            </Link>
          </div>

          <Typography color='primary' variant='caption'>
            Copyright © 2021 Anastasiia Shulga. All Rights Reserved
          </Typography>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
