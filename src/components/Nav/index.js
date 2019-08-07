import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
import Logo from 'src/images/logo.svg';
import {isClient} from 'src/utils';
import useWindowScroll from 'src/hooks/useWindowScroll';
import throttle from 'lodash/throttle';
import raf from 'raf';

import './styles.scss';

const SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG = 200;
const SCROLL_TOP_LIMIT_TO_REVERT_TRANSPARENT_NAV_BG = 20;
const SCROLL_OFFSET_TO_HIDE_NAV = 100;
const THROTTLE_MS = 100;
const navBackGroundClass = 'bg-secondary';
const navTransparentClass = 'bg-transparent';
const navHiddenClassName = 'hidden';

const getIsNavHidden = navElem => {
    return navElem.classList.contains(navHiddenClassName);
};

const changeNavBackGround = ({currentScrollY, navElem, setNavBgClass}) => {
    if (currentScrollY > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG && !navElem.classList.contains(navBackGroundClass)) {
        setNavBgClass(navBackGroundClass);
    } else if (
        !navElem.classList.contains(navTransparentClass) &&
        (currentScrollY <= SCROLL_TOP_LIMIT_TO_REVERT_TRANSPARENT_NAV_BG || currentScrollY === 0)
    ) {
        setNavBgClass(navTransparentClass);
    }
};

const showOrHideNav = ({scrollingUp, isNavHidden, currentScrollY, setNavHiddenClass}) => {
    if (scrollingUp) {
        if (isNavHidden) {
            setNavHiddenClass('');
        }
    } else if (!isNavHidden && currentScrollY > SCROLL_OFFSET_TO_HIDE_NAV) {
        setNavHiddenClass(navHiddenClassName);
    }
};

const Header = ({siteTitle}) => {
    const navElemRef = useRef(null);
    const isNavClicked = useRef(false);
    console.log('___NNN', navElemRef);
    const [navBgClass, setNavBgClass] = useState(navTransparentClass);
    const [navHiddenClass, setNavHiddenClass] = useState('');

    useWindowScroll(({currentScrollY, scrollingUp}) => {
        const navElem = navElemRef.current;
        const isNavHidden = getIsNavHidden(navElem);
        changeNavBackGround({currentScrollY, navElem, setNavBgClass});
        showOrHideNav({scrollingUp, isNavHidden, currentScrollY, setNavHiddenClass});
    })

    const linkClickHandler = () => {
        isNavClicked.current = true;
    };

    // console.log('RENDER______NAV__', navBgClass);
    // console.log('RENDER______NAV__', 'currentScrollY=', currentScrollY, 'isUp = ', scrollingUp, 'navCls=', navBgClass);
    console.log('RENDER______NAV__', 'navCls=', navBgClass);
    // <nav ref={navElem} className="navbar fixed-top navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
    return (
        <nav
            ref={navElemRef}
            className={`${navBgClass} ${navHiddenClass} navbar fixed-top navbar-expand-lg text-uppercase`}
            // className={`${navBgClass} ${''} navbar fixed-top navbar-expand-lg text-uppercase`}
            id="mainNav"
        >
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
                            <a
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                href="#portfolio"
                                onClick={linkClickHandler}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                href="#about"
                                onClick={linkClickHandler}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                href="#contact"
                                onClick={linkClickHandler}
                            >
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
