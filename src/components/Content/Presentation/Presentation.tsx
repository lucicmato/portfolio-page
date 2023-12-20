import React from 'react';
import PresentationTitleAndDecs from './PresentationTitleAndDecs';
import Image from './Image';
import data from '../../../data/data';

import Circle from '../../Common/Circle';
import Rings from '../../Common/Rings';

const Presentation: React.FC = () => {
  return (
    <section className="md:flex md:flex-row-reverse">
      <Image />
      <Rings position={'absolute right-48 top-32 z-[-1] md:right-[31.4375rem] md:top-[5.375rem] '} />
      {/*lg:left-[-100px] lg:top-[133px]*/}
      <Circle position={'absolute left-80 top-64 md:top-[29.4375rem] md:left-[43.875rem]'} />
      {/*lg:left-[766px] lg:top-[521px]*/}
      <PresentationTitleAndDecs
        developerName={data.representation.developerName}
        description={data.representation.description}
      />
    </section>
  );
};

export default Presentation;
