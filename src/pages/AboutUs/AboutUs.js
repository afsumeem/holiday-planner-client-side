import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTrophy, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import image from '../../images/package-5.jpeg';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="bg-success bg-opacity-25">

            <div className="row pt-5 mx-0">

                {/* about us banner */}

                <div className="col-md-6 my-5">
                    <img src={image} className="img-fluid" alt="" />
                </div>


                {/* about us details*/}
                <div className="col-md-6 text-start px-5 my-5">
                    <h3 className="mb-2">ABOUT HOLIDAY PLANNER</h3>
                    <hr className="w-75" />
                    <p className="mb-3">With more than nine decades of introducing travelers to the world’s most beloved destinations, we’ve learned a thing or two about the undiscovered spots that tell the true story behind the country.With more than nine decades of introducing travelers to the world’s most beloved destinations, we’ve learned a thing or two about the undiscovered spots that tell the true story behind the country. </p>

                    <div className="row m-0 mt-3 text-center">
                        <div className="col-md-3 border  p-2">
                            <FontAwesomeIcon className="fs-1 mx-3 " icon={faUser} />
                            <h4 className="font-monospace">1000 +</h4>
                            <p className="text-primary font-monospace">Happy Traveller</p>
                        </div>

                        <div className="col-md-3 border p-2">
                            <FontAwesomeIcon className="fs-1 mx-3" icon={faUsers} />
                            <h4 className="font-monospace">120 +</h4>
                            <p className="text-primary font-monospace">Professional Team</p>

                        </div>
                        <div className="col-md-3 border  p-2">

                            <FontAwesomeIcon className="fs-1 mx-3" icon={faPlane} />
                            <h4 className="font-monospace">140+</h4>
                            <p className="text-primary font-monospace">Successful Tour</p>

                        </div>
                        <div className="col-md-3 border p-2">
                            <FontAwesomeIcon className="fs-1 mx-3" icon={faTrophy} />
                            <h4 className="font-monospace">450 +</h4>
                            <p className="text-primary font-monospace"> Awards</p>
                        </div>
                    </div>

                    {/* button */}
                    <NavLink to="/home"><button className="btn btn-info w-100 mt-4">View Packages</button></NavLink>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;