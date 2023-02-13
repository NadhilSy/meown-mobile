import {Button, Text, View} from "react-native";

const Register = (props) => {
    const onNavigateToLogin=()=>{
        props.navigation.navigate("Login")
    }
    return (
        <View>
            <Text>
                Register
            </Text>
            <Button title={"Sudah punya akun"} onPress={onNavigateToLogin} />
        </View>
    )
}

export default Register;