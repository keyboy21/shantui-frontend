import { Container } from '@/components/ui/Container';
import { VideoCard } from '@/components/ui/VideoCard';
import { BASE_URL } from '@/configs/env.config';
import { Blog, Blogs } from '@/types/api.types';

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

export const VideoBlogs = async () => {
	const blogs = await getBlogs();
	return (
		<Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
			{blogs.map(({ create_at, title, Video, id }) => (
				<VideoCard key={id} date={create_at} title={title} url={Video} />
			))}
		</Container>
	);
};
