import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

export const setItem = async (key, value) => {
    await asyncStorage.setItem(key, JSON.stringify(value))
}

export const readItem = async (key) => {
    const jsonValue = await asyncStorage.getItem(key)
    return JSON.parse(jsonValue)
}

export const deleteItem = async (key) => await asyncStorage.removeItem(key)