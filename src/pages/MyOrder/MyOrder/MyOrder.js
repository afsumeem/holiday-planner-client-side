import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MySingleOrder from '../MySingleOrder/MySingleOrder';
import './MyOrder.css'

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://vast-dawn-82994.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(orders)
            })

    }, []);
    return (
        <div className="order-container pt-5">

            {/* title */}
            <h1 className="pt-5 text-white font-monospace">MY ORDERS</h1>

            <div>
                {
                    orders
                        .filter(userInfo => userInfo.email === user.email)
                        .map(order => <MySingleOrder
                            key={order._id}
                            order={order}
                        >
                        </MySingleOrder>)
                }
            </div>

        </div>
    );
};

export default MyOrder;