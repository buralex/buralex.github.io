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
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from 'react-scroll';
import {Navbar, Nav, Container} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = props => {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#">
                            <i className="fab fa-fw fa-facebook-f" />
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#">
                            <i className="fab fa-fw fa-twitter" />
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#">
                            <i className="fab fa-fw fa-linkedin-in" />
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#">
                            <i className="fab fa-fw fa-dribbble" />
                        </a>
                    </div>

                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
