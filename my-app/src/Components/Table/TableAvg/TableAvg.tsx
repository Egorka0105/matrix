import React, { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { RootState } from 'store/store';
import { findAvg } from 'services/findAvg';
import styles from './tableAvg.module.scss';

// eslint-disable-next-line react/function-component-definition
const TableAvg: FC = () => {
	const avg = useSelector((state: RootState) => state.tableStore.table);
	const avgArr = useMemo(() => findAvg(avg), [avg]);

	const [avgPercent, setAvgPercent] = useState(avgArr);

	useEffect(() => {
		setAvgPercent(avgArr);
	}, [avg]);

	function checkAvg(bool) {
		setAvgPercent(
			avgPercent.map(el => {
				if (el.percentActive !== bool) el.percentActive = bool;
				return el;
			})
		);
	}

	return (
		<div className={styles.tableAvg}>
			<div className={styles.tdFirst}>Avg</div>
			{avgPercent.map(el => {
				return (
					<div
						key={nanoid()}
						className={styles.td}
						style={
							el.percentActive
								? {
										background: `linear-gradient(0deg, red ${el.percent}%, white ${el.percent}%)`,
										color: '#000',
								  }
								: undefined
						}
					>
						{el.percentActive ? `${el.percent}%` : el.amount}
					</div>
				);
			})}

			<div
				className={styles.tdSum}
				onMouseEnter={() => {
					checkAvg(true);
				}}
				onMouseLeave={() => {
					checkAvg(false);
				}}
			>
				{avgPercent[0].parentRowSum}
			</div>
			<div className={styles.empty} />
		</div>
	);
};

export default TableAvg;
