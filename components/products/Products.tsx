import { ProductListType } from '@/types/product';
import ProductList from './ProductList';
import ProductSearch from './ProductSearch';
import ProductTitle from './ProductTitle';

const Products = ({ products }: { products: ProductListType }) => {
	return (
		<div className="flex flex-col gap-2">
			<ProductTitle>
				<ProductSearch />
			</ProductTitle>
			<ProductList products={products} />
		</div>
	);
};

export default Products;
