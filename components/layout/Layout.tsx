import Header from '../header/Header';
import Footer from '../footer/Footer';
import Aside from '../aside/Aside';
import styles from './layout.module.scss';
import React, { ReactNode, FC, useState } from 'react';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [activMenuBtn, setActivMenuBtn] = useState(false);
  const menuClick = () =>
    activMenuBtn ? setActivMenuBtn(false) : setActivMenuBtn(true);
  return (
    <div className={styles.container}>
      <Header value={activMenuBtn} onClick={menuClick} />
      <div className={styles.wrapper}>
        <Aside value={activMenuBtn} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
