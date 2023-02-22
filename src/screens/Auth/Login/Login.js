import {Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors, typography} from "@/theme";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import FormInput from "@/components/FormInput/FormInput";
import {useState, useContext} from "react";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import {loginService} from "@/app/service/loginService";
import {useNavigate} from "@/app/hooks/useNavigate";
import {saveToken} from "@/utils/token";

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [error, loading, login] = useFetchMutation(loginService, async (data) => {
        await saveToken(data?.data.token)
        console.log(data)
        props.navigation.navigate("Main Tab")
    })
    if (error){
        console.log(error.response.request._response)
    }
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
            behavior="position"
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
                    onChange={text => setEmail(text)}

                />
                <FormInput
                    icon="key"
                    placeholder="Enter your password"
                    label="Password"
                    onChange={text => setPassword(text)}
                />
                <PrimaryButton
                    onPress={() => login({email, password})}
                    buttonText="Login"
                />
            </View>
            <TouchableOpacity onPress={() => onNavigateToRegister()}>
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