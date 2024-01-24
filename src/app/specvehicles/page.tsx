import { getBulldozerCategories } from '@/api/getBulldozerCategories.api';
import { Heading } from '@/components/ui/Heading';
import { Page } from '@/types/next.types';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { BulldozerSkeleton } from './_components/BulldozerSkeleton';
import { Bulldozers } from './_sections/Bulldozers';
import { VehicleCategories } from './_sections/Categories';

export const metadata: Metadata = {
	title: 'Спецтехника',
};

async function getCategories() {
	const categories = await getBulldozerCategories();
	return categories;
}

const SpecVehiclesPage: Page = async ({ searchParams }) => {
	const categories = await getCategories();
	const categoryId = searchParams.category ?? null;

	return (
		<>
			<section>
				<Heading
					className="text-center text-shantuiblack mt-[150px] mb-14 2xl:text-5xl"
					size="3xl"
					weight="bold"
				>
					Спецтехника
				</Heading>
				<VehicleCategories categories={categories} categoryId={categoryId} />
			</section>
			<section className="mb-24">
				<Suspense fallback={<BulldozerSkeleton />}>
					<Bulldozers categoryId={categoryId} />
				</Suspense>
			</section>
		</>
	);
};

export default SpecVehiclesPage;
