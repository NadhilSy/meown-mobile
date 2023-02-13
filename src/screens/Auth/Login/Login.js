import {Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors, typography} from "@/theme";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import FormInput from "@/components/FormInput/FormInput";

const Login = (props) => {
    const onNavigateToRegister = () => {
        props.navigation.navigate("Register")
    }
    const onSubmit = () => {
        props.navigation.navigate("Main Tab")
    }

    return (
        <KeyboardAvoidingView
            style={{
                paddingTop: Platform.OS === "android" ? 24 : 0,
                padding:24
            }}
        >
            <View style={{
                margin: 14,
                alignItems: 'center',
            }}>
                <Image
                    source={require('../../../../assets/images/logo.png')}
                    resizeMode='center'
                />
            </View>
            <View
                style={{
                    backgroundColor: colors.white,
                    borderRadius:12,
                    height: 300,
                    padding:24
                }}
            >
                <FormInput
                    icon="envelope"
                    placeholder="Enter your email"
                    label="Email Address"
                />
                <FormInput
                    icon="key"
                    placeholder="Enter your password"
                    label="Password"
                />
                <PrimaryButton
                    buttonText="Login"
                />
            </View>
            <TouchableOpacity>
                <Text
                style={[typography.label,{
                    marginVertical:24,
                    alignSelf:'center',
                    color:colors.darkGray
                }]}
                >Create a New Account</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Login;