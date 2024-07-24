import { ProductType } from '@/types/product';
import Image from 'next/image';
import SingleProductDetails from './SingleProductDetails';

const SingleProduct = ({ product }: { product: ProductType }) => {
	const { productName, productImage } = product;
	return (
		<div className="flex flex-col gap-4">
			<Image
				src={productImage}
				alt={productName}
				width={200}
				height={200}
				className="w-full h-[300px] object-contain rounded bg-secondary"
			/>
			<SingleProductDetails product={product} />
		</div>
	);
};

export default SingleProduct;
