import React from 'react';
import './NoMatch.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div >
            <Container className="no-match-section d-flex align-items-center flex-column">
                <h3>Sorry, This Page Is Not Found</h3>
                <Button as={Link} to={"/"} variant="primary">Back To Home</Button>
            </Container>
        </div>
    );
};

export default NoMatch;