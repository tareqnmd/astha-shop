import { removeProductFromCart } from '@/store/features/cart/slice';
import { useAppDispatch } from '@/store/hooks';
import { FaTimes } from 'react-icons/fa';

const CartItemRemove = ({
	productId,
	addedQuantity,
}: {
	addedQuantity: number;
	productId: string;
}) => {
	const dispatch = useAppDispatch();
	const removeCartItem = () => {
		dispatch(removeProductFromCart(productId));
	};
	return (
		<button
			onClick={removeCartItem}
			className="absolute top-1 right-1 bg-black transition hover:bg-danger text-white hover:text-textPrimary rounded-full grid place-items-center w-[20px] h-[20px] leading-[10px] text-[10px]"
		>
			<FaTimes />
		</button>
	);
};

export default CartItemRemove;
