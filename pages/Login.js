import React, {useState, useEffect} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';  

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigation.navigate("Home");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                console.log(errorMessage);
            });
    }

    const auth = getAuth();
        
        

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Acesso ao Diário</Text>

        <TextInput style={styles.input}
            placeholderTextColor="black"
            placeholder='Digite o Email'
            value={email}
            onChangeText={(val) => {setEmail(val);}}
        />

        <TextInput style={styles.input}
            placeholderTextColor="black"
            placeholder='Digite a Senha'
            value={senha}
            onChangeText={(val) => {setSenha(val);}}
        />

        <TouchableOpacity style={styles.btn}
            onPress={handleLogin}
        >
            <Text style={styles.btntxt}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}
            onPress={() => navigation.navigate("Register")}
        >
            <Text style={styles.btntxt}>Registrar</Text>
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
        fontSize: 30,
        marginTop: 40,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1.2,
        borderColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 15,
        width:  '80%',
        borderRadius: 10,
        margin: 30,
        fontSize: 20,
        backgroundColor: '#ffff22'
    },
    btn: {
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 8,    
        borderRadius: 30,
        width: "60%",
        backgroundColor: '#0019bd',
        marginBottom: 20
    },
    btntxt: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    }

});
