import { BASE_URL } from '@/configs/env.config';
import type { Categories, Category } from '@/types/api.types';

export async function getBulldozerCategories(): Promise<Category[]> {
	const res = await fetch(`${BASE_URL}/api/stc`);
	if (!res.ok) {
		return [];
	}

	const data: Categories = await res.json();
	return data.data;
}
