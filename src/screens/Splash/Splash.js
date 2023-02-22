import {Image, Text, View} from "react-native";
import React from "react";
const Splash = (props) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const onNavigate = async () => {
        if (isLoggedIn) {
            props.navigation.replace("Main Tab")
        } else {
            props.navigation.replace("Auth Stack")
        }
    }
    React.useEffect(() => {
        setTimeout(() => {
            onNavigate()
        }, 1500)
    })

    return (
        <View style={{
            justifyContent:'center',
            alignItems:'center',
            height:'100%'
        }}>
            <Image
                source={require('../../../assets/images/logo.png')}
                resizeMode='center'
            />
        </View>
    )
}

export default Splash;