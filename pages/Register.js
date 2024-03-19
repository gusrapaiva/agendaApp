
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';  

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Registrar</Text>

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

});
