import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import HeadingImage from '../../../public/service-back.webp';
import NextImage from 'next/image';
import { VideoBlogs } from '@/app/projects/_sections/VideoBlogs';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Сервис',
};

const ServicePage = () => {
	return (
		<section className="pb-24">
			<Heading
				className="text-center text-shantuiblack mt-[150px] mb-14"
				size="5xl"
				weight="bold"
			>
				Сервис
			</Heading>
			<Container className="mb-10">
				<NextImage src={HeadingImage} alt="heading" />
			</Container>
			{/* Video Blog */}
			<VideoBlogs />
		</section>
	);
};

export default ServicePage;
