import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../providers/AuthProvider";

interface Props {
	children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
	const navigate = useNavigate();
	const { isAuth } = useSession();

	useEffect(() => {
		if (!isAuth) navigate("/sign-in");
	}, [isAuth]);

	return <>{children}</>;
};
