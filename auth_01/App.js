import { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { app2 } from './src/config/firebaseconfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut   } from "firebase/auth";

export default () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function cadastrar(){
    const auth = getAuth(app2);
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setEmail('')
        setSenha('')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage)
      });
  }

  function autenticar(){
    const auth = getAuth(app2);
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  function desconectar(){
    const auth = getAuth(app2);
    signOut(auth).then(() => {
      // Sign-out successful.
      alert('Desconectado')
    }).catch((error) => {
      // An error happened.
      alert(errorMessage)
    });
  }

  function Verificar(){
    const auth = getAuth(app2);
    const user = auth.currentUser;
    if (user)
      alert(user.email)
    else
      alert('Não tem niguem autenticado')
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='E-mail' 
        onChange={setEmail}/>
      <TextInput 
        style={styles.input}
        placeholder='Senha' 
        secureTextEntry={true}
        onChange={setSenha}/>

      <Button title='Cadastrar' onPress={cadastrar}/>
      <Button title='Autenticar' onPress={autenticar} />
      <Button title='Verificar USuario Autenticado' onPress={Verificar}/>
      <Button title='Logout' onPress={desconectar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 250,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    margin: 5,
  },
})