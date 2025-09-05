import React from 'react';
import { HeroSlider } from '@/components/HeroSlider';
import { Button } from '@/components/Button';

export const About = () => {
  return (
    <div className="inner fs-5 text-justify mt-auto mb-auto">
      <div className="row align-items-center">
        <div className="col-lg-12 text-center">
          <h1 className="">Alex Burlachenko</h1>
          <h2 className="">Software development for your business</h2>

          <div className="mt-5 mb-5">
            <HeroSlider />
          </div>

          <h2>About me</h2>
          <p>
            Full Stack Developer experienced in designing and delivering web
            applications from concept to deployment. Skilled in planning,
            development, testing, and maintenance, with a strong focus on
            problem-solving and continuous improvement.
          </p>
          <div className="text-center mt-4">
            <a
              className="btn btn-outline-light btn-lg fw-bold"
              target="_blank"
              rel="noopener noreferrer"
              href="/files/Oleksandr_Burlachenko_CV.pdf"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
