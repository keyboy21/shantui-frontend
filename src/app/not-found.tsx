import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import NextImage from 'next/image';
import NotFoundImage from '../../public/not-found.png';

const Page404 = () => {
	return (
		<section className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 p-4 space-y-8">
			<div className="flex flex-col space-y-4 items-center">
				<NextImage
					src={NotFoundImage}
					alt="Bulldozer"
					className="w-48 h-48 object-cover rounded-lg shadow-md"
					height="200"
					style={{
						aspectRatio: '200/200',
						objectFit: 'cover',
					}}
					width="200"
				/>

				<h1 className="text-4xl font-bold text-gray-800">404 Не Найдено</h1>
				<p className="text-xl text-gray-600 dark:text-gray-400 max-w-md text-center">
					Упс! Страница, которую вы ищете, не существует. Вместо этого обратите
					внимание на наши бульдозеры и специализированную технику.
				</p>
			</div>
			<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
				<Link href="/">
					<Button className="px-6 py-2 text-sm font-medium rounded bg-primary text-white hover:bg-blue-700">
						На главная
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default Page404;
