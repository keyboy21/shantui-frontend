import { CarouselSection } from '@/app/_sections/CarouselSection';
import { FeatureIcons } from '@/app/_sections/FeatureIcons';
import { TeamSection } from '@/app/_sections/OurTeamSection';
import { Container } from '@/components/ui/Container';
import { GMap } from '@/components/ui/GMap';
import { Heading } from '@/components/ui/Heading';
import { SocialLinks } from '@/components/ui/SocialLinks';
import type { Page } from '@/types/next.types';
import { headers } from 'next/headers';
import type { Metadata } from 'next/types';
import { CategorySection } from './_sections/CategorySection';
import { VideoBlogsSection } from './_sections/VideoBlogsSection';
import { PanoramaView } from './_sections/PanoramaView';

export const metadata: Metadata = {
	title: 'Главная',
};

const HomePage: Page = async () => {
	const headersList = headers();
	const device = headersList.get('sec-ch-ua-mobile');
	const isMobile = device === '?1';

	return (
		<>
			<PanoramaView />
			{/* Fixed Social Links */}
			{/* <SocialLinks /> */}
			{/* Carousel */}
			{/* {isMobile ? null : <CarouselSection />} */}
			{/* Categories */}
			{/* <CategorySection /> */}
			{/* Feature Icons */}
			{/* <FeatureIcons /> */}
			{/* Our Team */}
			{/* <TeamSection /> */}
			{/* Video Materials */}
			{/* <VideoBlogsSection /> */}
			{/* Map */}
			{/* <section className="my-16">
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
			</section> */}
		</>
	);
};

export default HomePage;
