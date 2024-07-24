import AppLayout from '@/components/core/AppLayout';
import { cn } from '@/lib/utils';
import '@/styles/global.scss';
import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';

const font = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: {
		template: '%s | Shop',
		default: 'Shop',
	},
	description: 'Shop by Tareq',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn('antialiased', font.className)}>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	);
}
