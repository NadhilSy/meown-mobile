import {Alert, FlatList, Pressable, RefreshControl, ScrollView, Text, View} from "react-native";
import React, {useEffect, useState} from "react";

import useFetchQuery from "@/app/hooks/useFetchQuery";
import styles from "@/screens/Main/Home/styles";
import {colors} from "@/theme";

import {getAllPackage} from "@/app/service/packageService";
import {readItem} from "@/utils/asyncStorageItem";
import UserDetails from "@/screens/Main/Details/User/Index";
import emptyAnimation from "../../../../assets/lottie/127447-kitty-cat-error-404.json";
import AnimatedLottieView from "lottie-react-native";

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
    const [userInfo,setUserInfo] = useState(null)
    const getUserData = async () => {
        const user = await readItem("userInfo")
        setUserInfo(user)
    }
    useEffect(()=>{
        getUserData()
    },[])
    const RenderPackage = (packet) => {
        return (
            <Pressable onPress={() => props.navigation.navigate("PacketDetails", {
                packet: packet?.packet
            })}
                       style={{justifyContent: 'center', height: '100%', width: '50%'}}>
                <View style={[styles.card, {justifyContent: 'center', height: 100, backgroundColor: colors.primary}]}>
                    <Text style={[{
                        fontWeight: "bold",
                        fontSize: 18,
                        paddingLeft: 20,
                        paddingTop: 8,
                        color: colors.white
                    }]}>{packet?.packet?.packageName}</Text>
                </View>
            </Pressable>

        )
    }

    return (
        <View style={styles.container}>
            <UserDetails
                user={userInfo}
            />
            <Text style={{fontWeight:'bold',fontSize:24,marginTop:30,color:colors.primary}}>Packet list</Text>
            {data?.data?.length > 0 ?
                <FlatList
                    data={data.data}
                    renderItem={(data) =>
                        <RenderPackage packet={data.item}/>}
                    keyExtractor={(data) => data?.item?.id}
                    onEndReachedThreshold={0.3}
                    onEndReached={onChangeData}
                    numColumns={2}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={onChangeData}/>}
                /> :
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={
                                onChangeData
                            }/>}>
                    <AnimatedLottieView
                        source={emptyAnimation}
                        autoPlay={true}
                        loop={true}
                        style={{width: 170, height: 170}}
                    />
                    <Text> Package is empty</Text>
                </ScrollView>}
        </View>
    )

}

export default Home