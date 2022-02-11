import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/team.css';

const Team: React.FC = () => {
    return (
        <div>
            <Row className="justify-content-center">
                <Col align="center">
                    <Row>
                        <Col><img src="../static/seb.png" alt="Beautiful picture of Seb" className="team-picture" /></Col>
                    </Row>
                    <Row>
                        <Col>Sebastian J</Col>
                    </Row>
                    <Row>
                        <Col>Development</Col>
                    </Row>
                </Col>
                <Col align="center">
                    <Row>
                        <Col><img src="../static/connor.jpg" alt="Beautiful picture of Connor" className="team-picture" /></Col>
                    </Row>
                    <Row>
                        <Col>Connor H</Col>
                    </Row>
                    <Row>
                        <Col>Development</Col>
                    </Row>
                </Col>
                <Col align="center">
                    <Row>
                        <Col><img src="../static/corbin.jpg" alt="Beautiful picture of Corbin" className="team-picture" /></Col>
                    </Row>
                    <Row>
                        <Col>Corbin S</Col>
                    </Row>
                    <Row>
                        <Col>Design</Col>
                    </Row>
                </Col>
                <Col align="center">
                    <Row>
                        <Col><img src="../static/steven.jpg" alt="Beautiful picture of Steven" className="team-picture" /></Col>
                    </Row>
                    <Row>
                        <Col>Steven K</Col>
                    </Row>
                    <Row>
                        <Col>Design</Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Team;