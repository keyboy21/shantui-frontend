import { BulldozerCard } from '@/components/ui/BulldozerCard';
import { Container } from '@/components/ui/Container';
import { FeatureIcons } from '@/components/sections/FeatureIcons';
import { Page } from '@/types/next.types';
import { VideoCard } from '@/components/ui/VideoCard';
import { TeamSection } from '@/components/sections/OurtTeam';

const HomePage: Page = async () => {
	return (
		<section>
			<h1 className="text-red-500">Hello</h1>
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
