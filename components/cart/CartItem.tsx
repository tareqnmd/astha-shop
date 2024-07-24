import { CartProductType } from '@/types/product';
import Image from 'next/image';
import CartItemRemove from './CartItemRemove';

const CartItem = ({ cartItem }: { cartItem: CartProductType }) => {
	const { price, productId, productImage, productName, addedQuantity } =
		cartItem;

	return (
		<div className="flex items-center gap-2 bg-secondary p-2 rounded-lg shadow relative hover:shadow-lg">
			<Image
				src={productImage}
				alt={productName}
				width={50}
				height={50}
				className="w-[50px] h-[50px] object-cover rounded-lg shrink-0"
			/>
			<div className="flex flex-col flex-grow word-break-word">
				<span className="text-[16px] leading-[16px]">{productName}</span>
				<div className="flex items-center gap-1">
					<span>{addedQuantity}</span>
					<span>x</span>
					<span>{price}</span>
				</div>
			</div>
			<strong className="self-end">{addedQuantity * price}</strong>
			<CartItemRemove
				addedQuantity={addedQuantity}
				productId={productId}
			/>
		</div>
	);
};

export default CartItem;
