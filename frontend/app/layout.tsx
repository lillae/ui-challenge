import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';

import './styles/styles.scss';
import { Header } from '@/ui/common/layout';

const unbounded = Unbounded({
	subsets: ['latin'],
	variable: '--font-unbounded',
});

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
		<ClerkProvider>
			<html lang='en'>
				<body className={unbounded.className}>
					<Header />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
