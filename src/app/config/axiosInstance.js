import axios from "axios";
import Constants from "expo-constants";
import {getToken, removeToken} from "@/utils/token";


const {manifest} = Constants;

const axiosInstance = axios.create({
    // baseURL: `http://${manifest.debuggerHost.split(':').shift()}:8888`,
    baseURL:'http://meown.enigma-trainer.space:8888',
    headers: {
        "Content-type": "application/json"
    }
})
axiosInstance.interceptors.request.use(
    async (config) =>{
        const token = await getToken();
        if (token){
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (config) => config,
    async (error) =>{
        const responseError = error?.response?.data;
        if (error) {
            await removeToken();
        }
        return Promise.reject(error);
    }
)
export default axiosInstance