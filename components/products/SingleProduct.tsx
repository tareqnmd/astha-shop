import { ProductType } from '@/types/product';
import ProductImage from './ProductImage';
import SingleProductDetails from './SingleProductDetails';

const SingleProduct = ({ product }: { product: ProductType }) => {
	const { productName, productImage } = product;
	return (
		<div className="flex flex-col gap-4">
			<div className="h-[50dvh]">
				<ProductImage
					alt={productName}
					src={productImage}
				/>
			</div>
			<SingleProductDetails product={product} />
		</div>
	);
};

export default SingleProduct;
