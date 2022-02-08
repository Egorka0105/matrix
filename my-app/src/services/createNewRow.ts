import { nanoid } from 'nanoid';
import { ICell, IInitNewCell } from './interfaces';
import { createPercent } from './createPercent';

export default function createNewRow(initialObj: IInitNewCell) {
	const data: ICell[] | any[] = [];

	for (let i = 0; i < initialObj.rowLength; i += 1) {
		data.push({
			id: i,
			amount: Math.floor(Math.random() * 1000),
			percentActive: false,
			percent: 0,
			parentRowSum: 0,
			key: nanoid(),
			nearest: false,
			delta: 0,
			cells: initialObj.cells,
		});
	}
	createPercent(data);

	return data;
}
