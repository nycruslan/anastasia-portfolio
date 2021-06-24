import { useMediaQuery } from '@material-ui/core';

import React from 'react';
import { Project, ProjectImg, ProjectText } from '../../components/Project';

import coffeeWeb1 from '../../img/coffeeWeb/coffee-1.jpg';
import coffeeWeb2 from '../../img/coffeeWeb/coffee-2.jpg';
import coffeeWeb3 from '../../img/coffeeWeb/coffee-3.jpg';
import coffeeWeb4 from '../../img/coffeeWeb/coffee-4.jpg';
import coffeeWeb5 from '../../img/coffeeWeb/coffee-5.jpg';
import coffeeWeb6 from '../../img/coffeeWeb/coffee-6.jpg';
import coffeeWeb7 from '../../img/coffeeWeb/coffee-7.jpg';

import coffeeMobil1 from '../../img/coffeeMobile/coffee-1-mobile.jpeg';
import coffeeMobil2 from '../../img/coffeeMobile/coffee-2-mobile.jpeg';
import coffeeMobil3 from '../../img/coffeeMobile/coffee-3-mobile.jpeg';
import coffeeMobil4 from '../../img/coffeeMobile/coffee-4-mobile.jpeg';
import coffeeMobil5 from '../../img/coffeeMobile/coffee-5-mobile.jpeg';
import coffeeMobil6 from '../../img/coffeeMobile/coffee-6-mobile.jpeg';
import coffeeMobil7 from '../../img/coffeeMobile/coffee-7-mobile.jpeg';

const Coffee = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Project>
      <ProjectImg image={matches ? coffeeMobil1 : coffeeWeb1} alt='coffee1' />
      <ProjectImg
        style={{ maxWidth: `${matches ? '80%' : '55%'}`, height: 'auto' }}
        image={matches ? coffeeMobil2 : coffeeWeb2}
        alt='coffee2'
      />
      <ProjectImg image={matches ? coffeeMobil3 : coffeeWeb3} alt='coffee3' />
      <ProjectText>
        A modern flat minimalistic logo for a coffee guild created using the
        Golden Ratio principle bringing pleasing aesthetics through balance and
        harmony. The brand’s target audience is young professionals working
        remotely. The color palette is chosen in order to create a warm
        welcoming atmosphere yet not overwhelming with brightness. It speaks
        about the brand in a non-aggressive but assertive way.
      </ProjectText>
      <ProjectImg image={matches ? coffeeMobil4 : coffeeWeb4} alt='coffee4' />
      <ProjectImg image={matches ? coffeeMobil5 : coffeeWeb5} alt='coffee5' />
      <ProjectText>Coffee is a tradition, a culture a ritual.</ProjectText>
      <ProjectImg image={matches ? coffeeMobil6 : coffeeWeb6} alt='coffee6' />
      <ProjectImg image={matches ? coffeeMobil7 : coffeeWeb7} alt='coffee7' />
    </Project>
  );
};

export default Coffee;
