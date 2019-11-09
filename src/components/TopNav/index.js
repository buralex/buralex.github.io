import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
// import { Location } from '@reach/router';

import {isClient, getScrollPosition} from 'src/utils';
import {pageBlocks} from 'src/constants';
import useWindowScroll from 'src/hooks/useWindowScroll';
import Logo from 'src/images/logo_new_light_min.svg';
import {
    Link as ScrollLink,
    DirectLink,
    Element as ScrollToElement,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from 'react-scroll';
import {Navbar, Nav, Container} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG = 10;
const SCROLL_OFFSET_TO_HIDE_NAV = 100;
const NAV_BG_CLASS = 'navbar-shrink';
const NAV_TRANSPARENT_CLASS = 'bg-transparent';

const getNavBgClass = ({currentScrollY}) => {
    if (currentScrollY > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG) {
        return NAV_BG_CLASS;
    }
    return NAV_TRANSPARENT_CLASS;
};

const LinkWithScroll = ({content, onClick, scrollTo}) => {
    return (
        <ScrollLink
            className="nav-link py-2 px-0 px-lg-3 rounded"
            to={scrollTo}
            spy={true}
            smooth="easeInOutQuart"
            duration={1000}
            onClick={onClick}
            offset={-80}
        >
            {content}
        </ScrollLink>
    );
};

const TopNav = ({siteTitle}) => {
    const isAutoScrolling = useRef(false);
    const isAutoScrollingFinished = useRef(false);

    const [navBgClass, setNavBgClass] = useState(NAV_TRANSPARENT_CLASS);
    const [showToTopBtn, setShowToTopBtn] = useState(false);
    // const [navHiddenClass, setNavHiddenClass] = useState('');
    const [showNavBarMenu, setShowNavBarMenu] = useState(false);

    // const hideTopNav = () => {
    //     setNavHiddenClass(NAV_HIDDEN_CLASS);
    // };
    // const showTopNav = () => {
    //     setNavHiddenClass('');
    // };

    // useEffect(() => {
    //     Events.scrollEvent.register('begin', function() {
    //         isAutoScrolling.current = true;
    //         isAutoScrollingFinished.current = false;
    //     });
    //
    //     Events.scrollEvent.register('end', function() {
    //         isAutoScrolling.current = false;
    //         isAutoScrollingFinished.current = true;
    //     });
    //
    //     if (isHashInUrl) {
    //         hideTopNav();
    //         setNavBgClass(NAV_BG_CLASS);
    //         // to NOT invoke computing className depending on scroll (when load page with hash in url)
    //         isAutoScrollingFinished.current = true;
    //     }
    //
    //     return () => {
    //         Events.scrollEvent.remove('begin');
    //         Events.scrollEvent.remove('end');
    //     };
    // }, []);

    // useEffect(()=>{
    //     console.log('PPPPPPPPPPPPPPPPP');
    // })

    useWindowScroll(({currentScrollY}) => {
        if (currentScrollY > SCROLL_OFFSET_TO_HIDE_NAV) {
            setShowToTopBtn(true);
        } else {
            setShowToTopBtn(false);
        }

        if (isAutoScrolling.current) {
            return;
        }

        const nextNavBgClass = getNavBgClass({currentScrollY});
        setNavBgClass(nextNavBgClass);
    });

    const toggleCollapsedNav = () => {
        setShowNavBarMenu(prevShowNavBar => !prevShowNavBar);
        setNavBgClass(prevNavBgClass => (prevNavBgClass === NAV_TRANSPARENT_CLASS ? NAV_BG_CLASS : NAV_BG_CLASS));
    };

    const linkClickHandler = () => {
        setShowNavBarMenu(false);
    };

    const scrollToTopHandler = () => {
        setShowNavBarMenu(false);
        scroll.scrollToTop();
    };

    console.log('RENDER______NAV__', 'navCls=', navBgClass, 'hidden_class');

    return (
        <div>
            <Navbar
                expand="lg"
                fixed="top"
                className={`${navBgClass} text-uppercase`}
                onToggle={toggleCollapsedNav}
                expanded={showNavBarMenu}
            >
                <Container>
                    <Navbar.Brand onClick={scrollToTopHandler}>
                        <img className="img-fluid" src={Logo} alt="alex logo" width="35" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <div className="icon-bar" />
                        <div className="icon-bar" />
                        <div className="icon-bar" />
                    </Navbar.Toggle>

                    {showToTopBtn && (
                        <div className="scroll-to-top position-fixed ">
                            <a
                                className="js-scroll-trigger d-block text-center text-white rounded"
                                onClick={scrollToTopHandler}
                            >
                                <i className="fa fa-chevron-up" />
                                <FontAwesomeIcon size="2x" icon="angle-up" />
                            </a>
                        </div>
                    )}

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

TopNav.propTypes = {
    siteTitle: PropTypes.string,
};

TopNav.defaultProps = {
    siteTitle: ``,
};

export default TopNav;
