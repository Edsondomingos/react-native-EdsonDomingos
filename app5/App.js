import { View } from 'react-native';
//Pode ser qualquer nome inves de cabeçalho, pq a importação é default
//Mas se a função exportada não for default, precisa importar pelo nome correto.
import Cabe from './src/components/Cabecalho';
import Menu from './src/components/Menu'
import Anonima from './src/components/Anonima'
import ArrowFuntion from './src/components/ArrowFuntion'
import ArrowFuntionMenor from './src/components/ArrowFuntionMenor'
import Rodape from './src/components/Rodape'
import styles from './src/css/styles/style'
import styleCabecalho from './src/css/styles/styleCabecalho'
import Alerta from './src/components/Alerta'

export default function App() {
  return (
    <View style={styles.container}>
      <Cabe titulo="Cabeçalho" subtitulo="Subtitulo" style={styleCabecalho.cabecalho}/>
      <Menu titulo="Menu"/>
      <Alerta />
      <Anonima titulo="Anonima" />
      <ArrowFuntion titulo="ArrowFunction"/>
      <ArrowFuntionMenor titulo="ArrowFunctionMenor"/>
      <Rodape titulo="Rodape"/>
    </View>
  );
}