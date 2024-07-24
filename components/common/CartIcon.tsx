'use client';
import { useAppSelector } from '@/store/hooks';
import { FaCartShopping } from 'react-icons/fa6';

const CartIcon = () => {
	const { totalCartItems = 0 } = useAppSelector((state) => state.cart);
	return (
		<div className="relative">
			{totalCartItems > 0 ? (
				<span className="absolute top-[-10px] right-[-10px] bg-success rounded-full w-[18px] h-[18px] grid place-items-center overflow-hidden leading-[10px] text-[10px]">
					{totalCartItems}
				</span>
			) : null}
			<FaCartShopping />
		</div>
	);
};

export default CartIcon;
