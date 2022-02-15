import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
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
                    <Row style={{ marginTop: '1rem' }}>
                        <Col>
                            <Button href="https://www.figma.com/proto/fQ0uhEhxdLUi9DO2IV84yQ/Med-Fi-Mobile?node-id=23%3A139&scaling=scale-down&page-id=0%3A1&starting-point-node-id=23%3A139">
                                Try Our Med-Fi Prototype
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Description;
