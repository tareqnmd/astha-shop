import { useAppSelector } from '@/store/hooks';
import { ProductType } from '@/types/product';
import { useEffect, useState } from 'react';

export const useGetProduct = (product: ProductType) => {
	const [productData, setProductData] = useState<ProductType>();
	const { cartProducts = {} } = useAppSelector((state) => state.cart);

	useEffect(() => {
		if (product?.productId) {
			const foundQuantityInCart =
				Object.keys(cartProducts)?.length > 0
					? cartProducts[product.productId]
					: 0;
			setProductData({
				...product,
				availableQuantity:
					product.availableQuantity - (foundQuantityInCart ?? 0),
			});
		}
	}, [cartProducts, product]);

	return productData;
};
