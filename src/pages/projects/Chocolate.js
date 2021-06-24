import { useMediaQuery } from '@material-ui/core';

import React from 'react';
import { Project, ProjectImg, ProjectText } from '../../components/Project';

import chocoWeb1 from '../../img/chocoWeb/choco-1.jpg';
import chocoWeb2 from '../../img/chocoWeb/choco-2.jpg';
import chocoWeb3 from '../../img/chocoWeb/choco-3.jpg';
import chocoWeb4 from '../../img/chocoWeb/choco-4.jpg';

import chocoMobil1 from '../../img/chocoMobile/choco-1-mobile.jpeg';
import chocoMobil2 from '../../img/chocoMobile/choco-2-mobile.jpeg';
import chocoMobil3 from '../../img/chocoMobile/choco-3-mobile.jpeg';
import chocoMobil4 from '../../img/chocoMobile/choco-4-mobile.jpeg';

const Chocolate = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Project>
      <ProjectImg image={matches ? chocoMobil1 : chocoWeb1} alt='chocolate1' />
      <ProjectText>
        Quality chocolate packaging builds brand authority, and brand authority
        transforms into sales. The goal is to create a modern trendy
        approachable design to speak and communicate with consumers. The muted
        color schemes are chosen in order do not to overwhelm and irritate the
        consumer but to grab the attention in a casual relaxing way. It also
        gives an association with the chocolate flavor filling. There is as much
        information on the front as the consumer needs; no unnecessary elements
        and details that would distract from simply liking it. All the elements
        are arranged in a non-conflicting complimentary way. Inconspicuous
        triangle custom pattern creates a modern look and makes the design
        appealing.
      </ProjectText>
      <ProjectImg image={matches ? chocoMobil2 : chocoWeb2} alt='chocolate2' />
      <ProjectImg image={matches ? chocoMobil3 : chocoWeb3} alt='chocolate3' />
      <ProjectText>
        Have you ever bought a product just because you liked the package? If
        the answer is yes then you are one of 64% of consumers who at least did
        it once. 70% accepted they form their impression on the brand based
        exclusively on package design. 52% of people say they will pay extra if
        a product comes in a design they like. 30% of businesses reported that
        their revenues increase when they improve their product packaging.
        Packaging is the most powerful tool of promoting a product. It
        influences consumer’s behaviors. It communicates with customers,
        effectively telling them what the brand and company stands for.
      </ProjectText>
      <ProjectImg image={matches ? chocoMobil4 : chocoWeb4} alt='chocolate4' />
    </Project>
  );
};

export default Chocolate;
