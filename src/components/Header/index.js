import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from 'react';
import Logo from 'src/images/logo.svg';
import Dashboard from 'src/images/dashboard.png';
import throttle from 'lodash/throttle';
import HeaderSlider from 'src/components/HeaderSlider';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Header = ({siteTitle}) => {
    const settings = {
        dots: true,
    };
    return (
        <header className="masthead bg-main text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/*<img className="masthead-avatar mb-5" src="img/avataaars.svg" alt="" />*/}


                <h1 className="masthead-heading text-uppercase mb-0">Alex Burlachenko</h1>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon">
                        {/*<i className="fas fa-star" />*/}
                        &#9733;
                        {/*<FontAwesomeIcon icon="star" />*/}
                    </div>
                    <div className="divider-custom-line" />
                </div>

                <p className="masthead-subheading font-weight-light mb-0">
                    Web Developer
                </p>
            </div>

            <h2 className="mt-5">What I do:</h2>
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
