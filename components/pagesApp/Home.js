import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { db } from '../../firebaseConfig';
import { MaterialComunnityIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {

  const [diario, setDiario] = useState([]);

  function deleteDiario(id){
    db.collection("diario").doc(id).delete();
    Alert.alert("O diário foi deletado");
  }

  useEffect(() => {
    db.collection("diario").onSnapshot((query) => {
      const lista = [];
      query.forEach((doc) => {
        lista.push({...doc.data(), id: doc.id});
      });
      setDiario(lista);
    });
  }, []);

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.titulo}>Lista de dias</Text>
      </View>

      <FlatList
        data={diario}
        renderItem={({item}) => {
          return(
            <View style={styles.registro}>
              <TouchableOpacity 
                onPress={() => navigation.navigate("AlterarDiario", {
                id: item.id,
                data: item.data,
                titulo: item.titulo,
                texto: item.texto,
                local: item.local, 
                })}>
                <View style={styles.itens}>
                  <Text style={styles.tituloDiario}>
                    Título:
                    <Text style={styles.registro}>
                      {item.titulo}
                    </Text>
                  </Text>
                  <Text style={styles.tituloDiario}>
                    Registro:
                    <Text style={styles.registro}>
                      {item.texto}
                    </Text>
                  </Text>
                  <Text style={styles.tituloDiario}>
                    Local:
                    <Text style={styles.registro}>
                      {item.local}
                    </Text>
                  </Text>
                  <Text style={styles.tituloDiario}>
                    Data:
                    <Text style={styles.registro}>
                      {item.data}
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={styles.botaodeletar}>
                <TouchableOpacity onPress={() => {deleteDiario(item.id)}}>
                  <MaterialComunnityIcons name="delete-empty" size={70} color="red" />                     
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("CadDiario") }>
        <MaterialComunnityIcons name="plus-circle-outline" size={70} color="green" />                     
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    marginTop: 50,
    fontSize: 35
  },
  itens: {
    margin: 10,
    fontSize: 30
  },
  tituloDiario: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  registro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
    backgroundColor: '#0000CD',
    borderRadius: 10
  },
  botaodeletar: {
    textAlignVertical: 'center',
    marginVertical: 10
  },
  addButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    position: 'absolute',
    left: 20,
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
