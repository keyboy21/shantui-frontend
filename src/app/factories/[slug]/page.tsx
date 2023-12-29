import { DialogForm } from '@/components/forms';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { BASE_URL } from '@/configs/env.config';
import { DialogProvider } from '@/contexts';
import type { Factory } from '@/types/api.types';
import type { DynamicMetadata, Page } from '@/types/next.types';
import { getBackendImage } from '@/utils/getBackendImage.util';
import Markdown from 'markdown-to-jsx';
import NextImage from 'next/image';
import { notFound } from 'next/navigation';

export const generateMetadata: DynamicMetadata = async ({ params }) => {
	const { slug } = params;

	if (!slug) {
		return {
			title: 'Ничего нет',
		};
	}

	const res = await fetch(`${BASE_URL}/api/f/${slug}`);

	const data: ResFactory = await res.json();
	return {
		title: data.data.name,
	};
};

type ResFactory = {
	status: string;
	data: Factory;
};

async function getFactory(slug: string): Promise<Factory> {
	const res = await fetch(`${BASE_URL}/api/f/${slug}`, {
		next: { revalidate: 86400 },
	});
	if (!res.ok) {
		notFound();
	}

	const data: ResFactory = await res.json();
	return data.data;
}

export const dynamic = 'force-dynamic';

const FactoryPage: Page = async ({ params }) => {
	if (!params.slug) {
		notFound();
	}
	const factory = await getFactory(params.slug);

	return (
		<section>
			<Heading
				className="text-center text-shantuiblack mt-[150px] md:text-2xl mb-14 text-balance xl:text-5xl"
				size="xl"
				weight="bold"
			>
				{factory.name}
			</Heading>
			<Container className="relative min-h-96">
				<NextImage
					fill
					className="object-contain object-center"
					src={getBackendImage(factory.image)}
					alt={factory.name}
				/>
			</Container>
			<Container>
				<div className="bg-white shadow-xl my-10 p-10 rounded-lg xl:mx-24">
					<DialogProvider>
						<DialogForm productName={factory.name} />
					</DialogProvider>
					<hr className="my-10" />
					<Markdown
						options={{ wrapper: 'article' }}
						className="prose prose-sm contents 2xl:prose-base"
					>
						{factory.description}
					</Markdown>
				</div>
			</Container>
		</section>
	);
};

export default FactoryPage;
