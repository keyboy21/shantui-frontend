import { cn } from '@/utils/cn.util';
import type { ComponentPropsWithoutRef, FC } from 'react';

export const Heading: FC<HeadingProps> = ({
	children,
	className,
	as = 'h1',
	weight = 'normal',
	size = 'base',
	...props
}) => {
	const Component = as || 'h1';

	return (
		<Component
			className={cn(
				{
					'font-thin': weight === 'thin',
					'font-extralight': weight === 'extralight',
					'font-light': weight === 'light',
					'font-normal': weight === 'normal',
					'font-medium': weight === 'medium',
					'font-semibold': weight === 'semibold',
					'font-bold': weight === 'bold',
					'font-extrabold': weight === 'extrabold',
					'font-black': weight === 'black',
				},
				{
					'text-xs': size === 'xs',
					'text-sm': size === 'sm',
					'text-base': size === 'base',
					'text-lg': size === 'lg',
					'text-xl': size === 'xl',
					'text-2xl': size === '2xl',
					'text-3xl': size === '3xl',
					'text-4xl': size === '4xl',
					'text-5xl': size === '5xl',
					'text-6xl': size === '6xl',
					'text-7xl': size === '7xl',
					'text-8xl': size === '8xl',
				},
				className,
			)}
			{...props}
		>
			{children}
		</Component>
	);
};

type HeadingProps = ComponentPropsWithoutRef<'h1'> & {
	as?: HeadingElements;
	weight?: HeadingWeights;
	size?: HeadingSizes;
};

type HeadingElements = 'h1' | 'h2' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingWeights =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black';
type HeadingSizes =
	| 'xs'
	| 'sm'
	| 'base'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl';
