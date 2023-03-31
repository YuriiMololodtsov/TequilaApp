import React from 'react';
import Heading from '@/components/heading/Heading';
import { useRouter } from 'next/router';
import { coctails } from '@/accets/data';
import RecipePage from '@/components/reripePage/RecipePage';
const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const numPage = Number(id);
  return (
    <div>
      <p>{numPage}</p>
      <RecipePage id={id} />
    </div>
  );
};

export default Post;
