import { cn } from '@/utils/cn.util';
import type { ComponentPropsWithoutRef, FC } from 'react';

export const TextArea: FC<TextAreaProps> = ({
	label,
	labelClassName,
	name,
	id,
	required = false,
	className,
}) => {
	return (
		<label htmlFor={name} className={cn('flex flex-col gap-1', labelClassName)}>
			{label}
			{required ? '*' : ''}
			<textarea
				placeholder="Ваше собшение*"
				required={required}
				className={cn(
					'w-full h-48 border border-gray-300 focus:border-none rounded-md outline-none focus:outline focus:outline-4 focus:outline-primary',
					className,
				)}
				id={id}
				name={name}
			/>
		</label>
	);
};

type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & {
	label: string;
	labelClassName?: string;
	required?: boolean;
};
