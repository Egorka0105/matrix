/* eslint-disable no-unused-vars */
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import cn from 'classnames';
import logo from '../../../assets/img/removeRow.svg';
import { removeRow, increment } from '../../../store/tableCreateSlice';
import styles from './tableBody.module.scss';
import { findSum } from '../../../services/findSum';
import { Cell } from '../../../services/interfaces';

type TableBodyRowProps = {
	arr: Array<Array<Cell>>;
	rowArr: Array<Cell>;
	id: number;
	checkCells: (arr: Array<Array<Cell>>, el: Cell) => void;
	hideAllCells: () => void;
};

// eslint-disable-next-line react/function-component-definition
const TableBodyRow: FC<TableBodyRowProps> = ({ arr, rowArr, id, checkCells, hideAllCells }) => {
	const dispatch = useDispatch();

	const rowArrClone = rowArr.map(el => {
		return { ...el };
	});
	const [checking, setChecking] = useState(rowArrClone);

	function check(bool) {
		setChecking(
			checking.map(el => {
				if (el.percentActive !== bool) el.percentActive = bool;
				return el;
			})
		);
	}

	const td = checking.map(el => {
		return (
			<div // eslint-disable-line jsx-a11y/no-static-element-interactions
				onKeyDown={() => {}}
				onClick={() => dispatch(increment(rowArr[el.id]))}
				onMouseEnter={() => {
					checkCells(arr, el);
				}}
				onMouseLeave={() => {
					hideAllCells();
				}}
				key={nanoid()}
				style={
					el.percentActive
						? { background: `linear-gradient(0deg, red ${el.percent}%, white ${el.percent}%)` }
						: undefined
				}
				className={cn(styles.td, { [styles.tdNearest]: el.nearest })}
			>
				{el.percentActive ? `${el.percent}%` : el.amount}
			</div>
		);
	});

	return (
		<div className={styles.tr}>
			<div className={styles.tdFirst}>{id + 1}</div>
			{td}
			<div className={styles.tdSum} onMouseLeave={() => check(false)} onMouseEnter={() => check(true)}>
				{findSum(rowArr)}
			</div>
			<button className={styles.removeRow} role="button" type="button" onClick={() => dispatch(removeRow(id))}>{/* eslint-disable-line */}

				<img src={logo} alt="removeRow" height={20} width={20} />
			</button>
		</div>
	);
};

export default TableBodyRow;
