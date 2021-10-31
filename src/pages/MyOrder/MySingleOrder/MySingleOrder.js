import React from 'react';
import { Card } from 'react-bootstrap';
import { faEnvelope, faMapMarker, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MySingleOrder = (props) => {
    const { name, email, Contact, Package, Address, status } = props.order;

    return (

        <div className="orderList-container pb-4 pt-2" >

            <Card className="text-center w-50 mx-auto bg-opacity-75 bg-white">

                {/* package title */}
                <Card.Header className=" bg-info bg-opacity-25 fw-bold">{Package}</Card.Header>


                {/* users order Info */}

                <Card.Body className=" text-start ms-5">

                    <Card.Title className="fw-normal">{name}</Card.Title>
                    <hr className="w-75" />
                    <Card.Text>
                        <FontAwesomeIcon icon={faMapMarker} /> {Address}
                    </Card.Text>
                    <Card.Text>
                        <FontAwesomeIcon icon={faPhone} /> {Contact}
                    </Card.Text>
                    <Card.Text>
                        <FontAwesomeIcon icon={faEnvelope} /> {email}
                    </Card.Text>
                </Card.Body>

                {/* order Status */}
                <Card.Footer className=" bg-danger bg-opacity-25">{status}</Card.Footer>
            </Card>

        </div>
    );
};

export default MySingleOrder;