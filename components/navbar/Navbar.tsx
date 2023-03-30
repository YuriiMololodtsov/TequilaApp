import React from 'react';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import menuIcon from '../../static/img/menu.png';
import { useState, FC } from 'react';

interface NavbarProps {
  value: boolean;
  onClick: any;
}
const Navbar: FC<NavbarProps> = ({ value, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <button
          title="1"
          className={styles.menuBtn}
          onClick={() => onClick(true)}
        />

        <div className={styles.logo}>AlcoApp</div>

        <div className={`${styles.links} ${styles.links__activ}`}>
          <div className={styles.link}>
            <input className={styles.input} type="text" placeholder="Поиск" />
          </div>
          <div className={styles.link}>ЛК</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
