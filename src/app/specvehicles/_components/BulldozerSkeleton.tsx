import { Container } from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/Skeleton';

export const BulldozerSkeleton = () => {
	return (
		<Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
			<Skeleton className="w-full h-[470px] bg-slate-300" />
			<Skeleton className="w-full h-[470px] bg-slate-300" />
			<Skeleton className="w-full h-[470px] bg-slate-300" />
			<Skeleton className="w-full h-[470px] bg-slate-300" />
			<Skeleton className="w-full h-[470px] bg-slate-300" />
			<Skeleton className="w-full h-[470px] bg-slate-300" />
		</Container>
	);
};
