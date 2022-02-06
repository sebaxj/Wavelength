import React from 'react';
import NavBar from './components/navbar';
import './styles/App.css';

const App: React.FC = () => {
	return (
		<div className="app-background">
			<NavBar />
			<body className="app-body">Team: Corbin Schmeil, Connor Hogan, Sebastian James, Steven Kohl</body>
		</div>
	);
};

export default App;
