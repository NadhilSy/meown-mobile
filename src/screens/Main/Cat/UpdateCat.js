import {KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View} from "react-native";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import {updateCatById} from "@/app/service/catService";
import FormInput from "@/components/FormInput/FormInput";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import {useState} from "react";
import {colors} from "@/theme";
import {readItem} from "@/utils/asyncStorageItem";

const UpdateCat = (props) => {
    const {id} = props.route.params
    const [error, loading, updateCat] = useFetchMutation(updateCatById, () => {
        props.navigation.navigate("Cat")
    })
    const getUser = async () => {
        return await readItem("userInfo")
    }
    const [name, setName] = useState('')
    const [race, setRace] = useState('')
    const [color, setColor] = useState('')
    const [gender, setGender] = useState('')
    const onNavigateAfterUpdate = async (resp) => {
        const userInfo = await getUser()
        const data = {
            catName: name, race, color, gender
        }
        console.log(data)
        await updateCat({
            id,
            data
        })
    }
    return (
        <KeyboardAvoidingView
            style={{
                paddingTop: Platform.OS === "android" ? 24 : 0,
                padding: 24
            }}
            behavior="position">
            <Text>Update</Text>
            <View
                style={{
                    backgroundColor: colors.white,
                    borderRadius: 12,
                    height: 400,
                    padding: 24
                }}>
                <FormInput
                    label="Name"
                    onChange={text => setName(text)}
                />
                <FormInput
                    label="Race"
                    onChange={text => setRace(text)}
                />
                <FormInput
                    label="Color"
                    onChange={text => setColor(text)}
                />
                <FormInput
                    label="Gender"
                    onChange={text => setGender(text)}
                />
                <PrimaryButton
                    onPress={() => onNavigateAfterUpdate()}
                    buttonText={"Update Cat"}
                />
            </View>
        </KeyboardAvoidingView>
    )

}

export default UpdateCat