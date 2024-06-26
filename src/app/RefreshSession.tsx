import { useEffect } from "react";
import { useAuthActions } from "../entities/auth/hooks/useAuthActions";
import { useSession } from "./providers/AuthProvider";

export const RefreshSession = () => {
	const { refreshSession } = useAuthActions();
	const { user, logout, isAuth } = useSession();

	useEffect(() => {
		if (!isAuth) {
			logout();
		}
		if (!user && isAuth) {
			refreshSession();
		}
	}, []);

	return null;
};
