import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Cabecalho from './components/Cabecalho';
import Botao from './components/Botao';
import Aluno from './components/Aluno';
import Status from './components/Status';
import Contador from './components/Contador';

export default function App() {

  return (
    <View style={styles.container}>

		<Cabecalho />
       

		<Card 
			titulo='Atividade 01' 
			descricao='Descricao da Atividade 01' 
		/>

		<Card 
			titulo='Atividade 02' 
			descricao='Descricao da Atividade 02' 
		/>

		<Botao />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: 30, 
		justifyContent: 'center', 
    alignItems: 'center'
	}, 
	
});
