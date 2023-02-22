import {StatusBar, StyleSheet, Text, View} from 'react-native';
import AppNavigator from "@/navigations/AppNavigator";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar/>
            <AppNavigator/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});