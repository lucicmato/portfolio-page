import React from 'react';
import PresentationTitleAndDecs from './PresentationTitleAndDecs';
import Image from './Image';
import data from '../../../data/data';
import image from '../../../assets/images/image-profile-mobile.webp';
import Circle from '../../Common/Circle';
import Rings from '../../Common/Rings';

const Presentation: React.FC = () => {
  return (
    <section>
      <Image image={image} />
      <Rings position={'absolute right-48 top-32 z-[-1]'} /> {/*lg:left-[-100px] lg:top-[133px]*/}
      <Circle position={'absolute left-80 top-64'} /> {/*lg:left-[766px] lg:top-[521px]*/}
      <PresentationTitleAndDecs
        developerName={data.representation.developerName}
        description={data.representation.description}
      />
    </section>
  );
};

export default Presentation;
