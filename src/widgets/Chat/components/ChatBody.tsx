import { Card, CircularProgress, Stack } from "@mui/material";
import { useMessages } from "../../../entities/chat/socket/useMessages";
import { useSession } from "../../../app/providers/AuthProvider";
import InfiniteScroll from "react-infinite-scroll-component";
import { Message } from "./Messsage";
import { useEffect } from "react";
import { viewMessages } from "../../../entities/chat/api";

interface Props {
	chatId: string;
	otherUserId: string;
}

export const ChatBody = ({ chatId, otherUserId }: Props) => {
	const { user } = useSession();
	const { messages, isLoading, hasNextPage, fetchMore } = useMessages({
		room: chatId,
		otherUserId,
		userId: user?.id || "",
	});

	useEffect(() => {
		async function a() {
			await viewMessages(chatId, otherUserId);
		}
		a();
	}, [chatId]);

	return (
		<Card sx={{ height: "100%", overflow: "hidden" }}>
			<Stack
				id="scrollableWrapper"
				sx={{
					height: "100%",
					overflow: "auto",
					flexDirection: "column-reverse",
				}}
			>
				{isLoading ? (
					<Stack
						sx={{
							width: "100%",
							height: "100%",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<CircularProgress
							disableShrink
							sx={{ alignSelf: "center", my: 1 }}
						/>
					</Stack>
				) : (
					<InfiniteScroll
						dataLength={messages.length}
						next={fetchMore}
						style={{
							display: "flex",
							gap: "12px",
							flexDirection: "column-reverse",
							padding: "16px 12px",
						}}
						inverse={true}
						hasMore={hasNextPage || false}
						loader={
							<CircularProgress
								disableShrink
								size={24}
								sx={{ alignSelf: "center", my: 1 }}
							/>
						}
						scrollableTarget="scrollableWrapper"
					>
						{messages.map((message) => (
							<Message message={message} key={message.id} />
						))}
					</InfiniteScroll>
				)}
			</Stack>
		</Card>
	);
};
