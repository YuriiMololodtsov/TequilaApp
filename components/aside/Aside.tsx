import React, { FC } from 'react';
import styles from './aside.module.scss';

interface AsideProps {
  value: boolean;
}
const Aside: FC<AsideProps> = ({ value }) => {
  console.log(value);

  return (
    <aside
      className={
        value ? `${styles.wrapper} ${styles.activ} ` : `${styles.wrapper}`
      }
    >
      <div className={styles.list}>
        <ul>
          <li>Алкогольные</li>
          <li>Безалкогольные</li>
          <li>Интересное</li>
          <li>Интересное</li>
          <li>Интересное</li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
