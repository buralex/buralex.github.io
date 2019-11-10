import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
import Logo from 'src/images/logo.svg';
import throttle from 'lodash/throttle';
import HeaderSlider from 'src/components/HeaderSlider';
import Divider from 'src/components/Divider';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Header = ({siteTitle}) => {

    return (
        <header className="masthead bg-main text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <p className="masthead-subheading font-weight-light mb-2">Alex Burlachenko</p>

                <h1 className="masthead-heading text-uppercase mb-0">Digitalize your business</h1>

                <Divider light />
            </div>

            <HeaderSlider />
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
