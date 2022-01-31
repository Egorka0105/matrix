export interface initialParam {
	rows: number;
	columns: number;
	cells: number;
}

export interface obj {
	id: number;
	amount: number;
	percentActive: boolean;
	percent: number;
	parentRowSum: number;
	key: string;
	nearest: boolean;
	delta: number;
	cells: number;
}
