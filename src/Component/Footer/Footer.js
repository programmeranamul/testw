import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container className="text-center py-3">
                &copy; All right reserved {new Date().getFullYear()}
            </Container>
        </footer>
    );
};

export default Footer;