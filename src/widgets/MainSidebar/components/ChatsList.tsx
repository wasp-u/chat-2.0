import { Stack } from "@mui/material";
import { ChatModel } from "../../../entities/chat/model";
import { ChatCard } from "./ChatCard";

interface Props {
	chats: ChatModel[];
	onSelectChat: (chat: ChatModel) => void;
	activeChatId: string;
}

export const ChatsList = ({ onSelectChat, activeChatId, chats }: Props) => {
	if (!chats.length) return null;

	return (
		<Stack spacing={1}>
			{chats.map((chat) => (
				<ChatCard
					key={chat.id}
					chat={chat}
					activeChatId={activeChatId}
					onSelectChat={onSelectChat}
				/>
			))}
		</Stack>
	);
};
