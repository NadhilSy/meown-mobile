import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import {colors, typography} from "@/theme";
import {KeyboardAvoidingView, Text, TouchableOpacity, View, Platform} from "react-native";
import FormInput from "@/components/FormInput/FormInput";
import {useState} from "react";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import {useNavigate} from "@/app/hooks/useNavigate";
import {updateCatById} from "@/app/service/catService";

const UpdateCat = (props) => {

    const [name, setName] = useState('')
    const [race, setRace] = useState('')
    const [color, setColor] = useState('')
    const [gender, setGender] = useState('')
    const navigate = useNavigate()

    const [error, loading, update] = useFetchMutation(updateCatById(props.cat.id))

    const onNavigateAfterUpdate = () =>{
        updateCatById(props.id)
        props.navigation.navigate("Main Tab")
    }

    return(
        <KeyboardAvoidingView
            style={{
                paddingTop: Platform.OS === "android" ? 24 : 0,
                padding: 24
            }}
            behavior="position">

            <View
                style={{
                    backgroundColor:colors.white,
                    borderRadius:12,
                    height: 600,
                    padding: 24
                }}>
                <FormInput
                    label ="Name"
                    onChange={text => setName(text)}
                />
                <FormInput
                    label ="Race"
                onChange={text => setRace(text)}
                />
                <FormInput
                    label ="Color"
                    onChange={text => setColor(text)}
                />
                <FormInput
                    label ="Gender"
                    onChange={text => setGender(text)}
                />
                <PrimaryButton
                    onPress ={()=>onNavigateAfterUpdate()}
                />
            </View>


        </KeyboardAvoidingView>
    )

}

export default UpdateCat