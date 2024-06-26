import { z } from "zod";

export const UserSchemaModel = z.object({
	id: z.string(),
	email: z.string(),
	isActivated: z.string(),
	fullName: z.string(),
	isOnline: z.boolean(),
});

export const UserSchemaRequest = z.object({
	user: UserSchemaModel,
	accessToken: z.string(),
	refreshToken: z.string(),
});

export type UserModel = z.infer<typeof UserSchemaModel>;
export type UserRequest = z.infer<typeof UserSchemaRequest>;
