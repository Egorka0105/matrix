import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import styles from './tableHead.module.scss';
import { RootState } from '../../../store/store';

// eslint-disable-next-line react/function-component-definition
const TableHead: FC = () => {
	const tableHead = useSelector((state: RootState) => state.tableStore.table);

	const th = tableHead[0].map((el, i) => {
		return (
			<div key={nanoid()} className={styles.th}>
				{i + 1}
			</div>
		);
	});

	return (
		<div className={styles.tableHead}>
			<div className={styles.tr}>
				<div className={styles.thNumber}>№</div>
				{th}
				<div className={styles.thSum}>Sum</div>
				<div className={styles.empty} />
			</div>
		</div>
	);
};

export default TableHead;
