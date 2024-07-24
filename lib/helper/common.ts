import { DefaultProductType } from '@/types/product';

export const moneyFormat = (amount: number, currency = 'USD', type = 'en-US') =>
	new Intl.NumberFormat(type, {
		style: 'currency',
		currency,
	}).format(amount);

export const productGenerate = (product: DefaultProductType) => {
	return {
		productId: product?.Id ?? '',
		productName: product?.Name ?? '',
		productImage: product?.FeaturedImageUrl ?? '',
		price: product?.ProductPrice?.Price ?? 0,
		previousPrice: product?.ProductPrice?.OldPrice ?? 0,
		discountedPrice:
			(product?.ProductPrice?.OldPrice ?? 0) -
			(product?.ProductPrice?.Price ?? 0),
		availableQuantity: 10,
	};
};
