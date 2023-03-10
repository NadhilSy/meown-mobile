import {Alert, FlatList, RefreshControl, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {deleteCatById, getAllCat} from "@/app/service/catService";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import useFetchQuery from "@/app/hooks/useFetchQuery";
import React, {useEffect} from "react";
import styles from "@/screens/Main/Cat/styles";
import {colors} from "@/theme";
import loadingAnimation from '../../../../assets/lottie/111426-categories.json'
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import AnimatedLottieView from "lottie-react-native";
import emptyAnimation from "../../../../assets/lottie/127447-kitty-cat-error-404.json";

const Cat = (props) => {
    const onChangeData = async () => {
        try {
            setLoading(true);
            const result = await getAllCat();
            setCat(result?.data?.data);
        } catch (e) {
            setCat([])
            Alert.alert("", e.message)
        } finally {
            setLoading(false)
        }
    }
    const {data, fetchQuery: refetch} = useFetchQuery(getAllCat())
    const [cat, setCat] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [errorDelete, loadingDelete, deleteCatMutation] = useFetchMutation(deleteCatById,onChangeData)
    const onDelete = (id) => {
        console.log(id)
        deleteCatMutation(id);
    }
    if (errorDelete){
        console.log(errorDelete?.response?.data)
    }

    const onNavigateToUpdate = (id) => {
        props.navigation.navigate("UpdateCat", {
            params: {
                id
            }
        })
    }
    const RenderCat = (cat) => {
        return (
            <View style={styles.card}>
                <View>
                    <Text style={[{
                        fontWeight: "bold",
                        fontSize: 18,
                        paddingLeft: 20,
                        paddingTop: 8,
                        color: colors.focused
                    }]}>{cat?.cat?.name}</Text>
                    <Text style={{
                        fontSize: 18,
                        paddingLeft: 22,
                        paddingBottom: 5,
                        color: colors.focused
                    }}>{cat?.cat?.race}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Button
                        style={{borderRadius: 10,padding:7,marginLeft:15,backgroundColor:colors.primary,width:45,alignItems:'center'}}
                        disabled={loadingDelete}
                        onPress={() => {
                            if (cat?.cat) {
                                props.navigation.navigate("UpdateCat", {
                                    id: cat?.cat.id
                                })
                            }
                        }}
                    ><Icon icon="edit" color={colors.white} size={18}/>
                    </Button>
                    <Button
                        style={{borderRadius:10, padding:7, marginLeft:5, backgroundColor:colors.red, width:45, alignItems:'center'}}
                        disabled={loadingDelete}
                        onPress={()=>{
                            if (cat.cat){
                                onDelete(cat?.cat.id)
                            }
                        }}
                    >
                        <Icon icon="trash" color={colors.white} size={18}/>
                    </Button>
                </View>


            </View>
        )
    }

    useEffect(() => {
        setCat(data?.data)
    }, [data, loading])
    return (
        <View style={styles.container}>
            {
                data?.data?.length > 0 ?
                <FlatList
                    data={data?.data}
                    renderItem={(data) =>
                        <RenderCat cat={data.item}/>}
                    keyExtractor={(data) => data?.id
                    }
                    onEndReachedThreshold={0.3}
                    onEndReached={onChangeData}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={onChangeData}/>}
                /> :
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={
                                onChangeData
                            }/>}>
                    <View style={{alignItems:'center'}}>
                        <AnimatedLottieView
                            source={emptyAnimation}
                            autoPlay={true}
                            loop={true}
                            style={{width: 170, height: 300}}
                        />
                        <Text style={{color:colors.gray,fontWeight:'bold',fontSize:18}}>Cat is Empty</Text>
                    </View>
                </ScrollView>}
                <TouchableOpacity
                    style={styles.roundButton}
                    onPress={() => props.navigation.navigate("AddCat")}
                >
                    <Icon icon="plus" color={colors.white}/>
                </TouchableOpacity>
        </View>
    )
}
export default Cat


// const Packet = (props) => {
//     return (
//         <ListComponent
//             renderItem={ListItem}
//             by={'name'}
//             isIndexed={true}
//             service={getAllCat}
//             {...props}
//         />
//     )
// }
//
// export default Packet