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
const hideOrShowNav = ({currentScrollPos, prevScrollpos, navElement}) => {
    if (prevScrollpos > currentScrollPos) {
        // document.getElementById('navbar').style.top = '0';
        console.log('navElement UUUUUUUUUU', navElement);
        navElement.style.top = '0';
        // navElement.classList.add('fixed-header');
    } else if (currentScrollPos > 210) {
        console.log('__DDDDDDDDDDDD', navElement);
        // document.getElementById('navbar').style.top = '-50px';
        navElement.style.top = '-70px';
        // navElement.classList.remove('fixed-header');
    }
}
let prevScrollpos = window.pageYOffset;
const makeScrollHandler = navElement => () => {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const SCROLL_TOP_LIMIT = 200;
    console.log(currentScrollPos);
    console.log('prev', prevScrollpos);

    if (currentScrollPos > SCROLL_TOP_LIMIT) {
        navElement.classList.add('fixed-header');
        hideOrShowNav({currentScrollPos, prevScrollpos, navElement})
    } else {
        navElement.classList.remove('fixed-header');
    }


    prevScrollpos = currentScrollPos;
};

const Header = ({siteTitle}) => {
    // document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    // var st = Math.max(document.body.scrollTop , window.pageYOffset,  document.documentElement.scrollTop);
    const navElem = useRef(null);

    useEffect(() => {
        console.log('______OnCE');
        const nav = navElem.current;
        const scrollHandler = makeScrollHandler(nav);
        const THROTTLE_MS = 50;
        window.addEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
        return () => {
            window.removeEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
        };
    }, []);

    const onButtonClick = () => {
        // `current` points to the mounted text input element
        // navElem.current.focus();
    };

    return (
        <header>
            <nav ref={navElem} className="navbar header-nav header-nav fixed-top navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Ryan <span className="theme-bg" />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarRyan"
                        aria-controls="navbarRyan"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarRyan">
                        <ul className="navbar-nav">
                            <li>
                                <a className="nav-link active" href="#home-box">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#aboutus">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#services">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#blog">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
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
