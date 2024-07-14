import * as React from 'react';
import styles from './Footer.module.scss';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import { pages } from 'constants/index';
// import Link from 'next/link';

// const scrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// };

const Footer = () => {
  // return <div className={styles.testColor2}>Footer</div>;
  return (
    <div className="mt-auto text-center">
      Copyright © {new Date().getFullYear()} Uplium. All rights reserved.
    </div>
  );

  // TODO remove
  // return (
  //   <Container className={styles.main}>
  //     <div className={styles.scrollToTop}>
  //       <img
  //         onClick={scrollToTop}
  //         src={'/images/ScrollToTop.png'}
  //         className={styles.imgTop}
  //       />
  //     </div>
  //     <Row className={styles.row}>
  //       <Col md={4} className={styles.col}>
  //         <Link href={`/${pages.trips}`} className={styles.aboutProject}>
  //           Про проєкт
  //         </Link>
  //         <Link href={`/${pages.trips}`} className={styles.aboutProject}>
  //           Новини
  //         </Link>
  //         <Link href={`/${pages.trips}`} className={styles.aboutProject}>
  //           Реєстрація гідів
  //         </Link>
  //         <Link href={`/${pages.trips}`} className={styles.aboutProject}>
  //           Стати партнером
  //         </Link>
  //         <Link href={`/${pages.trips}`} className={styles.aboutProject}>
  //           Додати +
  //         </Link>
  //       </Col>
  //       <Col md={4} className={styles.centralCol}>
  //         <img src={'/images/myTravel.png'} className={styles.myTravel} />
  //         <div className={styles.forTips}>
  //           За підтримки:
  //           <div className={styles.centralCont}>
  //             <img
  //               src={'/images/go-together.png'}
  //               className={styles.iconsGoTogether}
  //             />
  //           </div>
  //           <div className={styles.centralCont}>
  //             <img src={'/images/ee-fund.png'} className={styles.iconsEEFund} />
  //             <img src={'/images/dia.png'} className={styles.iconsDia} />
  //           </div>
  //         </div>
  //       </Col>
  //       <Col md={4} className={styles.col}>
  //         <div className={styles.socialNet}>
  //           Ми у соцмережех:
  //           <div className={styles.imageContainer}>
  //             <Link href={`/${pages.trips}`} legacyBehavior>
  //               <img src={'/images/telegram.png'} className={styles.icons} />
  //             </Link>
  //             <Link href={`/${pages.trips}`} legacyBehavior>
  //               <img src={'/images/tik.png'} className={styles.icons} />
  //             </Link>
  //             <Link href={`/${pages.trips}`} legacyBehavior>
  //               <img src={'/images/viber.png'} className={styles.icons} />
  //             </Link>
  //             <Link href={`/${pages.trips}`} legacyBehavior>
  //               <img src={'/images/instagram.png'} className={styles.icons} />
  //             </Link>
  //             <Link href={`/${pages.trips}`} legacyBehavior>
  //               <img src={'/images/facebook.png'} className={styles.icons} />
  //             </Link>
  //           </div>
  //           <div>
  //             +38(0512)53-32-61 <br /> mytravel.mk.ua@gmail.com
  //           </div>
  //         </div>
  //       </Col>
  //     </Row>
  //     <hr className={styles.hr} />
  //     <Row>
  //       <Col></Col>
  //       <Col md={6} className={styles.acknowledgementText}>
  //         Проєкт Туристичний портал &quot;Mykolaivtravel.ua&quot; реалізується
  //         ГО &quot;Центр креативного підприємництва&quot; (Дія.Бізнес |
  //         Миколаїв) і управлінням з питань туризму та курортів Миколаївської ОВА
  //         у межах проєкту &quot;3D Project: Розвиток попри перешкоди. Стійке
  //         громадянське суспільство в часи пандемії та в майбутньому&quot;, що
  //         виконується Фондом Східна Європа за фінансової підтримки Європейського
  //         Союзу.
  //       </Col>
  //       <Col></Col>
  //     </Row>
  //     <hr className={styles.hr} />
  //     <div className={styles.lastText}>
  //       ©2021-{new Date().getFullYear()}{' '}
  //       <span className={styles.color}>Mytravel.mk.ua.</span> Усі права
  //       захищені.
  //     </div>
  //   </Container>
  // );
};

export default Footer;
