import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
import Logo from 'src/images/logo.svg';
import throttle from 'lodash/throttle';
// import debounce from 'lodash/debounce';

import './styles.scss';

let prevScrollpos = window.pageYOffset;

const Header = ({siteTitle}) => {
    const navElemRef = useRef(null);
    const isNavClicked = useRef(false);

    const [navBgClass, setNavBgClass] = useState('bg-transparent');
    const [navHiddenClass, setNavHiddenClass] = useState('');

    const changeNavTransparency = ({currentScrollPos, navElem}) => {
        const SCROLL_TOP_LIMIT_TO_HIDE_NAV = 200;
        const SCROLL_TOP_LIMIT_TO_SHOW_NAV = 20;
        const backGroundClass = 'bg-secondary';
        const transparentClass = 'bg-transparent';

        if (currentScrollPos > SCROLL_TOP_LIMIT_TO_HIDE_NAV && !navElem.classList.contains(backGroundClass)) {
            setNavBgClass(backGroundClass);
        } else if (
            !navElem.classList.contains(transparentClass) &&
            (currentScrollPos <= SCROLL_TOP_LIMIT_TO_SHOW_NAV || currentScrollPos === 0)
        ) {
            setNavBgClass(transparentClass);
        }
    };

    const scrollHandler = () => {
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        const scrollingUp = prevScrollpos > currentScrollPos;
        const navElem = navElemRef.current;
        const hiddenClass = 'hidden';
        if (isNavClicked.current) {
            isNavClicked.current = false;
            return;
        }

        changeNavTransparency({currentScrollPos, navElem});

        const navVisible = !navElem.classList.contains(hiddenClass);
        const navInVisible = navElem.classList.contains(hiddenClass);
        const SCROLL_OFFSET = 100;

        if (scrollingUp) {
            if (navInVisible) {
                setNavHiddenClass('');
            }
        } else if (navVisible && currentScrollPos > SCROLL_OFFSET) {
            setNavHiddenClass('hidden');
        }
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
