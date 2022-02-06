import React from 'react';
import styles from './styles/styles.module.css';

const App: React.FC = () => {
	return (
		<div>
			<h1 className={styles.logo}>Wavelength</h1>
			<h3 className={styles.body}>Team: Corbin Schmeil, Connor Hogan, Sebastian James, Steven Kohl</h3>
			<h1></h1>
			<p className={styles.body}>Website Design: Connor Hogan</p>
		</div>
	);
};

export default App;
