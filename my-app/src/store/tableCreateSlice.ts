import { createSlice, Slice, SliceCaseReducers } from '@reduxjs/toolkit';
import tableCreator from '../services/tableCreator';
import createNewRow from '../services/createNewRow';

const table: Slice<any, SliceCaseReducers<any>, string> = createSlice({
	name: 'table',
	initialState: {
		table: [],
	},
	reducers: {
		tableCreate(state, action) {
			state.table = tableCreator(action.payload);
		},
		addRow(state, action) {
			state.table.push(createNewRow(action.payload));
		},
		removeRow(state, action) {
			state.table = state.table.filter((item, i) => i !== action.payload);
		},
		increment(state, action) {
			state.table.map(el => {
				el.map(item => {
					if (item.key === action.payload.key) {
						item.amount += 1;
					}
					return item;
				});
				return el;
			});
		},
	},
});

export const { tableCreate, addRow, removeRow, increment } = table.actions;
export default table.reducer;
