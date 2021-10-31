import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';
import './ManageOrders.css'

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);

    //fetch all orders from API

    useEffect(() => {
        fetch('https://vast-dawn-82994.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);


    return (
        <div className="p-5">
            <h1 className="m-5">MANAGE ALL ORDER</h1>
            <div className="manage-orders-container ">

                {
                    orders.map(order => <SingleOrder
                        key={order._id}
                        order={order}
                    >
                    </SingleOrder>)
                }
            </div >
        </div>
    );
};

export default ManageOrders;