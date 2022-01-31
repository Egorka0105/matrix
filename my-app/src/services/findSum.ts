import { obj } from './interfaces';

export const findSum = function (arr: obj[]) {
	const initialValue: number = 0;
	return arr.reduce((accumulator: number, currentValue: obj) => accumulator + currentValue.amount, initialValue);
};
