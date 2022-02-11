import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <div>
            <Row className="justify-content-center">
                <Col align="center">
                WAVELENGTH
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col align="center">
                CS147 Introduction to Human Computer Interaction - Winter 2022
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col align="center">
                Stanford University
                </Col>
            </Row>
        </div>
    );
};

export default Footer;