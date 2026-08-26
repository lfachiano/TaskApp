import { Button, Image, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";

export default function Card() {

    return (
        <View style={styles.card}>
            <Text> Atividade 01</Text>
            <Text> Status: Em andamento </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { 
		padding: 15, 
		marginTop: 10, 
		borderWidth: 1, 
	}, 
});