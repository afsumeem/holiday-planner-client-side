import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const SingleOrder = (props) => {
    //load props 
    const { name, Package, Address, email, Contact, _id, status } = props.order;
    const [statusValue, setStatusValue] = useState({})

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);


    //DELETE order

    const handleDeleteOrder = id => {
        const url = `https://vast-dawn-82994.herokuapp.com/${id}`;

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
        const btn = document.getElementById('myButton1');
        setStatusValue(btn.value);
        btn.value = "approved";



        const url = `https://vast-dawn-82994.herokuapp.com/orders/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(statusValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order approved')
                }
                console.log(data);
            })
    }



    return (
        <div className="container px-5">

            <Card className=" mx-auto bg-opacity-75 text-white bg-dark mt-4">

                {/* package title */}
                <Card.Header className=" bg-info bg-opacity-75 fw-bold">{Package}</Card.Header>


                {/* users order Info */}

                <Card.Body className=" text-start ms-5">

                    <Card.Title className="fw-normal">{name}</Card.Title>
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

                {/* order Status */}
                <input type="button" value={status} className="w-50 m-0 p-0 rounded-0 btn btn-outline-info" id="myButton1"></input>

                <div className="d-flex">
                    <Button onClick={handleUpdateStatus} className="w-50 m-0 p-2 rounded-0" variant="outline-info">Order Confirm</Button>

                    <Button onClick={() => { setShow(true); }} className="w-50 m-0 p-2 rounded-0" variant="outline-danger">Cancel Order</Button>

                </div>

            </Card>


            {/* modal */}
            <Modal show={show} onHide={handleClose}>

                <Modal.Body>Are you sure?</Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={() => { handleDeleteOrder(_id) }}>
                        Yes
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
