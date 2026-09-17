import { Pressable, StyleSheet, Text, View } from "react-native";

type CardProps = {
    id: number,
    titulo: string,
    descricao: string,
    status: string,
    onDelete: (id: number) => void
}

export default function Card({ 
    id,
    titulo, 
    descricao, 
    status,
    onDelete
    }: CardProps) 
{
 
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>{ titulo }</Text>
            <Text style={styles.descricao}>{ descricao }</Text>
            
            <View style={styles.rodape}>
              <Text style={styles.status}>Status: { status }</Text>

              <Pressable 
                  style={styles.botaoExcluir}
                  onPress={() => onDelete(id)}
              >
                  <Text style={styles.textoExcluir}>Exluir</Text>
              </Pressable>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    card: {
      borderWidth: 1,
      borderRadius: 8,
      padding: 16,
      marginBottom: 12,
    },
  
    titulo: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 6,
    },
  
    descricao: {
      fontSize: 15,
      marginBottom: 8,
    },
  
    status: {
      fontSize: 14,
      fontWeight: 'bold',
    },
  
    botaoExcluir: {
      borderWidth: 1,
      borderRadius: 6,
      padding: 8,
      marginTop: 12,
      alignItems: 'center',
    },
  
    textoExcluir: {
      fontWeight: 'bold',
    },

    rodape: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 12
    },
  });