import React from 'react';
import Slider from 'react-slick';
import Dashboard from 'src/images/dashboard.png';
import './styles.scss';

const Slide = () => (
    <div>
        <img className="mb-5" src={Dashboard} alt="dashboard" />
        <h3>Real-time dashboards</h3>
    </div>
);

const HeaderSlider = props => {
    const settings = {
        dots: true,
        // adaptiveHeight: true
    };
    return (
        <div className="slider-component text-center" style={{zIndex: 100}}>
            <Slider {...settings}>
                <Slide />
                <Slide />
                <Slide />
            </Slider>
        </div>
    );
};

export default HeaderSlider;