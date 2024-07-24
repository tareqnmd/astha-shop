'use client';
import { useGetProducts } from '@/hooks/useGetProducts';
import { ProductListType } from '@/types/product';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import ProductsNotFound from './ProductsNotFound';

const ProductList = ({ products }: { products: ProductListType }) => {
	const { productList, loading } = useGetProducts(products);
	return (
		<div className="product-list grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			{productList?.length > 0 ? (
				productList?.map((product, index) => (
					<ProductCard
						product={product}
						key={index}
					/>
				))
			) : loading ? (
				<>
					<ProductSkeleton />
					<ProductSkeleton />
					<ProductSkeleton />
					<ProductSkeleton />
					<ProductSkeleton />
					<ProductSkeleton />
				</>
			) : (
				<ProductsNotFound />
			)}
		</div>
	);
};

export default ProductList;
