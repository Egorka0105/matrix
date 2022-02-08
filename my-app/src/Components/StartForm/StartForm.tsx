import { FC, FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { tableCreate } from 'store/tableCreateSlice';
import { IInitialParam } from 'services/interfaces';
import styles from './StartFormStyle.module.scss';

// eslint-disable-next-line react/function-component-definition
const StartForm: FC = () => {
	const dispatch = useDispatch();
	const inputColumnsRef = useRef<HTMLInputElement>(null);
	const inputRowsRef = useRef<HTMLInputElement>(null);
	const inputCellsRef = useRef<HTMLInputElement>(null);

	function submitHandler(event: FormEvent): void {
		event.preventDefault();
		const initialParam: IInitialParam = {
			rows: Number(inputRowsRef.current?.value),
			columns: Number(inputColumnsRef.current?.value),
			cells: Number(inputCellsRef.current?.value),
		};
		dispatch(tableCreate(initialParam));
	}

	return (
		<div className={styles.startWindow}>
			<h1 className={styles.title}>Matrix builder</h1>
			<form onSubmit={submitHandler}>
				<label htmlFor="rowsInp">
					Enter the number of rows
					<input ref={inputRowsRef} min={1} max={10} type="number" id="rowsInp" name="rows" required />
				</label>

				<label htmlFor="columnsInp">
					Enter the number of columns
					<input ref={inputColumnsRef} min={1} max={10} type="number" id="columnsInp" name="columns" required />
				</label>

				<label htmlFor="cellsInp">
					Enter the number of cells
					<input ref={inputCellsRef} min={1} max={10} type="number" id="cellsInp" name="cells" required />
				</label>

				<button type="submit">Create Matrix</button>
			</form>
		</div>
	);
};

export default StartForm;
