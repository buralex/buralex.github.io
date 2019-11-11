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
import Layout from 'src/components/layout';
import Gallery from 'src/components/Gallery';

const Portfolio = props => {
    return (
        <div>
            <div className="row">
                <Gallery />
            </div>
        </div>
    );

    // todo make modals
    // eslint-disable-next-line no-unreachable
    return (
        <div className="">
            <div className="row">
                <Gallery />
            </div>

            <div
                className="portfolio-modal modal fade"
                id="portfolioModal1"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal1Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <i className="fas fa-times" />
                            </span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                            Log Cabin
                                        </h2>
                                        {/* Icon Divider */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image */}
                                        <img className="img-fluid rounded mb-5" src="img/portfolio/cabin.png" alt="" />
                                        {/* Portfolio Modal - Text */}
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                                            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
                                            quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
                                            consequuntur itaque. Nam.
                                        </p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw" />
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="portfolio-modal modal fade"
                id="portfolioModal2"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal2Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <i className="fas fa-times" />
                            </span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                            Tasty Cake
                                        </h2>
                                        {/* Icon Divider */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image */}
                                        <img className="img-fluid rounded mb-5" src="img/portfolio/cake.png" alt="" />
                                        {/* Portfolio Modal - Text */}
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                                            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
                                            quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
                                            consequuntur itaque. Nam.
                                        </p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw" />
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="portfolio-modal modal fade"
                id="portfolioModal3"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal3Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <i className="fas fa-times" />
                            </span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                            Circus Tent
                                        </h2>
                                        {/* Icon Divider */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image */}
                                        <img className="img-fluid rounded mb-5" src="img/portfolio/circus.png" alt="" />
                                        {/* Portfolio Modal - Text */}
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                                            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
                                            quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
                                            consequuntur itaque. Nam.
                                        </p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw" />
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
