import { cn } from '@/utils/cn.util';
import Link from 'next/link';
import type { ComponentPropsWithoutRef, FC } from 'react';

export const LinkButton: FC<LinkButtonProps> = ({
	styleType = 'primary',
	href,
	children,
	className,
}) => {
	return (
		<Link
			className={cn(
				'px-12 py-3 w-full text-center text-black transition-colors duration-500',
				{
					'bg-primary text-black hover:text-white': styleType === 'primary',
					'bg-white hover:text-white hover:bg-zinc-400 border border-gray-400 border-solid':
						styleType === 'secondary',
				},
				className,
			)}
			href={href}
		>
			{children}
		</Link>
	);
};

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
	styleType?: 'primary' | 'secondary';
};
