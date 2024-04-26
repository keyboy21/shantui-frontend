import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { VideoCard } from '@/components/ui/VideoCard';
import { BASE_URL } from '@/configs/env.config';
import type { Blog, Blogs } from '@/types/api.types';

async function getBlogs(): Promise<Blog[]> {
	const res = await fetch(`${BASE_URL}/api/blog`);
	if (!res.ok) {
		return [];
	}

	const data: Blogs = await res.json();
	return data.data;
}

export const VideoBlogsSection = async () => {
	const blogs = await getBlogs();

	return (
		<>
			{blogs.length > 0 ? (
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
						{blogs.map(({ create_at, title, Video, id }) => (
							<VideoCard key={id} date={create_at} title={title} url={Video} />
						))}
					</Container>
				</section>
			) : null}
		</>
	);
};
