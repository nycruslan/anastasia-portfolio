import { useMediaQuery } from '@material-ui/core';

import React from 'react';
import { Project, ProjectImg, ProjectText } from '../../components/Project';

import chlorisWeb1 from '../../img/chlorisWeb/chloris-1.jpg';
import chlorisWeb2 from '../../img/chlorisWeb/chloris-2.jpg';
import chlorisWeb3 from '../../img/chlorisWeb/chloris-3.jpg';
import chlorisWeb4 from '../../img/chlorisWeb/chloris-4.jpg';
import chlorisWeb5 from '../../img/chlorisWeb/chloris-5.jpg';

import chlorisMobil1 from '../../img/chlorisMobile/chloris-1-mobile.jpeg';
import chlorisMobil2 from '../../img/chlorisMobile/chloris-2-mobile.jpeg';
import chlorisMobil3 from '../../img/chlorisMobile/chloris-3-mobile.jpeg';
import chlorisMobil4 from '../../img/chlorisMobile/chloris-4-mobile.jpeg';
import chlorisMobil5 from '../../img/chlorisMobile/chloris-5-mobile.jpeg';

const Chloris = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Project>
      <ProjectImg
        image={matches ? chlorisMobil1 : chlorisWeb1}
        alt='chloris1'
      />
      <ProjectText>
        In Greek mythology, Chloris was a nymph or goddess who was associated
        with spring, flowers, and new growth believed to have dwelt in the
        Elysian Fields. Chloris actually means “greenish and fresh” in ancient
        Greek describing a new promising brand that has “an environmental mind”,
        using eco-organic goods, lessening the environmental impact of product
        toxicity as well as energy & water recycle and reuse.
      </ProjectText>
      <ProjectImg
        image={matches ? chlorisMobil2 : chlorisWeb2}
        alt='chloris2'
      />
      <ProjectImg
        image={matches ? chlorisMobil3 : chlorisWeb3}
        alt='chloris3'
      />
      <ProjectText>
        There is also a Chloris type of rose: these small to medium light pink
        flowers are very double, old fashioned in form and deeply fragrant. The
        rose is a symbol of the brand and presenting it as classy airy but
        profound and solid.
      </ProjectText>
      <ProjectImg
        image={matches ? chlorisMobil4 : chlorisWeb4}
        alt='chloris4'
      />
      <ProjectImg
        image={matches ? chlorisMobil5 : chlorisWeb5}
        alt='chloris5'
      />
    </Project>
  );
};

export default Chloris;
