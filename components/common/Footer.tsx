import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="bg-secondary">
			<div className="container flex items-center justify-between flex-col sm:flex-row py-[20px] gap-2">
				<Link
					className="text-xl font-bold"
					href="/products"
				>
					Shop
				</Link>
				<p>© 2024 Shop by Tareq. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
