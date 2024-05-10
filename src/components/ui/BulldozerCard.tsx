import { Heading } from '@/components/ui/Heading';
import { LinkButton } from '@/components/ui/LinkButton';
import type { Vehicle } from '@/types/api.types';
import { cn } from '@/utils/cn.util';
import NextImage from 'next/image';
import type { FC } from 'react';

export const BulldozerCard: FC<BulldozerCardProps> = ({
	name,
	image,
	buttonStyle = 'primary',
	cardType = 'vehicle',
	link,
	className,
}) => {
	return (
		<article
			className={cn(
				'pb-10 pt-3 flex flex-col shadow-lg bg-white',
				{
					'px-6': cardType === 'vehicle',
					'px-3': cardType === 'factory',
				},
				className,
			)}
		>
			<div
				className={cn('min-w-64 relative group', {
					'min-h-72': cardType === 'vehicle',
					'min-h-80': cardType === 'factory',
				})}
			>
				<NextImage
					className={cn('object-center', {
						'object-contain group-hover:scale-110 transition-transform duration-200':
							cardType === 'vehicle',
						'object-cover rounded-md object-center': cardType === 'factory',
					})}
					src={image}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					alt="bulldozer"
				/>
			</div>
			<div className="mt-7 flex flex-col text-center h-full">
				<Heading
					as="h3"
					className={cn('text-balance mb-5', {
						'font-semibold text-xl xl:text-2xl': cardType === 'vehicle',
						'font-medium text-lg': cardType === 'factory',
					})}
				>
					{name}
				</Heading>
				<LinkButton href={link} className="mt-auto" styleType={buttonStyle}>
					Подробнее
				</LinkButton>
			</div>
		</article>
	);
};

type BulldozerCardProps = Pick<Vehicle, 'name' | 'image'> & {
	className?: string;
	buttonStyle?: 'primary' | 'secondary';
	cardType?: 'vehicle' | 'factory' | 'category';
	link: string;
};
