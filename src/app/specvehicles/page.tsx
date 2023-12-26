import { Heading } from '@/components/ui/Heading';
import { VehicleCategories } from './_components/Categories';

const FactoriesPage = () => {
	return (
		<section>
			<Heading
				className="text-center text-shantuiblack mt-[150px] mb-14"
				size="5xl"
				weight="bold"
			>
				Спецтехника
			</Heading>
			<VehicleCategories />
		</section>
	);
};

export default FactoriesPage;
