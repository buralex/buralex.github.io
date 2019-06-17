/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Header from "../components/Header"

const Frame = () => (
    <div className="frame">
        <div className="frame--top" />
        <div className="frame--right" />
        <div className="frame--bottom" />
        <div className="frame--left" />
    </div>
)

const Layout = ({children}) => (
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
                <Header siteTitle={data.site.siteMetadata.title}/>

                <Frame />

                <div className="content">
                    <main className="content">{children}</main>
                </div>

                <footer className="footer">
                    {new Date().getFullYear()}, Built by Alexandr
                </footer>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
