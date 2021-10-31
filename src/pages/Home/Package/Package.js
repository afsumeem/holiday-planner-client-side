import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Package.css';
import { faFlag, faGlobe, faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

const Package = (props) => {

    const { name, picture1, desc, duration, price, _id } = props.singlePackage;

    return (
        <div className="package-container">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture1} />
                <Card.Body className="text-start">
                    <Card.Title>{name}</Card.Title>
                    <p className="text-primary"> <FontAwesomeIcon icon={faClock} /> {duration}</p>
                    <FontAwesomeIcon icon={faPlane} />
                    <FontAwesomeIcon icon={faFlag} />
                    <FontAwesomeIcon icon={faGlobe} />
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <h4 className="text-success text-opacity-75">${price}</h4>
                </Card.Body>

                <Card.Footer className="m-0 p-0">
                    <NavLink to={`/package/${_id}`}>
                        <Button className="w-100" variant="secondary">Book Now</Button>
                    </NavLink>
                </Card.Footer>
            </Card>



        </div>
    );
};

export default Package;