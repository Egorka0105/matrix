import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from './StartFormStyle.module.scss';
import { tableCreate } from '../../store/tableCreateSlice';

function StartForm() {
	const dispatch = useDispatch();
	const inputColumnsRef = useRef<HTMLInputElement>(null);
	const inputRowsRef = useRef<HTMLInputElement>(null);
	const inputCellsRef = useRef<HTMLInputElement>(null);

	function submitHandler(event: any) {
		event.preventDefault();
		const initialParam = {
			rows: inputRowsRef.current?.value,
			columns: inputColumnsRef.current?.value,
			cells: inputCellsRef.current?.value,
		};
		dispatch(tableCreate(initialParam));
	}

	return (
		<div className={styles.startWindow}>
			<h1 className={styles.title}>Matrix builder</h1>
			<form onSubmit={submitHandler}>
				<label htmlFor="rowsInp">
					Enter the number of rows
					<input ref={inputRowsRef} type="number" id="rowsInp" name="rows" required />
				</label>

				<label htmlFor="columnsInp">
					Enter the number of columns
					<input ref={inputColumnsRef} type="number" id="columnsInp" name="columns" required />
				</label>

				<label htmlFor="cellsInp">
					Enter the number of cells
					<input ref={inputCellsRef} type="number" id="cellsInp" name="cells" required />
				</label>

				<button type="submit">Create Matrix</button>
			</form>
		</div>
	);
}

export default StartForm;
