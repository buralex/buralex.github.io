/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';

import Header from 'src/components/Header';
import TopNav from 'src/components/TopNav';
// import './layout.css';

const Layout = props => {
    const {children} = props;
    console.log('props__', props);
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <TopNav isHashInUrl={location.hash} />
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <div>
                        <main>{children}</main>
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
                        <section className="copyright py-4 text-center text-white">
                            <div className="container">
                                <small>Copyright &copy; Your Website 2019</small>
                            </div>
                        </section>
                    </div>
                </>
            )}
        />
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
