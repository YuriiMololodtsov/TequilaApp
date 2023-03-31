import React from 'react';
import styles from './recipePage.module.scss';
import { coctails } from '@/accets/data';
import Heading from '@/components/heading/Heading';

const recipePage = ({ id }: any) => {
  console.log(id);
  const coctail = coctails[id];
  return (
    <div>
      <Heading text={coctail.title} />
      {coctail.ingredients.map((ingred: any, i: any) => {
        return (
          <p key={i}>
            <span>{`${ingred.name} ${ingred.measurement}`}</span>
          </p>
        );
      })}

      <p>{coctail.fact}</p>
      <p>{coctail.recipe}</p>
    </div>
  );
};

export default recipePage;
