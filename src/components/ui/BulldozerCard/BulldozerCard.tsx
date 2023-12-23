import { LinkButton } from '@/components/ui/LinkButton';
import { RouterConfig } from '@/configs/router.config';
import { Vehicle } from '@/types/all.types';
import { cn } from '@/utils/cn.util';
import { getBackendImage } from '@/utils/getBackendImage.util';
import NextImage from 'next/image';
import type { FC } from 'react';
import { Heading } from '../Heading';

export const BulldozerCard: FC<BulldozerCardProps> = ({
	name,
	image,
	id,
	className,
}) => {
	return (
		<article className={cn('px-6 pb-10 flex flex-col shadow-xl ', className)}>
			<div className="min-h-64 min-w-72 relative group">
				<NextImage
					className="object-center object-contain group-hover:scale-105 
					group-hover:transition group-hover:ease-in-out group-hover:duration-500"
					src={getBackendImage(
						'/files/images/special_technique/03e3e82e379efef7f4ca7efcad8b3f65.jpg',
					)}
					fill
					alt="bulldozer"
				/>
			</div>

			<div className="mt-5 flex flex-col text-center">
				<Heading
					as="h2"
					weight="bold"
					size="2xl"
					className="mb-10 text-balance"
				>
					ЭКСКАВАТОРЫ ГУСЕНИЧНЫЕ
				</Heading>
				<LinkButton styleType="secondary" href={RouterConfig.SpecVehicles(id)}>
					Подробнее
				</LinkButton>
			</div>
		</article>
	);
};

type BulldozerCardProps = Pick<Vehicle, 'id' | 'name' | 'image'> & {
	className: string;
};
