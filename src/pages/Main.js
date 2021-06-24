import { Grid, Typography, useMediaQuery } from '@material-ui/core';

import React from 'react';

import ProjectLink from '../components/ProjectLink';
import Animation from '../components/Animation';

import choco from '../img/chocoWeb/choco-1.jpg';
import coffee from '../img/coffeeWeb/coffee-1.jpg';
import soul from '../img/soulWeb/soul-1.jpg';
import chloris from '../img/chlorisWeb/chloris-1.jpg';
import sushi from '../img/sushiWeb/sushi-1.jpg';
import banking from '../img/bankingWeb/banking-1.jpg';
import radiance from '../img/radianceWeb/radiance-1.jpg';
import luna from '../img/lunaWeb/luna-1.jpg';
import cookbook from '../img/cookbookWeb/cookbook-1.jpg';

import chocoMobile from '../img/chocoMobile/choco-1-mobile.jpeg';
import coffeeMobile from '../img/coffeeMobile/coffee-1-mobile.jpeg';
import soulMobile from '../img/soulMobile/soul-1-mobile.jpeg';
import chlorisMobile from '../img/chlorisMobile/chloris-1-mobile.jpeg';
import sushiMobile from '../img/sushiMobile/sushi-1-mobile.jpeg';
import bankingMobile from '../img/bankingMobile/banking-1-mobile.jpeg';
import radianceMobile from '../img/radianceMobile/radiance-1-mobile.jpeg';
import lunaMobile from '../img/lunaMobile/luna-1-mobile.jpeg';
import cookbookMobile from '../img/cookbookMobile/cookbook-1-mobile.jpeg';

const Main = () => {
  const matches = useMediaQuery('(max-width:610px)');
  const matchesSm = useMediaQuery('(max-width:450px)');

  return (
    <Animation>
      <Grid spacing={matchesSm ? 2 : matches ? 5 : 10} container>
        <Grid item>
          <ProjectLink
            image={matches ? chocoMobile : choco}
            to='/project/chocolate'
            alt='Chocolate project'
            title='Package Design'
          />
        </Grid>
        <Grid item>
          <ProjectLink
            image={matches ? coffeeMobile : coffee}
            to='/project/coffee'
            alt='Coffee project'
            title='Logo and Package Design'
          />
        </Grid>
        <Grid item>
          <ProjectLink
            image={matches ? soulMobile : soul}
            to='/project/soul'
            alt='Soul project'
            title='Logo  Design'
          />
        </Grid>
        <Grid item>
          <ProjectLink
            image={matches ? chlorisMobile : chloris}
            to='/project/chloris'
            alt='Chloris project'
            title='Illustration and Naming'
          />
        </Grid>
        <Grid item style={{ maxWidth: '60%', margin: '0 auto' }}>
          <ProjectLink
            image={matches ? sushiMobile : sushi}
            to='/project/sushi'
            alt='Sushi project'
            title='Logo and Print Design'
          />
        </Grid>
        <Grid item>
          <ProjectLink
            image={matches ? bankingMobile : banking}
            to='/project/banking'
            alt='Banking project'
            title='UI Design'
          />
        </Grid>
        <Grid item>
          <ProjectLink
            image={matches ? radianceMobile : radiance}
            to='/project/radiance'
            alt='Radiance project'
            title='Poster Design'
          />
        </Grid>
        <Grid item>
          <ProjectLink
            image={matches ? lunaMobile : luna}
            to='/project/luna'
            alt='Luna project'
            title='Product Design and Branding'
          />
        </Grid>
        <Grid item>
          <ProjectLink
            image={matches ? cookbookMobile : cookbook}
            to='/project/cookbook'
            alt='Cookbook project'
            title='Editorial Design'
          />
        </Grid>
        <Grid item style={{ marginTop: '-3rem', color: '#a6a9ab' }}>
          <Typography variant='caption'>* Personal Project</Typography>
        </Grid>
      </Grid>
    </Animation>
  );
};

export default Main;
