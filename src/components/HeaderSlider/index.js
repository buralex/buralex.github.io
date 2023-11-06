import React, {useState} from 'react';
import Slider from 'react-slick';
import Dashboard from 'src/images/slider/dashboard.png';
import Ecommerce from 'src/images/slider/e-commerce.png';
import Social from 'src/images/slider/social.png';

const Slide = ({imgSrc, altText}) => (
    <div>
        <img className="mb-1 img-fluid" width={700} height="auto" src={imgSrc} alt={altText} />
    </div>
);

const slides = [
    {title: 'Real-time dashboards', imgSrc: Dashboard, altText: 'dashboards'},
    {title: 'E-commerce', imgSrc: Ecommerce, altText: 'e-commerce'},
    {title: 'Social Media Platforms', imgSrc: Social, altText: 'social media'},
];

const HeaderSlider = props => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const settings = {
        dots: true,
        beforeChange: (current, next) => setCurrentSlideIndex(next),
    };
    const currentSlideTitle = slides[currentSlideIndex].title;

    return (
        <>
            <h3>{currentSlideTitle}</h3>
            <div className="slider-component text-center" style={{zIndex: 100}}>
                <Slider {...settings}>
                    {slides.map(slide => (
                        <Slide key={slide.title} title={slide.title} imgSrc={slide.imgSrc} altText={slide.altText} />
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default HeaderSlider;
