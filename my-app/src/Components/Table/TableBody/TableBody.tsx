import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import TableBodyRow from './TableBodyRow';

function TableBody() {
	const tableBody: any = useSelector((state: RootState) => state.tableStore.table);

	console.log(tableBody);

	return (
		<tbody>
			{/* map */}
			<TableBodyRow />
		</tbody>
	);
}

export default TableBody;
