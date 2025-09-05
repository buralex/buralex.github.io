'use client';
import React, { useState } from 'react';

import Slider, { Settings } from 'react-slick';
import styles from './HeroSlider.module.css';

const Slide = ({
  imageName,
  altText,
  title,
  eager = false,
}: {
  imageName: string;
  altText: string;
  title: string;
  eager?: boolean;
}) => {
  const base = `/images/${imageName}`;
  return (
    <img
      className="img-fluid"
      width={650}
      height={488}
      src={`${base}-650.webp`}
      srcSet={`${base}-650.webp 650w, ${base}-1065.webp 1065w`}
      sizes="(max-width: 650px) 100vw, 650px"
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'auto' : 'async'}
      {...(eager ? { fetchPriority: 'high' as const } : {})}
      alt={altText}
      title={title}
    />
  );
};

const slides = [
  {
    title: 'Real-time dashboards',
    imageName: 'dashboard',
    altText: 'dashboard',
  },
  {
    title: 'E-commerce',
    imageName: 'e-commerce',
    altText: 'e-commerce',
  },
  {
    title: 'Social Media Platforms',
    imageName: 'social',
    altText: 'social media',
  },
];

export const HeroSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const settings: Settings = {
    dots: true,
    beforeChange: (_current, next) => setCurrentSlideIndex(next),
  };
  const currentSlideTitle = slides[currentSlideIndex].title;

  return (
    <>
      <h3 className="mb-0">{currentSlideTitle}</h3>
      <div
        className={`${styles.sliderComponent} text-center`}
        style={{ zIndex: 100 }}
      >
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <Slide
              key={slide.title}
              title={slide.title}
              imageName={slide.imageName}
              altText={slide.altText}
              eager={index === 0}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};
