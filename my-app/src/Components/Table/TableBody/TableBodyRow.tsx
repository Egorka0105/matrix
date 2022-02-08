import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import cn from 'classnames';
import { removeRow, increment } from 'store/tableCreateSlice';
import logo from 'assets/img/removeRow.svg';
import { findSum } from 'services/findSum';
import styles from './tableBody.module.scss';

function TableBodyRow({ arr, rowArr, id, checkCells, hideAllCells }) {
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
			{/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
			<button className={styles.removeRow} role="button" type="button" onClick={() => dispatch(removeRow(id))}>
				<img src={logo} alt="removeRow" height={20} width={20} />
			</button>
		</div>
	);
}

export default TableBodyRow;
