import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
import Logo from 'src/images/logo.svg';
import throttle from 'lodash/throttle';

import './styles.scss';

// const Header = ({siteTitle}) => (
//     <header className="header py-2 px-5">
//         <div className="container-fluid">
//             <div className="logo">
//                 <img
//                     src={Logo}
//                     width="35"
//                     height="35"
//                     alt="logo"
//                 />
//             </div>
//             <div className="d-flex justify-content-between">
//                 <h4 className="mb-0">Alexandr Burlachenko</h4>
//                 <ul className="navbar">
//                     <li><Link to="/" activeClassName="active">About</Link></li>
//                     <li><Link to="/projects" activeClassName="active">Projects</Link></li>
//                     <li><Link to="/contact" activeClassName="active">Contact</Link></li>
//                 </ul>
//             </div>
//         </div>
//     </header>
// )
// const hideOrShowNav = ({currentScrollPos, prevScrollpos, navElement}) => {
//     if (prevScrollpos > currentScrollPos) {
//         // document.getElementById('navbar').style.top = '0';
//         console.log('navElement UUUUUUUUUU', navElement);
//         navElement.style.top = '0';
//         // navElement.classList.add('fixed-header');
//     } else if (currentScrollPos > 210) {
//         console.log('__DDDDDDDDDDDD', navElement);
//         // document.getElementById('navbar').style.top = '-50px';
//         navElement.style.top = '-70px';
//         // navElement.classList.remove('fixed-header');
//     }
// };
// let prevScrollpos = window.pageYOffset;
// const makeScrollHandler = navElement => () => {
//     const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
//     const SCROLL_TOP_LIMIT = 200;
//     console.log(currentScrollPos);
//     console.log('prev', prevScrollpos);
//
//     if (currentScrollPos > SCROLL_TOP_LIMIT) {
//         navElement.classList.add('fixed-header');
//         hideOrShowNav({currentScrollPos, prevScrollpos, navElement});
//     } else {
//         navElement.classList.remove('fixed-header');
//     }
//
//     prevScrollpos = currentScrollPos;
// };

const oldHeader = () => {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src="img/avataaars.svg" alt="" />

                <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                    </div>
                    <div className="divider-custom-line" />
                </div>

                <p className="masthead-subheading font-weight-light mb-0">
                    Graphic Artist - Web Designer - Illustrator
                </p>
            </div>
        </header>
    );
};

const Header = ({siteTitle}) => {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="header-bg" />
            <div className="header-sub-bg" />

            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src="img/avataaars.svg" alt="" />

                <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                    </div>
                    <div className="divider-custom-line" />
                </div>

                <p className="masthead-subheading font-weight-light mb-0">
                    Graphic Artist - Web Designer - Illustrator
                </p>
            </div>
            {/* <div className="header-wrap"> */}
            {/*    <div className="header-image" /> */}
            {/*    <div className="header-sub-image" /> */}
            {/*    <div className="container"> */}
            {/*        <div className="row"> */}
            {/*            <h1>Test Page</h1> */}
            {/*            <p>Resize this responsive page to see the effect!</p> */}
            {/*        </div> */}
            {/*    </div> */}
            {/* </div> */}
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
