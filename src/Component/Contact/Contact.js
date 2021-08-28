import React from 'react';
import './Contact.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <section>
            <Container className="contact-section container d-flex align-items-center flex-column">
                <h2>This is conatct component</h2>
                <Button as={Link} to={"/"} variant="primary">Back To Home</Button>
            </Container>
        </section>
    );
};

export default Contact;