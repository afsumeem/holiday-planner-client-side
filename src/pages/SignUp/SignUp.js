import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const SignUp = () => {

    // import functions useFirebase hook
    const { getUserEmail, getUserPassword, handleRegistration, error, getUserName } = useAuth();

    return (
        <div>

            {/* signup form container */}

            <div className="form-container w-50 p-5 mx-auto bg-dark bg-opacity-50">
                <h2 className="pt-5 text-uppercase text-white fw-bolder">Create an Account</h2>
                <Form onSubmit={handleRegistration} className="w-75 mx-auto pt-5">
                    <div className="row mb-3 text-danger">{error}</div>


                    {/* sign up form inputgroups */}

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Name"
                        className="mb-3 "
                    >
                        <Form.Control onBlur={getUserName} type="text" placeholder="Mark otto" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control onBlur={getUserEmail} type="email" placeholder="abc@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control onBlur={getUserPassword} type="password" placeholder="Password" />
                    </FloatingLabel>

                    {/* signup button */}
                    <Button className="w-100 mt-3 bg-info text-dark fw-bolder" type="submit">Sign up</Button>

                </Form>


                <p className="ms-3 mt-3 text-white fw-bolder">Already have an account ? </ p>

                {/* login page path */}
                <NavLink to="/signin" className="btn rounded btn-primary">Sign in </NavLink>

            </div>
        </div >

    );
};

export default SignUp;