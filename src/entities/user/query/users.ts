import { useMutation, useQuery } from "react-query";
import { getUsers, searchUsers } from "../api";
import { UserModel } from "../model";

export const USERS_QUERY_KEY = ["meal-plan"];

export const useGetUsers = () => {
	const state = useQuery<UserModel[]>({
		queryFn: getUsers,
		queryKey: [USERS_QUERY_KEY],
	});
	return { ...state };
};

export const useSearchUsers = () => {
	const state = useMutation((queryString: string) => searchUsers(queryString));
	return { ...state };
};
