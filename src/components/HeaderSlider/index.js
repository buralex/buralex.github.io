import React, {useState} from 'react';
import Slider from 'react-slick';
import Dashboard from 'src/images/dashboard.png';

const Slide = ({title, imgSrc, altText}) => (
    <div>
        {/*<h3>{title}</h3>*/}
        <img className="mb-1 img-fluid" width={700} height="auto" src={imgSrc} alt={altText} />
    </div>
);

const slides = [
    {title: 'Real-time dashboards', imgSrc: Dashboard, altText: 'dashboards'},
    {title: 'E-commerce', imgSrc: Dashboard, altText: 'e-commerce'},
    {title: 'Social Media Platforms', imgSrc: Dashboard, altText: 'social media'},
];

const HeaderSlider = props => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const settings = {
        dots: true,
        beforeChange: (current, next) => setCurrentSlideIndex(next),
    };
    const currentSlideTitle = slides[currentSlideIndex].title;

    return (
        <div className="slider-component text-center" style={{zIndex: 100}}>
            <h3>{currentSlideTitle}</h3>
            <Slider {...settings}>
                {slides.map(slide => (
                    <Slide key={slide.title} title={slide.title} imgSrc={slide.imgSrc} altText={slide.altText} />
                ))}
            </Slider>
        </div>
    );
};

export default HeaderSlider;
