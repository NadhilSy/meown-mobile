import {FlatList, ScrollView, Text, View} from "react-native";
import useFetch from "@/app/hooks/useFetch";
import {getTransactions} from "@/app/service/transactionService";
import AnimatedLottieView from "lottie-react-native";
import loadingAnimation from '../../../../../assets/lottie/111426-categories.json'
import emptyAnimation from '../../../../../assets/lottie/127447-kitty-cat-error-404.json'
import RenderItem from "@/screens/Main/Order/List/RenderItem/Index";
import {colors} from "@/theme";

const ListOrder = (props) => {
    const [data, error, loading] = useFetch(getTransactions())
    return (
        <View style={{height:'100%',paddingVertical:30,paddingHorizontal:15}}>
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
                        <View style={{width:'100%',alignItems:'center'}}>
                            <AnimatedLottieView
                                source={emptyAnimation}
                                autoPlay={true}
                                loop={true}
                                style={{width: 170, height: 300}}
                            />
                            <Text style={{color:colors.gray,fontWeight:'bold',fontSize:18}}>You don't have a transaction yet</Text>
                        </View>
                }
        </View>
    )
}
export default ListOrder