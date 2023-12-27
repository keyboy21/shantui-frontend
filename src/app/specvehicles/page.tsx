import { getBulldozerCategories } from '@/api/getBulldozerCategories.api';
import { getBulldozers } from '@/api/getBulldozers.api';
import { Heading } from '@/components/ui/Heading';
import { Page } from '@/types/next.types';
import { Bulldozers } from './_sections/Bulldozers';
import { VehicleCategories } from './_sections/Categories';

async function getVehiclesPageData() {
	const [categories, bulldozers] = await Promise.all([
		await getBulldozerCategories(),
		await getBulldozers(),
	]);

	return {
		categories,
		bulldozers,
	};
}

const SpecVehiclesPage: Page = async ({ searchParams }) => {
	const { categories, bulldozers } = await getVehiclesPageData();
	const categoryId = searchParams.category ?? null;

	const FilteredBulldozers =
		categoryId === null
			? bulldozers
			: bulldozers.filter(({ category }) => category === +categoryId);

	return (
		<>
			<section>
				<Heading
					className="text-center text-shantuiblack mt-[150px] mb-14"
					size="5xl"
					weight="bold"
				>
					Спецтехника
				</Heading>
				<VehicleCategories categories={categories} />
				<Bulldozers bulldozers={FilteredBulldozers} />
			</section>
		</>
	);
};

export default SpecVehiclesPage;
