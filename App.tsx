import { StatusBar } from 'expo-status-bar';
import { FlatList, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from './components/Card';
import Cabecalho from './components/Cabecalho';
import Botao from './components/Botao';
import Aluno from './components/Aluno';
import Status from './components/Status';
import Contador from './components/Contador';
import { useState } from 'react';
import { Tarefa } from './models/tarefa';

export default function App() {

	const[tarefas, setTarefas] = useState<Tarefa[]>([
		{
			id: 1,
			titulo: 'Estudar Desenvolvimento Mobile',
			descricao: 'Revisar Estados e Propriedades',
			status: 'Pendente'
		},
		{
			id: 2,
			titulo: 'Me preparar para o ENADE',
			descricao: 'Revisar Todo o Conteúdo',
			status: 'Pendente'
		},
	]);

	const[titulo, setTitulo] = useState('');
	const[descricao, setDescricao] = useState('');
	const[erro, setErro] = useState('');

	function cadastrar() {
		if (titulo.trim() === '' ||
			descricao.trim() === ''
		) {
			setErro('Título e Descrição são obrigatórios!');
			return;
		}

		const novaTarefa: Tarefa = {
			id: Date.now(),
			titulo: titulo,
			descricao: descricao,
			status: 'Pendente'
		}

		setTarefas([
			...tarefas,
			novaTarefa
		]);

		setTitulo('');
		setDescricao('');
		setErro('');
	}

	function excluir(id: number) {
		const novaLista = tarefas.filter(
			(tarefa) => tarefa.id !== id
		);
		setTarefas(novaLista);
	}

  return (
	<KeyboardAvoidingView 
	style={styles.container}
	behavior={Platform.OS === 'ios' ? 'padding': undefined }
	>
		<FlatList
			data={tarefas}
			keyExtractor={(item) => item.id.toString()}
			keyboardShouldPersistTaps='handled'
			contentContainerStyle={styles.conteudo}

			ListHeaderComponent={
				<View>
					<Text style={styles.tituloApp}>TASKLIST</Text>
					<Text style={styles.subtituloApp}>Gerenciador de Tarefas</Text>

					<Text style={styles.tituloFormulario}>Nova Tarefa</Text>

					<Text style={styles.label}>Título</Text>
					<TextInput 
						style={styles.input}
						placeholder='Digite o título'
						value={titulo}
						onChangeText={setTitulo}
					/>

					<Text style={styles.label}>Descrição</Text>
					<TextInput 
						style={styles.input}
						placeholder='Digite a descrição'
						value={descricao}
						onChangeText={setDescricao}
					/>					

					{
						erro !== '' && (
							<Text style={styles.erro}>{ erro }</Text>
					)}

					<Botao 
						titulo='Adicionar'
						onPress={cadastrar}
					/>		

					<Text style={styles.tituloLista}>LISTA</Text>
				</View>					
			}	

			renderItem={({item}) => (
				<Card 
					id={item.id}
					titulo={item.titulo}
					descricao={item.descricao}
					status={item.status}
					onDelete={excluir}
				/>
  			)}

			ListEmptyComponent={
				<View style={styles.listaVazia}>
					<Text style={styles.textoListaVazia}>
						Nenhuma tarefa cadastrada
					</Text>
					<Text>
						Utilize o formulário para adicionar tarefa.
					</Text>
				</View>
			}
		/>		

	</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({ 
	container: {
	  flex: 1,
	},
  
	conteudo: {
	  padding: 24,
	  paddingTop: 50,
	},
  
	tituloApp: {
	  fontSize: 30,
	  fontWeight: 'bold',
	  textAlign: 'center',
	},
  
	subtituloApp: {
	  fontSize: 16,
	  textAlign: 'center',
	  marginBottom: 30,
	},
  
	tituloFormulario: {
	  fontSize: 22,
	  fontWeight: 'bold',
	  marginBottom: 15,
	},
  
	label: {
	  fontSize: 15,
	  fontWeight: 'bold',
	  marginTop: 10,
	  marginBottom: 5,
	},
  
	input: {
	  borderWidth: 1,
	  borderRadius: 8,
	  padding: 12,
	  fontSize: 16,
	},
  
	inputDescricao: {
	  minHeight: 80,
	  textAlignVertical: 'top',
	},
  
	erro: {
	  marginTop: 10,
	  fontWeight: 'bold',
	},
  
	tituloLista: {
	  fontSize: 22,
	  fontWeight: 'bold',
	  marginTop: 35,
	  marginBottom: 15,
	},
  
	listaVazia: {
	  borderWidth: 1,
	  borderRadius: 8,
	  padding: 20,
	  alignItems: 'center',
	},
  
	textoListaVazia: {
	  fontSize: 17,
	  fontWeight: 'bold',
	  marginBottom: 5,
	},
	  
  });
