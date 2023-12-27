import { BulldozerCard } from '@/components/ui/BulldozerCard';
import { Container } from '@/components/ui/Container';
import { RouterConfig } from '@/configs/router.config';
import { Vehicle } from '@/types/api.types';
import type { FC } from 'react';

export const Bulldozers: FC<BulldozersProps> = ({ bulldozers }) => {
	return (
		<section className='mb-24'>
			<Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
				{bulldozers.map(({ id, name, image }) => (
					<BulldozerCard
						key={id}
						link={RouterConfig.SpecVehicles(id)}
						image={image}
						name={name}
					/>
				))}
			</Container>
		</section>
	);
};

type BulldozersProps = {
	bulldozers: Pick<Vehicle, 'id' | 'image' | 'name'>[];
};
