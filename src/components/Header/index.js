import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import Logo from "../logo"
import Logo from '../../images/logo.svg';

import "./styles.scss"

const Header = ({siteTitle}) => (
    <header>
        <div className="logo">
            <Logo />
        </div>
        <ul>
            <li><Link to="/" activeClassName="active">About</Link></li>
            <li><Link to="/projects" activeClassName="active">Projects</Link></li>
            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
