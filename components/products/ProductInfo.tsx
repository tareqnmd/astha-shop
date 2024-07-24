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
			<div className="flex flex-wrap items-center gap-1">
				<strong>{moneyFormat(product?.price)}</strong>
				<s className="text-xs mx-1">{moneyFormat(product?.previousPrice)}</s>
				<span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded flex gap-1">
					SAVE {moneyFormat(product?.discountedPrice)}
				</span>
			</div>
		</>
	);
};

export default ProductInfo;
