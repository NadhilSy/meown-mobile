import {Button, Text, View} from "react-native";
import {logout} from "@/utils/token";

const Settings = (props) => {
    const onLogout = async () => {
        await logout()
        props.navigation.navigate("Login")
    }
    return (
        <View>
            <Text>
                Settings
            </Text>
            <Button title={"Logout"} onPress={onLogout}/>
        </View>
    )
}

export default Settings