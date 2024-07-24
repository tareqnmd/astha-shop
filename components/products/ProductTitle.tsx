import { ReactNode } from 'react';

const ProductTitle = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex items-center justify-between gap-2 flex-wrap">
			<strong className="text-xl">Product List</strong>
			{children}
		</div>
	);
};

export default ProductTitle;
