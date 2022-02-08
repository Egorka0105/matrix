import { ICell } from './interfaces';

export const cells = (arr, currentObj) => {
	const cloneArr = JSON.parse(JSON.stringify(arr));

	const resultArr: ICell[] = [].concat(...cloneArr);

	const final = resultArr.filter(el => currentObj.key !== el.key);

	const count = final.map(el => {
		el.delta = Math.abs(el.amount - currentObj.amount);
		return el;
	});

	count.sort((a, b) => {
		if (a.delta > b.delta) return 1;
		if (a.delta < b.delta) return -1;
		return 0;
	});

	return count.slice(0, count[0].cells);
};
