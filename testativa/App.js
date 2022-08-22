import React, {useState} from 'react';
import { Text, View, TextInput, Button, FlatList} from 'react-native'
import { doc, setDoc, addDoc, collection, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
import { db } from "./src/config/firebaseconfig"

export default function App() {

  const [ id, setId ] = useState('')
  const [ nome, setNome ] = useState('')
  const [ nomes, setNomes ] = useState('')

  // listar()

  function cadastrar(){
    //setDoc(doc(db, "contatos", "LA"), {
    addDoc(collection(db, "nomes"), {
        id: nomes.length,
        nome: nome,
      }).then(() => {
        //alert("Cadastrado com sucesso")
      }).catch((error) => {
        alert(error)
      })

      setNome('')
}

  async function listar(){
    const nomesCol = collection(db, 'nomes');
    const nomesSnapshot = await getDocs(nomesCol);
    const nomesList = nomesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setNomes(nomesList);
    setId( nomesList.length)
  }
  console.log(nomes.length)
  
  return (
    <View>
      <TextInput 
        placeholder='Digite um nome'
        onChangeText={setNome}
      />
      <Button title='Cadastrar' onPress={cadastrar}/>
      <Button title='Listar' onPress={listar}/>
      <Text>Nomes:</Text>
      
      <FlatList 
        data={nomes}
        renderItem={({item}) => 
          <View>
            <Text>Id: {item.id}</Text>
            <Text>nome: {item.nome}</Text>
          </View>
        }
      />    
      
    </View>
  );
}

