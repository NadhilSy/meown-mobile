import {Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors, typography} from "@/theme";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import FormInput from "@/components/FormInput/FormInput";
import {useState, useContext} from "react";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import {loginService} from "@/app/service/AuthService";
import {useNavigate} from "@/app/hooks/useNavigate";
import {saveToken} from "@/utils/token";
import {setItem} from "@/utils/asyncStorageItem";

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [error, loading, login] = useFetchMutation(loginService, async (data) => {
        await setItem("userInfo",data?.data.data)
        await saveToken(data?.data.token)
        props.navigation.replace("Main Tab")
    })
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
                    onChangeText={text => setEmail(text)}

                />
                <FormInput
                    icon="key"
                    placeholder="Enter your password"
                    label="Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
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