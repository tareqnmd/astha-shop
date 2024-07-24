'use client';

import { useGetCartItems } from '@/hooks/useGetCartItems';
import { ProductListType } from '@/types/product';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Cart = ({ products }: { products: ProductListType }) => {
	const productsForCart = useGetCartItems(products);
	return (
		<div className="flex flex-col gap-2 sm:w-[300px]">
			<strong className="text-xl">Cart Items</strong>
			{productsForCart.length > 0 ? (
				<>
					{productsForCart?.map((item, index) => (
						<CartItem
							cartItem={item}
							key={index}
						/>
					))}
					<CartTotal productsForCart={productsForCart} />
				</>
			) : (
				<span>Add items from product list</span>
			)}
		</div>
	);
};
export default Cart;
