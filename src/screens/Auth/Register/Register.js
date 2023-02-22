import {Button, Text, View, KeyboardAvoidingView, Platform, TouchableOpacity, Image, ScrollView} from "react-native";
import {colors, typography} from "@/theme";
import FormInput from "@/components/FormInput/FormInput";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import AnimatedLottieView from "lottie-react-native";

const Register = (props) => {
    const onNavigateToLogin=()=>{
        props.navigation.navigate("Login")
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
                    style={{width:170,height:170}}
                />
                <Text
                    style={[typography.text,{marginBottom:5, color:colors.primary, fontSize: 20}]}
                >
                    "Treat your furry friend to a purrfect grooming experience"
                </Text>
            </View>
            <View
                style={{
                    backgroundColor: colors.white,
                    borderRadius:12,
                    height: 600,
                    padding:24
                }}
            >
                <FormInput
                    icon="signature"
                    placeholder="Enter your username"
                    label="Username"
                />
                <FormInput
                    icon="mobile"
                    placeholder="Enter your phone number"
                    label="Phone Number"
                />
                <FormInput
                    icon="home"
                    placeholder="Enter your address"
                    label="Address"
                />
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
                    buttonText="Register"
                />
            </View>
            <TouchableOpacity onPress={() => onNavigateToLogin()} >
                <Text
                    style={[typography.label,{
                        marginVertical:24,
                        alignSelf:'center',
                        color:colors.darkGray,
                    }]}
                >Already have account?</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
        </ScrollView>
        // <View>
        //     <Text>
        //         Register
        //     </Text>
        //     <Button title={"Sudah punya akun"} onPress={onNavigateToLogin} />
        // </View>
    )
}

export default Register;