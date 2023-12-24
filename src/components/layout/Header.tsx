'use client';
import { Container } from '@/components/ui/Container';
import { Routes } from '@/configs/router.config';
import { cn } from '@/utils/cn.util';
import NextImage from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/logo.svg';

export const Header = () => {
	const pathname = usePathname();
	return (
		<header className="fixed bg-white w-full z-10 top-0 shadow-md shadow-slate-400">
			<Container className="flex justify-between py-5 items-center">
				<Link href={'/'}>
					<NextImage src={Logo} alt="logo" />
				</Link>
				<div className="flex gap-x-4 items-center">
					<nav>
						<ul className="flex gap-x-7 *:font-medium *:text-base">
							{Routes.map(({ name, path }) => (
								<li
									className={cn('', {
										'text-primary': path === pathname,
									})}
									key={path}
								>
									<Link href={path}>{name}</Link>
								</li>
							))}
						</ul>
					</nav>
					<a
						className="bg-primary px-5 py-4 text-black hover:text-white transition-colors duration-500 font-medium"
						href="https://shantui.westcoast.uz/files/catalog.pdf"
						title="download catalog"
						download
						target="_blank"
						rel="noreferrer"
					>
						Скачать каталог
					</a>
				</div>
			</Container>
		</header>
	);
};
