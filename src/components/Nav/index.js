import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
// import { Location } from '@reach/router';
import Logo from 'src/images/logo.svg';
import {isClient, getScrollPosition} from 'src/utils';
import {pageBlocks} from 'src/constants';
import useWindowScroll from 'src/hooks/useWindowScroll';
import {
    Link as ScrollLink,
    DirectLink,
    Element as ScrollToElement,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from 'react-scroll';
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './styles.scss';
import throttle from 'lodash/throttle';
import divWithClassName from 'react-bootstrap/es/utils/divWithClassName';

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

const getHiddenNavClass = ({scrollingUp, currentScrollY, isScrollingByNavClick}) => {



    if (isScrollingByNavClick) {
        console.log('getHiddenNavClass_isScrollingByNavClick', isScrollingByNavClick);
        return NAV_HIDDEN_CLASS;
    }
    if (scrollingUp) {
        console.log('getHiddenNavClass_scrollingUp', scrollingUp);
        return '';
    }
    if (currentScrollY > SCROLL_OFFSET_TO_HIDE_NAV) {
        console.log('getHiddenNavClass_currentScrollY', currentScrollY);
        return NAV_HIDDEN_CLASS;
    }
    console.log('________getHiddenNavClass________default_return');
    return '';
};

const LinkWithScroll = ({content, onClick, scrollTo}) => {
    console.log('RENDER_LINKSCROLL');
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

const Header = ({siteTitle, isHashInUrl}) => {
    let {current: prevNavBgClass} = useRef(NAV_TRANSPARENT_CLASS);
    let {current: isScrollingByNavClick} = useRef(false);
    let {current: isScrollingByClickFinished} = useRef(false);

    console.log('new_method_isHash_local_!!!', isHashInUrl);
    console.log('old_method', isClient && window.location.hash);

    const [navBgClass, setNavBgClass] = useState(NAV_TRANSPARENT_CLASS);

    const [navHiddenClass, setNavHiddenClass] = useState('');

    // todo refactor to boolean
    const [showCollapsedNavClass, setShowCollapsedNavClass] = useState('');

    useEffect(() => {
        Events.scrollEvent.register('begin', function(to, element) {
            isScrollingByNavClick = true;
            isScrollingByClickFinished = false;
        });

        Events.scrollEvent.register('end', function(to, element) {
            isScrollingByNavClick = false;
            isScrollingByClickFinished = true;
        });

        if (isHashInUrl) {
            setNavHiddenClass(NAV_HIDDEN_CLASS);
            setNavBgClass(NAV_BG_CLASS);
            prevNavBgClass = NAV_BG_CLASS;
        }
    }, []);

    useWindowScroll(({currentScrollY, scrollingUp}) => {

        // to hide menu during auto scrolling after link click
        if (isScrollingByClickFinished) {
            isScrollingByClickFinished = false;

            setShowCollapsedNavClass('');
            setNavHiddenClass(NAV_HIDDEN_CLASS);
            return;
        }
        if (isScrollingByNavClick) {
            return;
        }

        const nextNavBgClass = getNavBgClass({currentScrollY});
        const nextHideNavClass = getHiddenNavClass({scrollingUp, currentScrollY, isScrollingByNavClick});

        setNavBgClass(nextNavBgClass);
        setNavHiddenClass(nextHideNavClass);
    });

    const toggleCollapsedNav = () => {

        // todo refactor
        const positionClass = showCollapsedNavClass === SHOW_COLLAPSED_NAV_CLASS ? '' : SHOW_COLLAPSED_NAV_CLASS;
        setShowCollapsedNavClass(positionClass);

        const bgClass = navBgClass === NAV_TRANSPARENT_CLASS ? NAV_BG_CLASS : NAV_BG_CLASS;
        console.log('_______________set_bgClass', bgClass);
        console.log('_______________navBgClass', navBgClass);
        setNavBgClass(bgClass);
    };

    const linkClickHandler = () => {
        setNavHiddenClass(NAV_HIDDEN_CLASS);
        setShowCollapsedNavClass('');
    };

    // console.log('RENDER______NAV__', navBgClass);
    // console.log('RENDER______NAV__', 'currentScrollY=', currentScrollY, 'isUp = ', scrollingUp, 'navCls=', navBgClass);
    console.log('RENDER______NAV__', 'navCls=', navBgClass, 'hidden_class', navHiddenClass);
    // <nav ref={navElem} className="navbar fixed-top navbar-expand-lg bg-secondary text-uppercase" id="mainNav">

    return (
        <div>
            <Navbar
                expand="lg"
                fixed="top"
                className={`${navBgClass} ${navHiddenClass} text-uppercase`}
                onToggle={toggleCollapsedNav}
                //todo refactor to boolean
                expanded={showCollapsedNavClass === SHOW_COLLAPSED_NAV_CLASS}
            >
                <Container>
                    <Navbar.Brand onClick={scroll.scrollToTop}>AB</Navbar.Brand>
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
                                <LinkWithScroll
                                    content="About"
                                    scrollTo={pageBlocks.about}
                                    onClick={linkClickHandler}
                                />
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
        </div>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
