import { useMediaQuery } from '@material-ui/core';

import React from 'react';
import { Project, ProjectImg, ProjectText } from '../../components/Project';

import radianceWeb1 from '../../img/radianceWeb/radiance-1.jpg';
import radianceWeb2 from '../../img/radianceWeb/radiance-2.jpg';
import radianceWeb3 from '../../img/radianceWeb/radiance-3.jpg';
import radianceWeb4 from '../../img/radianceWeb/radiance-4.jpg';
import radianceWeb5 from '../../img/radianceWeb/radiance-5.jpg';

import radianceMobil1 from '../../img/radianceMobile/radiance-1-mobile.jpeg';
import radianceMobil2 from '../../img/radianceMobile/radiance-2-mobile.jpeg';
import radianceMobil3 from '../../img/radianceMobile/radiance-3-mobile.jpeg';
import radianceMobil4 from '../../img/radianceMobile/radiance-4-mobile.jpeg';
import radianceMobil5 from '../../img/radianceMobile/radiance-5-mobile.jpeg';

const Radiance = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Project>
      <ProjectImg
        image={matches ? radianceMobil1 : radianceWeb1}
        alt='radiance1'
      />
      <ProjectText>
        Used tessellation method to create a consistent triangle theme for a
        light show advertisement poster concept. The visual busyness is used
        purposely to attract the consumer to wander and explore this vibrant
        advertisement. It’s also giving an impression of what experience to
        expect from the show.
      </ProjectText>

      <ProjectImg
        image={matches ? radianceMobil2 : radianceWeb2}
        alt='radiance2'
      />
      <ProjectText>
        Even though the design was mainly created to promote Light Show the
        triangle theme is universal and is applicable to many objects as well as
        could be used as an individual Art.
      </ProjectText>
      <ProjectImg
        image={matches ? radianceMobil3 : radianceWeb3}
        alt='radiance3'
      />
      <ProjectImg
        image={matches ? radianceMobil4 : radianceWeb4}
        alt='radiance4'
      />
      <ProjectImg
        image={matches ? radianceMobil5 : radianceWeb5}
        alt='radiance5'
      />
    </Project>
  );
};

export default Radiance;
