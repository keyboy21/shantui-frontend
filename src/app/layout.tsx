import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import '@/styles/globals.css';
import type { LayoutComponent } from '@/types/next.types';
import { cn } from '@/utils/cn.util';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';
const montserrat = Montserrat({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://shantuiuzb.com'),
	openGraph: {
		title: 'Shantui',
	},
	twitter: {
		card: 'summary_large_image',
	},
};

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
				<Script id="yandex-analytics" strategy="afterInteractive">
					{`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(88026506, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });`}
				</Script>
			</body>
		</html>
	);
};

export default RootLayout;
