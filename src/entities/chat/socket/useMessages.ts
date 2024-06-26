import { useEffect, useMemo, useState } from "react";
import { SOCKET_EVENTS, socket } from "../../../shared/services/io";
import { useGetMessages } from "../query/chat";
import { MessageModel } from "../model";

export const useMessages = ({
	room,
	userId,
	otherUserId,
}: {
	room: string;
	userId: string;
	otherUserId: string;
}) => {
	const [newMessages, setNewMessages] = useState<MessageModel[]>([]);

	const { data, isFetching, isLoading, fetchNextPage, hasNextPage } =
		useGetMessages(room);

	const onNewMessage = (value: { message: MessageModel }) => {
		setNewMessages((prev) => [value.message, ...prev]);
	};

	const mess = useMemo(() => {
		return (
			data?.pages.reduce((acc, page) => {
				return [...acc, ...page];
			}, []) || []
		);
	}, [data]);

	const fetchMore = () => {
		if (!isLoading && !isFetching) fetchNextPage();
	};

	useEffect(() => {
		socket.on(SOCKET_EVENTS.newMessage, onNewMessage);

		return () => {
			socket.off(SOCKET_EVENTS.newMessage, onNewMessage);
		};
	}, [userId, room, otherUserId]);

	return {
		messages: [...newMessages, ...mess],
		isFetching,
		isLoading,
		fetchMore,
		hasNextPage,
	};
};
