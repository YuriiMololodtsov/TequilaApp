import React from 'react';
import styles from './recipePage.module.scss';
import { coctails } from '@/acets/data';
import Heading from '@/components/heading/Heading';

const recipePage = ({ id }: any) => {
  console.log(id);

  return (
    <div>
      <Heading text={id.title} />
      {id.ingredients.map((ingred: any, i: any) => {
        return (
          <p key={i}>
            <span>{`${ingred.name} ${ingred.measurement}`}</span>
          </p>
        );
      })}

      <p>{id.fact}</p>
      <p>{id.recipe}</p>
    </div>
  );
};

export default recipePage;
