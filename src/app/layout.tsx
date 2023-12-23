import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import '@/styles/globals.css';
import { LayoutComponent } from '@/types/next.types';
import { cn } from '@/utils/cn.util';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['cyrillic'] });

const RootLayout: LayoutComponent = async ({ children }) => {
	return (
		<html lang="ru">
			<head>
				<meta name="theme-color" content="#FFC000" />
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Компания СП ООО 'SPETS TEXNIKA TASHKENT' (Спецтехника Ташкент) - имеет 17 летний опыт в сфере поставок спецтехники и оборудования из Китая."
				/>
				<meta
					name="keywords"
					content="Shantui, Автобетоносмесители,Самосвалы,Фронтальные погрузчики, Автогрейдеры,Колесные экскаваторы,Башенные краны,Компакторы,Кирпичные линии,Мельницы дробления минерального порошка, Карьерные самосвалы"
				/>
			</head>
			<body
				className={cn(
					montserrat.className,
					'scroll-smooth antialiased bg-[#fbfbfb]',
				)}
			>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
