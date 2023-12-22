/**
 * A utility function that merges class names using clsx and tailwind-merge.
 * @param inputs - An array of class names to be merged.
 * @returns A string of merged class names.
 */
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(...inputs));
};
