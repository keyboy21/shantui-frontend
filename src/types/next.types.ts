import type { Metadata, ResolvingMetadata } from 'next';
import type { FC, ReactNode } from 'react';

export interface ParamsWithSlug {
	slug?: string;
}

export type SearchParamsWithQuer = { [key: string]: string | undefined };

export type Page<
	Params extends ParamsWithSlug = ParamsWithSlug,
	SearchParams extends SearchParamsWithQuer = SearchParamsWithQuer,
> = FC<{
	params: Params;
	searchParams: SearchParams;
}>;

export type LayoutComponent<Params extends ParamsWithSlug = ParamsWithSlug> =
	FC<{
		params: Params;
		children: ReactNode;
	}>;

export type ErrorRouteComponent = FC<{
	error: Error;
	reset: () => void;
}>;

export type RenderBehavior =
	| 'auto'
	| 'force-dynamic'
	| 'error'
	| 'force-static';

export type DynamicMetadata<
	Params extends ParamsWithSlug = ParamsWithSlug,
	SearchParams extends object = object,
> = (
	params: {
		params: Params;
		searchParams: SearchParams;
	},
	parent: ResolvingMetadata,
) => Promise<Metadata> | Metadata;
