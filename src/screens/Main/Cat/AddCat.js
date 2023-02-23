import {KeyboardAvoidingView, Platform, ScrollView, Text, View} from "react-native";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import {createCat} from "@/app/service/catService";
import {readItem} from "@/utils/asyncStorageItem";
import {useState} from "react";
import {colors} from "@/theme";
import FormInput from "@/components/FormInput/FormInput";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

const AddCat = (props) => {
    const [error, loading, addCat] = useFetchMutation(createCat, () => {
        props.navigation.navigate("Cat")
    })
    const [name, setName] = useState('')
    const [race, setRace] = useState('')
    const [color, setColor] = useState('')
    const [gender, setGender] = useState('')

    const getUser = async () => {
        return await readItem("userInfo")
    }
    const onNavigateAfterCreate = async (resp) => {
        const userInfo = await getUser()
        const data = {
            catName: name, race, color, gender
        }
        console.log(data)
        await addCat(data)
    }
    return (
        <KeyboardAvoidingView
            style={{
                paddingTop: Platform.OS === "android" ? 24 : 0,
                padding: 24
            }}
            behavior="position">
            <Text>Create</Text>
            <ScrollView
                style={{
                    backgroundColor: colors.white,
                    borderRadius: 12,
                    height: 440,
                    padding: 24
                }}>
                <FormInput
                    label="Name"
                    placeholder="Enter your cat name"
                    onChange={text => setName(text)}
                />
                <FormInput
                    label="Race"
                    placeholder="Enter race of cat"
                    onChange={text => setRace(text)}
                />
                <FormInput
                    label="Color"
                    placeholder="Enter your cat color"
                    onChange={text => setColor(text)}
                />
                <FormInput
                    label="Gender"
                    placeholder="Enter your cat gender"
                    onChange={text => setGender(text)}
                />

            </ScrollView>
            <View>
                <PrimaryButton
                    onPress={() => onNavigateAfterCreate()}
                    buttonText={"Create"}
                />
            </View>
        </KeyboardAvoidingView>
    )
}
export default AddCat