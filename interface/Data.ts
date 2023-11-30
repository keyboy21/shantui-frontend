import { z } from 'zod'

const Message = z.object({
	name: z.string(),
	phone: z.string(),
	email: z.string(),
	message: z.string(),
})

const Vehicle = z.object({
	id: z.number(),
	name: z.string(),
	image: z.string().url(),
	description: z.string(),
	doc: z.string().url().nullable(),
	category: z.number(),
	description_bot: z.string(),
})

const Category = z.object({
	id: z.number(),
	name: z.string(),
	image: z.string(),
})

const Blog = z.object({
	id: z.number(),
	title: z.string(),
	Video: z.string().url(),
	create_at: z.string(),
	article: z.number(),
})

const Factories = z.object({
	id: z.number(),
	image: z.string(),
	name: z.string(),
	description: z.string(),
	description_bot: z.string(),
})

export type specVehicles = z.infer<typeof Vehicle>
export type UserMessage = z.infer<typeof Message>
export type specCategory = z.infer<typeof Category>
export type Blogs = z.infer<typeof Blog>
export type Factory = z.infer<typeof Factories>
