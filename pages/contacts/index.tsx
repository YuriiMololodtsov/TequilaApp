import React from 'react';
import Link from 'next/link';
import Contact from './contact';
import Heading from '@/components/heading/Heading';
const index = () => {
  return (
    <div>
      <Heading text="Header" tag="h1" />
      <Link href="/contacts/contact">Tut</Link>
    </div>
  );
};

export default index;
