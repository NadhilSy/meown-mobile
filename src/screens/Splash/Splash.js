import {Image, View} from "react-native";
import React from "react";
import {readItem} from "@/utils/asyncStorageItem";
import {getToken} from "@/utils/token";

const Splash = (props) => {
    const onNavigate = async () => {
        const userInfo = await readItem("userInfo")
        const token = await getToken()
        if (!userInfo || !token) {
            props.navigation.replace("Auth Stack")
        } else {
            props.navigation.replace("Main Tab")
        }
    }
    React.useEffect(() => {
        setTimeout(() => {
            onNavigate()
        }, 1500)
    })

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }}>
            <Image
                source={require('../../../assets/images/logo.png')}
                resizeMode='center'
            />
        </View>
    )
}

export default Splash;