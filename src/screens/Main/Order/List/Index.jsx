import {FlatList, ScrollView, Text, View} from "react-native";
import useFetch from "@/app/hooks/useFetch";
import {getTransactions} from "@/app/service/transactionService";
import AnimatedLottieView from "lottie-react-native";
import loadingAnimation from '../../../../../assets/lottie/111426-categories.json'
import RenderItem from "@/screens/Main/Order/List/RenderItem/Index";

const ListOrder = (props) => {
    const [data, error, loading] = useFetch(getTransactions())
    return (
        <View style={{height:'100%',justifyContent:'center',paddingVertical:30,paddingHorizontal:15}}>
            <Text style={{fontSize:24,marginBottom:10}}>Transaction history</Text>
                {
                    loading && (
                        <AnimatedLottieView
                            source={loadingAnimation}
                            autoPlay={true}
                            loop={true}
                            style={{width: 170, height: 170}}
                        />
                    )
                }
                {
                    data?.data?.length > 0 ?
                        <FlatList data={data?.data} renderItem={({item})=><RenderItem data={item} {...props} />}
                        />:
                        <Text>You don't have an order yet...</Text>
                }
        </View>
    )
}
export default ListOrder