import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Logo from './logo';

const Description: React.FC = () => {
    return (
        <div>
            <Row>
                <Col>
                    <img src={require('../static/soundwave.png')} width="100%" />
                </Col>

                <Col className="my-auto">
                    <Row>
                        <Col>
                            <Logo />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <b>Connecting compatible music listeners</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            It can be hard to find friends with the same taste in music. With Wavelength, meet nearby
                            friends with compatible music fans!
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Description;
