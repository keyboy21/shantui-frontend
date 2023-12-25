import { Container } from '@/components/ui/Container';
import { BASE_URL } from '@/configs/env.config';

type Categories = {
	status: string;
	data: Category[];
};

type Category = {
	id: number;
	name: string;
	image: string;
};
async function getCategories(): Promise<Category[]> {
	const res = await fetch(`${BASE_URL}/api/stc`, {
		next: { revalidate: 86400 },
	});
	if (!res.ok) {
		return [];
	}

	const data: Categories = await res.json();
	return data.data;
}
export const Categories = async () => {
	const categories = await getCategories();
	return (
		<Container className="px-14 py-12 grid grid-cols-2 xl:grid-cols-3">
			asd
		</Container>
	);
};
