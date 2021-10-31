import React from 'react';
import { faComments, faGlobeAsia, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';
import './Facility.css'

const Facility = () => {
    return (
        <div className="mt-5">

            {/* section title */}
            <h2>WHY WE ARE BEST</h2>

            <div className="row m-0">

                {/* facility details */}

                <div className="col-md-3 p-4 mt-2">
                    <FontAwesomeIcon icon={faPlaneDeparture} className="fs-1 m-3" />
                    <h5>Amazing Travel</h5>
                    <p className="description">The secret to our success lies in our people. We have a strong team of travel professionals with extensive industry experience and outstanding customer service skills.</p>
                </div>

                <div className="col-md-3 p-4 mt-2">
                    <FontAwesomeIcon icon={faGlobeAsia} className="fs-1 m-3" />
                    <h5>Discover</h5>
                    <p className="description">The secret to our success lies in our people. We have a strong team of travel professionals with extensive industry experience and outstanding customer service skills.</p>
                </div>

                <div className="col-md-3 p-4 mt-2">
                    <FontAwesomeIcon icon={faFontAwesomeFlag} className="fs-1 m-3" />
                    <h5>Book Your Trip</h5>
                    <p className="description">The secret to our success lies in our people. We have a strong team of travel professionals with extensive industry experience and outstanding customer service skills.</p>
                </div>

                <div className="col-md-3 p-4 mt-2">
                    <FontAwesomeIcon icon={faComments} className="fs-1 m-3" />
                    <h5>Nice Support</h5>
                    <p className="description">The secret to our success lies in our people. We have a strong team of travel professionals with extensive industry experience and outstanding customer service skills.</p>
                </div>

            </div>
            <hr className="w-75 mx-auto my-4" />
        </div>
    );
};

export default Facility;