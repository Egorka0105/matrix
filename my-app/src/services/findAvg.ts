import { Cell, ISimpleCell } from './interfaces';
import { findSum } from './findSum';

export const findAvg = (arr: Cell[][]): ISimpleCell[] => {
	const colLength = arr[0].length;
	const rowLength = arr.length;
	const finalArr: ISimpleCell[] = [];

	for (let colCount = 0; colCount < colLength; colCount += 1) {
		const rowArr: Cell[] = [];
		for (let rowCount = 0; rowCount < rowLength; rowCount += 1) {
			rowArr[rowCount] = arr[rowCount][colCount];
		}
		finalArr[colCount] = {
			id: colCount,
			amount: +(findSum(rowArr) / rowLength).toFixed(0),
			percentActive: false,
			percent: 0,
			parentRowSum: 0,
		};
	}
	const sum = findSum(finalArr);

	finalArr.forEach(el => {
		el.percent = Math.round((el.amount * 100) / sum);
		el.parentRowSum = sum;
	});
	return finalArr;
};
