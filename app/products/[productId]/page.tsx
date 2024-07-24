import SingleProduct from '@/components/products/SingleProduct';
import { baseFetch } from '@/lib/helper/api';
import { notFound } from 'next/navigation';

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}) {
	const { data } = await baseFetch(`api/products/${params.productId}`);
	return {
		title: data?.productName ?? 'Product',
		description: data?.description ?? 'Product',
		openGraph: {
			images: data?.productImage ?? '',
		},
	};
}

const getData = async (id: string) => {
	try {
		const { data } = await baseFetch(`api/products/${id}`, {
			next: {
				revalidate: 40000,
			},
		});
		if (!data) {
			throw new Error('Product not Found');
		}
		return data;
	} catch (error: any) {
		if (error?.message === 'Product not Found') {
			notFound();
		}
	}
};
const Page = async ({
	params,
}: {
	params: {
		productId: string;
	};
}) => {
	const product = await getData(params.productId);
	return product ? <SingleProduct product={product} /> : null;
};

export default Page;
