import { useAppSelector } from '@/store/hooks';
import {
	CartProductsType,
	ProductListType,
	ProductType,
} from '@/types/product';
import { useEffect, useState } from 'react';

export const useGetCartItems = (products: ProductListType) => {
	const { cartProducts = {} } = useAppSelector((state) => state.cart);
	const [productsForCart, setProductsForCart] = useState<CartProductsType>([]);
	useEffect(() => {
		const cartItemIds = Object.keys(cartProducts);
		if (cartItemIds?.length > 0) {
			const cartItems: CartProductsType = [];
			products.forEach((prod: ProductType) => {
				if (cartItemIds.includes(prod.productId)) {
					const { availableQuantity, ...rest } = prod;
					if (cartProducts[prod.productId]) {
						cartItems.push({
							...rest,
							addedQuantity: cartProducts[prod.productId],
						});
					}
				}
			});
			setProductsForCart(cartItems);
		}
	}, [cartProducts, products]);

	return productsForCart;
};
