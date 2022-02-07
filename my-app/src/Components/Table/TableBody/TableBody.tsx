import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { RootState } from '../../../store/store';
import TableBodyRow from './TableBodyRow';
import styles from './tableBody.module.scss';
import { cells } from '../../../services/cells';

function TableBody() {
	const tableBody = useSelector((state: RootState) => state.tableStore.table);
	const [findCells, setFindCells] = useState(tableBody);

	useEffect(() => {
		setFindCells(tableBody);
	}, [tableBody]);

	function checkCells(array, el) {
		const count = cells(array, el);
		const data = findCells.map(elem => {
			return elem.map(item =>
				count.some(element => element.amount === item.amount) ? { ...item, nearest: true } : { ...item }
			);
		});
		setFindCells(data);
	}

	function hideAllCells() {
		const data = findCells.map(row => {
			return row.map(item => ({ ...item, nearest: false }));
		});
		setFindCells(data);
	}

	const bodyTr = findCells.map((el, i) => {
		/* eslint-disable */
		return (
			<TableBodyRow
				key={nanoid()}
				arr={findCells}
				rowArr={el}
				id={i}
				checkCells={checkCells}
				hideAllCells={hideAllCells}
			/>
		);
	});

	return <div className={styles.tableBody}>{bodyTr}</div>;
}

export default TableBody;
