import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Mainlayout from '@/components/Layout/Mainlayout';
import OurMaterial from '@/components/OurMaterials/OurMateral';
import OurTeam from '@/components/OurTeam/OurTeam';
import PartnerSlider from '@/components/PartnerSlider/PartnerSlider';
import Preview from '@/components/Preview/Preview';
import Slider from '@/components/Slider/Slider';
import { Blogs, specCategory } from '@/interface/Data';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { FC } from 'react';

type props = {
	category: specCategory[];
	blog: Blogs[];
};

const Home: FC<props> = ({ category, blog }) => {
	const firstBuldozer = category.filter((_, index) => index < 8);
	const Blog = blog.filter((_, index) => index < 4);

	return (
		<Mainlayout title="Главная">
			<Slider />
			<Preview firstBuldozer={firstBuldozer} />
			<About />
			<OurTeam />
			<OurMaterial Blog={Blog} />
			<PartnerSlider />
			<Contact />
		</Mainlayout>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const res = await axios(`${process.env.API_URL}/api/stc`);
	const category = res.data.data as specCategory[];

	const bl = await axios(`${process.env.API_URL}/api/blog`);
	const blog = bl.data.data as Blogs[];

	if (!category && !blog) {
		return { notFound: true };
	}

	return {
		props: {
			category,
			blog,
		},
		revalidate: 86400,
	};
};
