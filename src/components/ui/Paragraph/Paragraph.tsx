import { cn } from '@/utils/cn.util';
import { ComponentProps, FC } from 'react';

export const Paragraph: FC<ParagraphProps> = ({
	size = 'base',
	weight = 'normal',
	children,
	className,
	...props
}) => {
	return (
		<p
			className={cn(
				'',
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
				},
				{
					'font-light': weight === 'light',
					'font-normal': weight === 'normal',
					'font-medium': weight === 'medium',
					'font-semibold': weight === 'semibold',
					'font-bold': weight === 'bold',
				},
				className,
			)}
			{...props}
		>
			{children}
		</p>
	);
};

type ParagraphProps = ComponentProps<'p'> & {
	size?: TextSize;
	weight?: TextWeight;
};

type TextSize =
	| 'xs'
	| 'sm'
	| 'base'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl';
type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
