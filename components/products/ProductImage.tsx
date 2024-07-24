'use client';
import Image from 'next/image';

const ProductImage = ({ src, alt }: { alt: string; src: string }) => {
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
			className="object-contain transition-all opacity-0 duration-[0.5s] hover:scale-110"
			onLoadingComplete={(img) => img.classList.remove('opacity-0')}
			alt={alt}
		/>
	);
};

export default ProductImage;
