import {Text, View} from "react-native";
import React from "react";

const Splash = (props) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const onNavigate = async () => {
        if (isLoggedIn) {
            props.navigation.navigate("Main Tab")
        } else {
            props.navigation.navigate("Auth Stack")
        }

    }

    React.useEffect(() => {
        setTimeout(() => {
            onNavigate()
        }, 500)
    })

    return (
        <View>
            <Text>
                Splash
            </Text>
        </View>
    )
}

export default Splash;