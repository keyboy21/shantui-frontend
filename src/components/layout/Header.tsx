'use client';
import { Container } from '@/components/ui/Container';
import { Routes } from '@/configs/router.config';
import { cn } from '@/utils/cn.util';
import { Content, Root, Trigger } from '@radix-ui/react-collapsible';
import { Cross1Icon, TextAlignJustifyIcon } from '@radix-ui/react-icons';
import NextImage from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '../../../public/logo.svg';

export const Header = () => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	return (
		<header className="fixed bg-white w-full z-10 top-0 shadow-md shadow-gray-200">
			<Container className="flex justify-between py-5 items-center">
				<Link href={'/'}>
					<NextImage src={Logo} alt="logo" priority />
				</Link>
				<div className="hidden lg:flex gap-x-4 items-center">
					<nav>
						<ul className="flex gap-x-7 *:font-medium *:text-base">
							{Routes.map(({ name, path }) => (
								<li
									className={cn({
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

				{/* Navigation */}
				<Root className="lg:hidden" open={open} onOpenChange={setOpen}>
					{/* Mobile navigation*/}
					<Trigger className="flex cursor-default items-center">
						{open ? (
							<Cross1Icon aria-label="open-menu" className="size-8" />
						) : (
							<TextAlignJustifyIcon
								aria-label="close-menu"
								className="size-8"
							/>
						)}
					</Trigger>
					<Content className="absolute z-10 left-0 top-[100px] h-full w-full bg-white">
						<ul
							aria-label="navigation"
							className="flex flex-col gap-y-2 p-3 pb-7 md:px-12 bg-white"
						>
							{Routes.map(({ name, path }) => (
								<li key={name}>
									<Link
										onClick={() => setOpen(false)}
										href={path}
										className={cn(
											'block px-3 py-2 text-base font-normal',
											path === pathname ? 'text-eramed' : 'text-primary-900',
										)}
									>
										{name}
									</Link>
								</li>
							))}
							<a
								className="bg-primary px-5 py-4 text-black hover:text-white text-center font-medium"
								href="https://shantui.westcoast.uz/files/catalog.pdf"
								title="download catalog"
								download
								target="_blank"
								rel="noreferrer"
							>
								Скачать каталог
							</a>
						</ul>
					</Content>
				</Root>
			</Container>
		</header>
	);
};
