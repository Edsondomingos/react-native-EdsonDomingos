import { FlatList, StyleSheet, Text, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useState } from 'react';

export default function App() {


  const firebaseConfig = {
    apiKey: "AIzaSyBy0QmWwyihD7OLfTkoHroFvwmt-qOYUm4",
    authDomain: "banco01-b2585.firebaseapp.com",
    projectId: "banco01-b2585",
    storageBucket: "banco01-b2585.appspot.com",
    messagingSenderId: "918040578554",
    appId: "1:918040578554:web:87d055df1410e8f284fc43"
  }
  
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  
  const [contatos, setContatos] = useState([{}])

  async function getContatos(db) {
    const contatosCol = collection(db, 'contatos');
    const contatosSnapshot = await getDocs(contatosCol);
    const contatosList = contatosSnapshot.docs.map(doc => doc.data());
    // return contatosList;
    setContatos(contatosList)
  }
  getContatos(db)

  // const contatos = [
  //   {  id: 1, 
  //     nome: 'Edson', 
  //     email: 'edson@gmail.com', 
  //     telefone: '84 9999-9999'
  //   },
  //   {  id: 2, 
  //     nome: 'Bruno', 
  //     email: 'bruno@gmail.com', 
  //     telefone: '84 8888-8888'
  //   },
  // ]
  // // Ao imprimir lista normais, no renderItem acessa apenas o "item".
  // const contatos2 = [
  //   1,2,'texto',

  // ]

  return (
    <View style={styles.container}>
      <Text>Agenda de contatos</Text>
      <FlatList 
        data={contatos}
        renderItem={({item}) => {
          return (
            <View>
              <Text>Nome: {item.nome}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Telefone: {item.telefone}</Text>
            </View>
          )
        }}
      />
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
