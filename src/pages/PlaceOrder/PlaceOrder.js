import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const PlaceOrder = () => {
    const { id } = useParams();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const [packageDetails, setPackageDetails] = useState([]);

    useEffect(() => {
        const url = `https://vast-dawn-82994.herokuapp.com/packages/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPackageDetails(data))
    }, []);


    const onSubmit = data => {

        axios.post('https://vast-dawn-82994.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Form submitted successfully");
                    reset();
                }
            })
    };

    return (
        <div>
            <div className="mt-5">

                <div>

                    <h2>{packageDetails.name}</h2>
                </div>

                {/* Place order header */}
                <h2 className="text-dark pt-3">Booking Form</h2>
                <div className="d-flex justify-content-center">


                    {/* booking form */}
                    <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                        <input className="m-3 w-50 px-4 py-2" defaultValue={user.displayName} {...register("name")} />

                        {packageDetails.name &&
                            <input className=" m-3 w-50 px-4 py-2" value={packageDetails.name} {...register("Package", { required: true })} />
                        }

                        <input className="m-3 w-50 px-4 py-2" placeholder="Address"{...register("Address", { required: true })} />

                        <input className="m-3 w-50 px-4 py-2" placeholder="+8801XXXXXXX"{...register("Contact", { required: true })} />

                        <input className=" m-3 w-50 px-4 py-2" defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">Please Enter Your Email</span>}
                        <br />

                        {/* order status */}
                        <input className="m-3 w-25 px-4 py-2" defaultValue="Pending..." readOnly {...register("status")} title="Order status" />


                        {/* submit button */}
                        < input className="d-block mx-auto m-3 btn btn-info w-50" type="submit" value="Book now" />


                        {/* button for going back to home */}
                        < NavLink to="/home" className=" text-decoration-none d-block mx-auto m-3 btn btn-info w-25 bg-secondary" > Choose Another Package</NavLink>

                    </form>
                </div>
            </div>
        </div >
    );
};

export default PlaceOrder;