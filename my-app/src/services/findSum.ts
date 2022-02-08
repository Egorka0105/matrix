import { ICell, ISimpleCell } from './interfaces';

export const findSum = (arr: ISimpleCell[] | ICell[]): number => {
	const initialValue: number = 0;
	// @ts-ignore
	return arr.reduce(
		(accumulator: number, currentValue: ISimpleCell) => accumulator + currentValue.amount,
		initialValue
	);
};
