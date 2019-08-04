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

const changeNavTransparency = ({currentScrollPos, navElemClass}) => {
    const SCROLL_TOP_LIMIT_TO_HIDE_NAV = 105;
    const SCROLL_TOP_LIMIT_TO_SHOW_NAV = 20;
    if (currentScrollPos > SCROLL_TOP_LIMIT_TO_HIDE_NAV) {
        navElemClass.remove('bg-transparent');
        navElemClass.add('bg-secondary');
    } else if (currentScrollPos <= SCROLL_TOP_LIMIT_TO_SHOW_NAV || currentScrollPos === 0) {
        navElemClass.remove('bg-secondary');
        navElemClass.add('bg-transparent');
    }
};

const makeScrollHandler = navElement => {
    let prevScrollpos = window.pageYOffset;

    return () => {
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        const navElemClass = navElement.classList;
        const scrollingUp = prevScrollpos > currentScrollPos;

        changeNavTransparency({currentScrollPos, navElemClass});

        if (scrollingUp) {
            console.log('navElement __UP', currentScrollPos);
            navElement.style.top = '0';
        } else {
            console.log('__DOWN', currentScrollPos);
            navElement.style.top = '-110px';
        }
        prevScrollpos = currentScrollPos;
    };
};

const Header = ({siteTitle}) => {
    // document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    // var st = Math.max(document.body.scrollTop , window.pageYOffset,  document.documentElement.scrollTop);
    const navElem = useRef(null);

    useEffect(() => {
        console.log('______OnCE111');
        const nav = navElem.current;
        const scrollHandler = makeScrollHandler(nav);
        const THROTTLE_MS = 100;
        window.addEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
        // window.addEventListener('scroll', scrollHandler);
        return () => {
            // window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
        };
    }, []);

    const onButtonClick = () => {
        // `current` points to the mounted text input element
        // navElem.current.focus();
    };

    console.log('RENDER______NAV');
    // <nav ref={navElem} className="navbar fixed-top navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
    return (
        <nav ref={navElem} className="navbar bg-transparent fixed-top navbar-expand-lg text-uppercase" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    Start Bootstrap!
                </a>
                <button
                    className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    Menu
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
