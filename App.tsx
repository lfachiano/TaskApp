import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Cabecalho from './components/Cabecalho';
import Botao from './components/Botao';


export default function App() {

  return (
    <View style={styles.container}>

		<Cabecalho />
       
		<Card />
		<Card />        

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
