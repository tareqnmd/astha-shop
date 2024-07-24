import apiSlice from '@/store/features/api';
import storage from '@/store/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import cartSlice from './features/cart/slice';
import productSlice from './features/product/slice';

const persistConfig = {
	key: 'shop',
	version: 1,
	storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	[apiSlice.reducerPath]: apiSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[productSlice.name]: productSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares({
			serializableCheck: false,
		}).concat(apiSlice.middleware),
});

const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const persistor = persistStore(store);
export default store;
