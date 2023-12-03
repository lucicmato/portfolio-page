import React from 'react';
import PresentationTitleAndDecs from './PresentationTitleAndDecs';
import PresentationContactLink from '../../Common/ContactMeButton';
import PresentationImage from './PresentationImage';
import data from '../../../data/data';
import Circle from './Circle';
import Rings from './Rings';

const Presentation: React.FC = () => {
  return (
    <section>
      <PresentationTitleAndDecs developerName={data.representation.developerName} />
      <PresentationImage />
      <PresentationContactLink />
      <Circle position={'absolute lg:left-[766px] lg:top-[521px]'} />
      <Rings position={'absolute lg:left-[-100px] lg:top-[133px]'} />
    </section>
  );
};

export default Presentation;
