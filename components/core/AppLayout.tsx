'use client';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { Toaster } from 'sonner';
import StoreProvider from './StoreProvider';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<StoreProvider>
			<Toaster richColors />
			<main className="shop">
				<Navbar />
				<div className="container py-[20px] xl:py-[40px]">{children}</div>
				<Footer />
			</main>
		</StoreProvider>
	);
};

export default AppLayout;
