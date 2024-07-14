import Head from 'next/head';

import React from 'react';
import { HeroSlider } from '@/components/Common/HeroSlider';

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className="header fs-5 text-justify mt-auto mb-auto">
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <h1 className="">Alex Burlachenko</h1>
            <h2 className="">Software development for your business</h2>

            <div className="mt-5 mb-5">
              <HeroSlider />
            </div>

            <h2>About me</h2>
            <p>
              Full Stack Developer who is able to build web applications from
              scratch - information gathering, planning, development, testing,
              delivery and maintenance. An energetic and imaginative person. I
              am constantly improving my skills to stay on the cutting edge of
              web development and solve challenges effectively.
            </p>
            <div className="text-center mt-4">
              <a
                className="btn btn-outline-light btn-lg fw-bold"
                target="_blank"
                rel="noopener noreferrer"
                href="/files/Oleksandr_Burlachenko_CV.pdf"
              >
                &nbsp;View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
