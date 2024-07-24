'use client';
import { moneyFormat } from '@/lib/helper/common';
import { cn } from '@/lib/utils';
import { ProductType } from '@/types/product';

const ProductInfo = ({ product }: { product: ProductType }) => {
	return (
		<>
			<span className="mb-auto word-break-word">{product?.productName}</span>
			<span
				className={cn(
					'w-max px-2 rounded',
					product?.availableQuantity > 0 ? 'bg-success' : 'bg-danger'
				)}
			>
				In Stock <strong>{product?.availableQuantity}</strong>
			</span>
			<strong>{moneyFormat(product?.price)}</strong>
		</>
	);
};

export default ProductInfo;
