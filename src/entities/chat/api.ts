import Api from "../../shared/services";
import { ChatModel, MessageModel } from "./model";

export const getChat = async (data: { userId: string }) => {
	const res = await Api.post<any>("api/v1/chat", { data });

	return res;
};

export const sendMessage = async (data: {
	otherUserId: string;
	postedByUser: string;
	messageText: string;
}) => {
	const res = await Api.post<any>("api/v1/chat/message", { data });

	return res;
};

export const getChatMessages = async (chatRoomId: string, page: number) => {
	const res = await Api.get<MessageModel[]>("api/v1/chat/messages", {
		params: { chatRoomId, page },
	});

	return res;
};

export const getUserChats = async () => {
	const res = await Api.get<ChatModel[]>("api/v1/chats");

	return res;
};

export const viewMessages = async (chatRoomId: string, otherUserId: string) => {
	const res = await Api.put<void>("api/v1/chat/messages", {
		params: { chatRoomId, otherUserId },
	});

	return res;
};
