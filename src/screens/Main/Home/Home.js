import {Text, View} from "react-native";
import {useEffect, useState} from "react";
import {readItem} from "@/utils/asyncStorageItem";
import useFetch from "@/app/hooks/useFetch";

const Home = () => {
    // const [data,error,loading] = useFetch()
    return (
        <View>
            <Text>
                Home
            </Text>
        </View>
    )
}

export default Home