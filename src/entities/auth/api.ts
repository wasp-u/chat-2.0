import Api from "../../shared/services";
import { UserModel, UserRequest } from "../user/model";
import { LoginRequestData, SignUpRequestData } from "./model/auth";

export const signIn = async (data: LoginRequestData) => {
	const userData = await Api.post<UserRequest>("api/v1/login", {
		data,
	});

	return userData;
};

export const signUp = async (data: SignUpRequestData) => {
	const userData = await Api.post<UserRequest>("api/v1/registration", {
		data,
	});

	return userData;
};

export const getAuthUser = async () => {
	const userData = await Api.get<UserModel>("api/v1/auth/user");

	return userData;
};

export const refresh = async () => {
	const userData = await Api.get<UserRequest>("api/v1/refresh");

	return userData;
};
