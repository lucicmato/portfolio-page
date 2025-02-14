import React from 'react';

import PresentationTitleAndDecs from './PresentationTitleAndDecs';
import Image from './Image';
import data from '../../../data/data';
import Circle from '../../Common/Circle';
import Rings from '../../Common/Rings';

const Presentation: React.FC = () => {
  return (
    <>
      <Rings position={'absolute left-[-50%] top-32 z-[-1] md:left-[-30%] md:top-[5rem] xl:left-[-5%]'} />
      <section className="flex flex-wrap justify-center relative overflow-hidden md:flex-nowrap md:flex-row-reverse">
        <Image />
        <Circle position="absolute top-72 left-[calc(100%-64.5px)] md:top-[32rem] xl:left-[50%]" />
        <PresentationTitleAndDecs
          developerName={data.representation.developerName}
          description={data.representation.description}
        />
      </section>
    </>
  );
};

export default Presentation;
