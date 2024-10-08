import { CarouselSection } from '@/app/_sections/CarouselSection';
import { FeatureIcons } from '@/app/_sections/FeatureIcons';
import { TeamSection } from '@/app/_sections/OurTeamSection';
import { Container } from '@/components/ui/Container';
import { GMap } from '@/components/ui/GMap';
import { Heading } from '@/components/ui/Heading';
import { SocialLinks } from '@/components/ui/SocialLinks';
import type { Page } from '@/types/next.types';
import type { Metadata } from 'next/types';
import { CategorySection } from './_sections/CategorySection';
import { VideoBlogsSection } from './_sections/VideoBlogsSection';

export const metadata: Metadata = {
	title: 'Главная',
};

const HomePage: Page = async () => {
	return (
		<>
			{/* Fixed Social Links */}
			<SocialLinks />
			{/* Carousel */}
			<CarouselSection />
			{/* Categories */}
			<CategorySection />
			{/* Feature Icons */}
			<FeatureIcons />
			{/* Our Team */}
			<TeamSection />
			{/* Video Materials */}
			<VideoBlogsSection />
			{/* Map */}
			<section className="my-16">
				<Container>
					<Heading
						as="h2"
						className="text-center mb-10"
						weight="bold"
						size="3xl"
					>
						Наш адрес
					</Heading>
					<GMap className="h-[400px]" />
				</Container>
			</section>
		</>
	);
};

export default HomePage;
