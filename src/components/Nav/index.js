import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
import Logo from 'src/images/logo.svg';
import throttle from 'lodash/throttle';
// import debounce from 'lodash/debounce';

import './styles.scss';

let prevScrollpos = 0;
const SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG = 200;
const SCROLL_TOP_LIMIT_TO_REVERT_NAV_BG = 20;
const navBackGroundClass = 'bg-secondary';
const navTransparentClass = 'bg-transparent';
const navHiddenClass = 'hidden';

const getScrollingPosition = () => {
    if (typeof window !== 'undefined') {
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        const scrollingUp = prevScrollpos > currentScrollPos;
        return {currentScrollPos, scrollingUp};
    }
    return {};
};

const getIsNavHidden = navElem => {
    return navElem.classList.contains(navHiddenClass);
};

const changeNavBackGround = ({currentScrollPos, navElem, setNavBgClass}) => {
    if (currentScrollPos > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG && !navElem.classList.contains(navBackGroundClass)) {
        setNavBgClass(navBackGroundClass);
    } else if (
        !navElem.classList.contains(navTransparentClass) &&
        (currentScrollPos <= SCROLL_TOP_LIMIT_TO_REVERT_NAV_BG || currentScrollPos === 0)
    ) {
        setNavBgClass(navTransparentClass);
    }
};

const showOrHideNav = ({scrollingUp, isNavHidden, currentScrollPos, setNavHiddenClass}) => {
    const SCROLL_OFFSET = 100;

    if (scrollingUp) {
        if (isNavHidden) {
            setNavHiddenClass('');
        }
    } else if (!isNavHidden && currentScrollPos > SCROLL_OFFSET) {
        setNavHiddenClass(navHiddenClass);
    }
};

const Header = ({siteTitle}) => {
    const navElemRef = useRef(null);
    const isNavClicked = useRef(false);

    const [navBgClass, setNavBgClass] = useState(() => {
        const {currentScrollPos} = getScrollingPosition();
        if (currentScrollPos > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG) {
            return navBackGroundClass;
        }
        return navTransparentClass;
    });
    const [navHiddenClass, setNavHiddenClass] = useState('');

    const scrollHandler = () => {
        if (isNavClicked.current) {
            isNavClicked.current = false;
            return;
        }

        const navElem = navElemRef.current;
        const {currentScrollPos, scrollingUp} = getScrollingPosition();
        const isNavHidden = getIsNavHidden(navElem);

        changeNavBackGround({currentScrollPos, navElem, setNavBgClass});
        showOrHideNav({scrollingUp, isNavHidden, currentScrollPos, setNavHiddenClass});

        prevScrollpos = currentScrollPos;
    };

    useEffect(() => {
        const THROTTLE_MS = 100;
        window.addEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
        return () => {
            window.removeEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
        };
    }, []);

    const linkClickHandler = () => {
        isNavClicked.current = true;
    };

    console.log('RENDER______NAV');
    // <nav ref={navElem} className="navbar fixed-top navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
    return (
        <nav
            ref={navElemRef}
            className={`${navBgClass} ${navHiddenClass} navbar fixed-top navbar-expand-lg text-uppercase`}
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