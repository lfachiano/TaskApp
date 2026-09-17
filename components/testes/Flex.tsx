import { StyleSheet, Text, View } from "react-native";



export default function Flex() {
    return(
        <View style={styles.container}>
                        <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
            <Text>Item 01</Text>
            <Text>Item 02</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 30
    },
    isolado: {
        alignSelf: 'flex-start'
    },
    item01: {
        flex: 1,
        backgroundColor: 'red'
    },
    item02: {
        flex:2,
        backgroundColor: 'black'
    }
})