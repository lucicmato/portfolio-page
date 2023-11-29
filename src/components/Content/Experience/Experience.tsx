import React from 'react';

import { IExperience } from '../../../models/Models';

interface ExperienceProps {
  data: IExperience[];
}
//IDEA: Add logic for dynamic addition
const Experience: React.FC<ExperienceProps> = ({ data }) => (
  <>
    {data.map((experience) => (
      <section>
        <h2>{experience.name}</h2>
        <p>{`${experience.yearsOfExperience} Years Experience`}</p>
      </section>
    ))}
  </>
);

export default Experience;
