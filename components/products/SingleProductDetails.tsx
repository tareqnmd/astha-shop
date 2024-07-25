'use client';
import { useGetProduct } from '@/hooks/useGetProduct';
import { ProductType } from '@/types/product';
import ProductAddToCart from './ProductAddToCart';
import ProductInfo from './ProductInfo';

const SingleProductDetails = ({ product }: { product: ProductType }) => {
	const productData = useGetProduct(product);
	return productData ? (
		<div className="flex flex-col gap-2">
			<ProductInfo product={productData} />
			<ProductAddToCart
				extraClass="max-w-[200px] rounded-lg bg-gray-600 text-white mt-4"
				product={productData}
			/>
		</div>
	) : null;
};

export default SingleProductDetails;
