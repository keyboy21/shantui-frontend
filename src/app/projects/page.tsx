import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import HeadingImage from '../../../public/project.jpg';
import NextImage from 'next/image';
import { Paragraph } from '@/components/ui/Paragraph';
import { VideoBlogs } from './_sections/VideoBlogs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Проекты',
};

const ProjectsPage = () => {
	return (
		<section>
			<Heading
				className="text-center text-shantuiblack mt-[150px] mb-14"
				size="5xl"
				weight="bold"
			>
				Проекты
			</Heading>
			<Container className="mb-10">
				<NextImage src={HeadingImage} alt="heading" />
			</Container>
			{/* Video Blog */}
			<VideoBlogs />
			<Container className="mb-10">
				<Heading
					as="h2"
					className="text-center text-shantuiblack mt-10 mb-14"
					size="4xl"
					weight="bold"
				>
					SHANTUI
				</Heading>
				<Paragraph
					size="lg"
					weight="normal"
					className="mb-4 text-pretty 2xl:text-xl"
				>
					Мы имеем 20 летний опыт поставки качественной спецтехники в страны
					СНГ. Мы реализовали более 70 проектов в России, Казахстане, Киргизии и
					Таджикистане. Мы сотрудничаем с более чем 30 заводами поставщиками
					Китая , оставив в партнерах только надежных и качественных
					изготовителей. Мы даем возможность выбора спецтехники - согласно
					бюджета и предпочтений каждого клиента, предоставляя гибкую систему
					оплаты. Мы предлагаем широкий ассортимент техники и оборудования , а
					наши клиенты получают 1,5 года гарантии и бесплатного тех
					обслуживания. Мы работаем только с проверенными крупнейшими заводами
					Китая, производственная мощь которых составляет не менее 1000 единиц
					производимой продукции в месяц.
				</Paragraph>
				<Paragraph
					size="lg"
					weight="normal"
					className="mb-4 text-pretty 2xl:text-xl"
				>
					При плановом техническом обслуживании и ремонте спецтехники поможет
					наш собственный сервисный центр и магазин оригинальных запчастей.
					Покупайте спецтехнику у официального дилера #SHANTUI в Узбекистане STT
					- ваш надежный поставщик спецтехники из Китая
				</Paragraph>
			</Container>
		</section>
	);
};

export default ProjectsPage;
