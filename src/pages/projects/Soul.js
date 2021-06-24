import { useMediaQuery } from '@material-ui/core';

import React from 'react';
import {
  Project,
  ProjectImg,
  ProjectText,
  ProjectQuote,
} from '../../components/Project';

import soulWeb1 from '../../img/soulWeb/soul-1.jpg';
import soulWeb2 from '../../img/soulWeb/soul-2.jpg';
import soulWeb3 from '../../img/soulWeb/soul-3.jpg';
import soulWeb4 from '../../img/soulWeb/soul-4.jpg';
import soulWeb5 from '../../img/soulWeb/soul-5.jpg';
import soulWeb6 from '../../img/soulWeb/soul-6.jpg';

import soulMobil1 from '../../img/soulMobile/soul-1-mobile.jpeg';
import soulMobil2 from '../../img/soulMobile/soul-2-mobile.jpeg';
import soulMobil3 from '../../img/soulMobile/soul-3-mobile.jpeg';
import soulMobil4 from '../../img/soulMobile/soul-4-mobile.jpeg';
import soulMobil5 from '../../img/soulMobile/soul-5-mobile.jpeg';
import soulMobil6 from '../../img/soulMobile/soul-6-mobile.jpeg';

const Soul = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Project>
      <ProjectImg image={matches ? soulMobil1 : soulWeb1} alt='soul1' />
      <ProjectText>
        The logo of the project Soul Salon&Spa derives from the most vital
        element on earth Water. It’s translated as a small blue semi-transparent
        drop symbolizing an essential part of a human body that is inseparably
        connected to the human’s Soul. The logo and brand’s slogan (Purity
        Vitality Serenity) brings a visual identity to the company’s philosophy
        and experience expected from the services provided.
      </ProjectText>
      <ProjectImg image={matches ? soulMobil2 : soulWeb2} alt='soul2' />
      <ProjectImg image={matches ? soulMobil3 : soulWeb3} alt='soul3' />
      <ProjectQuote author='Margaret Atwood'>
        Water does not resist. Water flows. When you plunge your hand into it,
        all you feel is a caress. Water is not a solid wall, it will not stop
        you. But water always goes where it wants to go, and nothing in the end
        can stand against it. Water is patient. Dripping water wears away a
        stone. Remember you are half water. If you can’t go through an obstacle.
        Go around it. Water does.
      </ProjectQuote>
      <ProjectImg image={matches ? soulMobil4 : soulWeb4} alt='soul4' />
      <ProjectImg image={matches ? soulMobil5 : soulWeb5} alt='soul5' />
      <ProjectImg image={matches ? soulMobil6 : soulWeb6} alt='soul6' />
    </Project>
  );
};

export default Soul;
