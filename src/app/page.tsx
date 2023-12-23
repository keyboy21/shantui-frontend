import { FeatureIcons } from '@/components/sections/FeatureIcons';
import { TeamSection } from '@/components/sections/OurtTeam';
import { BulldozerCard } from '@/components/ui/BulldozerCard';
import { Container } from '@/components/ui/Container';
import { VideoCard } from '@/components/ui/VideoCard';
import { Page } from '@/types/next.types';

const HomePage: Page = async () => {
	return (
		<section>
			{/* <Container className="grid grid-cols-4 gap-7">
				<BulldozerCard />
				<BulldozerCard />
				<BulldozerCard />
				<BulldozerCard />
			</Container> */}

			<FeatureIcons />
			{/* <Container className="grid grid-cols-4 gap-7">
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
			</Container> */}

			<TeamSection />
		</section>
	);
};

export default HomePage;
