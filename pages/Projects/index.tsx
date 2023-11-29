import Mainlayout from '@/components/Layout/Mainlayout';
import OurMaterilasCard from '@/components/ourMaterilasCard/Materials';
import { Blogs } from '@/interface/Data';
import Backgronund from '@/public/Project.jpg';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/legacy/image';
import { FC } from 'react';
import classes from './projects.module.css';

type props = {
	blog: Blogs[];
};

const Project: FC<props> = ({ blog }) => {
	const Blog = blog.filter((_, index) => index < 4);
	return (
		<>
			<Head>
				<link rel="canonical" href="https://shantuiuzb.com/Projects/" />
			</Head>

			<Mainlayout title="| Projects">
				<h1 className={classes.project_h1}>Проекты</h1>
				<div className="container">
					<div className={classes.big}>
						<Image src={Backgronund} alt="project" />
					</div>
				</div>

				<div className={`container ${classes.project_product}`}>
					<div className="row">
						{Blog.map((item) => (
							<div
								className={`col-md-6 col-lg-3 ${classes.project_product_in}`}
								key={item.id}
							>
								<OurMaterilasCard
									Video={item.Video}
									create_at={item.create_at}
									title={item.title}
								/>
							</div>
						))}
					</div>
				</div>

				<div className="container">
					<h3 className={classes.project_about}>SHANTUI</h3>
					<p className={classes.project_text}>
						Мы имеем <time dateTime="2003">20</time> летний опыт поставки
						качественной спецтехники в страны СНГ. Мы реализовали более 70
						проектов в России, Казахстане, Киргизии и Таджикистане. Мы
						сотрудничаем с более чем 30 заводами поставщиками Китая , оставив в
						партнерах только надежных и качественных изготовителей. Мы даем
						возможность выбора спецтехники - согласно бюджета и предпочтений
						каждого клиента, предоставляя гибкую систему оплаты. Мы предлагаем
						широкий ассортимент техники и оборудования , а наши клиенты получают
						1,5 года гарантии и бесплатного тех обслуживания. Мы работаем только
						с проверенными крупнейшими заводами Китая, производственная мощь
						которых составляет не менее 1000 единиц производимой продукции в
						месяц.
					</p>
					<p className={classes.project_text}>
						При плановом техническом обслуживании и ремонте спецтехники поможет
						наш собственный сервисный центр и магазин оригинальных запчастей.
						Покупайте спецтехнику у официального дилера #SHANTUI в Узбекистане
						STT - ваш надежный поставщик спецтехники из Китая
					</p>
				</div>
			</Mainlayout>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const bl = await axios(`${process.env.API_URL}/api/blog`);
	const blog = bl.data.data as Blogs[];

	if (!blog) {
		return { notFound: true };
	}

	return {
		props: {
			blog,
		},
	};
};

export default Project;
