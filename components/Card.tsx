import { Button, Image, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";

type CardProps = {
    titulo: string,
    descricao: string,
    status: string,
    onPress: () => void
}

export default function Card({ 
    titulo, 
    descricao, 
    status, 
    onPress
    }: CardProps) 
{

    return (
        <Pressable 
            onPress={onPress}
            style={ styles.card }
        >
            <Text style={ styles.titulo }> { titulo } </Text>
            <Text> { descricao } </Text>
            <Text 
                style={ status === 'Concluída' && styles.concluido }
                > { status } </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: { 
		padding: 15, 
		marginTop: 10, 
		borderWidth: 1, 
	}, 
    
    titulo: { 
		fontSize: 16, 
		fontWeight: 'bold',         
	}, 

    concluido: {
        color: '#f00'
    }
});