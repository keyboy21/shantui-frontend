export const RouterConfig = {
	Home: '/',
	SpecVehicles: (id?: number) => (id ? `/specvehicles/${id}` : '/specvehicles'),
	Factories: (id?: number) => (id ? `/factories/${id}` : '/factories'),
	Projects: '/projects',
	Services: '/servies',
	Contacts: '/contacts',
} as const;
