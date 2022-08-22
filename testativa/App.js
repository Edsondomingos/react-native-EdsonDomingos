import React, {useState} from 'react';
import { Text, View, TextInput, Button, FlatList} from 'react-native'
import { doc, setDoc, addDoc, collection, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
import { db } from "./src/config/firebaseconfig"

export default function App() {

  const [ nomes, setNomes ] = useState('')

  async function listar(){
    const nomesCol = collection(db, 'nomes');
    const nomesSnapshot = await getDocs(nomesCol);
    const nomesList = nomesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setNomes(nomesList);
    alert(nomes.nome)
  }

  return (
    <View>
      <Button title='Listar' onPress={listar}/>

      <FlatList 
        data={nomes}
        renderItem={({item}) => {
          <View>
            <Text>nome: {item}</Text>
          </View>
        }}
      />    
      
    </View>
  );
}

