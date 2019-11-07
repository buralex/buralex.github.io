import React from 'react';
import Slider from 'react-slick';
import Dashboard from 'src/images/dashboard.png';
import './styles.scss';

const Slide = ({title, imgSrc, altText}) => (
    <div>
        <h3>{title}</h3>
        <img className="mb-5" width={700} height="auto" src={imgSrc} alt={altText} />
    </div>
);

const slides = [
    {title: 'Real-time dashboards', imgSrc: Dashboard, altText: 'dashboard'},
    {title: 'E-commerce', imgSrc: Dashboard, altText: 'dashboard'},
    {title: 'Social Media Platforms', imgSrc: Dashboard, altText: 'dashboard'},
];

const HeaderSlider = props => {
    const settings = {
        dots: true,
        // adaptiveHeight: true
    };
    return (
        <div className="slider-component text-center" style={{zIndex: 100}}>
            <Slider {...settings}>
                {slides.map(slide => (
                    <Slide title={slide.title} imgSrc={slide.imgSrc} altText={slide.altText} />
                ))}
            </Slider>
        </div>
    );
};

export default HeaderSlider;
