import { useMediaQuery } from '@material-ui/core';

import React from 'react';
import { Project, ProjectImg, ProjectText } from '../../components/Project';

import fitnessWeb1 from '../../img/fitnessWeb/fitness-1.jpg';
import fitnessWeb2 from '../../img/fitnessWeb/fitness-2.jpg';
import fitnessWeb3 from '../../img/fitnessWeb/fitness-3.jpg';
import fitnessWeb4 from '../../img/fitnessWeb/fitness-4.jpg';
import fitnessWeb5 from '../../img/fitnessWeb/fitness-5.jpg';

import fitnessMobil1 from '../../img/fitnessMobile/fitness-1-mobile.jpg';
import fitnessMobil2 from '../../img/fitnessMobile/fitness-2-mobile.jpg';
import fitnessMobil3 from '../../img/fitnessMobile/fitness-3-mobile.jpg';
import fitnessMobil4 from '../../img/fitnessMobile/fitness-4-mobile.jpg';
import fitnessMobil5 from '../../img/fitnessMobile/fitness-5-mobile.jpg';

const Fitness = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Project>
      <ProjectImg
        image={matches ? fitnessMobil1 : fitnessWeb1}
        alt='fitness1'
      />
      <ProjectText>
        Dynamic energetic powerful and strong fitness accessories brand. It is
        unisex universal and suitable for any personality type. The rebranded
        packaging neutral colored with a strong vibrant red accents represent
        the main message: “Brand for anyone who wants to be strong and active”.
        It catches an eye with a modern fresh unique design but it’s not
        overwhelming with unnecessary information or elements. Every asset is
        justified and plays a crucial informational role as well as represents
        the brand and creates a strong brand recognition. The logo speaks for
        itself in a modern and casual way. It’s clean simple and clear. Italic
        condensed fonts are creating a strong sensory stimulus to perceive the
        brand in Motion.
      </ProjectText>
      <ProjectImg
        style={{ maxWidth: '80%', height: 'auto' }}
        image={matches ? fitnessMobil2 : fitnessWeb2}
        alt='fitness2'
      />
      <ProjectText>
        All the assets are designed to be used on a variety of products and
        applicable to any type of packaging. The brand is created to be
        recognized and remembered. Based on scientific research people remember
        patterns with fewer colors (two-color palettes) better than patterns
        with more colors (four-color palettes). The contrast of surrounding
        colors impacted how well we remember the color pattern. In other words,
        color differences between the content and the background may enhance our
        ability to focus our attention on the content itself.
      </ProjectText>
      <ProjectImg
        image={matches ? fitnessMobil3 : fitnessWeb3}
        alt='fitness3'
      />

      <ProjectImg
        image={matches ? fitnessMobil4 : fitnessWeb4}
        alt='fitness4'
      />
      <ProjectImg
        image={matches ? fitnessMobil5 : fitnessWeb5}
        alt='fitness5'
      />
    </Project>
  );
};

export default Fitness;
