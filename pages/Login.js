import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import Firebase from '../firebase';

export default function Login({ navigation }) {

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[user, setUser] = useState('');

    const auth = getAuth();

    function login()
    {
        signInWithEmailAndPassword(auth, email, senha).catch(
            function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode, errorMessage);
            }
        )
    }

    useEffect(() => {
        const sign = onAuthStateChanged(auth, function(user){
            setUser(user);
        });
        return () => sign();
    }, [])

    if(user){
        return navigation.navigate("Home")
    }else{
        // alert('Xabu!')
    }

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Acesso ao Diário</Text>

        <TextInput style={styles.input}
            placeholder='Digite o Email'
            onChangeText={(email) => setEmail(email)}
            value={email}
        />

        <TextInput style={styles.input}
            placeholder='Digite a Senha'
            onChangeText={(senha) => setSenha(senha)}
            value={senha}
        />

        <TouchableOpacity style={styles.btn}
            onPress={() => {login();}}    
        >
            <Text style={styles.btntxt}>Entrar</Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30
    },
    input: {
        borderWidth: 2,
        borderColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 15,
        margin: 30,
        fontSize: 20,
        backgroundColor: '#75e693'
    },
    btn: {
        borderWidth: 2,
        borderColor: '#000',
        paddingHorizontal: 50,
        paddingVertical: 6,    
        borderRadius: 30,
        backgroundColor: '#80b9ff'
    },
    btntxt: {
        fontSize: 22,
        fontWeight: 'bold'
    }

});
