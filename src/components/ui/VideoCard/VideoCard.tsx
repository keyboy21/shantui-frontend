import { Heading } from '@/components/ui/Heading';
import { getYoutubeImageUrl } from '@/utils/getYoutubeImage';
import NextImage from 'next/image';
import type { FC } from 'react';

export const VideoCard: FC<VideoCardProps> = ({ title, url, date }) => {
	return (
		<article className="flex flex-col px-2 shadow-lg pt-2 pb-6 rounded-md bg-white">
			<a
				className="relative min-h-60"
				href="asd"
				target="_blank"
				rel="noreferrer"
			>
				<NextImage
					className="rounded-t-lg"
					fill
					alt="youtube"
					src={getYoutubeImageUrl(url)}
				/>
			</a>
			<Heading
				size="base"
				weight="semibold"
				className="text-center mt-6 mb-6 px-4 text-balance"
			>
				{title}
			</Heading>
			<div className="*:text-sm flex justify-between px-4 *:text-gray-400 mt-auto">
				<time dateTime={date}>{date.substring(0, 10)}</time>
				<a href={url} target="_blank" rel="noreferrer">
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
