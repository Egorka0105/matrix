import { configureStore } from '@reduxjs/toolkit';
import createTableReduser from './tableCreateSlice';

const store = configureStore({
	reducer: {
		tableStore: createTableReduser,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
