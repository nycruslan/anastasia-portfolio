import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyles = makeStyles(theme => ({
  projectLink: {
    textDecoration: 'none',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  projectLinkImg: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    transition: 'all .2s',
    '&:hover': {
      filter: 'brightness(60%)',
      [theme.breakpoints.down(610)]: {
        filter: 'none',
      },
    },
  },
  projectLinkTitle: {
    color: '#a6a9ab',
    [theme.breakpoints.down(610)]: {
      '& > *': {
        fontSize: '1rem',
      },
    },
  },
}));

const ProjectLink = ({ image, title, alt, to }) => {
  const classes = useStyles();

  return (
    <Grid container component={Link} to={to} className={classes.projectLink}>
      <Grid item>
        <LazyLoadImage
          width={1000}
          height={1500}
          src={image}
          alt={alt}
          className={classes.projectLinkImg}
        />
      </Grid>
      <Grid item className={classes.projectLinkTitle}>
        <Typography variant='caption'>{title}*</Typography>
      </Grid>
    </Grid>
  );
};

export default ProjectLink;
