import { LinkButton } from '@/components/ui/LinkButton';
import { RouterConfig } from '@/configs/router.config';
import { Vehicle } from '@/types/component.types';
import { cn } from '@/utils/cn.util';
import { getBackendImage } from '@/utils/getBackendImage.util';
import NextImage from 'next/image';
import type { FC } from 'react';
import { Heading } from '../Heading';

export const BulldozerCard: FC<BulldozerCardProps> = ({
	name,
	image,
	id,
	buttonStyle = 'primary',
	className,
}) => {
	return (
		<article
			className={cn(
				'px-6 pb-10 pt-3 flex flex-col shadow-md bg-white',
				className,
			)}
		>
			<div className="min-h-64 min-w-72 relative group">
				<NextImage
					className="object-center object-contain group-hover:scale-110 
					group-hover:transition group-hover:ease-in-out group-hover:duration-500"
					src={getBackendImage(image)}
					fill
					alt="bulldozer"
				/>
			</div>
			<div className="mt-5 flex flex-col text-center h-full">
				<Heading as="h2" weight="bold" size="2xl" className="text-balance mb-5">
					{name}
				</Heading>
				<LinkButton
					className="mt-auto"
					styleType={buttonStyle}
					href={RouterConfig.SpecVehicles(id)}
				>
					Подробнее
				</LinkButton>
			</div>
		</article>
	);
};

type BulldozerCardProps = Pick<Vehicle, 'id' | 'name' | 'image'> & {
	className?: string;
	buttonStyle?: 'primary' | 'secondary';
};
