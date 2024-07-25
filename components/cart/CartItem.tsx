import { CartProductType } from '@/types/product';
import ProductImage from '../products/ProductImage';
import CartItemRemove from './CartItemRemove';

const CartItem = ({ cartItem }: { cartItem: CartProductType }) => {
	const { price, productId, productImage, productName, addedQuantity } =
		cartItem;

	return (
		<div className="flex items-center gap-2 bg-secondary p-2 rounded-lg shadow relative hover:shadow-lg">
			<div className="w-[50px] h-[50px] overflow-hidden shrink-0 ">
				<ProductImage
					src={productImage}
					alt={productName}
					extraClass="rounded-lg object-cover rounded-lg hover:scale-100"
				/>
			</div>
			<div className="flex flex-col flex-grow word-break-word">
				<span className="text-[14px] leading-[16px]">{productName}</span>
				<div className="text-[14px] flex items-center gap-1">
					<span>{addedQuantity}</span>
					<span>x</span>
					<span>{price}</span>
				</div>
			</div>
			<strong className="self-end text-[14px]">{addedQuantity * price}</strong>
			<CartItemRemove
				addedQuantity={addedQuantity}
				productId={productId}
			/>
		</div>
	);
};

export default CartItem;
