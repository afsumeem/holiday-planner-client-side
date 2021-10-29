import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    //fetch all orders from API

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    return (
        <div>

            {/* my orders page title */}
            <h1 className="m-5">my Orders {orders.length}</h1>


            {/* map orders */}
            {
                orders.map(order => <SingleOrder
                    key={order._id}
                    order={order}
                >
                </SingleOrder>)
            }

        </div>
    );
};

export default MyOrders;

