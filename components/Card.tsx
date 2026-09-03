import { useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";

type CardProps = {
    titulo: string,
    descricao: string,
}

export default function Card({ 
    titulo, 
    descricao, 
    }: CardProps) 
{

    const [concluida, setConcluida] = useState(false)

    function alterarStatus() {        
        setConcluida(!concluida);
    }
    
    return (
        <Pressable 
            onPress={alterarStatus}
            style={ styles.card }
        >
            <Text style={ styles.titulo }> { titulo } </Text>
            <Text> { descricao } </Text>
            <Text 
                style={ concluida && styles.concluido }
                > { concluida ? 'Concluída' : 'Pendente' } </Text>
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