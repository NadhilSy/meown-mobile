import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

export const setItem = async (key, value) => asyncStorage.setItem(key, value)

export const readItem = async (item) => asyncStorage.getItem(item)

export const deleteItem = async (item) => asyncStorage.removeItem(item)