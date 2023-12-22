import { Page } from '@/types/next.types';

const HomePage: Page = async () => {
	return (
		<section>
			<h1 className="text-red-500">Hello</h1>
		</section>
	);
};

export default HomePage;
