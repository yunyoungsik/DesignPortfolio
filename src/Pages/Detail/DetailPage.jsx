import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './DetailPage.module.scss';

const DetailPage = () => {
  const { title } = useParams();
  return (
    <main className={styles.main}>
      {title === 'mhon' && <a href="https://mhon.kr" target="_blank" rel="noreferrer" />}
      <img src={`/images/${title}.jpg`} alt={title} className={title} />
    </main>
  );
};
export default DetailPage;
