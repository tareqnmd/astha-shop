'use client';
import Link from 'next/link';
import Cart from './Cart';
const Navbar = () => {
	return (
		<nav className="bg-secondary">
			<div className="container py-[10px] xl:py-[20px] flex items-center justify-between gap-8 font-[400]">
				<Link
					className="text-xl font-bold"
					href="/products"
				>
					Shop
				</Link>
				<Cart />
			</div>
		</nav>
	);
};

export default Navbar;
