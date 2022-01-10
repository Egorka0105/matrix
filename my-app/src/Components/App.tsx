import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import StartForm from './StartForm/StartForm';

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<StartForm />
			</div>
		</BrowserRouter>
	);
}

export default App;
