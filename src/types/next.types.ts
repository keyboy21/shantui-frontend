import type { Metadata, ResolvingMetadata } from 'next';
import type { FC, ReactNode } from 'react';

export interface ParamsWith {
	slug?: string;
}

export type Page<
	Params extends ParamsWith = ParamsWith,
	SearchParams extends object = object,
> = FC<{
	params: Params;
	searchParams: SearchParams;
}>;

export type LayoutComponent<Params extends ParamsWith = ParamsWith> = FC<{
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
	Params extends ParamsWith = ParamsWith,
	SearchParams extends object = object,
> = (
	params: {
		params: Params;
		searchParams: SearchParams;
	},
	parent: ResolvingMetadata,
) => Promise<Metadata> | Metadata;
