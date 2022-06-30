import { configureStore } from '@reduxjs/toolkit';

import houses from './slices/housesSlice';

export const store = configureStore({
  reducer: {
		houses,
	},
});