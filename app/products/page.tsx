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
	return <></>;
};

export default Page;
