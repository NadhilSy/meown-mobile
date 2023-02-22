import axiosInstance from "@/app/config/axiosInstance";

export const getAllPackage = () => axiosInstance.get("/packages")