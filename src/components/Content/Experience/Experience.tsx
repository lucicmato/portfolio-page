import React from 'react';

import { Technology } from '../../../models/Enums';

interface ExperienceProps {
  core: Technology[];
  other: Technology[];
}

const Experience: React.FC<ExperienceProps> = ({ core, other }) => (
  <section className="relative overflow-hidden px-2 xl:px-0">
    <div className="mt-20 flex flex-col gap-14 border-t border-b px-4 py-14 text-center md:border-b-0 md:text-left xl:px-0">
      <div className="xl:grid xl:grid-cols-[240px_1fr] xl:items-baseline">
        <h2 className="text-base font-bold uppercase tracking-[2.29px] text-grey">Core stack</h2>
        <ul className="mt-6 flex flex-col gap-6 md:grid md:grid-cols-2 xl:mt-0 2xl:grid-cols-3">
          {core.map((technology) => (
            <li
              key={technology}
              className="flex items-center justify-center gap-4 text-h2 font-h2 -tracking-h2 md:justify-start"
            >
              <span aria-hidden="true" className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-green md:block" />
              {technology}
            </li>
          ))}
        </ul>
      </div>
      <div className="xl:grid xl:grid-cols-[240px_1fr] xl:items-baseline">
        <h2 className="text-base font-bold uppercase tracking-[2.29px] text-grey">Also used</h2>
        {/* Twice the core columns with the same gap, so every other column lines up with the core grid. */}
        <ul className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start xl:mt-0 xl:grid xl:grid-cols-4 xl:gap-6 2xl:grid-cols-6">
          {other.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-grey/40 px-4 py-1 text-grey xl:flex xl:items-center xl:gap-4 xl:rounded-none xl:border-0 xl:p-0 xl:text-h3"
            >
              <span aria-hidden="true" className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-grey/40 xl:block" />
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
