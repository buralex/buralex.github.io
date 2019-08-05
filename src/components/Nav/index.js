import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
import Logo from 'src/images/logo.svg';
import throttle from 'lodash/throttle';
// import debounce from 'lodash/debounce';

import './styles.scss';

const prevScrollpos = 0;
const SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG = 200;
const SCROLL_TOP_LIMIT_TO_REVERT_NAV_BG = 20;
const SCROLL_OFFSET_TO_HIDE_NAV = 100;
const navBackGroundClass = 'bg-secondary';
const navTransparentClass = 'bg-transparent';
const navHiddenClassName = 'hidden';

const getScrollingPosition = () => {
    if (typeof window === 'undefined') {
        return {};
    }
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const scrollingUp = prevScrollpos > currentScrollPos;
    return {currentScrollPos, scrollingUp};
};

const getIsNavHidden = navElem => {
    return navElem.classList.contains(navHiddenClassName);
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
    if (scrollingUp) {
        if (isNavHidden) {
            setNavHiddenClass('');
        }
    } else if (!isNavHidden && currentScrollPos > SCROLL_OFFSET_TO_HIDE_NAV) {
        setNavHiddenClass(navHiddenClassName);
    }
};

const getProperNavBackground = () => {
    if (typeof window === 'undefined') {
        return {};
    }
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    return currentScrollPos > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG ? navBackGroundClass : navTransparentClass
}

const Header = ({siteTitle}) => {
    // const navElemRef = useRef(null);
    // const isNavClicked = useRef(false);
    let currentScrollPos = 0;
    if (typeof window !== 'undefined') {
        currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    }
    console.log('cuscr', currentScrollPos);

    const [navBgClass, setNavBgClass] = useState(
        currentScrollPos > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG ? navBackGroundClass : navTransparentClass,
    );
    // const [navBgClass, setNavBgClass] = useState(() => {
    //     const {currentScrollPos} = getScrollingPosition();
    //     console.log('__CALCULATE____BG_CLASS', currentScrollPos, navBackGroundClass);
    //     if (currentScrollPos > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG) {
    //         console.log('__BG_CLASS_SECOND', currentScrollPos, navBackGroundClass);
    //         return navBackGroundClass;
    //     }
    //     return navTransparentClass;
    // });
    // const [navHiddenClass, setNavHiddenClass] = useState(() => {
    //     const {currentScrollPos} = getScrollingPosition();
    //     console.log('__calc_hidden', currentScrollPos);
    //     if (currentScrollPos > SCROLL_OFFSET_TO_HIDE_NAV) {
    //         return navHiddenClassName;
    //     }
    //     return '';
    // });

    // const scrollHandler = () => {
    //     if (isNavClicked.current) {
    //         isNavClicked.current = false;
    //         return;
    //     }
    //
    //     const navElem = navElemRef.current;
    //     const {currentScrollPos, scrollingUp} = getScrollingPosition();
    //     const isNavHidden = getIsNavHidden(navElem);
    //
    //     changeNavBackGround({currentScrollPos, navElem, setNavBgClass});
    //     showOrHideNav({scrollingUp, isNavHidden, currentScrollPos, setNavHiddenClass});
    //
    //     prevScrollpos = currentScrollPos;
    // };
    //
    // useEffect(() => {
    //     const THROTTLE_MS = 100;
    //     window.addEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
    //     return () => {
    //         window.removeEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
    //     };
    // }, []);
    //
    // const linkClickHandler = () => {
    //     isNavClicked.current = true;
    // };
    useEffect(() => {
        const bg = getProperNavBackground();
        console.log('use effect bg', bg);
        setNavBgClass(bg)
    }, []);
    const linkClickHandler = () => {
        console.log('click');
    };

    console.log('RENDER______NAV__', navBgClass, currentScrollPos);
    // <nav ref={navElem} className="navbar fixed-top navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
    return (
        <nav
            // ref={navElemRef}
            // className={`${navBgClass} ${navHiddenClass} navbar fixed-top navbar-expand-lg text-uppercase`}
            className={`${navBgClass} navbar fixed-top navbar-expand-lg text-uppercase`}
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
