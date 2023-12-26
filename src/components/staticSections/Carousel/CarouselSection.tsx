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

export const CarouselSection = () => {
	return (
		<section className="mt-[100px] hidden md:block">
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
						<iframe
							loading="lazy"
							width={'100%'}
							height={'100%'}
							src="https://www.youtube.com/embed/TJX-f4TZiAw?autoplay=1&mute=1&loop=1"
							title="youtube"
						/>
					</CarouselItem>
					<CarouselItem>
						<NextImage className="w-full" src={Picture1} alt="bulldozer" />
					</CarouselItem>
					<CarouselItem>
						<NextImage className="w-full" src={Picture2} alt="bulldozer" />
					</CarouselItem>
					<CarouselItem>
						<NextImage className="w-full" src={Picture3} alt="bulldozer" />
					</CarouselItem>
					<CarouselItem>
						<NextImage className="w-full" src={Picture4} alt="bulldozer" />
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
};
