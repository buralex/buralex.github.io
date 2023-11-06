import React from 'react';

const Divider = ({light}) => (
    <div className={`divider-custom ${light ? 'divider-light' : ''}`}>
        <div className="divider-custom-line" />
        <div className="divider-custom-icon">&#9733;</div>
        <div className="divider-custom-line" />
    </div>
);
export default Divider;
