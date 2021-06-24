import { useMediaQuery } from '@material-ui/core';

import React from 'react';

import {
  Project,
  ProjectImg,
  ProjectText,
  ProjectQuote,
} from '../../components/Project';

import sushiWeb1 from '../../img/sushiWeb/sushi-1.jpg';
import sushiWeb2 from '../../img/sushiWeb/sushi-2.jpg';
import sushiWeb3 from '../../img/sushiWeb/sushi-3.jpg';
import sushiWeb4 from '../../img/sushiWeb/sushi-4.jpg';
import sushiWeb5 from '../../img/sushiWeb/sushi-5.jpg';

import sushiMobil1 from '../../img/sushiMobile/sushi-1-mobile.jpeg';
import sushiMobil2 from '../../img/sushiMobile/sushi-2-mobile.jpeg';
import sushiMobil3 from '../../img/sushiMobile/sushi-3-mobile.jpeg';
import sushiMobil4 from '../../img/sushiMobile/sushi-4-mobile.jpeg';
import sushiMobil5 from '../../img/sushiMobile/sushi-5-mobile.jpeg';

const Sushi = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Project>
      <ProjectImg
        style={{ width: `${matches ? '75%' : '50%'}`, height: 'auto' }}
        image={matches ? sushiMobil1 : sushiWeb1}
        alt='sushi1'
      />
      <ProjectText>
        Minimal Logo Design. A clean aesthetic that takes the “less is more”
        approach. Yet bringing extreme weight and importance to the brand
        identity.
      </ProjectText>

      <ProjectImg
        style={{ width: `${matches ? '75%' : '50%'}`, height: 'auto' }}
        image={matches ? sushiMobil2 : sushiWeb2}
        alt='sushi2'
      />
      <ProjectImg image={matches ? sushiMobil3 : sushiWeb3} alt='sushi3' />
      <ProjectQuote author='Leonardo DaVinci'>
        Simplicity is the ultimate sophistication
      </ProjectQuote>
      <ProjectImg image={matches ? sushiMobil4 : sushiWeb4} alt='sushi4' />
      <ProjectImg image={matches ? sushiMobil5 : sushiWeb5} alt='sushi5' />
    </Project>
  );
};

export default Sushi;
