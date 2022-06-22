import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View>
      
      <Text testID='TextTitulo' style={styles.titulo}>Digite um numero</Text>

      <TextInput 
        style={styles.entrada}
        placeholder='Digite aqui'
        testID='TextInputEntrada'
      />

      <Button testID='Button' title="Calcular"/>

    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
  },
  entrada: {
    borderBottomWidth: 1,
    margin: 10,
    padding: 10,
    outline: 0,
  },
})