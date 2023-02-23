import {Pressable, ScrollView, Text, TouchableOpacity, View} from "react-native";
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
                                    <TouchableOpacity
                                        onPress={() => {
                                            itemPress(item.value)
                                            setIsactive(false)
                                        }}
                                        style={{marginVertical:5,flexDirection:'row',width:'100%'}}
                                        key={item.id}
                                    >
                                        <Text>{item.label}</Text>
                                    </TouchableOpacity>
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