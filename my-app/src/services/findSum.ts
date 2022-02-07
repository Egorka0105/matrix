import { Cell, ISimpleCell } from './interfaces';

export const findSum = (arr: Cell[] | ISimpleCell[]) => {
	const initialValue: number = 0;
	return arr.reduce(
		(accumulator: number, currentValue: Cell | ISimpleCell): number => accumulator + currentValue.amount,
		initialValue
	);
};
