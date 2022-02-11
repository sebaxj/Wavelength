import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Description: React.FC = () => {
    return (
      <div>
        <Row className="justify-content-center">
            <Col align="center">
            WAVELENGTH
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col align="center">
            Connecting compatible music listeners
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col align="center">
            It can be hard to find friends with the same taste in music… with Wavelength, meet nearby friends with compatible music fans! 
            </Col>
        </Row>
    </div>
    );
};

export default Description;
