import { Avatar, Card, Stack, Typography } from "@mui/material";
import { UserModel } from "../../../entities/user/model";
import { generateAvatar } from "../../../shared";

interface Props {
	chatWith: UserModel;
}

export const ChatHeader = ({ chatWith }: Props) => {
	const isOnline = chatWith.isOnline;

	return (
		<Card sx={{ p: 2 }}>
			<Stack direction={"row"} alignItems={"center"} spacing={1}>
				<Avatar {...generateAvatar(chatWith.fullName)} />

				<Stack>
					<Typography>{chatWith.fullName}</Typography>

					{isOnline ? (
						<Typography variant="subtitle2" color={"success"}>
							online
						</Typography>
					) : (
						<Typography variant="subtitle2" color={"#A0153E"}>
							offline
						</Typography>
					)}
				</Stack>
			</Stack>
		</Card>
	);
};
