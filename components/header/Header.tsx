import React, { useState, FC } from 'react';
import Heading from '../heading/Heading';
import Navbar from '../navbar/Navbar';
import styles from './Header.module.scss';

interface HeaderProps {
  value: boolean;
  onClick: any;
}

const Header: FC<HeaderProps> = ({ value, onClick }) => {
  console.log(value, onClick);

  return (
    <header className={styles.header}>
      <Navbar value={value} onClick={onClick} />
    </header>
  );
};

export default Header;
