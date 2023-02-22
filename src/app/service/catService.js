import axiosInstance from "@/app/config/axiosInstance";


export const getAllCat = ()=> axiosInstance.get("/cats")
export const createCat = data => axiosInstance.post("/cats", data)

export const getCatsByName = user => axiosInstance.get("/cats")

export const deleteCatById = (id) => {return axiosInstance.delete("/cats/"+id)}

export const updateCatById = (id) => {return axiosInstance.put("/cats/"+id)}