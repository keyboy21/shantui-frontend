import { BulldozerCard } from '@/components/ui/BulldozerCard';
import { Container } from '@/components/ui/Container';
import { Page } from '@/types/next.types';

const HomePage: Page = async () => {
	return (
		<section>
			<h1 className="text-red-500">Hello</h1>
			<Container className="grid grid-cols-4 gap-7">
				<BulldozerCard />
				<BulldozerCard />
				<BulldozerCard />
				<BulldozerCard />
			</Container>
			
		</section>
	);
};

export default HomePage;
