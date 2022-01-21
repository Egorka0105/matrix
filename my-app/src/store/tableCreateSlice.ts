import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const Table = createSlice({
	name: 'table',
	initialState: {
		table: [],
	},
	reducers: {
		tableCreate(state, action) {
			const data: any = [];
			for (let row: number = 0; row < action.payload.columns; row += 1) {
				data.push([]);
				for (let col: number = 0; col < action.payload.rows; col += 1) {
					data[row].push({
						id: nanoid(),
						amount: Math.floor(Math.random() * 1000),
					});
				}
			}
			state.table = data;
		},
	},
});

export const { tableCreate } = Table.actions;
export default Table.reducer;
