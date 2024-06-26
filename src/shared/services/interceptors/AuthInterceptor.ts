import { InternalAxiosRequestConfig } from "axios";

export const AuthInterceptor = (config: InternalAxiosRequestConfig) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

	return config;
};
