'use client';
import { useDebounce } from '@/hooks/useDebounce';
import { setProductSearchValue } from '@/store/features/product/slice';
import { useAppDispatch } from '@/store/hooks';
import { ChangeEvent, useEffect, useState } from 'react';

const ProductSearch = () => {
	const [searchText, setSearchText] = useState('');
	const debouncedText = useDebounce(searchText, 500);
	const dispatch = useAppDispatch();
	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value ?? '');
	};

	useEffect(() => {
		dispatch(setProductSearchValue(debouncedText));
	}, [debouncedText, dispatch]);

	return (
		<input
			placeholder="Search Product"
			className="rounded px-2 py-1 border border-textPrimary"
			onChange={searchHandler}
			type="text"
		/>
	);
};

export default ProductSearch;
