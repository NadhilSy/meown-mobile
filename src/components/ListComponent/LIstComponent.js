import {Alert, FlatList, SectionList, Text, TouchableOpacity, View} from "react-native";
import useFetch from "@/app/hooks/useFetch";
import RenderHeader from "@/components/Header/Header";
import {useState} from "react";
import {ActionBar, ActionBarBody} from "@/components/ActionBar/ActionBar";
import {Icon, Toast} from "@/components/index";
import AnimatedLottieView from "lottie-react-native";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import Lottie from "lottie-react-native";
import {groupAlphabetBy} from "@/utils/groupAlphabetBy";

const SuccessToast = (props) => {
    return (
        <Toast variant={"success"}
               active={props.active}
               close={props.close}
        >
            <View style={{flexDirection: "row"}}>
                <Icon name={"checkmark-circle-outline"} color={"white"}/><Text style={{color: "white", marginLeft: 10}}>{props.text}</Text>
            </View>
        </Toast>
    )
}

export const ListComponent = ({renderItem,service,isIndexed},{...props}) => {
    const [data, error, loading] = useFetch(service())
    const groupedItem = groupAlphabetBy(data?.data, props.by)
    const items = isIndexed ? groupedItem : data.data
    const [actionBarActive, setActionBarActive] = useState(false)
    const [toastActive, setToastActive] = useState(false)
    const [deleteErr, deleteLoading, deleteAction] = useFetchMutation(props.deleteService, () => setToastActive(true))
    console.log(renderItem)
    console.log(data)
    const handleDelete = (id) => () => {
        Alert.alert("Delete item", "are you sure want to delete this item? you can't undo this change", [
            {
                text: 'Delete',
                onPress: () => deleteAction(props.deleteService(id))
            },
            {
                text: 'cancel'
            }
        ])
    }
    const actionBarItem = [
        {
            text: 'Add menu', id: 1, route: 'Add menu', icon: 'md-fast-food'
        },
        {
            text: 'Add Customer', id: 3, route: 'Add Customer', icon: 'md-person-add'
        },
        {
            text: 'Add table', id: 2, route: 'Add Table', icon: 'md-list'
        }
    ]
    return (
        <View style={{width: '100%', height: '100%'}}>
            <FlatList data={data} renderItem={()=><renderItem {...props}/>} />
            {
                loading && (
                    <AnimatedLottieView source={require('../../../assets/lottie/111426-categories.json')} autoPlay loop/>
                )
            }
            {
                error && (
                    <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Error.. service unavailable</Text>
                    </View>
                )
            }
            {
                (!loading && !error) && isIndexed ? (
                    <View style={{width: '100%', height: '100%'}}>
                        <SectionList
                            sections={groupedItem}
                            renderItem={(data) => <renderItem data={data.cats} {...props}/>}
                            renderSectionHeader={(data) => RenderHeader(data.section)}
                            keyExtractor={(item) => item?.id}
                        />
                    </View>
                ) : (
                    <View>
                        <FlatList data={data}
                                  renderItem={({item}) =>renderItem(item)}/>
                    </View>
                )
            }
            {/*<ActionBar isActive={actionBarActive} onPress={() => setActionBarActive(!actionBarActive)}>*/}
            {/*    <ActionBarBody>*/}
            {/*        {*/}
            {/*            actionBarItem.map((item) => {*/}
            {/*                return (*/}
            {/*                    <View style={{flexDirection: 'row', marginVertical: 15}} key={item.id}>*/}
            {/*                        <TouchableOpacity*/}
            {/*                            onPress={() => {*/}
            {/*                                props.navigation.navigate(item.route)*/}
            {/*                                setActionBarActive(false)*/}
            {/*                            }}*/}
            {/*                            style={{flexDirection: 'row'}}*/}
            {/*                        >*/}
            {/*                            <Icon name={item.icon}/><Text style={{marginLeft: 5}}>{item.text}</Text>*/}
            {/*                        </TouchableOpacity>*/}
            {/*                    </View>*/}
            {/*                )*/}
            {/*            })*/}
            {/*        }*/}
            {/*    </ActionBarBody>*/}
            {/*</ActionBar>*/}
            <SuccessToast active={toastActive}
                          close={() => setToastActive(false)}
                          text={"Success delete item"}
            />
        </View>
    )
}