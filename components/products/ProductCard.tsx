import { cn } from '@/lib/utils';
import { ProductType } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import ProductAddToCart from './ProductAddToCart';
import ProductInfo from './ProductInfo';

const ProductCard = ({ product }: { product: ProductType }) => {
	const { productId, availableQuantity, productName, productImage, price } =
		product;
	return (
		<div
			className={cn(
				'shadow-md rounded flex flex-col overflow-hidden border hover:shadow-lg',
				availableQuantity > 0 ? 'border-secondary' : 'border-danger'
			)}
		>
			<Link href={`products/${productId}`}>
				<Image
					src={productImage}
					alt={productName}
					width={200}
					height={200}
					className="w-full max-h-[200px] object-cover"
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
