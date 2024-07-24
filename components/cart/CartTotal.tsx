import { moneyFormat } from '@/lib/helper/common';
import { CartProductsType } from '@/types/product';

const CartTotal = ({
	productsForCart,
}: {
	productsForCart: CartProductsType;
}) => {
	const totalPrice = productsForCart?.reduce(
		(acc, prod) => acc + (prod?.price ?? 0) * (prod?.addedQuantity ?? 0),
		0
	);

	return (
		<div className="mt-2 flex flex-col gap-2">
			<hr />
			<div className="flex items-center justify-between">
				<span>Subtotal</span>
				<strong>{moneyFormat(totalPrice)}</strong>
			</div>
			<div className="flex items-center justify-between">
				<span>Discount</span>
				<strong>{moneyFormat(0)}</strong>
			</div>
			<hr />
			<div className="flex items-center justify-between">
				<span>Total</span>
				<strong>{moneyFormat(totalPrice)}</strong>
			</div>
		</div>
	);
};

export default CartTotal;
