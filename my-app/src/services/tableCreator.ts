import { nanoid } from 'nanoid';
import { initialParam, Cell } from './interfaces';
import { createPercent } from './createPercent';

const tableCreator = (object: initialParam): Cell[][] => {
	const data: Cell[][] = [];
	for (let row = 0; row < object.rows; row += 1) {
		data.push([]);
		for (let col = 0; col < object.columns; col += 1) {
			data[row].push({
				id: col,
				amount: Math.floor(Math.random() * (999 - 100) + 100),
				percentActive: false,
				percent: 0,
				parentRowSum: 0,
				key: nanoid(),
				nearest: false,
				delta: 0,
				cells: +object.cells,
			});
		}
		createPercent(data[row]);
	}

	return data;
};
export default tableCreator;
