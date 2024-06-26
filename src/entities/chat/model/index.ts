import { UserSchemaModel } from "../../user/model";
import { z } from "zod";

export const MessageSchemaModel = z.object({
	id: z.string(),
	message: z.string(),
	createdAt: z.string(),
	postedByUser: z.string(),
	chatRoomInfo: z.object({
		id: z.string(),
		userIds: z.string().array(),
		createdAt: z.string(),
	}),
	viewed: z.boolean(),
});

export const ChatSchemaModel = z.object({
	createdAt: z.string(),
	updatedAt: z.string(),
	id: z.string(),
	userIds: z.string().array(),
	with: UserSchemaModel,
	lastMessage: z.string(),
});

export type MessageModel = z.infer<typeof MessageSchemaModel>;
export type ChatModel = z.infer<typeof ChatSchemaModel>;
