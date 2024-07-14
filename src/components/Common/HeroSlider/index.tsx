import React, { useState } from 'react';
import Slider from 'react-slick';

const Slide = ({ imgSrc, altText, title }) => (
  <div>
    <img
      className="mb-1 img-fluid"
      width={700}
      height="auto"
      src={imgSrc}
      alt={altText}
      title={title}
    />
  </div>
);

const slides = [
  {
    title: 'Real-time dashboards',
    imgSrc: 'images/dashboard.png',
    altText: 'dashboards',
  },
  {
    title: 'E-commerce',
    imgSrc: 'images/e-commerce.png',
    altText: 'e-commerce',
  },
  {
    title: 'Social Media Platforms',
    imgSrc: 'images/social.png',
    altText: 'social media',
  },
];

export const HeroSlider = (props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const settings = {
    dots: true,
    beforeChange: (current, next) => setCurrentSlideIndex(next),
  };
  const currentSlideTitle = slides[currentSlideIndex].title;

  return (
    <>
      <h3 className="mb-0">{currentSlideTitle}</h3>
      <div className="slider-component text-center" style={{ zIndex: 100 }}>
        <Slider {...settings}>
          {slides.map((slide) => (
            <Slide
              key={slide.title}
              title={slide.title}
              imgSrc={slide.imgSrc}
              altText={slide.altText}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};
