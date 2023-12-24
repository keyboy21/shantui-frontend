import { CarouselSection } from '@/components/sections/Carousel';
import { FeatureIcons } from '@/components/sections/FeatureIcons';
import { TeamSection } from '@/components/sections/OurtTeam';
import type { Page } from '@/types/next.types';

const HomePage: Page = async () => {
	return (
		<>
			<CarouselSection />
			<FeatureIcons />
			<TeamSection />
		</>
	);
};

export default HomePage;
