import React from 'react';
import Table from './components/Table';
import Chart from './components/Chart';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">Currency chart</header>
			<div className="layout-container">
				<Chart />
				<Table />
			</div>
		</div>
	);
};

export default App;
