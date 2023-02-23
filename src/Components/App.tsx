import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StartForm from './StartForm/StartForm';
import './App.scss';
import Table from './Table/Table';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<StartForm />
				<Table />
			</div>
		</BrowserRouter>
	);
}

export default App;
