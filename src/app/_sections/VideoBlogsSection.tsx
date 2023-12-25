import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { VideoCard } from '@/components/ui/VideoCard';
import { BASE_URL } from '@/configs/env.config';

type Blogs = {
	status: string;
	data: Blog[];
};

type Blog = {
	id: number;
	title: string;
	create_at: string;
	Video: string;
	article: number;
};

async function getBlogs(): Promise<Blog[]> {
	const res = await fetch(`${BASE_URL}/api/blog`, {
		next: { revalidate: 86400 },
	});
	if (!res.ok) {
		return [];
	}

	const data: Blogs = await res.json();
	return data.data;
}

export const VideoBlogsSection = async () => {
	const blogs = await getBlogs();
	const filteredData = blogs.filter((_, index) => index < 4);
	return (
		<>
			{filteredData.length > 0 ? (
				<section className="mt-24">
					<Heading
						as="h2"
						className="text-center mb-10 text-shantuiblack"
						weight="bold"
						size="3xl"
					>
						Наши видеоматериалы
					</Heading>
					<Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
						{filteredData.map(({ create_at, title, Video, id }) => (
							<VideoCard key={id} date={create_at} title={title} url={Video} />
						))}
					</Container>
				</section>
			) : null}
		</>
	);
};
