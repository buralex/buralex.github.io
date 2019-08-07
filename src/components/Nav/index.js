import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
import Logo from 'src/images/logo.svg';
import {isClient} from 'src/utils';
import throttle from 'lodash/throttle';
// import debounce from 'lodash/debounce';
import raf from 'raf';

import './styles.scss';

const prevScrollpos = 0;
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

const getScrollPosition = isClientSide => {
    if (!isClientSide) {
        return {x: 0, y: 0};
    }
    return {
        x: window.pageXOffset,
        y: window.pageYOffset,
    };
};

const getScrollYDirection = ({prevScrollY, currentScrollY}) => {
    const scrollingUp = prevScrollY > currentScrollY;
    return {scrollingUp};
};

let prevScrollY = 0;
const Header = ({siteTitle}) => {
    const navElemRef = useRef(null);
    const isNavClicked = useRef(false);

    const [navBgClass, setNavBgClass] = useState(navTransparentClass);
    const [navHiddenClass, setNavHiddenClass] = useState('');

    const scrollHandler = () => {
        if (isNavClicked.current) {
            isNavClicked.current = false;
            return;
        }

        const navElem = navElemRef.current;
        const {y: currentScrollY} = getScrollPosition(isClient);
        const {scrollingUp} = getScrollYDirection({prevScrollY, currentScrollY});
        const isNavHidden = getIsNavHidden(navElem);

        // changeNavBackGround({currentScrollY, navElem, setNavBgClass});
        changeNavBackGround({currentScrollY, navElem, setNavBgClass});
        showOrHideNav({scrollingUp, isNavHidden, currentScrollY, setNavHiddenClass});

        prevScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
        scrollHandler();
        return () => {
            window.removeEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
        };
    }, []);

    // const [navBgClass, setNavBgClass] = useState('');
    // if (typeof window !== 'undefined') {
    //     console.log('WWWWWWWWWWWWWw', window);
    //
    //     // const [navBgClass, setNavBgClass] = useState(initialNavBgClass);
    // }
    //
    // const [navBgClass, setNavBgClass] = useState(navTransparentClass);
    //
    // const changeNavStyles = () => {
    //     // if (isNavClicked.current) {
    //     //     isNavClicked.current = false;
    //     //     return;
    //     // }
    //
    //     // const navElem = navElemRef.current;
    //     // const {currentScrollPos, scrollingUp} = getScrollingPosition();
    //     // const isNavHidden = getIsNavHidden(navElem);
    //     //
    //     // changeNavBackGround({currentScrollPos, navElem, setNavBgClass});
    //     // showOrHideNav({scrollingUp, isNavHidden, currentScrollPos, setNavHiddenClass});
    //     //
    //     // prevScrollpos = currentScrollPos;
    //
    //     const {y: currentScrollY} = getScrollPosition({isClientSide: isClient});
    //     prevScrollY = currentScrollY;
    //     const {scrollingUp} = getScrollYDirection({prevScrollY, currentScrollY});
    //
    //     const newNavBgClass =
    //         currentScrollY > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG ? navBackGroundClass : navTransparentClass;
    //     setNavBgClass(newNavBgClass);
    //     console.log('nnn______', newNavBgClass);
    // };
    // const scrollHandler = () => {
    //     //raf.cancel(requestFrameId.current);
    //     // requestFrameId.current = requestAnimationFrame(changeNavStyles);
    //     changeNavStyles()
    // };
    //
    // const requestFrameId = useRef(0);
    // useEffect(() => {
    //
    //
    //     // window.addEventListener('scroll', throttle(scrollHandler, THROTTLE_MS), {
    //     //     capture: false,
    //     //     passive: true,
    //     // });
    //
    //     window.addEventListener('scroll', throttle(changeNavStyles, THROTTLE_MS));
    //
    //     // // for initial nav class
    //     // scrollHandler();
    //
    //     return () => {
    //         //raf.cancel(requestFrameId.current);
    //         window.removeEventListener('scroll', throttle(changeNavStyles, THROTTLE_MS));
    //     };
    // }, []);
    //
    // // useEffect(() => {
    // //     // for initial nav class
    // //     scrollHandler();
    // // }, []);

    const linkClickHandler = () => {
        // isNavClicked.current = true;
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
