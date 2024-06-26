import { Avatar, Badge, Card, Stack, Typography } from "@mui/material";
import { ChatModel } from "../../../entities/chat/model";
import { generateAvatar } from "../../../shared";
import dayjs from "dayjs";

interface Props {
	chat: ChatModel;
	activeChatId: string;
	onSelectChat: (chat: ChatModel) => void;
}

export const ChatCard = ({ chat, activeChatId, onSelectChat }: Props) => {
	const isActive = chat.id === activeChatId;

	return (
		<Card
			sx={{
				...(isActive && { background: "rgba(255, 255, 255, 0.4)" }),

				"&:hover": {
					background: "rgba(255, 255, 255, 0.5)",
					cursor: "pointer",
				},
			}}
			onClick={() => onSelectChat(chat)}
		>
			<Stack direction={"row"} alignItems={"center"} spacing={1.5}>
				<Badge
					color="success"
					overlap="circular"
					badgeContent=""
					invisible={!chat.with.isOnline}
					anchorOrigin={{
						horizontal: "right",
						vertical: "bottom",
					}}
				>
					<Avatar {...generateAvatar(chat.with.fullName)} />
				</Badge>

				<Stack spacing={0.25} width={"100%"}>
					<Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
						<Typography
							variant="body2"
							sx={{
								display: "-webkit-box",
								textOverflow: "ellipsis",
								overflow: "hidden",
								WebkitLineClamp: 1,
								WebkitBoxOrient: "vertical",
								wordBreak: "break-all",
							}}
						>
							{chat.with.fullName}
						</Typography>

						<Typography variant="subtitle2" fontSize={10}>
							{dayjs(chat.updatedAt).format("MMM D, h:mm A")}
						</Typography>
					</Stack>
					<Typography
						variant="subtitle2"
						sx={{
							display: "-webkit-box",
							textOverflow: "ellipsis",
							overflow: "hidden",
							WebkitLineClamp: 1,
							WebkitBoxOrient: "vertical",
							wordBreak: "break-all",
						}}
					>
						{chat.lastMessage}
					</Typography>
				</Stack>
			</Stack>
		</Card>
	);
};
