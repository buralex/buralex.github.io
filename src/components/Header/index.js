import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from 'src/images/logo.svg';

import "./styles.scss"

const Header = ({siteTitle}) => (
    <header className="header py-2 px-5">
        <div className="container-fluid">
            <div className="logo">
                <img
                    src={Logo}
                    width="35"
                    height="35"
                    alt="logo"
                />
            </div>
            <div className="d-flex justify-content-between">
                <h4 className="mb-0">Alexandr Burlachenko</h4>
                <ul className="navbar">
                    <li><Link to="/" activeClassName="active">About</Link></li>
                    <li><Link to="/projects" activeClassName="active">Projects</Link></li>
                    <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                </ul>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
