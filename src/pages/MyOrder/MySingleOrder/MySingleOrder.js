import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { faEnvelope, faMapMarker, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MySingleOrder = (props) => {
    const { name, email, Contact, Package, Address, status, _id } = props.order;


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);

    //DELETE order

    const handleDeleteOrder = id => {
        const url = `https://vast-dawn-82994.herokuapp.com/orders/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    window.location.reload();
                }
            })
            .finally(setShow(false))
    };

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


                <Button onClick={() => { setShow(true); }} className="w-50 p-2 mb-2 mx-auto" variant="outline-danger">Cancel Order</Button>

                {/* order Status */}
                <Card.Footer className=" bg-danger bg-opacity-25">{status}</Card.Footer>
            </Card>



            {/* Confirmation alert */}
            <Modal show={show} onHide={handleClose}>

                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                </div>
                <Modal.Body>Are you sure you want to cancel this order? This action cannot be undone and you will be unable to recover any data.</Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={() => { handleDeleteOrder(_id) }}>
                        Yes! Delete it
                    </Button>
                    <Button variant="primary" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default MySingleOrder;