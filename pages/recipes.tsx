import { coctails } from '@/accets/data';
import Post from '@/components/post/Post';
import styles from '../styles/Recipes.module.scss';
import { useState } from 'react';
import handler from './api/hello';
import RecipePage from '@/components/reripePage/RecipePage';
const Recipes = () => {
  const [value, setValue] = useState(false);
  const [id, setId] = useState();
  const handlerClick = (id: any) => {
    setValue(true);
    setId(id);
  };

  console.log(id);
  return (
    <div className={styles.wrapper}>
      {!value ? (
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
      ) : (
        <RecipePage id={coctails[Number(id)]} />
      )}
    </div>
  );
};

export default Recipes;
