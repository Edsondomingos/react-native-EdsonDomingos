import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';  //Por traz, cria constantes e traz como objeto/classe.
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() { // export - fica disponivel para a aplicação. default - tudo o que vem da função vai ser executado
  return ( //dentro do 'return' fica o que vai ser mostrado. Como fica disponivel, precisa retornar.
    /*-Dentre do return fica o 'jsx'. jsx é convertido para a linguagem nativa.
    -view se comporta como uma div. Precisa ter uma view e apenas uma, mas pode ter view dentro de outra.
    -Text se comporta como <p> e <span>. Quebra de linha automatica. Pode colocar Text Dentro de Text e fica na mesma linha .
    -Componentes básicos - Button, TextInput, FiatList,SectionList, ... */
    <View style={styles.container}>
    {/* <View style={{backgroundColor:'#ccc'}}> */}
      <Image
        style={img.perfil}
        source={require('./images/ed.jpg')}
      />
      <Text style={{color:'purple',textAlign:'center'}}>Hello world Edson✌{'\n'}
        Bem vindo ao seu primeiro app com react native.
      </Text>
      <Text style={[estilo.geral, estilo.teste]}>Bio</Text>
      <View style={view2.campu}>
        <Text>
          🖥 Atualmente estudante{'\n'}
          🔎 Procurando estágio{'\n'}
          📲 Novo desenvolvedor Mobile{'\n'}
          💻 Desenvolvedor Web
        </Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}
/* style:
  Em linha - coloca a style={{propriedade:valor}} - um objeto com objetos dentro
  Em constante - Cria uma constante e coloca um objetos dentro dela. para usar {styles.container}, apenas o objeto.
  constante e Classe - Cria uma constante e cria um objeto stylesheet com as classes que contem um objeto
  ex: 
  const estilo = StyleSheet .create({
    geral: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    }
  })
  Para declarar 2 - {[estilo.geral, estilo.teste]} - Se for apenas um, declara igual Em constante
*/
/*Tamanho é sempre com px e %
  px - coloca apenas o numero - 50
  % - coloca como string - '50%'
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const estilo = StyleSheet.create({
  geral: {
    backgroundColor: '#929',
    height: 30,  
  },
  teste: {
    color: 'pink',
    textTransform: 'uppercase',
    width: '30%',
    textAlign: 'center',
    // fontFamily: 'Verdana',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
  }
});

const view2 = StyleSheet.create({
  campu:{
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'black',
    borderRadius: 20,
    width: '80%',
    marginTop: 20,
  },
});

const img = StyleSheet.create({
  perfil:{
    borderRadius: 50,
    width: 110,
    height: 120,
  },
})