import { cn } from '@/utils/cn.util';
import type { ComponentPropsWithoutRef, FC } from 'react';

export const Input: FC<InputProps> = ({
	className,
	id,
	name,
	type,
	label,
	labelClassName,
	required = false,
	...props
}) => {
	return (
		<label
			htmlFor={name}
			className={cn('flex flex-col gap-1 w-full', labelClassName)}
		>
			{label}
			{required ? '*' : ''}
			<input
				className={cn(
					'w-full border border-gray-300 focus:border-none rounded-md h-10 outline-none focus:outline focus:outline-4 focus:outline-primary',
					className,
				)}
				id={id}
				type={type}
				name={name}
				required={required}
				{...props}
			/>
		</label>
	);
};

type InputProps = ComponentPropsWithoutRef<'input'> & {
	label: string;
	labelClassName?: string;
	required?: boolean;
};
