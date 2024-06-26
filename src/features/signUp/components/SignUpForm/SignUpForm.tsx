import { Card, Link, Stack, Typography } from "@mui/material";
import { useSignUpForm } from "../../hooks/useSignUpForm";
import { FormProvider } from "react-hook-form";
import { TextField } from "../../../../shared/components/fields/TextField";
import { Button } from "../../../../shared/components/base/Button";

export const SignUpForm = () => {
	const { methods, isPending, onSubmit } = useSignUpForm();

	return (
		<Card sx={{ width: "100%", maxWidth: 600, p: 4 }}>
			<FormProvider {...methods}>
				<Typography variant="h2" sx={{ mb: 3, textAlign: "center" }}>
					Sign Up
				</Typography>

				<Stack spacing={2}>
					<TextField
						name="fullName"
						label="Full Name"
						placeholder="Example Name"
					/>

					<TextField
						name="email"
						type="email"
						label="Email"
						placeholder="email@example.com"
					/>

					<TextField name="password" label="Password" placeholder="Password" />

					<Button
						loading={isPending}
						sx={{ width: 200, alignSelf: "end" }}
						onClick={onSubmit}
					>
						Submit
					</Button>
				</Stack>

				<Typography>
					Do you have account? <Link href="/sign-in">Sign In</Link>
				</Typography>
			</FormProvider>
		</Card>
	);
};
