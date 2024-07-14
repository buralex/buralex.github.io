import Head from 'next/head';

import Button from '@/components/Common/Button';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="header fs-5 text-justify mt-auto mb-auto">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <h1 className="">Software for your business.</h1>

            <p>
              Uplium is a software product company that creates cutting-edge
              solutions to help businesses thrive in the digital age.
            </p>

            <div className="mb-3">
              <Link href="/products">
                <Button className="btn-light btn-lg fw-bold me-3">
                  Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="btn-outline-light btn-lg fw-bold">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="/images/dashboard.png"
                width={500}
                height={376}
                alt="real-time dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
