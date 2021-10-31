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

            <Carousel className="banner">

                <Carousel.Item>

                    {/* carousel image */}
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co/K594P7X/banner-1.jpg"}
                        alt="First slide"
                    />

                    {/* carouserl cations */}
                    <Carousel.Caption>
                        <h3>Let's Your Journey Begins!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co/FDzkKPV/banner-2.jpg"}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co/smM10nZ/banner-3.jpg"}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
