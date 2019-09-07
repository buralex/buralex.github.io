import React from 'react';
import Slider from 'react-slick';

const HeaderSlider = props => {
    const settings = {
        dots: true,
    };
    return (
        <div>
            <div className="slider-component text-center" style={{zIndex: 100}}>
                <Slider {...settings}>
                    <div>
                        <img src="http://placekitten.com/g/400/200" alt="cat" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" alt="cat" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" alt="cat" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" alt="cat" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default HeaderSlider;
