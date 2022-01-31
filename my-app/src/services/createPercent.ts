import { obj } from './interfaces';
import { findSum } from './findSum';

export function createPercent(arr: obj[]) {
	const sum: number = findSum(arr);

	arr.forEach(el => {
		el.parentRowSum = sum;
		el.percent = Math.round((el.amount * 100) / sum);
	});
}
