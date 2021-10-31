import React from 'react';
import { Carousel } from 'react-bootstrap';
import Facility from '../Facility/Facility';
import Packages from '../Packages/Packages';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    return (
        <div>

            {/* banner section */}

            <Carousel >

                <Carousel.Item className="banner">

                    {/* carousel image */}
                    <img
                        // className="d-block w-100"
                        src={"https://i.ibb.co/K594P7X/banner-1.jpg"}
                        alt="First slide"
                    />

                    {/* carouserl cations */}
                    <Carousel.Caption className="mb-5">
                        <div className="bg-dark bg-opacity-25 p-5 mb-5">
                            <h2 className="mb-3">Let's Your <span className="text-info">Journey</span> Begins!</h2>
                            <p>Love to tour but fancy a bit more freedom? With the introduction of Choice Touring by Globus, travel enthusiasts now have a whole new way to cure their curiosity.</p>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="banner">
                    <img
                        // className="d-block w-100"
                        src={"https://i.ibb.co/FDzkKPV/banner-2.jpg"}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="mb-5">
                        <div className="bg-dark bg-opacity-50 p-5 mb-5">
                            <h2 className="mb-3">World's <span className="text-info">Largest</span> travel platform.</h2>
                            <p>This exciting new touring style promises all the wonder with a touch of whim and all the fun with the infusion of flexibility.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item >

                <Carousel.Item className="banner">
                    <img
                        // className="d-block w-100"
                        src={"https://i.ibb.co/smM10nZ/banner-3.jpg"}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="mb-5">
                        <div className="bg-dark bg-opacity-50 p-5 mb-5">
                            <h2 className="mb-3"> An online travel agency founded by <span className="text-info">HELLOWORLD</span></h2>
                            <p>With more than nine decades of introducing travelers to the world’s most beloved destinations, we’ve learned a thing or two about the undiscovered spots that tell the true story behind the country. </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* banner section end */}


            {/* package section */}
            <Packages></Packages>

            {/* facility section */}
            <Facility></Facility>

            {/* team section */}
            <Team></Team>


            {/* extra section for contact button */}
            <div className="contact-section p-5 text-white d-flex justify-content-center">
                <h4 >Have Some Question About Tours and Travel?</h4>
                <button className="rounded-pill btn btn-outline-light px-4 mx-3">Lets Talk</button>

            </div>
        </div>
    );
};

export default Home;
