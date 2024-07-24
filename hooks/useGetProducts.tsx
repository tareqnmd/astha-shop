import { useAppSelector } from '@/store/hooks';
import { ProductListType } from '@/types/product';
import { useEffect, useState } from 'react';

export const useGetProducts = (products: ProductListType) => {
	const [productList, setProductList] = useState<ProductListType>([]);
	const [loading, setLoading] = useState(true);
	const { cartProducts = {} } = useAppSelector((state) => state.cart);
	const { productSearch = '' } = useAppSelector((state) => state.product);

	useEffect(() => {
		if (products?.length > 0) {
			const updateProducts = products.map((product) => {
				const foundQuantityInCart = cartProducts[product.productId];
				if (foundQuantityInCart) {
					return {
						...product,
						availableQuantity: product.availableQuantity - foundQuantityInCart,
					};
				} else {
					return product;
				}
			});
			setProductList(
				updateProducts.filter(
					(product) =>
						product.productName
							?.toLowerCase()
							?.includes(productSearch?.toLowerCase()) ||
						String(product?.price)?.includes(productSearch)
				)
			);
			setLoading(false);
		}
	}, [cartProducts, products, productSearch]);

	return { productList, loading };
};
