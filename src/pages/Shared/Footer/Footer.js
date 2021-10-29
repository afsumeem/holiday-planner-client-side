import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faInstagram, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4 col-sm-12 text-white">
                        <h2>Holiday Planner</h2>
                        <hr className="w-75 mx-auto" />
                        <p className="mb-5">Holiday Planner Is An Award-Winning Platform Trusted By Thousands Of Travel Brands Worldwide. Explore Travefy's Itinerary, Proposal, Client Management + Marketing Tools.</p>
                        <Button variant="outline-info rounded-circle m-2" size="sm">
                            <a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></a>
                        </Button>

                        <Button variant="outline-primary rounded-circle m-2" size="sm">
                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                        </Button>

                        <Button variant="outline-danger rounded-circle m-2" size="sm">
                            <a href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram} /></a>

                        </Button>

                        <Button variant="outline-info rounded-circle m-2" size="sm">
                            <a href="https://www.skype.com/en/"><FontAwesomeIcon icon={faSkype} /></a>

                        </Button>

                        <Button variant="outline-primary rounded-circle m-2" size="sm">
                            <a href="https://discord.com/"> <FontAwesomeIcon icon={faDiscord} /></a>

                        </Button>
                    </div>
                    <div className="col-md-4 col-sm-12 text-white">
                        <h2 >Gallery</h2>
                        <hr className="w-50 mx-auto" />
                        <div className="row my-2">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <img className="rounded" src={"https://i.ibb.co/q0dHTZx/footer-gallery-1.jpg"} alt="" />
                            </div>
                            <div className="col-md-3">
                                <img className="rounded" src={"https://i.ibb.co/d0LK8wx/footer-gallery-2.jpg"} alt="" />
                            </div>
                            <div className="col-md-3">
                                <img className="rounded" src={"https://i.ibb.co/jbgLGnV/footer-gallery-3.jpg"} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <img className="rounded" src={"https://i.ibb.co/jbgLGnV/footer-gallery-3.jpg"} alt="" />
                            </div>
                            <div className="col-md-3">
                                <img className="rounded" src={"https://i.ibb.co/q0dHTZx/footer-gallery-1.jpg"} alt="" />
                            </div>
                            <div className="col-md-3">
                                <img className="rounded" src={"https://i.ibb.co/d0LK8wx/footer-gallery-2.jpg"} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 text-white">
                        <h2 >Contacts</h2>
                        <hr className="w-50 mx-auto" />
                        <div className="d-flex justify-content-center">

                            {/* footer contents */}
                            <div className="me-4 d-flex align-items-center fs-4">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div >
                                <p>25 Jatrabari-1000
                                    <br />
                                    <span className="fs-6"> Dhaka Bangladesh</span>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="me-4 d-flex align-items-center fs-4">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div>
                                <p className="fs-6">+11 555 123-456 </p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="me-4 fs-4">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <p>support@hs.com </p>
                            </div>
                        </div>
                        <Button className="w-50 mt-3 " variant="outline-info" size="sm">
                            CONTACT US
                        </Button>

                    </div>
                </div>
            </div>
            <p className="text-white text-opacity-50 m-0">Copyright &copy;2021 All Rights Reserved | This Website is made with &#x003C;&#10083;&#x003E; by Afsana Meem </p>
        </div>

    );
};

export default Footer;