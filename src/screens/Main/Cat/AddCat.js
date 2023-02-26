import {KeyboardAvoidingView, Platform, ScrollView, Text, View} from "react-native";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import {createCat} from "@/app/service/catService";
import {useState} from "react";
import {colors} from "@/theme";
import FormInput from "@/components/FormInput/FormInput";
import {Dropdown} from "@/components";
import Button from "@/components/Button/Button";

const AddCat = (props) => {
    const [, , addCat] = useFetchMutation(createCat, () => {
        props.navigation.navigate("Cat")
    })
    const [name, setName] = useState('')
    const [race, setRace] = useState('')
    const [color, setColor] = useState('')
    const [gender, setGender] = useState(null)
    const genderList = [{
        label: 'Male',
        value: 'Male',
        id: 1
    }, {
        label: 'Female',
        value: 'Female',
        id: 2
    }]
    const onNavigateAfterCreate = async () => {
        const data = {
            catName: name, race, color, gender
        }
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
                    paddingHorizontal: 24,
                    paddingVertical: 30,
                    elevation: 7
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
                <Dropdown data={genderList} title={gender ? gender : 'Select gender'} style={{
                    elevation: 4,
                    backgroundColor: colors.white,
                    padding: 15,
                    borderRadius: 15,
                    marginTop: 15
                }}
                itemPress={item => setGender(item)}
                />

            </ScrollView>
            <View>
                <Button style={{
                    backgroundColor: colors.primary,
                    borderRadius: 15,
                    alignItems: 'center',
                    marginTop: 20,
                    elevation: 7
                }}
                        onPress={onNavigateAfterCreate}
                ><Text style={{color: 'white'}}>Add cat</Text></Button>
            </View>
        </KeyboardAvoidingView>
    )
}
export default AddCat