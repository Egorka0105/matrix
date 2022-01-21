import React from 'react';
import styles from './table.module.scss';
import TableBody from './TableBody/TableBody';
import TableHead from './TableHead';

function Table() {
	return (
		<div className={styles.tableDiv}>
			<button className={styles.addRow} type="button" name="addRow">
				Add
			</button>
			<table className={styles.table}>
				<TableHead />
				<TableBody />
			</table>
		</div>
	);
}

export default Table;
