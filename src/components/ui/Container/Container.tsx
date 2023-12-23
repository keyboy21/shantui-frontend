import { cn } from '@/utils/cn.util';
import { ComponentProps, FC } from 'react';

export const Container: FC<ComponentProps<'div'>> = ({
	children,
	className,
}) => {
	return (
		<div className={cn('container px-4 xl:px-0 2xl:px-16 mx-auto', className)}>
			{children}
		</div>
	);
};
