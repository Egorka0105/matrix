import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import tableCreator from 'services/tableCreator';
import createNewRow from 'services/createNewRow';
import { ICell, IInitialParam, IInitNewCell } from 'services/interfaces';

interface initialState {
	table: ICell[][] | [];
}

// eslint-disable-next-line no-redeclare
const initialState: initialState = {
	table: [],
};

const table = createSlice({
	name: 'table',
	initialState,
	reducers: {
		tableCreate(state, action: PayloadAction<IInitialParam>) {
			state.table = tableCreator(action.payload);
		},
		addRow(state, action: PayloadAction<IInitNewCell>) {
			// @ts-ignore
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
