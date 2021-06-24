import { useMediaQuery } from '@material-ui/core';

import React from 'react';
import { Project, ProjectImg, ProjectText } from '../../components/Project';

import cookbookWeb1 from '../../img/cookbookWeb/cookbook-1.jpg';
import cookbookWeb2 from '../../img/cookbookWeb/cookbook-2.jpg';
import cookbookWeb3 from '../../img/cookbookWeb/cookbook-3.jpg';
import cookbookWeb4 from '../../img/cookbookWeb/cookbook-4.jpg';

import cookbookMobil1 from '../../img/cookbookMobile/cookbook-1-mobile.jpeg';
import cookbookMobil2 from '../../img/cookbookMobile/cookbook-2-mobile.jpeg';
import cookbookMobil3 from '../../img/cookbookMobile/cookbook-3-mobile.jpeg';
import cookbookMobil4 from '../../img/cookbookMobile/cookbook-4-mobile.jpeg';

const Cookbook = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Project>
      <ProjectImg
        image={matches ? cookbookMobil1 : cookbookWeb1}
        alt='cookbook1'
      />
      <ProjectText>
        The main color choice is a Squash color complementing by Indigo Blue
        stimulating the creative energetic process of making delicious desserts
        but balancing and calming on the other hand in order do not overwhelm
        the user. Extremely appealing luscious dessert pictures justify the
        design choice by attracting customers to use the product. The main goal
        was to create a very easy yet playful fun and approachable layout which
        facilitates the cooking process.
      </ProjectText>
      <ProjectImg
        image={matches ? cookbookMobil2 : cookbookWeb2}
        alt='cookbook2'
      />
      <ProjectImg
        image={matches ? cookbookMobil3 : cookbookWeb3}
        alt='cookbook3'
      />
      <ProjectImg
        image={matches ? cookbookMobil4 : cookbookWeb4}
        alt='cookbook4'
      />
    </Project>
  );
};

export default Cookbook;
