import type { FC } from 'react';
import NextImage from 'next/image';
import { Heading } from '@/components/ui/Heading';
import { getYoutubeImageUrl } from '@/utils/getYoutubeImage';

export const VideoCard: FC<VideoCardProps> = () => {
	return (
		<article className="flex flex-col px-2 shadow-lg pt-2 pb-6 rounded-md bg-white">
			<a href="asd" target="_blank" rel="noreferrer">
				<div className="relative min-h-60">
					<NextImage
						className="rounded-t-lg"
						fill
						alt="youtube"
						src={getYoutubeImageUrl('https://youtu.be/eNdVOaelkR4')}
					/>
				</div>
			</a>
			<Heading
				size="base"
				weight="semibold"
				className="text-center mt-6 mb-6 px-4 text-balance"
			>
				Погрузка на трал- Бульдозера shantui SD23
			</Heading>
			<div className="*:text-sm flex justify-between px-4 *:text-gray-400">
				<time className="" dateTime="2022-03-05T11:25:02.096822Z">
					{'2022-03-05T11:25:02.096822Z'.substring(0, 10)}
				</time>
				<a href="asd" target="_blank" rel="noreferrer">
					Подробнее
				</a>
			</div>
		</article>
	);
};

type VideoCardProps = {
	title: string;
	url: string;
	date: string;
};
