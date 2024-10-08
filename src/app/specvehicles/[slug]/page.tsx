import { getBulldozer } from '@/api/getBulldozers.api';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { DialogProvider } from '@/contexts/use-alert-dialog';
import type { DynamicMetadata, Page } from '@/types/next.types';
import Markdown from 'markdown-to-jsx';
import NextImage from 'next/image';
import { notFound } from 'next/navigation';
import { DialogForm } from '@/components/forms/DialogForm';

export const generateMetadata: DynamicMetadata = async ({ params }) => {
	const { slug } = params;

	if (!slug) {
		return {
			title: 'Ничего нет',
		};
	}

	const response = await getBulldozer(slug);

	return {
		title: response.name,
		openGraph: {
			title: response.name,
			images: response.image,
		},
	};
};

async function getBulldozerData(id: string) {
	const response = await getBulldozer(id);
	return response;
}

export const dynamic = 'force-dynamic';

const VehiclePage: Page = async ({ params }) => {
	if (!params.slug) {
		notFound();
	}
	const bulldozer = await getBulldozerData(params.slug);

	return (
		<section>
			<Heading
				className="text-center text-shantuiblack mt-[150px] md:text-2xl mb-14 text-balance xl:text-5xl"
				size="xl"
				weight="bold"
			>
				{bulldozer.name}
			</Heading>
			<Container className="relative min-h-[400px]">
				<NextImage
					fill
					className="object-contain object-center"
					src={bulldozer.image}
					alt={bulldozer.name}
				/>
			</Container>
			<Container>
				<div className="bg-white shadow-xl my-10 rounded-lg pt-10">
					<div className="flex pl-10 mb-10 gap-10">
						{bulldozer.doc && (
							<a
								className="text-primary font-medium underline text-base"
								href={bulldozer.doc}
								target="_blank"
								rel="noreferrer"
							>
								Скачать брошюру
							</a>
						)}
						<DialogProvider>
							<DialogForm productName={bulldozer.name} />
						</DialogProvider>
					</div>
					<hr />
					<div className="xl:mx-20 py-10">
						<Markdown
							options={{ wrapper: 'article' }}
							className="prose prose-sm contents 2xl:prose-lg"
						>
							{bulldozer.description}
						</Markdown>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default VehiclePage;
