import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

type ProductSliceType = {
	productSearch: string;
};

const initialState: ProductSliceType = {
	productSearch: '',
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProductSearchValue: (state, action) => {
			try {
				state.productSearch = action.payload;
			} catch (error) {}
		},
	},
});

export const { setProductSearchValue } = productSlice.actions;
export const getCartState = (state: RootState): typeof initialState =>
	state.product;
export default productSlice;
