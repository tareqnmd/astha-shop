import { productGenerate } from '@/lib/helper/common';
import products from '@/lib/products';

export async function GET() {
	return Response.json({ data: products.map((prod) => productGenerate(prod)) });
}
