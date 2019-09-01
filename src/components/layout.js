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
import Footer from 'src/components/Footer';
import TopNav from 'src/components/TopNav';
// import './layout.css';

const Layout = props => {
    const {children, location} = props;
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
                    <TopNav isHashInUrl={location && location.hash} />
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <div>
                        <main>{children}</main>
                        <Footer />
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
