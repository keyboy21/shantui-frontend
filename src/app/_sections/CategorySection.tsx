import { BulldozerCard } from '@/components/ui/BulldozerCard';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/LinkButton';
import { BASE_URL } from '@/configs/env.config';
import { RouterConfig } from '@/configs/router.config';

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

export const CategorySection = async () => {
	const categories = await getCategories();
	const filteredData = categories.filter((_, index) => index < 8);
	return (
		<>
			{filteredData.length > 0 ? (
				<section className="mt-16">
					<Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
						{filteredData.map((category) => (
							<BulldozerCard
								image={category.image}
								name={category.name}
								id={category.id}
								buttonStyle="secondary"
							/>
						))}
					</Container>
					<div className="text-center mt-12">
						<LinkButton
							className="px-12 w-fit"
							href={RouterConfig.SpecVehicles()}
						>
							ПОСМОТРЕТЬ ВСЕ
						</LinkButton>
					</div>
				</section>
			) : null}
		</>
	);
};
