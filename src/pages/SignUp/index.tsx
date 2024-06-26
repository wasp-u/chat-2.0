import { Container } from "@mui/material";
import { SignUpForm } from "../../features/signUp";

export const SignUp = () => {
	return (
		<Container
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				py: 10,
				height: "100vh",
			}}
		>
			<SignUpForm />
		</Container>
	);
};
