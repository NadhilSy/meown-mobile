import {Alert, Text, View} from "react-native";
import style from "@/screens/Main/Order/style";
import Card from "@/components/Card/Card";
import useFetchMutation from "@/app/hooks/useFetchMutation";
import {makeTransaction} from "@/app/service/transactionService";
import {colors} from "@/theme";
import Button from "@/components/Button/Button";
import {Dropdown} from "@/components";
import {useState} from "react";
import useFetch from "@/app/hooks/useFetch";
import {getAllCat} from "@/app/service/catService";

const Order = (props) => {
    const {packet} = props.route.params
    const [error, loading, order] = useFetchMutation(makeTransaction, () => {
        const navigateToHome = props.navigation.navigate('Home')
        Alert.alert('Success!','Your order are on waiting list.. please be patient.',[
            {
                text:'Ok',
                cancelable:true
            }
        ],{cancelable:true,onDismiss:()=>navigateToHome})
    })
    const [cat, setCat] = useState(null)
    const [data, errorGet, loadingGet] = useFetch(getAllCat())
    const orderInfo = {
        packetId: packet.packageId,
        catId: cat ? cat?.id : 0
    }
    if (error){
        console.log(error?.response)
    }
    return (
        <View style={[style.container]}>
            <Card styles={{padding: 20, width: '100%', flexWrap: 'nowrap', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontSize: 20, marginBottom: 10, color: colors.gray}}>Packet</Text>
                    <Text style={style.text}>
                        Packet Name: {packet.packageName}
                    </Text>
                    <Text style={style.text}>
                        Description: {packet.description}
                    </Text>
                </View>
                <View>
                    <Dropdown
                        data={loadingGet ? [] : data?.cats?.length > 0 ? data?.cats.map(item => ({
                            label: item.name,
                            value: item,
                            id: item.id
                        })) : []}
                        title={cat ? cat.name : 'Select cat'}
                        style={{
                            elevation: 4,
                            backgroundColor: colors.border,
                            padding: 15,
                            borderRadius: 15,
                            marginBottom: 15
                        }}
                        itemPress={item => setCat(item)}
                    />
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                    <Button style={{
                        backgroundColor: colors.primary,
                        borderRadius: 8,
                        marginRight: 10
                    }}
                            disabled={!cat}
                            onPress={() => {
                                Alert.alert('Confirm your order', `You are about to order ${packet.packageName} with price Rp.${packet.price} for ${cat?.name}? please hit ok if you agree with our term and conditions
                                `, [
                                    {
                                        text: 'OK',
                                        onPress: async () => order(orderInfo)
                                    }, {
                                        text: 'Cancel',
                                        cancelable: true
                                    }
                                ], {cancelable: true})
                            }}
                    >
                        <Text style={{color: 'white'}}>Order</Text>
                    </Button>
                    <Button style={{
                        backgroundColor: colors.darkGray,
                        borderRadius: 8
                    }}
                            onPress={() => props.navigation.goBack()}
                    >
                        <Text style={{color: 'white'}}>Back</Text>
                    </Button>
                </View>
            </Card>
        </View>
    )
}
export default Order