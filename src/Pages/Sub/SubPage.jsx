import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SubPage.module.scss';
import { ChevronDown } from 'lucide-react';

const subData = [
  {
    id: 1,
    img: '/images/webImg.png',
    sectionTitle: 'Project',
    sectionDesc: 'Design & Coding',
    title: 'Web Design',
    shortTitle: 'web',
    desc: 'MHON 홈페이지, 컨버스 프로모션 홈페이지 등<br /> 웹 및 상세페이지를 제작하였습니다.',
    list: [
      { id: 1, name: 'mhon', img: '/images/mhonIcon.jpg', link: '/sub/mhon' },
      {
        id: 2,
        name: 'smartpointer',
        img: '/images/smartpointerIcon.jpg',
        link: '/sub/smartpointer',
      },
      {
        id: 3,
        name: 'bbumbella',
        img: '/images/bbumbellaIcon.jpg',
        link: '/sub/bbumbella',
      },
      {
        id: 4,
        name: 'shinwhaDetail',
        img: '/images/shinwhaDetailIcon.jpg',
        link: '/sub/shinwhaDetail',
      },
      {
        id: 5,
        name: 'shinwhaBanner',
        img: '/images/shinwhaBannerIcon.jpg',
        link: '/sub/shinwhaBanner',
      },
      { id: 6, name: 'interpark', img: '/images/interparkIcon.jpg', link: '/sub/interpark' },
      { id: 7, name: 'chungmidang', img: '/images/chungmidangIcon.jpg', link: '/sub/chungmidang' },
      { id: 8, name: 'converse', img: '/images/converseIcon.jpg', link: '/sub/converse' },
      { id: 9, name: 'illionaire', img: '/images/illionaireIcon.jpg', link: '/sub/illionaire' },
      { id: 10, name: 'kcsmro', img: '/images/kcsmroIcon.jpg', link: '/sub/kcsmro' },
      { id: 11, name: 'minmicake', img: '/images/minmicakeIcon.jpg', link: '/sub/minmicake' },
      { id: 12, name: 'beanorder', img: '/images/beanorderIcon.jpg', link: '/sub/beanorder' },
    ],
  },
  {
    id: 2,
    img: '/images/editorialImg.png',
    sectionTitle: 'Project',
    sectionDesc: 'Design',
    title: 'Editorial Design',
    shortTitle: 'editorial',
    desc: '일리네어 레코드 CD 커버 디자인부터 신화공영의 명함 및 명찰 디자인까지<br />브랜딩을 강화하는 다양한 편집 디자인을 제작하였습니다.',
    list: [
      {
        id: 1,
        name: 'illionaireCd',
        img: '/images/illionaireCdIcon.jpg',
        link: '/sub/illionaireCd',
      },
      {
        id: 2,
        name: 'shinwhaCard',
        img: '/images/shinwhaCardIcon.jpg',
        link: '/sub/shinwhaCard',
      },
      {
        id: 3,
        name: 'shinwhaName',
        img: '/images/shinwhaNameIcon.jpg',
        link: '/sub/shinwhaName',
      },
    ],
  },
  {
    id: 3,
    img: '/images/aboutImg.png',
    sectionTitle: 'About',
    sectionDesc: 'profile',
    title: 'YunYoungsik',
    shortTitle: 'about',
    desc: '고객과 소통할 수 있는 다리를 만들어주는 웹디자이너 윤영식입니다.<br />연락처 010-9992-0007 / 학력 안산대학교 디자인애니메이션과 졸업',
    list: [
      {
        id: 1,
        name: 'photoshop',
        img: '/images/photoshop.jpg',
        link: '/',
      },
      {
        id: 2,
        name: 'illustrator',
        img: '/images/illustrator.jpg',
        link: '/',
      },
      {
        id: 3,
        name: 'vscode',
        img: '/images/vscode.png',
        link: '/',
      },
    ],
  },
];

const SubPage = () => {
  return (
    <>
      <main className={styles.main}>
        {subData.map((item) => (
          <section id={item.shortTitle} className={styles.section}>
            <div className={styles.sectionContainer}>
              <div className={styles.sectionTitle}>
                <h3>{item.sectionTitle}</h3>
                <p>{item.sectionDesc}</p>
              </div>

              <div className={styles.imgBox}>
                <img src={item.img} alt={item.title} />
              </div>

              <div className={styles.textBox} key={item.id}>
                <div className={styles.title}>
                  <h2>{item.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: item.desc }} />
                  {item.id === 3 && (
                    <table className={styles.career}>
                      <tr>
                        <td>경력</td> <td>24.05~24.09 (주)바니쉬스테레오타입 IT팀 사원</td>
                      </tr>
                      <tr>
                        <td />
                        <td>23.09~24.02 라인컴퓨터아트 공공데이터활용 Node.js, Java 과정 수료</td>
                      </tr>
                      <tr>
                        <td />
                        <td>20.12~23.03 (주)신화공영 관리부 대리</td>
                      </tr>
                      <tr>
                        <td />
                        <td>18.05~20.05 (주)신화공영 온라인사업부 사원</td>
                      </tr>
                      <tr>
                        <td />
                        <td>17.06~17.11 그린컴퓨터아카데미 스마트기기 UI/UX 디자인 과정 수료</td>
                      </tr>
                    </table>
                  )}
                </div>
                <div className={styles.quickView}>
                  <div className={styles.quickViewTitle}>
                    <p>QUICK VIEW</p>
                    <ChevronDown size={16} stroke="#007bc1" />
                  </div>
                  <ul>
                    {item.list.map((list) => (
                      <li key={list.id}>
                        {item.id !== 3 ? (
                          <Link to={list.link}>
                            <img src={list.img} alt={list.name} />
                          </Link>
                        ) : (
                          <img src={list.img} alt={list.name} />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <footer className={styles.footer}>
        <p>Copyright © 2025. yunyoungsik. All rights reserved.</p>
      </footer>
    </>
  );
};

export default SubPage;
