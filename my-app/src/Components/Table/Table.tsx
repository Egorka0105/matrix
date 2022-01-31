import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './table.module.scss';
import TableBody from './TableBody/TableBody';
import TableHead from './TableHead/TableHead';
import TableAvg from './TableAvg/TableAvg';
import { RootState } from '../../store/store';
import { addRow } from '../../store/tableCreateSlice';

function Table() {
	const tableBody = useSelector((state: RootState) => state.tableStore.table);
	const dispatch = useDispatch();

	return (
		<div className={styles.tableDivMajor}>
			{!!tableBody.length && (
				<div className={styles.tableDiv}>
					<div className={styles.mainTable}>
						<button
							className={styles.addRowBtn}
							onClick={() => {
								dispatch(
									addRow({
										rowLength: tableBody[0].length,
										cells: tableBody[0][0].cells,
									})
								);
							}}
							type="button"
							name="addRow"
						>
							Add row
						</button>
						<div className={styles.table}>
							<TableHead />
							<TableBody />
							<TableAvg />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Table;
