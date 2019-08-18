import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
import Logo from 'src/images/logo.svg';
import {isClient, getScrollPosition} from 'src/utils';
import {pageBlocks} from 'src/constants';
import useWindowScroll from 'src/hooks/useWindowScroll';
import {
    Link as ScrollLink,
    DirectLink,
    Element as ScrollToElement,
    Events,
    animateScroll,
    scrollSpy,
    scroller,
} from 'react-scroll';
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';

import './styles.scss';
import throttle from 'lodash/throttle';

const SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG = 10;
const SCROLL_OFFSET_TO_HIDE_NAV = 100;
const NAV_BG_CLASS = 'bg-secondary';
const NAV_TRANSPARENT_CLASS = 'bg-transparent';
const NAV_HIDDEN_CLASS = 'hidden';
const SHOW_COLLAPSED_NAV_CLASS = 'show';

const getNavBgClass = ({currentScrollY}) => {
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

const LinkWithScroll = ({content, onClick, scrollTo}) => {
    return (
        <ScrollLink
            activeClass="active"
            className="nav-link py-3 px-0 px-lg-3 rounded"
            to={scrollTo}
            spy={true}
            hashSpy={true}
            smooth="easeInOutQuart"
            duration={1000}
            onClick={onClick}
        >
            {content}
        </ScrollLink>
    );
};

const Header = ({siteTitle}) => {
    const prevNavBgClassRef = useRef(NAV_TRANSPARENT_CLASS);
    const prevHiddenClassRef = useRef('');
    const isScrollingByNavClickRef = useRef(false);
    const isScrollingByClickFinishedRef = useRef(false);

    const [navBgClass, setNavBgClass] = useState(NAV_TRANSPARENT_CLASS);
    const [navHiddenClass, setNavHiddenClass] = useState('');
    // todo remove next
    const [showCollapsedNavClass, setShowCollapsedNavClass] = useState('');
    // const [heightCollapsibleNav, setHeightCollapsibleNav] = useState(0);
    const [heightCollapsibleNav, setHeightCollapsibleNav] = useState(0);

    useEffect(() => {
        console.log('______use_after_nav_clicked', isScrollingByNavClickRef.current);
        if (isScrollingByNavClickRef.current) {
            // setNavHiddenClass(NAV_HIDDEN_CLASS);
            // prevHiddenClassRef.current = NAV_HIDDEN_CLASS;
            // setShowCollapsedNavClass('');
            // // isScrollingByNavClickRef.current = false;
        }

        Events.scrollEvent.register('end', function(to, element) {
            console.log('end', arguments);
            // isScrollingByNavClickRef.current = false;
            isScrollingByClickFinishedRef.current = true;

            // setNavHiddenClass(NAV_HIDDEN_CLASS);
            // prevHiddenClassRef.current = NAV_HIDDEN_CLASS;
            // setShowCollapsedNavClass('');
        });
    }, []);

    // useEffect(() => {
    //     console.log('________________useEffect_after_nav_clicked', isScrollingByNavClickRef.current);
    //     if (isScrollingByNavClickRef.current) {
    //         // setNavHiddenClass(NAV_HIDDEN_CLASS);
    //         // prevHiddenClassRef.current = NAV_HIDDEN_CLASS;
    //         // setShowCollapsedNavClass('');
    //         // isScrollingByNavClickRef.current = false;
    //     }
    //
    // });

    useWindowScroll(({currentScrollY, scrollingUp}) => {
        console.log('__usewindow_is_clicked', isScrollingByNavClickRef.current);

        if (isScrollingByClickFinishedRef.current) {
            isScrollingByClickFinishedRef.current = false;
            isScrollingByNavClickRef.current = false;
            return;
        }
        if (isScrollingByNavClickRef.current) {
            console.log('__i_');
            // clearPrevScrollY();
            // isScrollingByClickFinishedRef.current = false;

            return;
        }

        const nextNavBgClass = getNavBgClass({currentScrollY});
        const nextHideNavClass = getHiddenNavClass({scrollingUp, currentScrollY});

        const setNavbarClass = () => {};

        if (prevNavBgClassRef.current !== nextNavBgClass) {
            setNavBgClass(nextNavBgClass);
            console.log('AAAAA________EEEEEEEE', prevNavBgClassRef.current === NAV_BG_CLASS);
            if (prevNavBgClassRef.current === NAV_BG_CLASS) {
                // todo refactor next - change classname to boolean
                setShowCollapsedNavClass('');
            }
            prevNavBgClassRef.current = nextNavBgClass;
        }
        if (prevHiddenClassRef.current !== nextHideNavClass) {
            setNavHiddenClass(nextHideNavClass);
            prevHiddenClassRef.current = nextHideNavClass;
        }
    });

    const toggleCollapsedNav = () => {
        console.log('TTTTTTOOOGGGGGLE');

        // todo refactor
        const positionClass = showCollapsedNavClass === SHOW_COLLAPSED_NAV_CLASS ? '' : SHOW_COLLAPSED_NAV_CLASS;
        setShowCollapsedNavClass(positionClass);

        // const navHeight = heightCollapsibleNav === 0 ? 'auto' : 0;
        // // const navHeight = showCollapsedNavClass === SHOW_COLLAPSED_NAV_CLASS ? 'auto' : 0;
        // // const navHeight = 'auto' ;
        // setHeightCollapsibleNav(navHeight);

        const bgClass = navBgClass === NAV_TRANSPARENT_CLASS ? NAV_BG_CLASS : NAV_BG_CLASS;
        console.log('_______________set_bgClass', bgClass);
        console.log('_______________navBgClass', navBgClass);
        setNavBgClass(bgClass);

        // if (currentScrollY > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG) {
        //     const bgClass = navBgClass === NAV_BG_CLASS ? '' : NAV_TRANSPARENT_CLASS;
        //     setNavBgClass(bgClass);
        // }
    };

    const linkClickHandler = () => {
        isScrollingByNavClickRef.current = true;
        // isScrollingByClickFinishedRef.current = true;

        console.log('HHHHHHHHHHHH_____');
        setNavHiddenClass(NAV_HIDDEN_CLASS);
        prevHiddenClassRef.current = NAV_HIDDEN_CLASS;
        setShowCollapsedNavClass('');
    };

    // console.log('RENDER______NAV__', navBgClass);
    // console.log('RENDER______NAV__', 'currentScrollY=', currentScrollY, 'isUp = ', scrollingUp, 'navCls=', navBgClass);
    console.log('RENDER______NAV__', 'navCls=', navBgClass);
    // <nav ref={navElem} className="navbar fixed-top navbar-expand-lg bg-secondary text-uppercase" id="mainNav">

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`${navBgClass} ${navHiddenClass} text-uppercase`}
            onToggle={toggleCollapsedNav}
            // expanded={navBgClass === NAV_TRANSPARENT_CLASS ? false : undefined}
            // expanded={showCollapsedNavClass === SHOW_COLLAPSED_NAV_CLASS ? true : undefined}
            expanded={showCollapsedNavClass === SHOW_COLLAPSED_NAV_CLASS}
        >
            <Container>
                <Navbar.Brand href="#home">AB</Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                >
                    Menu
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav as="ul" className="ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <LinkWithScroll
                                content="Projects"
                                scrollTo={pageBlocks.projects}
                                onClick={linkClickHandler}
                            />
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <LinkWithScroll content="About" scrollTo={pageBlocks.about} onClick={linkClickHandler} />
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <LinkWithScroll
                                content="Contact"
                                scrollTo={pageBlocks.contact}
                                onClick={linkClickHandler}
                            />
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

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
                    onClick={toggleCollapsedNav}
                >
                    Menu
                    <i className="fas fa-bars" />
                </button>
                <div className={`collapse navbar-collapse ${showCollapsedNavClass}`}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <LinkWithScroll content="Projects" scrollTo="contactBlock" onClick={linkClickHandler} />
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <LinkWithScroll content="About" scrollTo="aboutBlock" onClick={linkClickHandler} />
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <LinkWithScroll content="Contact" scrollTo="contactBlock" onClick={linkClickHandler} />
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
