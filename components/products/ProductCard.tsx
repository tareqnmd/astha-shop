import { cn } from '@/lib/utils';
import { ProductType } from '@/types/product';
import Link from 'next/link';
import ProductAddToCart from './ProductAddToCart';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const ProductCard = ({ product }: { product: ProductType }) => {
	const { productId, availableQuantity, productName, productImage, price } =
		product;
	return (
		<div
			className={cn(
				'shadow-md rounded grid overflow-hidden border hover:shadow-lg',
				availableQuantity > 0 ? 'border-secondary' : 'border-danger'
			)}
		>
			<Link
				className="h-[200px] overflow-hidden"
				href={`products/${productId}`}
			>
				<ProductImage
					src={productImage}
					alt={productName}
				/>
			</Link>
			<Link
				href={`products/${productId}`}
				className="flex flex-col h-full gap-1 p-2"
			>
				<ProductInfo product={product} />
			</Link>
			<ProductAddToCart product={product} />
		</div>
	);
};

export default ProductCard;
