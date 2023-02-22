import {Alert, FlatList, RefreshControl, ScrollView, Text, View} from "react-native";
import {deleteCatById, getAllCat} from "@/app/service/catService";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import useFetchQuery from "@/app/hooks/useFetchQuery";
import React, {useEffect} from "react";
import styles from "@/screens/Main/Cat/styles";
import {colors} from "@/theme";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

import Button from "@/components/Button/Button";

const Cat = (props) => {
    const {data,fetchQuery:refetch} = useFetchQuery(getAllCat())
    const [cat, setCat] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [errorDelete,loadingDelete,deleteCatMutation] = useFetchMutation(deleteCatById, refetch)
    const onDelete = (id) = () =>{
        deleteCatMutation(id);
        onChangeData();
    }

    const onNavigateToUpdate = (id) => {
        props.navigation.navigate("UpdateCat")
    }
    const onChangeData = async () => {
        try {
            setLoading(true);
            const result = await getAllCat();
            setCat(result?.data?.data);
        } catch (e){
            setCat([])
            Alert.alert("", e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        setCat(data?.data)
    }, [data, loading])

    const RenderCat = React.memo((cat)=>{
        console.log(cat)
        return(
            <View style={styles.card}>
                <View >
                    <Text style={[{fontWeight:"bold", fontSize:18, paddingLeft:20, paddingTop:8, color:colors.focused}]}>{cat?.cat?.name}</Text>
                    <Text style={{fontSize:18, paddingLeft:22, paddingBottom:5, color:colors.focused}}>{cat?.cat?.race}</Text>
                </View>
                <View style={{alignItems: "flex-end"}} >
                    <Button
                        style={{borderRadius:20}}
                        styleBtn={styles.button}
                        styleTxtBtn={styles.buttonText}
                        disabled={loadingDelete}
                        text="EDIT"
                        onPress={onNavigateToUpdate(cat?.cat?.id)}
                            // onPress={() => {
                            //     // props.navigation.navigate("Details", {food: food?.food})
                            // }}/>
                    />
                </View>
            </View>
        )
    })
    return(
        <View style={styles.container}>

            {data?.cats?.length > 0 ?
                <FlatList
                    data={data.cats}
                    renderItem={(data) =>
                        <RenderCat cat={data.item}/>}
                    keyExtractor={(data) => data?.item?.id}
                    onEndReachedThreshold={0.3}
                    onEndReached={onChangeData}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={onChangeData}/>}
                    />:
                <ScrollView
                    refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={
                            onChangeData
                        }/>}><Text style={[styles.title, {alignSelf:"center"}]}>Cat is Empty</Text>

                </ScrollView>}


            {/*<View>*/}
            {/*    {data && (*/}
            {/*        <Text>*/}
            {/*            {data.owner.userName}*/}
            {/*        </Text>*/}
            {/*    )}*/}
            {/*</View>*/}
            {/*{food?.length > 0?*/}
            {/*    <FlatList*/}
            {/*        data={food}*/}
            {/*        renderItem={(data) => <RenderMenu food={data.item}/>}*/}
            {/*        keyExtractor={(data) => data?.item?.id}*/}
            {/*        onEndReachedThreshold={0.3}*/}
            {/*        onEndReached={onChangeData}*/}
            {/*        refreshControl={<RefreshControl refreshing={loading} onRefresh={onChangeData}/>}*/}
            {/*    /> :*/}
            {/*    <ScrollView*/}
            {/*        refreshControl={*/}
            {/*            <RefreshControl*/}
            {/*                refreshing={loading}*/}
            {/*                onRefresh={*/}
            {/*                    onChangeData*/}
            {/*                }/>}>{<Text style={[styles.title, {alignSelf:"center"}]}>Food is empty</Text>}*/}

            {/*    </ScrollView>}*/}

            {/*<Button*/}
            {/*    text={"Add Food"}*/}
            {/*    onPress={() =>{*/}
            {/*        props?.navigation.navigate("Details")*/}
            {/*    }}*/}
            {/*/>*/}

        </View>
    )

}
export default Cat



// const Cat = (props) => {
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
// export default Cat