import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Touchable} from 'react-native';
import Firebase from '../../firebaseConfig';

export default function AlterarDiario({navigation, route}){
    const id = route.params.id;

    const [titulo, setTitulo] = useState(route.params.titulo);
    const [texto, setTexto] = useState(route.params.texto);
    const [data, setData] = useState(route.params.data);
    const [local, setLocal] = useState(route.params.local);

    function alterarDiario(id, titulo, texto, data, local){
        Firebase.collection("diario").doc(id).update({
            titulo: titulo,
            texto: texto,
            data: data,
            local: local
        })
        Alert.alert("Aviso", "Regisrto alterado com sucesso.")
        navigation.navigate("Home")
    }

    return(
        <View style={StyleSheet.container}>
            <View>
                <Text>Alterar registros do Diário</Text>
            </View>
            <View>
                <TextInput 
                    autoCapitalize='words' 
                    style={styles.input} 
                    placeholder='Digite o novo título'
                    onChangeText={setTitulo}
                    value={titulo}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Digite o novo texto'
                    onChangeText={setTexto}
                    value={texto}                
                />

                <TextInput
                    style={styles.input}
                    placeholder='Digite o novo local'
                    onChangeText={setLocal}
                    value={local}                
                />

                <TouchableOpacity
                    style={styles.btnSend}
                    onPress={() => {
                        alterarDiario(id, titulo, texto, local, data);
                    }}
                >
                    <Text style={styles.btnTxtSend}>Alterar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        margin: 10,
        backgroundColor: '#9ac234',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        borderRadius: 10
    },
    btnSend: {
        marginTop: 20
    },
    btnTxtSend: {
        fontSize: 25
    },
    titulo: {
        marginVertical: 40,
        fontSize: 25,
        textAlign: 'center'
    }
});