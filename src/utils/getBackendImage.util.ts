/**
 * Returns the full URL of a backend image by concatenating the base URL and the image URL.
 * @param url - The URL of the image on the backend.
 * @returns The full URL of the backend image.
 */
import { BASE_URL } from '@/configs/env.config';

export const getBackendImage = (url: string): string => {
	return `${BASE_URL}${url}`;
};
