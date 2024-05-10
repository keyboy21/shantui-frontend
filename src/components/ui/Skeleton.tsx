import { cn } from '@/utils/cn.util';

export const Skeleton = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => {
	return <div className={cn('bg-muted animate-pulse', className)} {...props} />;
};
