import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import './Header.css'
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="text-white font-weight-bold">Team Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} exact to="/" className=" font-weight-bold nav-item" activeClassName="active">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="font-weight-bold nav-item" activeClassName="active">Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;