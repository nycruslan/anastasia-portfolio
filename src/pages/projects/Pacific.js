import { useMediaQuery } from '@material-ui/core';

import React from 'react';
import { Project, ProjectImg } from '../../components/Project';

import pacificWeb1 from '../../img/pacificWeb/pacific-1.jpg';
import pacificWeb2 from '../../img/pacificWeb/pacific-2.jpg';
import pacificWeb3 from '../../img/pacificWeb/pacific-3.jpg';
import pacificWeb4 from '../../img/pacificWeb/pacific-4.jpg';
import pacificWeb5 from '../../img/pacificWeb/pacific-5.jpg';
import pacificWeb6 from '../../img/pacificWeb/pacific-6.jpg';
import pacificWeb7 from '../../img/pacificWeb/pacific-7.jpg';

import pacificMobil1 from '../../img/pacificMobile/pacific-1-mobile.jpg';
import pacificMobil2 from '../../img/pacificMobile/pacific-2-mobile.jpg';
import pacificMobil3 from '../../img/pacificMobile/pacific-3-mobile.jpg';
import pacificMobil4 from '../../img/pacificMobile/pacific-4-mobile.jpg';
import pacificMobil5 from '../../img/pacificMobile/pacific-5-mobile.jpg';
import pacificMobil6 from '../../img/pacificMobile/pacific-6-mobile.jpg';
import pacificMobil7 from '../../img/pacificMobile/pacific-7-mobile.jpg';

const Pacific = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Project>
      <ProjectImg
        image={matches ? pacificMobil1 : pacificWeb1}
        alt='pacific1'
      />
      {/* <ProjectText>
        You cannot get enough of this trendy theme. It’s modern clean simple and
        super playful. It attracts! That’s all we want when it comes to a brand
        new App. Added custom glassmorphism details to the project. Used
        multi-layered approach with objects floating in space and vivid colors
        to highlight the blurred transparency and a subtle, light border on the
        translucent objects.
      </ProjectText> */}
      <ProjectImg
        image={matches ? pacificMobil2 : pacificWeb2}
        alt='pacific2'
      />
      <ProjectImg
        image={matches ? pacificMobil3 : pacificWeb3}
        alt='pacific3'
      />
      {/* <ProjectText>
        An implementation of geometric basic shapes to the background created an
        interactive and approachable look to the presentation.
      </ProjectText> */}
      <ProjectImg
        image={matches ? pacificMobil4 : pacificWeb4}
        alt='pacific4'
      />
      <ProjectImg
        image={matches ? pacificMobil5 : pacificWeb5}
        alt='pacific5'
      />
      <ProjectImg
        image={matches ? pacificMobil6 : pacificWeb6}
        alt='pacific6'
      />
      <ProjectImg
        image={matches ? pacificMobil7 : pacificWeb7}
        alt='pacific7'
      />
    </Project>
  );
};

export default Pacific;
