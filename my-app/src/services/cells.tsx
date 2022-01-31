import { obj } from './interfaces';

export const cells = (arr, currentObj) => {
	// cloned arr to fix a typescript mistake
	const cloneArr = JSON.parse(JSON.stringify(arr));

	const resultArr: obj[] = [].concat(...cloneArr);

	// filter arr without onMouseEnter element
	const final = resultArr.filter(el => currentObj.key !== el.key);

	// find delta in arr
	const count = final.map(el => {
		el.delta = Math.abs(el.amount - currentObj.amount);
		return el;
	});

	count.sort((a, b) => {
		if (a.delta > b.delta) return 1;
		if (a.delta < b.delta) return -1;
		return 0;
	});

	// return {} in [] how many cells i have
	return count.slice(0, count[0].cells);
};
