import Link from 'next/link';

const NotFound = ({ message = 'Not Found!!!' }: { message?: string }) => {
	return (
		<main className="grid place-items-center h-full bg-primary text-textPrimary">
			<div className="text-center">
				<h2>{message}</h2>
				<Link
					className="underline text-blue-700"
					href="/products"
				>
					Go to Products
				</Link>
			</div>
		</main>
	);
};

export default NotFound;
