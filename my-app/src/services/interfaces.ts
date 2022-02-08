export interface IInitialParam {
	rows: number;
	columns: number;
	cells: number;
}

export interface ISimpleCell {
	id: number;
	amount: number;
	percentActive: boolean;
	percent: number;
	parentRowSum: number;
}

export interface ICell extends ISimpleCell {
	key: string;
	nearest: boolean;
	delta: number;
	cells: number;
}

export interface IInitNewCell {
	rowLength: number;
	cells: number;
}
