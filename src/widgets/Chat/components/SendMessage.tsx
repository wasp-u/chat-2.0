import { Card, Stack } from "@mui/material";
import { useState } from "react";
import { TextInput } from "../../../shared/components/inputs/TextInput";
import { Button } from "../../../shared/components/base/Button";
import { sendMessage } from "../../../entities/chat/api";
import { useSession } from "../../../app/providers/AuthProvider";

interface Props {
	otherUserId: string;
}

export const SendMessage = ({ otherUserId }: Props) => {
	const { user } = useSession();
	const [text, setText] = useState("");

	const onSend = async () => {
		await sendMessage({
			otherUserId,
			messageText: text,
			postedByUser: user?.id || "",
		});
		setText("");
	};

	return (
		<Card sx={{ p: 2 }}>
			<Stack direction={"row"} spacing={2}>
				<TextInput
					onChange={(e) => setText(e.target.value)}
					name="message"
					placeholder="Message"
					multiline
					fullWidth
					value={text}
				/>

				<Button onClick={onSend}>send</Button>
			</Stack>
		</Card>
	);
};
