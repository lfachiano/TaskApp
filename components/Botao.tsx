import { Button, Image, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";


export default function Botao() {

    return (
        <Pressable onPress={ () => console.log('Botão Pressionado') } style={styles.botao}>
          <Text>Nova Tarefa</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
	botao: { 
		padding: 15, 
		marginTop: 20, 
		borderWidth: 1, 
	}, 
});