import axiosInstance from "@/app/config/axiosInstance";

export const makeTransaction = (data) => axiosInstance.post('/transactions', data)