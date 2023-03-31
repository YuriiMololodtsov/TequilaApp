import React from 'react';
import { coctails } from '@/accets/data';
import Post from '@/components/post/Post';
import styles from '../../styles/Recipes.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import RecipePage from '@/components/reripePage/RecipePage';

const Posts = () => {
  const [value, setValue] = useState(false);
  const [id, setId] = useState();
  const handlerClick = (id: any) => {
    setValue(true);
    setId(id);
  };

  console.log(id);
  return (
    <>
      <Link href={`/posts/${[id]}`}>
        <div className={styles.wrapper}>
          {
            coctails.map((coctail): any => {
              return (
                <Post
                  key={coctail.id}
                  data={coctail}
                  handlerClick={handlerClick}
                  value={value}
                  id={coctail.id}
                />
              );
            })

            // <RecipePage id={coctails[Number(id)]} />
          }
        </div>
      </Link>
    </>
  );
};

export default Posts;
