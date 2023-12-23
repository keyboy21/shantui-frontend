/**
 * Returns the URL of the thumbnail image for a given YouTube video URL.
 * @param url - The URL of the YouTube video.
 * @returns The URL of the thumbnail image for the given YouTube video URL.
 */
import { YOUTUBE_IMAGE_URL } from '@/configs/env.config';

export const getYoutubeImageUrl = (url: string): string => {
	return `${YOUTUBE_IMAGE_URL}${url.slice(17).split('?')[0]}/0.jpg`;
};
