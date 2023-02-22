import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 30,
        right: 10,
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 50,
        elevation: 5
    },
    actionBarBody: {
        position: 'absolute',
        bottom: 50,
        right: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5
    }
})