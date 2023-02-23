import axiosInstance from "@/app/config/axiosInstance";
export const getTransactions = () => axiosInstance.get('/transactions')
export const makeTransaction = (data) => axiosInstance.post('/transactions', data)