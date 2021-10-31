import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div>
            {/* menu bar */}
            <Navbar fixed="top" bg="dark" className="bg-opacity-75 py-3" expand="lg">
                <Container>

                    <NavLink to="/home" className=" text-decoration-none">
                        <Navbar.Brand className="text-white fst-italic">Holiday Planner</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" className="text-decoration-none mx-3 rounded py-2 px-2 text-white  menu-item d-flex align-items-center">Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none mx-3 rounded py-2 px-2 text-white  menu-item d-flex align-items-center">About us</NavLink>


                            {/* user info, login/signup  */}


                            {user.email
                                ?
                                <>
                                    <NavLink className="text-decoration-none mx-2 rounded py-2 px-2 text-white d-flex align-items-center menu-item" to="/myorder">My Orders</NavLink>

                                    <NavLink className="text-decoration-none mx-2 rounded py-2 px-2 text-white d-flex align-items-center menu-item" to="/manageorders">Manage Orders</NavLink>

                                    <NavLink className="text-decoration-none mx-2 rounded py-2 px-2 text-white d-flex align-items-center menu-item" to="/addpackage">New Package</NavLink>
                                    <Navbar.Text className="text-info text-start fw-bolder mx-2">
                                        <FontAwesomeIcon className="fs-6 me-1" icon={faUser} />
                                        {user.displayName && user.displayName}
                                    </Navbar.Text>
                                </>

                                : <>

                                    <NavLink className="text-decoration-none mx-3 rounded py-2 px-2 text-white d-flex align-items-center menu-item" to="/signin">Sign in</NavLink> </>

                            }
                            {user.email ?

                                <NavLink onClick={logOut} className="text-decoration-none mx-3 py-2 rounded px-2 text-white  d-flex align-items-center  menu-item" to="/home">Logout</NavLink>
                                :
                                <NavLink className="text-decoration-none rounded py-2 px-2 mx-3 text-white  d-flex align-items-center  menu-item" to="/signup">Sign up</NavLink>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;