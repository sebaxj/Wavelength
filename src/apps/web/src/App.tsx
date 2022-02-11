import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import React from 'react';

import NavBar from './components/navbar';
import Description from './components/description';
import Video from './components/video';
import Deliverables from './components/deliverables';
import Team from './components/team';
import Footer from './components/footer';

import { Container } from 'react-bootstrap';

const App: React.FC = () => {
    return (
        // APP
        <Container>
            <div style={{ textAlign: 'center' }}>
                {/* NAVBAR */}
                <NavBar />

                {/* DESCRIPTION */}
                <div className="app-section">
                    <h1 id="about">About</h1>
                    <Description />
                </div>

                {/* EMBEDDED VIDEO */}
                <div className="app-section">
                    <Video />
                </div>

                {/* DELIVERABLES */}
                <div className="app-section">
                    <h1 id="deliverables">Deliverables</h1>
                    <Deliverables />
                </div>

                {/* TEAM */}
                <div className="app-section">
                    <h1 id="team">Team</h1>
                    <Team />
                </div>

                {/* FOOTER */}
                <div className="app-section">
                    <Footer />
                </div>
            </div>
        </Container>
    );
};

export default App;
