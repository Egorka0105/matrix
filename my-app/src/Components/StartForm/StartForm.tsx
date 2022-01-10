import React from 'react';
import './StartFormStyle.scss';

function StartForm() {
	function submitHandler(event: any) {
		event.preventDefault();
		console.log(event);
	}

	return (
		<div className="startWindow">
			<h1 className="tittle">Matrix builder</h1>
			<form onSubmit={submitHandler}>
				<label htmlFor="columnsInp">
					Enter the number of columns
					<input type="number" id="columnsInp" />
				</label>
				<label htmlFor="rowsInp">
					Enter the number of rows
					<input type="number" id="rowsInp" />
				</label>
				<label htmlFor="cellsInp">
					Enter the number of cells
					<input type="number" id="cellsInp" />
				</label>
				<button type="submit">Create Matrix</button>
			</form>
		</div>
	);
}

export default StartForm;
