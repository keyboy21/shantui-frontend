import { cn } from '@/utils/cn.util';
import Link from 'next/link';
import React, { ComponentProps, ComponentPropsWithoutRef, FC } from 'react';

export const LinkButton: FC<LinkButtonProps> = ({ children, className }) => {
	return (
		<Link
			className={cn(
				'px-12 py-3 w-full text-center text-black transition-colors duration-500 hover:text-white hover:bg-zinc-400 border border-gray-400 border-solid',
				className,
			)}
			href={'asdasd'}
		>
			{children}
		</Link>
	);
};

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link>;
