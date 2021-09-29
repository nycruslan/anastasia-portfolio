import { useMediaQuery } from '@material-ui/core';

import React from 'react';
import { Project, ProjectImg, ProjectText } from '../../components/Project';

import lunaWeb1 from '../../img/lunaWeb/luna-1.jpg';
import lunaWeb2 from '../../img/lunaWeb/luna-2.jpg';
import lunaWeb3 from '../../img/lunaWeb/luna-3.jpg';
import lunaWeb4 from '../../img/lunaWeb/luna-4.jpg';
import lunaWeb5 from '../../img/lunaWeb/luna-5.jpg';
import lunaWeb6 from '../../img/lunaWeb/luna-6.jpg';

import lunaMobil1 from '../../img/lunaMobile/luna-1-mobile.jpeg';
import lunaMobil2 from '../../img/lunaMobile/luna-2-mobile.jpeg';
import lunaMobil3 from '../../img/lunaMobile/luna-3-mobile.jpeg';
import lunaMobil4 from '../../img/lunaMobile/luna-4-mobile.jpeg';
import lunaMobil5 from '../../img/lunaMobile/luna-5-mobile.jpeg';
import lunaMobil6 from '../../img/lunaMobile/luna-6-mobile.jpeg';

const Radiance = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Project>
      <ProjectImg image={matches ? lunaMobil1 : lunaWeb1} alt='luna1' />
      {/* <ProjectText>
        Used tessellation method to create a consistent triangle theme for a
        light show advertisement poster concept. The visual busyness is used
        purposely to attract the consumer to wander and explore this vibrant
        advertisement. It’s also giving an impression of what experience to
        expect from the show.
      </ProjectText> */}
      <ProjectImg image={matches ? lunaMobil2 : lunaWeb2} alt='luna2' />
      <ProjectImg image={matches ? lunaMobil3 : lunaWeb3} alt='luna3' />
      {/* <ProjectText>
        Even though the design was mainly created to promote Light Show the
        triangle theme is universal and is applicable to many objects as well as
        could be used as an individual Art.
      </ProjectText> */}
      <ProjectImg image={matches ? lunaMobil4 : lunaWeb4} alt='luna4' />
      <ProjectImg
        image={matches ? lunaMobil5 : lunaWeb5}
        alt='luna5'
        style={{ maxWidth: `${matches ? '100%' : '75%'}`, height: 'auto' }}
      />
      <ProjectImg image={matches ? lunaMobil6 : lunaWeb6} alt='luna6' />
    </Project>
  );
};

export default Radiance;
