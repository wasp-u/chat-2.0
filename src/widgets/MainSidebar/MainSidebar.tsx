import { Card, Divider, Stack, Typography } from "@mui/material";
import { useSession } from "../../app/providers/AuthProvider";
import { Button } from "../../shared/components/base/Button";
import { useAuthActions } from "../../entities/auth/hooks/useAuthActions";
import { UserModel } from "../../entities/user/model";
import { SearchUser } from "./components/SearchUser";
import { ChatsList } from "./components/ChatsList";
import { ChatModel } from "../../entities/chat/model";

interface Props {
	onSelectUser: (user: UserModel) => void;
	onSelectChat: (chat: ChatModel) => void;
	activeChatId: string;
	chats: ChatModel[];
}

export const MainSidebar = ({
	onSelectUser,
	onSelectChat,
	activeChatId,
	chats,
}: Props) => {
	const { user } = useSession();
	const { onSignOut } = useAuthActions();

	return (
		<Card sx={{ p: 2, height: "100%" }}>
			<Stack>
				<Stack
					direction={"row"}
					justifyContent={"space-between"}
					alignItems={"center"}
					mb={2}
				>
					<Typography>{user?.fullName}</Typography>

					<Button onClick={onSignOut}>
						<Typography>logout</Typography>
					</Button>
				</Stack>

				<SearchUser onCardClick={onSelectUser} />

				<Divider sx={{ my: 2 }} />

				<ChatsList
					onSelectChat={onSelectChat}
					activeChatId={activeChatId}
					chats={chats}
				/>
			</Stack>
		</Card>
	);
};
