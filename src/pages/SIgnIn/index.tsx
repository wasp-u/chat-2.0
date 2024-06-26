import { Container } from "@mui/material";
import { SignInForm } from "../../features/signIn";

export const SignIn = () => {
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
			<SignInForm />
		</Container>
	);
};
