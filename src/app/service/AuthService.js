import axiosInstance from "@/app/config/axiosInstance";

export const loginService = user => axiosInstance.post("auth/login", {
    email: user.email, password: user.password
})
export const registerService = data => axiosInstance.post("auth/register", data)