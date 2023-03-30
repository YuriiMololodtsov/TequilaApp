import React from 'react';
import styles from './post.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import RecipePage from './../reripePage/RecipePage';
const Post = ({ data, handlerClick, value, id }: any) => {
  return (
    <>
      <div className={styles.wrapper} onClick={() => handlerClick(id)}>
        <div className={styles.post__img}>
          <Image
            className={styles.img}
            src={data.image}
            alt={data.title}
            height={200}
          ></Image>
        </div>
        <div className={styles.post__title}>
          <h2>{data.title}</h2>
        </div>
      </div>
    </>
  );
};

export default Post;
