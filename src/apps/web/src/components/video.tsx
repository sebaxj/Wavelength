import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/video.css';

const Video: React.FC = () => {
    return (
      <div>
        <Row className="justify-content-center">
            <Col align="center">
            <div className="iframe-container">
  <iframe src="https://www.youtube.com/embed/CsM0QInyM2k?mute=1" allowfullscreen></iframe>
</div>
            {/* <iframe width="420" height="315"
                src="https://www.youtube.com/embed/CsM0QInyM2k?mute=1">
            </iframe> */}
            </Col>
        </Row>
    </div>
    );
};

export default Video;
