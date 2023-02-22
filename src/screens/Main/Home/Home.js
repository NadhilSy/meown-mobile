import {Text, View, Alert, RefreshControl, ScrollView, FlatList, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import {readItem} from "@/utils/asyncStorageItem";
import useFetch from "@/app/hooks/useFetch";

import useFetchQuery from "@/app/hooks/useFetchQuery";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import styles from "@/screens/Main/Home/styles";
import {colors} from "@/theme";

import {getAllPackage} from "@/app/service/packageService";
import {getAllCat} from "@/app/service/catService";
import Button from "@/components/Button/Button";

const Home = (props) => {
    // const [data,error,loading] = useFetch()
    const {data, fetchQuery: refetch} = useFetchQuery(getAllPackage())
    const [packet, setPacket] = useState([])
    const [loading, setLoading] = useState(false)
    const onChangeData = async () => {
        try {
            setLoading(true);
            const result = await getAllPackage()
            setPacket(result?.data?.data);
        } catch (e) {
            setPacket([])
            Alert.alert("", e.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        setPacket(data?.data)
    }, [data, loading])

    console.log(data)

    const RenderPackage = (packet) => {
        return (
            <Pressable onPress={()=>props.navigation.navigate("")}>
                <View style={styles.card}>
                    <View>
                        <Text style={[{
                            fontWeight: "bold",
                            fontSize: 18,
                            paddingLeft: 20,
                            paddingTop: 8,
                            color: colors.focused
                        }]}>{packet?.packet?.packageName}</Text>
                    </View>
                    <View style={{alignItems: "flex-end"}}>
                    </View>
                </View>
            </Pressable>

        )
    }


    return (
        <View style={styles.container}>

            {data?.data?.length > 0 ?
                <FlatList
                    data={data.data}
                    renderItem={(data) =>
                        <RenderPackage packet={data.item}/>}
                    keyExtractor={(data) => data?.item?.id}
                    onEndReachedThreshold={0.3}
                    onEndReached={onChangeData}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={onChangeData}/>}
                /> :
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={
                                onChangeData
                            }/>}><Text style={[styles.title, {alignSelf: "center"}]}>Package is Empty</Text>

                </ScrollView>}
        </View>
    )

}

export default Home