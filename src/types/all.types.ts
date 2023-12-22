export type Vehicle = {
	id: number;
	name: string;
	image: string;
	description: string;
	category: number;
	doc: string | null;
	description_bot: string | null;
};

export type VehicleCategory = {
	id: number;
	name: string;
	image: string;
};

export type Blog = {
	id: number;
	title: string;
	Video: string;
	create_at: Date;
	article: number;
};

export type Factory = {
	id: number;
	image: string;
	name: string;
	description: string;
	description_bot: string;
};
