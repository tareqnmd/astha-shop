'use client';
import { cn } from '@/lib/utils';
import { addProductToCart } from '@/store/features/cart/slice';
import { useAppDispatch } from '@/store/hooks';
import { ProductType } from '@/types/product';
import { PointerEvent } from 'react';

const ProductAddToCart = ({
	product,
	extraClass,
}: {
	product: ProductType;
	extraClass?: string;
}) => {
	const { availableQuantity } = product;
	const dispatch = useAppDispatch();
	const addToCartHandler = (e: PointerEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(addProductToCart(product));
	};

	return (
		<button
			onClick={addToCartHandler}
			className={cn(
				'bg-secondary p-2 transition-all',
				availableQuantity > 0
					? 'hover:bg-black hover:text-white'
					: 'cursor-not-allowed bg-danger',
				extraClass
			)}
			disabled={!(availableQuantity > 0)}
		>
			{availableQuantity > 0 ? 'Add to Cart' : 'Out of Stock'}
		</button>
	);
};

export default ProductAddToCart;
