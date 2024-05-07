'use client';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/Carousel';
import Autoplay from 'embla-carousel-autoplay';
import NextImage from 'next/image';
import Picture1 from '../../../../public/Carousel/sayt1.webp';
import Picture2 from '../../../../public/Carousel/sayt2.webp';
import Picture3 from '../../../../public/Carousel/sayt3.webp';
import Picture4 from '../../../../public/Carousel/sayt4.webp';
import ReactPlayer from 'react-player/youtube';

export const CarouselSection = () => {
	return (
		<section className="lg:mt-[100px] hidden lg:block">
			<Carousel
				opts={{
					dragFree: false,
					loop: true,
				}}
				plugins={[
					Autoplay({
						delay: 4000,
						stopOnMouseEnter: true,
					}),
				]}
			>
				<CarouselContent>
					<CarouselItem>
						<ReactPlayer
							width={'100%'}
							height={'100%'}
							url="https://www.youtube.com/watch?v=1ysuueKsjhQ"
						/>
					</CarouselItem>
					<CarouselItem>
						<NextImage
							className="w-full"
							priority
							src={Picture1}
							alt="bulldozer"
						/>
					</CarouselItem>
					<CarouselItem>
						<NextImage className="w-full" src={Picture2} alt="bulldozer" />
					</CarouselItem>
					<CarouselItem>
						<NextImage className="w-full" src={Picture3} alt="bulldozer2" />
					</CarouselItem>
					<CarouselItem>
						<NextImage className="w-full" src={Picture4} alt="bulldozer3" />
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
};
