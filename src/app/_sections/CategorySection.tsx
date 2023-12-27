import { BulldozerCard } from '@/components/ui/BulldozerCard';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/LinkButton';
import { BASE_URL } from '@/configs/env.config';
import { RouterConfig } from '@/configs/router.config';
import type { Categories, Category } from '@/types/api.types';
import { getBackendImage } from '@/utils/getBackendImage.util';

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
				<section className="mt-[150px] md:mt-16">
					<Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
						{filteredData.map((category) => (
							<BulldozerCard
								key={category.id}
								link={`${RouterConfig.SpecVehicles()}?category=${category.id}`}
								image={getBackendImage(category.image)}
								name={category.name}
								buttonStyle="secondary"
							/>
						))}
					</Container>
					<div className="text-center mt-12">
						<LinkButton
							className="px-12 w-fit font-medium text-shantuiblack"
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
