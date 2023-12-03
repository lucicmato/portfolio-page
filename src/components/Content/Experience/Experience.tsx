import React from 'react';

import { IExperience } from '../../../models/Models';
import Rings from '../Presentation/Rings';

interface ExperienceProps {
  data: IExperience[];
}
//IDEA: Add logic for dynamic addition

const Experience: React.FC<ExperienceProps> = ({ data }) => (
  <ul className="absolute gap-y-6 grid xl:grid-cols-3 lg:top-[824px] lg:left-[165px] lg:pt-[72px] lg:pl-[5px] lg:pr-[5px] lg:min-w-[1100px] lg:min-h-[254px]">
    {data.map((experience) => (
      <li className="flex flex-col justify-center items-start gap-[14px] min-w-[345px] ">
        <h2 className="text-[48px] font-bold leading-14 tracking-tighter">{experience.name}</h2>
        <p className="text-[18px] font-medium leading-7 bg-{grey}}">{`${experience.yearsOfExperience} Years Experience`}</p>
      </li>
    ))}
    <Rings position={'absolute lg:left-[1149px]'} />
  </ul>
);

export default Experience;
