import React from 'react';
import NavBar from './components/navbar';
import Description from './components/description';
import Video from './components/video';
import Deliverables from './components/deliverables';
import Team from './components/team';
import Footer from './components/footer';
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    return (
        // APP
        <div>
            {/* NAVBAR */}
            <NavBar />

            {/* DESCRIPTION */}
            <h1 id="about">Description</h1>
            <Description />

            {/* EMBEDDED VIDEO */}
            <Video />

            {/* DELIVERABLES */}
            <h1 id="deliverables">Deliverables</h1>
            <Deliverables />

            {/* TEAM */}
            <h1 id="team">Team</h1>
            <Team />

            {/* FOOTER */}
            <Footer />
            

        </div>
    );
};

export default App;
