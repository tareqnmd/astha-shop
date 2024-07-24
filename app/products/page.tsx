import Cart from '@/components/cart/Cart';
import Products from '@/components/products/Products';
import { baseFetch } from '@/lib/helper/api';
async function getData() {
	try {
		const { data = [] } = await baseFetch('api/products', {
			next: {
				revalidate: 0,
			},
		});
		return data;
	} catch (error) {
		console.log(error);
	}
}

const Page = async () => {
	const products = await getData();
	return (
		<section className="grid grid-cols-1 sm:grid-cols-[2fr_auto_auto] gap-4 min-h-full">
			<Products products={products} />
			<div className="divider border-l hidden sm:block"></div>
			<Cart products={products} />
		</section>
	);
};

export default Page;
