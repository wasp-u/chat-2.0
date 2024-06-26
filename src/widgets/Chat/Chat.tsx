import { Stack } from "@mui/material";
import { SendMessage } from "./components/SendMessage";
import { ChatHeader } from "./components/ChatHeader";
import { ChatBody } from "./components/ChatBody";
import { ChatModel } from "../../entities/chat/model";

interface Props {
	activeChat: ChatModel;
}

export const Chat = ({ activeChat }: Props) => {
	return (
		<Stack
			sx={{
				height: "calc(100vh - 32px)",
				justifyContent: "space-between",
			}}
			spacing={2}
		>
			<ChatHeader chatWith={activeChat.with} />

			<ChatBody chatId={activeChat.id} otherUserId={activeChat.with.id} />

			<SendMessage otherUserId={activeChat.with.id} />
		</Stack>
	);
};
