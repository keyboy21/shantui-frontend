import { BulldozerCard } from '@/components/ui/BulldozerCard';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { BASE_URL } from '@/configs/env.config';
import { RouterConfig } from '@/configs/router.config';
import type { Factories, Factory } from '@/types/api.types';
import { getBackendImage } from '@/utils/getBackendImage.util';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Заводы',
};

async function getFactories(): Promise<Factory[]> {
	const res = await fetch(`${BASE_URL}/api/f`, {
		next: { revalidate: 86400 },
	});
	if (!res.ok) {
		return [];
	}

	const data: Factories = await res.json();
	return data.data;
}

const FactoriesPage = async () => {
	const factories = await getFactories();
	return (
		<section className="pb-24">
			<Heading
				className="text-center text-shantuiblack mt-[150px] mb-14"
				size="5xl"
				weight="bold"
			>
				Заводы
			</Heading>
			<Container className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">
				{factories.map(({ name, image, id }) => (
					<BulldozerCard
						key={id}
						cardType="factory"
						link={RouterConfig.Factories(id)}
						image={getBackendImage(image)}
						name={name}
					/>
				))}
			</Container>
		</section>
	);
};

export default FactoriesPage;
