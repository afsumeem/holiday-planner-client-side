import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleOrder = (props) => {
    const { name, Package, Address, email, Contact } = props.order;
    return (
        <div className="container">
            <div className="row my-2">
                <div className="col-md-3">

                </div>
                <div className="col-md-8">
                    <Card>
                        <Card.Header as="h5">{Package}</Card.Header>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <h5>Address: {Address}</h5>
                                <p>Email: {email}</p>
                                <p>Contact: {Contact}</p>
                            </Card.Text>
                            <Button variant="primary">Delete</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>

        </div>
    );
};

export default SingleOrder;