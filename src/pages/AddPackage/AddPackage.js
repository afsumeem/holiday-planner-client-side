import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const AddPackage = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        axios.post('https://vast-dawn-82994.herokuapp.com/packages', data)
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
                <h2 className="text-dark pt-5 text-uppercase">Add new package</h2>
                <div className="d-flex justify-content-center">


                    {/* booking form */}
                    <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                        <input className=" m-2 w-50 px-4 py-2" placeholder="Package Title" {...register("name", { required: true })} />

                        <input className="m-2 w-50 px-4 py-2" placeholder="Duration"{...register("duration", { required: true })} />

                        <input className="m-2 w-50 px-4 py-2" placeholder="Package Details"{...register("desc", { required: true })} />

                        <input className=" m-2 w-50 px-4 py-2" placeholder="Price" {...register("price", { required: true })} />

                        <input className=" m-2 w-50 px-4 py-2" placeholder="Image link" {...register("picture1", { required: true })} />

                        {/* submit button */}
                        < input className="d-block mx-auto m-3 btn btn-info w-50" type="submit" value="Add Package" />


                        {/* button for going back to home */}
                        < NavLink to="/home" className=" text-decoration-none d-block mx-auto m-3 btn w-25 btn-outline-success" > Home</NavLink>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;