import { Grid } from "@mui/material";
import { MainSidebar } from "../../widgets/MainSidebar/MainSidebar";
import { Chat } from "../../widgets/Chat";
import { useChats } from "./useChats";

export const Home = () => {
	const { activeChat, onSelectChat, onSelectUser, chats } = useChats();

	return (
		<Grid
			container
			sx={{
				height: "100vh",
				p: 2,
			}}
			columnSpacing={2}
		>
			<Grid item xs={4}>
				<MainSidebar
					onSelectUser={onSelectUser}
					onSelectChat={onSelectChat}
					activeChatId={activeChat?.id || ""}
					chats={chats}
				/>
			</Grid>

			{activeChat ? (
				<Grid item xs={8}>
					<Chat activeChat={activeChat} />
				</Grid>
			) : null}
		</Grid>
	);
};
