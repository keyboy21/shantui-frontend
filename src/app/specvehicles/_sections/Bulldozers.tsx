import { getBulldozers } from '@/api/getBulldozers.api';
import { BulldozerCard } from '@/components/ui/BulldozerCard';
import { Container } from '@/components/ui/Container';
import { RouterConfig } from '@/configs/router.config';
import type { FC } from 'react';

async function getBulldozersData() {
	const response = await getBulldozers();

	return response;
}

export const Bulldozers: FC<BulldozersProps> = async ({ categoryId }) => {
	const bulldozers = await getBulldozersData();

	const FilteredBulldozers = categoryId
		? bulldozers.filter(({ category }) => category === +categoryId)
		: bulldozers;

	return (
		<Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
			{FilteredBulldozers.map(({ id, name, image }) => (
				<BulldozerCard
					key={id}
					link={RouterConfig.SpecVehicles(id)}
					image={image}
					name={name}
				/>
			))}
		</Container>
	);
};

type BulldozersProps = {
	categoryId: string | null;
};
