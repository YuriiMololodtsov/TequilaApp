import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import Post from './../components/post/Post';
import { coctails } from './../acets/data';
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Hello Alco</h1>
      {/* <Post data={coctails} /> */}
    </div>
  );
};

export default Home;
