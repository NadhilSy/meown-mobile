import {Button, Text, View, KeyboardAvoidingView, Platform, TouchableOpacity, Image, ScrollView} from "react-native";
import {colors, typography} from "@/theme";
import FormInput from "@/components/FormInput/FormInput";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import AnimatedLottieView from "lottie-react-native";
import {useReducer} from "react";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import {registerService} from "@/app/service/AuthService";

const Register = (props) => {
    const onNavigateToLogin = () => {
        props.navigation.navigate("Login")
    }
    const data = {
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
        password: '',
        role: 'MEMBER'
    }
    const reducer = (state = data, action) => {
        switch (action.type) {
            case 'CHANGE_NAME':
                return {
                    ...state,
                    name: action.payload
                }
            case 'CHANGE_ADDRESS':
                return {
                    ...state,
                    address: action.payload
                }
            case 'CHANGE_EMAIL':
                return {
                    ...state,
                    email: action.payload
                }
            case 'CHANGE_PHONE':
                return {
                    ...state,
                    phoneNumber: action.payload
                }
            case 'CHANGE_PASSWORD':
                return {
                    ...state,
                    password: action.payload
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, data)
    const [error, loading, register] = useFetchMutation(registerService, () => onNavigateToLogin())
    if (error){
        console.error(error.response)
    }
    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={{
                    paddingTop: Platform.OS === "android" ? 24 : 0,
                    padding: 24
                }}
            >
                <View style={{
                    margin: 14,
                    alignItems: 'center',
                }}>
                    <AnimatedLottieView
                        source={require('../../../../assets/lottie/127447-kitty-cat-error-404.json')}
                        autoPlay={true}
                        loop={true}
                        style={{width: 170, height: 170}}
                    />
                    <Text
                        style={[typography.text, {marginBottom: 5, color: colors.primary, fontSize: 20}]}
                    >
                        "Treat your furry friend to a purrfect grooming experience"
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: colors.white,
                        borderRadius: 12,
                        height: 600,
                        padding: 24
                    }}
                >
                    <FormInput
                        icon="signature"
                        placeholder="Enter your username"
                        label="Username"
                        onChangeText={text => dispatch({type: 'CHANGE_NAME', payload: text})}
                    />
                    <FormInput
                        icon="mobile"
                        placeholder="Enter your phone number"
                        label="Phone Number"
                        onChangeText={text => dispatch({type: 'CHANGE_PHONE', payload: text})}
                    />
                    <FormInput
                        icon="home"
                        placeholder="Enter your address"
                        label="Address"
                        onChangeText={text => dispatch({type: 'CHANGE_ADDRESS', payload: text})}
                    />
                    <FormInput
                        icon="envelope"
                        placeholder="Enter your email"
                        label="Email Address"
                        onChangeText={text => dispatch({type: 'CHANGE_EMAIL', payload: text})}
                    />
                    <FormInput
                        icon="key"
                        placeholder="Enter your password"
                        label="Password"
                        onChangeText={text => dispatch({type: 'CHANGE_PASSWORD', payload: text})}
                        secureTextEntry={true}
                    />
                    <PrimaryButton
                        buttonText="Register"
                        onPress={() => {
                            console.log(state)
                            register(state)
                        }}
                    />
                </View>
                <TouchableOpacity onPress={() => onNavigateToLogin()}>
                    <Text
                        style={[typography.label, {
                            marginVertical: 24,
                            alignSelf: 'center',
                            color: colors.darkGray,
                        }]}
                    >Already have account?</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Register;