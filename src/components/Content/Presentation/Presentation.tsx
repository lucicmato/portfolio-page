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
      <Rings position={'absolute left-[-50%] top-32 z-[-1] md:right-[31.4375rem] md:top-[5.375rem] '} />
      {/*lg:left-[-100px] lg:top-[133px]*/}
      <Circle position={'absolute top-64 left-[calc(100vw-64.5px)] md:top-[32rem]'} /> {/**left-80 top-64 */}
      {/*lg:left-[766px] lg:top-[521px]*/}
      <PresentationTitleAndDecs
        developerName={data.representation.developerName}
        description={data.representation.description}
      />
    </section>
  );
};

export default Presentation;
