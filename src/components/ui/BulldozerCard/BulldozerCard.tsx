import { cn } from '@/utils/cn.util';
import { ComponentProps, FC } from 'react';
import NextImage from 'next/image';
import { getBackendImage } from '@/utils/getBackendImage.util';
import { LinkButton } from '@/components/ui/Button';
import { Paragraph } from '@/components/ui/Paragraph';

export const BulldozerCard: FC<BulldozerCardProps> = ({
	className,
	...props
}) => {
	return (
		<article
			className={cn('px-6 pb-10 flex flex-col shadow-xl group', className)}
			{...props}
		>
			<div className="min-h-64 min-w-72 relative">
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
				<Paragraph weight="bold" size="2xl" className="mb-10 text-balance">
					ЭКСКАВАТОРЫ ГУСЕНИЧНЫЕ
				</Paragraph>
				<LinkButton href={'asdasd'}>Подробнее</LinkButton>
			</div>
		</article>
	);
};

type BulldozerCardProps = ComponentProps<'article'> & {
	bulldozerName?: string;
};
