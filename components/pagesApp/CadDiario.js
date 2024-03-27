import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, Touchable} from 'react-native';
import Firebase from '../../firebaseConfig';

export default function CadDiario({ navigation }) {
    
    const [titulo, setTitulo] = useState(null);
    const [texto, setTexto] = useState(null);
    const [local, setLocal] = useState(null);
    const [data, setData] = useState(null);

    const addRegistro = () => {
        Firebase.collection('diario').add({
            titulo: titulo,
            texto: texto,
            data: data,
            local: local
        });
        setTitulo({titulo: ''})
        setTexto({texto: ''})
        setData({data: ''})
        setLocal({local: ''})
        Alert.alert("Cadastro", "Registro cadastrado com sucesso");
        navigation.navigate("Home");
    }

    return(
        <View style={styles.container}>
            <View>
                <Text>Registre seu dia</Text>
            </View>

            <TextInput
                autoCapitalize='words'
                style={styles.input}
                placeholder='Digite um título'
                onChangeText={setTitulo}
                value={titulo}
            />

            <TextInput
                style={styles.input}
                placeholder='Registre seu dia'
                onChangeText={setTexto}
                value={texto}
            />

            <TextInput
                style={styles.input}
                placeholder='Registre seu local'
                onChangeText={setLocal}
                value={local}
            />

            <TouchableOpacity 
                style={styles.btnSend}
                onPress={addRegistro}
            >
                <Text style={styles.btnTxtSend}>
                    Enviar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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