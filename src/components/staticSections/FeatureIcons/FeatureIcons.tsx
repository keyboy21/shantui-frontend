import { Container } from '@/components/ui/Container';
import NextImage from 'next/image';
import CorrectIcon from '../../../../public/correct-icon.svg';
import HomeIcon from '../../../../public/home-icon.svg';
import ServiceIcon from '../../../../public/service-icon.svg';

export const FeatureIcons = () => {
	return (
		<section className="relative py-28 mt-24">
			<NextImage
				className="brightness-75"
				quality={100}
				src={'/back.webp'}
				alt="background"
				fill
				style={{ objectFit: 'cover', zIndex: -1 }}
			/>
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 2xl:gap-20 *:text-white *:font-medium *:text-xl xl:*:text-2xl *:text-balance text-center xl:text-start">
					<div className="flex flex-col lg:flex-col xl:flex-row items-center gap-4">
						<NextImage quality={100} alt="service" src={ServiceIcon} />
						<p>Сертифицированный дилер заводов</p>
					</div>
					<div className="flex flex-col lg:flex-col xl:flex-row items-center gap-4">
						<NextImage quality={100} alt="correct" src={CorrectIcon} />
						<p>Собственный магазин запчастей</p>
					</div>
					<div className="flex flex-col lg:flex-col xl:flex-row items-center gap-4">
						<NextImage quality={100} alt="home" src={HomeIcon} />
						<p>Бесплатный сервисный центр до 1,5 года</p>
					</div>
				</div>
			</Container>
		</section>
	);
};
