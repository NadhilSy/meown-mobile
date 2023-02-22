import {Pressable, ScrollView, Text, View} from "react-native";
import {useState} from "react";

const Dropdown = ({title,data, itemPress,style}) => {
    const [isActive, setIsactive] = useState(false)
    return (
        <Pressable onPress={() => setIsactive(!isActive)} style={style}>
            <Text>{title}</Text>
            {
                isActive && (
                    <ScrollView style={{marginTop:10}}>
                        {
                            data.length > 0 ? data.map((item) => {
                                return (
                                    <Pressable
                                        onPress={() => {
                                            itemPress(item.value)
                                            setIsactive(false)
                                        }}
                                        style={{marginVertical:5,flexDirection:'row'}}
                                        key={item.id}
                                    >
                                        <Text>{item.label}</Text>
                                    </Pressable>
                                )
                            }):
                                <View/>
                        }
                    </ScrollView>
                )
            }
        </Pressable>
    )
}
export default Dropdown