import React from 'react';
import styles from './HomePage.module.scss';

const Homepage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.videoContainer}>
        <video id="presentation-video" playsInline preload="auto" muted autoPlay loop>
          <source src="/videos/video_02.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={`${styles.textBox} ${styles.top}`}>
          <h2>YUNYOUNGSIK</h2>
        </div>
      </div>

      <div className={styles.videoContainer}>
        <video id="presentation-video" playsInline preload="auto" muted autoPlay loop>
          <source src="/videos/video_01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={`${styles.textBox} ${styles.bottom}`}>
          <h2 className={styles.portfolio}>PORTFOLIO</h2>
        </div>
      </div>

      <div className={styles.mainFooter}>
        <span>2025</span>
        <span>YUNYOUNGSIK PORTFOLIO</span>
      </div>
    </main>
  );
};

export default Homepage;
