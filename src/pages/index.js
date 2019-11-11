import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';

import Layout from 'src/components/layout';

import Nav from 'src/components/TopNav';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CV_PDF from 'src/documents/burlachenko_cv_2019.pdf';

// todo maybe remove
import ScrollAnimation from 'react-animate-on-scroll';
import {
    Link as ScrollLink,
    DirectLink,
    Element as ScrollToElement,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from 'react-scroll';
import {pageBlocks} from 'src/constants';
import Slider from 'react-slick';
// import Image from '../components/image';
import Divider from 'src/components/Divider';
import Portfolio from '../components/Portfolio';
import SEO from '../components/seo';
import Drawing from '../images/drawing111.svg';
// const Header = () => (
//     <header className="masthead bg-primary text-white text-center">
//         <div className="container d-flex align-items-center flex-column">
//             <img className="masthead-avatar mb-5" src="img/avataaars.svg" alt="" />
//
//             <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
//
//             <div className="divider-custom divider-light">
//                 <div className="divider-custom-line" />
//                 <div className="divider-custom-icon">
//                     <i className="fas fa-star" />
//                 </div>
//                 <div className="divider-custom-line" />
//             </div>
//
//             <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
//         </div>
//     </header>
// );

const IndexPage = props => {
    // console.log('index_props', props);
    const {location} = props;

    const contactListItemClass = 'col-xs-12 col-sm-6 col-lg-3 text-center mt-5';

    return (
        <Layout location={location}>
            <SEO title="★" />

            <section className="page-section portfolio">
                <ScrollToElement name={pageBlocks.projects}>
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                            projects
                        </h2>

                        <Divider />

                        <Portfolio />
                    </div>
                </ScrollToElement>
            </section>

            <section className="page-section bg-main text-white mb-0">
                <ScrollToElement name={pageBlocks.about}>
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

                        <Divider light />

                        <div className="row">
                            <p className="lead text-center">
                                Full Stack Developer who is able to build web applications from scratch - information
                                gathering, planning, development, testing, delivery and maintenance.
                            </p>
                        </div>

                        <div className="text-center mt-4">
                            <a
                                className="btn btn-xl btn-outline-light"
                                href={CV_PDF}
                                download="burlachenko_cv_2019.pdf"
                            >
                                &nbsp;download a CV
                            </a>
                        </div>
                    </div>
                </ScrollToElement>
            </section>

            <section className="page-section">
                <ScrollToElement name={pageBlocks.contact}>
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact</h2>

                        <Divider />

                        <div className="row contact-list">
                            <div className={contactListItemClass}>
                                <a className="phone" href="tel:0669220905">
                                    <FontAwesomeIcon size="2x" icon="mobile" />
                                    <br /> +38 (066) 922-09-05{' '}
                                </a>
                            </div>
                            <div className={contactListItemClass}>
                                <a className="email" href="mailto:buralex89@gmail.com">
                                    <FontAwesomeIcon size="2x" icon="envelope" />
                                    <br />
                                    buralex89@gmail.com
                                </a>
                            </div>
                            <div className={contactListItemClass}>
                                <a className="skype" href="skype:alexandr_bur?chat">
                                    <FontAwesomeIcon size="2x" icon={['fab', 'skype']} />
                                    <br />
                                    alexandr_bur
                                </a>
                            </div>
                            <div className={contactListItemClass}>
                                <a
                                    href="https://github.com/buralex"
                                    className=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon size="2x" icon={['fab', 'github']} />
                                    <br />
                                    buralex
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollToElement>
            </section>

        </Layout>
    );
};

export default IndexPage;
