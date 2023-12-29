'use client';
import { Container } from '@/components/ui/Container';
import { RouterConfig } from '@/configs/router.config';
import { Category } from '@/types/api.types';
import { cn } from '@/utils/cn.util';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { startTransition } from 'react';

export const VehicleCategories: FC<VehicleCategoriesProps> = ({
	categories,
	categoryId,
}) => {
	const router = useRouter();

	const filterBulldozers = (id: number) => {
		if (id === categories.length + 1) {
			startTransition(() => {
				router.push(RouterConfig.SpecVehicles());
			});
		} else {
			startTransition(() => {
				router.push(`${RouterConfig.SpecVehicles()}?category=${id}`);
			});
		}
	};

	const withAll = [{ name: 'Все', id: categories.length + 1 }, ...categories];

	return (
		<Container className="mb-10">
			<div className="bg-white shadow-sm p-5 md:py-10 md:px-14 rounded-sm">
				<ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
					{withAll.map(({ name, id }) => (
						<li
							onClick={() => filterBulldozers(id)}
							className={cn(
								'text-base w-fit md:text-lg font-medium text-[#828282] cursor-pointer',
								{
									'text-primary': categoryId && id === +categoryId,
								},
								{
									'text-primary': name === 'Все' && categoryId === null,
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
	categoryId: string | null;
};
