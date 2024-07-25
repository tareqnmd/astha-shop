'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const ProductImage = ({
	src,
	alt,
	extraClass,
}: {
	alt: string;
	src: string;
	extraClass?: string;
}) => {
	return (
		<Image
			src={src}
			width="0"
			height="0"
			sizes="100vw"
			style={{
				width: '100%',
				height: '100%',
			}}
			className={cn(
				'object-contain transition-all opacity-0 duration-[0.5s] hover:scale-110',
				extraClass
			)}
			onLoadingComplete={(img) => img.classList.remove('opacity-0')}
			alt={alt}
		/>
	);
};

export default ProductImage;
