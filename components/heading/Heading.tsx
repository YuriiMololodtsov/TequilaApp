import { type } from 'os';
import React, { FC } from 'react';

export type HeadingProps = {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5';
};

const Heading: FC<HeadingProps> = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default Heading;
