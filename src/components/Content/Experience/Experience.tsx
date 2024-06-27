import React from 'react';

import { IExperience } from '../../../models/Models';
import Rings from '../../Common/Rings';

interface ExperienceProps {
  data: IExperience[];
}
//IDEA: Add logic for dynamic addition
{
  /*absolute gap-y-6 grid xl:grid-cols-3 lg:top-[824px] lg:left-[165px] lg:pt-[72px] lg:pl-[5px] lg:pr-[5px] lg:min-w-[1100px] lg:min-h-[254px]*/
}

const Experience: React.FC<ExperienceProps> = ({ data }) => (
  <section>
    <ul className="mx-4 mt-20 pt-10 pb-10 border-t border-b md:border-b-0 md:columns-2">
      {data.map((experience) => (
        //flex flex-col justify-center items-start gap-[14px] min-w-[345px]
        <li className="flex flex-col justify-center items-center gap-px pb-6 md:pt-4 md:items-start">
          {/*text-[48px] font-bold leading-14 tracking-tighter*/}
          <h2>{experience.name}</h2>
          {/**text-[18px] font-medium leading-7 bg-{grey}} */}
          <span className="text-grey leading-[1.625rem] font-medium">{`${experience.yearsOfExperience} ${
            experience.yearsOfExperience !== 1 ? 'Years' : 'Year'
          } Experience`}</span>
        </li>
      ))}
      {/**absolute lg:left-[1149px] */}
      <Rings position={'absolute left-[calc(100vw-40%)]'} />
    </ul>
  </section>
);

export default Experience;
