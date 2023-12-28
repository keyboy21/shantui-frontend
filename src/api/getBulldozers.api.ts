import { BASE_URL } from '@/configs/env.config';
import { Vehicle } from '@/types/api.types';

export async function getBulldozers(): Promise<Vehicle[]> {
	const res = await fetch(`${BASE_URL}/api/st/`, {
		next: { revalidate: 86400 },
	});
	if (!res.ok) {
		return [];
	}

	const data: Vehicle[] = await res.json();
	return data;
}

export async function getBulldozer(id: string): Promise<Vehicle> {
	const res = await fetch(`${BASE_URL}/api/st/${id}`, {
		next: { revalidate: 86400 },
	});
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const data: Vehicle = await res.json();
	return data;
}
