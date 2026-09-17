import { Button, Image, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";


export default function Cabecalho() {

    const curso: string = "Sistemas de Informação";

    return (

        <View style={styles.container}> 
            <Text style={styles.titulo}>TASK LIST</Text>
            <Text style={styles.subtitulo}>Gerenciamento de Tarefas</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',        
    },

	titulo: { 
		fontSize: 28, 
		fontWeight: 'bold',         
	}, 
	
	subtitulo: { 
		fontSize: 20, 
		marginTop: 20, 
	}, 
});