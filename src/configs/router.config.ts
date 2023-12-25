export const RouterConfig = {
	Home: '/',
	SpecVehicles: (id?: number) => (id ? `/specvehicles/${id}` : '/specvehicles'),
	Factories: (id?: number) => (id ? `/factories/${id}` : '/factories'),
	Projects: '/projects',
	Services: '/service',
	Contacts: '/contacts',
} as const;

export const Routes = [
	{ name: 'Главная', path: '/' },
	{ name: 'Спецтехника', path: '/specvehicles' },
	{ name: 'Заводы', path: '/factories' },
	{ name: 'Проекты', path: '/projects' },
	{ name: 'Сервис', path: '/service' },
	{ name: 'Контакты', path: '/contacts' },
] as const;
