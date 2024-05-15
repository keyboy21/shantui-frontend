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
// import { PanoramaView } from './_sections/PanoramaView';
import { VideoBlogsSection } from './_sections/VideoBlogsSection';
import { Skeleton } from '@/components/ui/Skeleton';
import dynamic from 'next/dynamic';

const PanoramaView = dynamic(
	() => import('@/app/_sections/PanoramaView').then((mod) => mod.PanoramaView),
	{
		ssr: false,
		loading: () => (
			<Container className="py-10">
				<Skeleton className="mt-[100px] w-full h-[500px] max-w-[800px] mx-auto bg-slate-300" />
			</Container>
		),
	},
);

export const metadata: Metadata = {
	title: 'Главная',
};

const HomePage: Page = async () => {
	return (
		<>
			<PanoramaView />
			{/* Fixed Social Links */}
			{/* <SocialLinks /> */}
			{/* Carousel */}
			{/* <CarouselSection /> */}
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
