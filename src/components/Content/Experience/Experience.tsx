import React from 'react';

import { Experience } from '../../../models/Models';

interface ExperienceProps {
  data: Experience[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => (
  <>
    <section className="relative overflow-hidden px-2 xl:px-0">
      <ul className="px-4 mt-20 pt-10 pb-10 border-t border-b md:border-b-0 md:columns-2 xl:columns-3 xl:px-0">
        {data.map((experience: Experience, index) => (
          <li
            key={index}
            className="flex flex-col justify-center items-center gap-px p-4 md:pt-14 md:items-start xl:px-0"
          >
            <h2>{experience.name}</h2>
            <span className="text-grey leading-[1.625rem] font-medium">{`${experience.yearsOfExperience} ${experience.yearsOfExperience !== 1 ? 'Years' : 'Year'} Experience`}</span>
          </li>
        ))}
      </ul>
    </section>
    {/* <Rings position={'absolute left-[calc(100vw-50%)] md:left-[calc(100vw-30%)] xl:left-[calc(100vw-20%)]'} />*/}
  </>
);

export default Experience;
