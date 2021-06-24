import { useMediaQuery } from '@material-ui/core';

import React from 'react';
import { Project, ProjectImg, ProjectText } from '../../components/Project';

import bankingWeb1 from '../../img/bankingWeb/banking-1.jpg';
import bankingWeb2 from '../../img/bankingWeb/banking-2.jpg';
import bankingWeb3 from '../../img/bankingWeb/banking-3.jpg';
import bankingWeb4 from '../../img/bankingWeb/banking-4.jpg';

import bankingMobil1 from '../../img/bankingMobile/banking-1-mobile.jpeg';
import bankingMobil2 from '../../img/bankingMobile/banking-2-mobile.jpeg';
import bankingMobil3 from '../../img/bankingMobile/banking-3-mobile.jpeg';
import bankingMobil4 from '../../img/bankingMobile/banking-4-mobile.jpeg';

const Banking = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Project>
      <ProjectImg
        image={matches ? bankingMobil1 : bankingWeb1}
        alt='banking1'
      />
      <ProjectText>
        You cannot get enough of this trendy theme. It’s modern clean simple and
        super playful. It attracts! That’s all we want when it comes to a brand
        new App. Added custom glassmorphism details to the project. Used
        multi-layered approach with objects floating in space and vivid colors
        to highlight the blurred transparency and a subtle, light border on the
        translucent objects.
      </ProjectText>
      <ProjectImg
        image={matches ? bankingMobil2 : bankingWeb2}
        alt='banking2'
      />
      <ProjectImg
        image={matches ? bankingMobil3 : bankingWeb3}
        alt='banking3'
      />
      <ProjectText>
        An implementation of geometric basic shapes to the background created an
        interactive and approachable look to the presentation.
      </ProjectText>
      <ProjectImg
        image={matches ? bankingMobil4 : bankingWeb4}
        alt='banking4'
      />
    </Project>
  );
};

export default Banking;
