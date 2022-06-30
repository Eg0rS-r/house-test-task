import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHouses = createAsyncThunk(
	"houses/fetchHouses",
	async () => {
		const { data } = await axios.get(
			`https://62bdb7c6bac21839b609c631.mockapi.io/houses`
		);
		return data;
	}
);

export const updateHouseStatus = createAsyncThunk(
	"houses/updateHouse",
	async ({ id, isReady }) => {
		const { data } = await axios.put(
			`https://62bdb7c6bac21839b609c631.mockapi.io/houses/${id}`,
			{ isReady }
		);
		return data;
	}
);

const initialState = {
	houses: [],
	status: 'LOADING',
};

const housesSlice = createSlice({
	name: "houses",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// FETCH HOUSES
		builder.addCase(fetchHouses.pending, (state) => {
			state.houses = [];
			state.status = 'LOADING';
		});

		builder.addCase(fetchHouses.fulfilled, (state, action) => {
			state.houses = action.payload;
			state.status = 'SUCCESS';
		});

		builder.addCase(fetchHouses.rejected, (state) => {
			state.houses = [];
			state.status = 'ERROR';
		});

		// UPDATE HOUSE
		builder.addCase(updateHouseStatus.pending, (state, action) => {
			state.houses.find(item => item.id === action.meta.arg.id).isReady = action.meta.arg.isReady
			state.status = 'LOADING';
		});
		
		builder.addCase(updateHouseStatus.fulfilled, (state) => {
			state.status = 'SUCCESS';
		});
		
		builder.addCase(updateHouseStatus.rejected, (state, action) => {
			state.houses.find(item => item.id === action.meta.arg.id).isReady = !(action.meta.arg.isReady)
			state.status = 'ERROR';
		});
	},
});

export const selectHouses = (state) => state.houses.houses;
export const selectStatus = (state) => state.houses.status;

export default housesSlice.reducer;
