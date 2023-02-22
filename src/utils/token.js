import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteItem} from "@/utils/asyncStorageItem";

const TOKEN = "token";

export const getToken = async () => {
    const tokenString = await AsyncStorage.getItem(TOKEN);
    return JSON.parse(tokenString);
};


export const saveToken = async (token)=> {
    await AsyncStorage.setItem(TOKEN, JSON.stringify(token));
}

export const removeToken = async () => {
    await AsyncStorage.removeItem(TOKEN);
}
export const logout = async ()=>{
    await removeToken();
    await deleteItem("userInfo")
}