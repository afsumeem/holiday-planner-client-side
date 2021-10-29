import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {

        axios.post('http://localhost:5000/orders', data)
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

                {/* Place order header */}
                <h2 className="text-dark pt-3">Booking Form</h2>
                <div className="d-flex justify-content-center">


                    {/* booking form */}
                    <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                        <input className="m-3 w-50 px-4 py-2" defaultValue={user.displayName} {...register("name")} />
                        <input className=" m-3 w-50 px-4 py-2" placeholder="Package Title" {...register("Package", { required: true })} />

                        <input className="m-3 w-50 px-4 py-2" placeholder="Address"{...register("Address", { required: true })} />

                        <input className="m-3 w-50 px-4 py-2" placeholder="+8801XXXXXXX"{...register("Contact", { required: true })} />

                        <input className=" m-3 w-50 px-4 py-2" defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">Please Enter Your Email</span>}


                        {/* submit button */}
                        <input className="d-block mx-auto m-3 btn btn-info w-50" type="submit" value="Book now" />


                        {/* button for going back to home */}
                        <NavLink to="/home" className=" text-decoration-none d-block mx-auto m-3 btn btn-info w-25 bg-secondary" >Home</NavLink>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;