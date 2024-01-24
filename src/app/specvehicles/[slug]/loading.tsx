import { Container } from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/Skeleton';

const Loading = () => {
	return (
		<section>
			<Container>
				<Skeleton className="h-7 w-full max-w-[700px] mx-auto mt-[150px] bg-slate-300 mb-14" />
			</Container>
			<Container className="mb-24">
				<Skeleton className="h-[400px] max-w-[700px] mx-auto bg-slate-300" />
			</Container>
		</section>
	);
};

export default Loading;
