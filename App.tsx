import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Cabecalho from './components/Cabecalho';
import Botao from './components/Botao';
import Aluno from './components/Aluno';

function selecionarTarefa(id: number) {
	console.log('Tarefa selecionada:', id);
}

export default function App() {

  return (
    <View style={styles.container}>

		<Cabecalho />
       

		<Card 
			id={1}
			titulo='Atividade 01' 
			descricao='Descricao da Atividade 01' 
			status='Concluída' 
			onPress={selecionarTarefa}
		/>

		<Card 
			id={2}
			titulo='Atividade 02' 
			descricao='Descricao da Atividade 02' 
			status='Em Andamento'
			onPress={selecionarTarefa}
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
