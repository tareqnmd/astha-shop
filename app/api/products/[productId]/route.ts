import { productGenerate } from '@/lib/helper/common';
import products from '@/lib/products';

export async function GET(
	Req: Request,
	Par: {
		params: {
			productId: string;
		};
	}
) {
	const foundProduct = products.find(
		(prod) => prod.Id === Par.params.productId
	);
	return Response.json({
		data: foundProduct ? productGenerate(foundProduct) : undefined,
	});
}
