import { Heading } from '@/components/ui/Heading';
import { Categories } from './_components/Categories';

const SpecVehicles = () => {
	return (
		<section>
			<Heading
				className="text-center text-shantuiblack mt-[150px] mb-14"
				size="5xl"
				weight="bold"
			>
				Спецтехника
			</Heading>
			<Categories />
		</section>
	);
};

export default SpecVehicles;
