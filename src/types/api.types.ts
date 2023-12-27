export type Blogs = {
	status: string;
	data: Blog[];
};

export type Blog = {
	id: number;
	title: string;
	create_at: string;
	Video: string;
	article: number;
};

// Category
export type Categories = {
	status: string;
	data: Category[];
};

export type Category = {
	id: number;
	name: string;
	image: string;
};

// Factory
export type Factories = {
	status: string;
	data: Factory[];
};

export type Factory = {
	id: number;
	name: string;
	description: string;
	description_bot: string;
	image: string;
};

// Bulldozers
export type Bulldozers = {
	status: string;
	data: Vehicle[];
};

export type Vehicle = {
	id: number;
	name: string;
	image: string;
	description: string;
	category: number;
	doc: string | null;
	description_bot: string | null;
};