import { BASE_URL } from '@/configs/env.config';
import { Bulldozers, Vehicle } from '@/types/api.types';

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
