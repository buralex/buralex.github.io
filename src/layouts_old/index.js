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

const Frame = () => (
    <div className="frame">
        <div className="frame--top" />
        <div className="frame--right" />
        <div className="frame--bottom" />
        <div className="frame--left" />
    </div>
);

const Layout = ({children}) => {
    console.log('RENDER_LAYOUT');
    // console.log('wrapPageElement', wrapPageElement);

    return (
        <>
            {/*<Header siteTitle="alexandr burlchenko" />*/}

            {/*<Frame />*/}

            <div className="container-fluid">{children}</div>

            {/*<footer className="footer">{new Date().getFullYear()}, Built by Alexandr</footer>*/}
        </>
    );

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
                    <Header siteTitle={data.site.siteMetadata.title} />

                    <Frame />

                    <div className="container-fluid">{children}</div>

                    <footer className="footer">{new Date().getFullYear()}, Built by Alexandr</footer>
                </>
            )}
        />
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default React.memo(Layout);
