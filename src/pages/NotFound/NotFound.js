import React from 'react';
import image from '../../images/not-found.png';
import './NotFound.css'

const NotFound = () => {

    return (
        <div>
            {/* not found image */}
            <img src={image} className="not-found-img" alt="" />
        </div>
    );
};

export default NotFound;