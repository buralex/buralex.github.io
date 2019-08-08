import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
import Logo from 'src/images/logo.svg';
import {isClient} from 'src/utils';
import useWindowScroll from 'src/hooks/useWindowScroll';
import throttle from 'lodash/throttle';
import raf from 'raf';

import './styles.scss';

const SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG = 10;
const SCROLL_OFFSET_TO_HIDE_NAV = 100;
const NAV_BG_CLASS = 'bg-secondary';
const NAV_TRANSPARENT_CLASS = 'bg-transparent';
const NAV_HIDDEN_CLASS = 'hidden';

const getNextNavBgClass = ({currentScrollY}) => {
    if (currentScrollY > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG) {
        return NAV_BG_CLASS;
    }
    return NAV_TRANSPARENT_CLASS;
};

const getHiddenNavClass = ({scrollingUp, isNavHidden, currentScrollY}) => {
    if (scrollingUp) {
        if (isNavHidden) {
            return '';
        }
    } else if (currentScrollY > SCROLL_OFFSET_TO_HIDE_NAV) {
        return NAV_HIDDEN_CLASS;
    }
    return '';
};

const Header = ({siteTitle}) => {
    const prevNavBgClassRef = useRef(NAV_TRANSPARENT_CLASS);
    const prevHiddenClassRef = useRef('');
    const isNavClicked = useRef(false);

    const [navBgClass, setNavBgClass] = useState(NAV_TRANSPARENT_CLASS);
    const [navHiddenClass, setNavHiddenClass] = useState('');

    useWindowScroll(({currentScrollY, scrollingUp}) => {
        const nextNavBgClass = getNextNavBgClass({currentScrollY});
        const nextHideNavClass = getHiddenNavClass({scrollingUp, currentScrollY});

        if (prevNavBgClassRef.current !== nextNavBgClass) {
            setNavBgClass(nextNavBgClass);
            prevNavBgClassRef.current = nextNavBgClass;
        }
        if (prevHiddenClassRef.current !== nextHideNavClass) {
            setNavHiddenClass(nextHideNavClass);
            prevHiddenClassRef.current = nextHideNavClass;
        }
    });

    const linkClickHandler = () => {
        isNavClicked.current = true;
    };

    // console.log('RENDER______NAV__', navBgClass);
    // console.log('RENDER______NAV__', 'currentScrollY=', currentScrollY, 'isUp = ', scrollingUp, 'navCls=', navBgClass);
    console.log('RENDER______NAV__', 'navCls=', navBgClass);
    // <nav ref={navElem} className="navbar fixed-top navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
    return (
        <nav
            className={`${navBgClass} ${navHiddenClass} navbar fixed-top navbar-expand-lg text-uppercase`}
            id="mainNav"
        >
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    test page!
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
