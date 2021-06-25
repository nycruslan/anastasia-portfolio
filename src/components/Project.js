import { Grid, Typography, useMediaQuery } from '@material-ui/core';

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ScrollToTop from './ScrollToTop';
import Animation from './Animation';

export const Project = ({ children }) => {
  return (
    <Animation>
      <Grid container direction='column' spacing={7}>
        <ScrollToTop />
        {children}
      </Grid>
    </Animation>
  );
};

export const ProjectImg = ({ image, alt, style }) => {
  return (
    <Grid container item>
      <Grid container item justify='center'>
        <LazyLoadImage
          width={1000}
          height={1500}
          src={image}
          alt={alt}
          style={
            style || { display: 'block', maxWidth: '100%', height: 'auto' }
          }
        />
      </Grid>
    </Grid>
  );
};

export const ProjectText = ({ children }) => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Grid container item>
      <Grid item xs={matches ? false : 5}></Grid>
      <Grid container item xs={matches ? false : 7} justify='flex-end'>
        <Typography
          variant='body2'
          style={{ lineHeight: '1.5', textAlign: 'justify' }}
        >
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
};

export const ProjectQuote = ({ children, author }) => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Grid container item>
      <Grid item xs={matches ? false : 5}></Grid>
      <Grid item xs={matches ? false : 7}>
        <Typography variant='body1' align='right' style={{ lineHeight: '1.5' }}>
          "{children}"
        </Typography>
        <Typography align='right' variant='body1' style={{ marginTop: '1rem' }}>
          —{author}
        </Typography>
      </Grid>
    </Grid>
  );
};
