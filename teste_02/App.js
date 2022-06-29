import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(0)
  const [dobro, setDobro] = useState(0)

  function calculaDobro(){
    setDobro(parseInt(numero)*2)
  }

  return (
    <View style={styles.container}>
      <Text>Calculo do Dobro</Text>

      <TextInput 
        placeholder='Digite um numero'
        onChangeText={setNumero}
        testID='entrada'
      />

      <Button title='Calculo Dobro'
        onPress={() => {
          calculaDobro()
        }}
        testID='btnCalcular'
        />

      <Text>{dobro}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
