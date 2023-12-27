'use client';
import { Container } from '@/components/ui/Container';
import { RouterConfig } from '@/configs/router.config';
import { Category } from '@/types/api.types';
import { cn } from '@/utils/cn.util';
import { useRouter, useSearchParams } from 'next/navigation';
import type { FC } from 'react';

export const VehicleCategories: FC<VehicleCategoriesProps> = ({
	categories,
}) => {
	const searchParams = useSearchParams();
	const querycategoryId = searchParams.get('category');
	const router = useRouter();

	const filterBulldozers = (id: number) => {
		if (id === categories.length + 1)
			return router.push(RouterConfig.SpecVehicles());

		router.push(`${RouterConfig.SpecVehicles()}?category=${id}`);
	};

	const withAll = [{ name: 'Все', id: categories.length + 1 }, ...categories];

	return (
		<Container className="mb-10">
			<div className="bg-white shadow-sm p-5 md:p-10 rounded-sm">
				<ul className="grid grid-cols-2 xl:grid-cols-3 gap-5">
					{withAll.map(({ name, id }) => (
						<li
							onClick={() => filterBulldozers(id)}
							className={cn(
								'text-sm md:text-lg font-medium text-[#828282] cursor-pointer',
								{
									'text-primary': querycategoryId && id === +querycategoryId,
								},
								{
									'text-primary': name === 'Все' && querycategoryId === null,
								},
							)}
							key={id}
						>
							{name}
						</li>
					))}
				</ul>
			</div>
		</Container>
	);
};

type VehicleCategoriesProps = {
	categories: Category[];
};
