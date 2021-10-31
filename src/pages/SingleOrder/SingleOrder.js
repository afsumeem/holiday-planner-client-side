import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const SingleOrder = (props) => {
    //load props 
    const { name, Package, Address, email, Contact, _id, status } = props.order;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);


    //DELETE order

    const deleteOrder = id => {
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


    // UPDATE status

    const handleUpdateStatus = () => {

        const updated = { status: 'Approved' }

        const url = `https://vast-dawn-82994.herokuapp.com/orders/${_id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order approved');
                    window.location.reload()

                }
            })
    };


    return (
        <div className="container px-5">

            <Card className=" mx-auto bg-opacity-75 text-white bg-dark mt-4">

                {/* package title */}
                <Card.Header className=" bg-info bg-opacity-75 fw-bold">{Package}</Card.Header>


                {/* users order Info */}

                <Card.Body className=" text-start ms-5">
                    <div className="d-flex justify-content-between">
                        <Card.Title className="fw-normal">{name}</Card.Title>
                        <h6 className="text-end me-2 border px-2 text-info">{status}</h6>
                    </div>

                    <hr className="w-75" />

                    <Card.Text>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> {Address}
                    </Card.Text>
                    <Card.Text>
                        <FontAwesomeIcon icon={faPhone} /> {Contact}
                    </Card.Text>
                    <Card.Text>
                        <FontAwesomeIcon icon={faEnvelope} /> {email}
                    </Card.Text>
                </Card.Body>



                <div className="d-flex">
                    <Button onClick={handleUpdateStatus} className="w-50 m-0 p-2 rounded-0" variant="outline-info">Order Confirm</Button>

                    <Button onClick={() => { setShow(true); }} className="w-50 m-0 p-2 rounded-0 text-white" variant="outline-danger">Cancel Order</Button>

                </div>

            </Card>


            {/* Confirmation Alert */}
            <Modal show={show} onHide={handleClose}>
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                </div>
                <Modal.Body>Are you sure you want to cancel this order? This action cannot be undone and you will be unable to recover any data.</Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={() => { deleteOrder(_id) }}>
                        Yes! Delete it
                    </Button>
                    <Button variant="primary" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

        </div >
    );
};

export default SingleOrder;
