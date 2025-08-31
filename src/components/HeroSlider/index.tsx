'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import styles from './HeroSlider.module.css';

const Slide = ({
  imgSrc,
  altText,
  title,
  priority = false,
}: {
  imgSrc: string;
  altText: string;
  title: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) => (
  <Image
    className="img-fluid"
    src={`/${imgSrc}`}
    alt={altText}
    title={title}
    width={700}
    height={526}
    priority={priority}
  />
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
              imgSrc={slide.imgSrc}
              altText={slide.altText}
              priority={index === 0}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};
