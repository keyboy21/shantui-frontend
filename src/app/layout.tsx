import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { LayoutComponent } from '@/types/next.types';
import { cn } from '@/utils/cn.util';
const montserrat = Montserrat({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const RootLayout: LayoutComponent = async ({ children }) => {
	return (
		<html lang="ru">
			<head>
				<meta name="description" content={''} />
				<meta name="theme-color" content="#FFC000" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={cn(montserrat.className, 'scroll-smooth antialiased')}>
				<main>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
