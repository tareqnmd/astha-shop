import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

type CartType = {
	totalCartItems: number;
	cartProducts: any;
};

const initialState: CartType = {
	totalCartItems: 0,
	cartProducts: {},
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, action) => {
			try {
				if (state.cartProducts[action.payload.productId]) {
					state.cartProducts[action.payload.productId] =
						state.cartProducts[action.payload.productId] + 1;
				} else {
					state.cartProducts = {
						...state.cartProducts,
						[action.payload.productId]: 1,
					};
				}
				state.totalCartItems += 1;
			} catch (error) {}
		},
		removeProductFromCart: (state, action) => {
			state.totalCartItems -= state.cartProducts[action.payload];
			state.cartProducts[action.payload] = 0;
		},
	},
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export const getCartState = (state: RootState): typeof initialState =>
	state.cart;
export default cartSlice;
