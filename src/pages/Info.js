import { Grid, Typography, Link, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';

import avatar from '../img/avatar.jpg';
import Animation from '../components/Animation';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down(600)]: {
      html: {
        fontSize: '50%',
      },
    },
  },
  caslon: {
    '& > * > *': {
      fontFamily: 'Big Caslon, sans-serif',
      fontWeight: 500,
      color: '#121212',
    },
  },
  blockquote: {
    fontFamily: 'Nanum Myeongjo, serif',
    letterSpacing: '.4rem',
    marginLeft: '-5rem',
    [theme.breakpoints.down(610)]: {
      marginLeft: 0,
      fontSize: '2rem',
    },
  },
}));

const Info = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:610px)');

  return (
    <Animation>
      <Grid
        container
        spacing={matches ? 4 : 10}
        alignContent='center'
        direction={matches ? 'column' : 'row'}
        className={classes.root}
      >
        <Grid item xs={matches ? false : 6}>
          <Grid container spacing={matches ? 3 : 5} direction='column'>
            <Grid item>
              <Typography variant='body1'>Contact</Typography>
            </Grid>
            <Grid item>
              <Link
                style={{ fontFamily: 'Big Caslon, sans-serif' }}
                color='inherit'
                underline='none'
                variant='h6'
                href='mailto:design@anastasiiashulga.com'
              >
                design@anastasiiashulga.com
              </Link>
            </Grid>
            <Grid item align='right'>
              <img style={{ maxWidth: '100%' }} src={avatar} alt='Designer' />
              <Typography variant='caption'>Photo by Elisa Flores</Typography>
            </Grid>
            <Grid
              container
              item
              spacing={1}
              direction='column'
              className={classes.caslon}
            >
              <Grid item style={{ marginBottom: '2rem' }}>
                <Typography variant='body1'>Services:</Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  Branding & Visual Identity
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>Package Design</Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>Social Media Graphics</Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>Information Design</Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  Print Graphic/Promotional Material
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>Website Design</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={matches ? false : 6}>
          <Grid container spacing={matches ? 5 : 10} direction='column'>
            <Grid
              container
              item
              spacing={matches ? 3 : 6}
              className={classes.caslon}
            >
              <Grid item>
                <Typography variant='body1'>
                  I’m a Graphic Designer with a unique approach to creative
                  projects. Besides brilliant maneuvering with the design tools,
                  I have a very deep sensual process of my client’s goals and
                  visions to make client’s brand outstand on the market.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  I’m helping mainly with branding and naming, logo design, UI
                  design as well as working with print and editorial design.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  Originally from Ukraine, moved to NYC in 2016 and finally
                  found my dream occupation.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  Here I am ready to produce clean professional unimaginably
                  extraordinary content for you!
                </Typography>
              </Grid>
            </Grid>
            <Grid item container spacing={matches ? 3 : 5} direction='column'>
              <Grid item>
                <Typography variant='h5' className={classes.blockquote}>
                  “I am seeking, I am striving, I am in it with all my heart.”
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='subtitle1'
                  align='right'
                  className={classes.blockquote}
                >
                  —Vincent Van Gogh
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Animation>
  );
};

export default Info;
