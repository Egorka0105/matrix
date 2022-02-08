import { configureStore } from '@reduxjs/toolkit';
import tableReduсer from './tableCreateSlice';

const store = configureStore({
	reducer: {
		tableStore: tableReduсer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
