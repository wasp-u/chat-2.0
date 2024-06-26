import { useEffect, useState } from "react";
import { ChatModel } from "../../entities/chat/model";
import { useGetChat, useGetChats } from "../../entities/chat/query/chat";
import { UserModel } from "../../entities/user/model";
import { SOCKET_EVENTS, socket } from "../../shared/services/io";
import { useSession } from "../../app/providers/AuthProvider";
import { useBeforeUnload } from "react-router-dom";

export const useChats = () => {
	const [chats, setChats] = useState<ChatModel[]>([]);
	console.log("chats", chats);

	const [activeChat, setActiveChat] = useState<ChatModel | null>(null);
	const { mutateAsync } = useGetChat();
	const { data } = useGetChats();

	const { user } = useSession();

	const onSelectUser = async (user: UserModel) => {
		if (user.id) {
			const chat = await mutateAsync(user.id);

			setActiveChat(chat);
		}
	};

	const onSelectChat = async (chat: ChatModel) => {
		setActiveChat(chat);
	};

	const onUpdateChat = (value: { newChat: ChatModel }) => {
		setChats((prev) => {
			const newState = [...prev];
			let currentChatIndex = 0;
			const currentChat = prev.find((chat, index) => {
				const isCurrentChat = chat.id === value.newChat.id;

				if (isCurrentChat) currentChatIndex = index;
				return isCurrentChat;
			});

			if (currentChat) {
				newState[currentChatIndex] = { ...currentChat, ...value.newChat };
			} else {
				newState.push(value.newChat);
			}

			return newState;
		});
	};

	const subscribe = (userId: string) => {
		socket.emit(SOCKET_EVENTS.subscribe, { userId });
	};

	const updateOnlineUsers = (value: { userIds: string[] }) => {
		const onlineUsers = value.userIds;
		console.log("onlineUsers", onlineUsers);
		setChats((prev) => {
			return prev.map((prevChat) =>
				onlineUsers.includes(prevChat.with.id)
					? { ...prevChat, with: { ...prevChat.with, isOnline: true } }
					: { ...prevChat, with: { ...prevChat.with, isOnline: false } }
			);
		});
	};

	useBeforeUnload(() => {
		socket.emit(SOCKET_EVENTS.unsubscribe, { userId: user?.id });
	});

	useEffect(() => {
		if (data) {
			setChats(data);
		}
	}, [data]);

	useEffect(() => {
		console.log("user?.id", user?.id);
		subscribe(user?.id || "");

		socket.on(SOCKET_EVENTS.updateChat, onUpdateChat);
		socket.on("online users", updateOnlineUsers);

		return () => {
			socket.off(SOCKET_EVENTS.updateChat, onUpdateChat);
		};
	}, [user?.id]);

	return { onSelectUser, onSelectChat, activeChat, chats };
};
