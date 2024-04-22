import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import './styles/globals.scss';
import { Header } from '@/ui/common/layout';

const unbounded = Unbounded({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'UI Challenge | Home',
	description: 'Frontend Test',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={unbounded.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
